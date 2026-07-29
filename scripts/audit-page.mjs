import puppeteer from 'puppeteer-core';
const CHROME='/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const path=process.argv[2]||'/about';
const b=await puppeteer.launch({executablePath:CHROME,headless:'new',args:['--no-sandbox','--ignore-gpu-blocklist','--enable-unsafe-swiftshader','--use-gl=angle','--use-angle=swiftshader']});
const p=await b.newPage();
await p.setViewport({width:1440,height:900,deviceScaleFactor:1});
const errs=[];
p.on('pageerror',e=>errs.push('pageerror: '+e.message));
p.on('console',m=>{if(m.type()==='error'&&!m.text().includes('dev-toolbar'))errs.push('console: '+m.text().slice(0,80));});
await p.goto('http://localhost:4321'+path,{waitUntil:'networkidle0'});
await p.evaluate(()=>{document.documentElement.style.scrollBehavior='auto';document.querySelectorAll('[data-reveal]').forEach(e=>{e.style.opacity='1';e.style.transform='none';});});
await new Promise(r=>setTimeout(r,1800));
const info=await p.evaluate(()=>{
  const secs=[...document.querySelectorAll('main section, main header')];
  return {
    pageHeight: document.body.scrollHeight,
    headings: [...document.querySelectorAll('h1,h2,h3')].map(e=>`${e.tagName} ${e.textContent.trim().slice(0,44)}`),
    sections: secs.map(s=>{
      const h=s.querySelector('h1,h2');
      const grid=s.querySelector('[class*="grid-cols"]');
      return {label:(h?.textContent.trim().slice(0,32))||s.id||'(none)',
              height:Math.round(s.getBoundingClientRect().height),
              gridCols: grid?getComputedStyle(grid).gridTemplateColumns.split(' ').length:null,
              gridItems: grid?grid.children.length:null};
    }),
  };
});
await p.screenshot({path:'/tmp/about-full.png',fullPage:true});
console.log('page height:',info.pageHeight,'px');
console.log('\nsections:');
info.sections.forEach(s=>console.log(`  ${String(s.height).padStart(5)}px  cols=${s.gridCols??'-'} items=${s.gridItems??'-'}  ${s.label}`));
console.log('\nheadings:'); info.headings.forEach(h=>console.log('  '+h));
console.log('\nerrors:', errs.length?errs.join('; '):'none');
await b.close();

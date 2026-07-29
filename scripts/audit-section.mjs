import puppeteer from 'puppeteer-core';
const CHROME='/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const ID=process.argv[2]||'expertise';
const b=await puppeteer.launch({executablePath:CHROME,headless:'new',args:['--no-sandbox','--ignore-gpu-blocklist','--enable-unsafe-swiftshader','--use-gl=angle','--use-angle=swiftshader']});
for (const [w,h,name] of [[1440,900,'desktop'],[390,844,'mobile']]) {
  const p=await b.newPage();
  await p.setViewport({width:w,height:h,deviceScaleFactor:2});
  await p.goto('http://localhost:4321/',{waitUntil:'networkidle0'});
  await new Promise(r=>setTimeout(r,1500));
  await p.evaluate(()=>{document.documentElement.style.scrollBehavior='auto';document.querySelectorAll('[data-reveal]').forEach(e=>e.style.opacity='1');});
  const box=await p.evaluate((id)=>{const el=document.getElementById(id);el.scrollIntoView();const r=el.getBoundingClientRect();return {top:Math.round(window.scrollY+r.top),h:Math.round(r.height)};},ID);
  await new Promise(r=>setTimeout(r,2600));
  await p.screenshot({path:`/tmp/sec-${ID}-${name}.png`,captureBeyondViewport:true,clip:{x:0,y:box.top,width:w,height:Math.min(box.h,4000)}});
  if(name==='desktop'){
    const d=await p.evaluate((id)=>{
      const sec=document.getElementById(id);
      const cs=(el,p)=>getComputedStyle(el)[p];
      const cards=[...sec.querySelectorAll('[data-glow]')];
      const chip=sec.querySelector('li');
      return {
        cardCount:cards.length,
        cardHeights:cards.map(c=>Math.round(c.getBoundingClientRect().height)),
        chipColor:chip?cs(chip,'color'):null,
        chipBg:chip?cs(chip,'backgroundColor'):null,
        chipFont:chip?cs(chip,'fontSize'):null,
        headingLevels:[...sec.querySelectorAll('h2,h3')].map(e=>e.tagName),
        sectionH:Math.round(sec.getBoundingClientRect().height),
      };
    },ID);
    console.log(JSON.stringify(d,null,2));
  }
  await p.close();
}
await b.close();
console.log(`/tmp/sec-${ID}-desktop.png  /tmp/sec-${ID}-mobile.png`);

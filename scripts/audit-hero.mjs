import puppeteer from 'puppeteer-core';
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const b = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--no-sandbox','--ignore-gpu-blocklist','--enable-unsafe-swiftshader','--use-gl=angle','--use-angle=swiftshader'] });
const views = [[1440,900,'desktop'],[390,844,'mobile']];
for (const [w,h,name] of views) {
  const p = await b.newPage();
  await p.setViewport({ width:w, height:h, deviceScaleFactor: 2 });
  await p.goto('http://localhost:4321/', { waitUntil:'networkidle0' });
  await new Promise(r=>setTimeout(r,4200));
  await p.screenshot({ path:`/tmp/hero-${name}.png` });
  if (name==='desktop') {
    const diag = await p.evaluate(() => {
      const h1 = document.querySelector('h1');
      const cta = document.querySelector('a[href="/about"]');
      const sec = document.querySelector('section');
      const canvas = document.querySelector('canvas');
      const r = (el) => el ? el.getBoundingClientRect() : null;
      const cs = (el,p) => el ? getComputedStyle(el)[p] : null;
      return {
        h1Text: h1?.textContent.trim(),
        h1Rect: r(h1) && { top: Math.round(r(h1).top), h: Math.round(r(h1).height), fontSize: cs(h1,'fontSize') },
        ctaRect: r(cta) && { top: Math.round(r(cta).top), bottom: Math.round(r(cta).bottom) },
        secH: Math.round(r(sec).height),
        viewportH: window.innerHeight,
        ctaBelowFold: r(cta).bottom > window.innerHeight,
        canvasSize: canvas ? {w:canvas.width,h:canvas.height} : null,
        h1Count: document.querySelectorAll('h1').length,
        imgNoAlt: [...document.querySelectorAll('img')].filter(i=>!i.hasAttribute('alt')).length,
        subheadColor: cs(document.querySelector('[data-hero] p'),'color'),
        headings: [...document.querySelectorAll('h1,h2,h3')].slice(0,6).map(e=>e.tagName+': '+e.textContent.trim().slice(0,42)),
      };
    });
    console.log(JSON.stringify(diag,null,2));
  }
  await p.close();
}
await b.close();
console.log('shots: /tmp/hero-desktop.png /tmp/hero-mobile.png');

import puppeteer from 'puppeteer-core';
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const b = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--no-sandbox','--ignore-gpu-blocklist','--enable-unsafe-swiftshader','--use-gl=angle','--use-angle=swiftshader'] });
const p = await b.newPage();
await p.evaluateOnNewDocument(() => {
  const orig = window.matchMedia.bind(window);
  window.matchMedia = (q) => /hover|pointer/.test(q) ? { matches:true, media:q, onchange:null, addEventListener(){}, removeEventListener(){}, addListener(){}, removeListener(){}, dispatchEvent(){return false;} } : orig(q);
});
await p.setViewport({ width: 900, height: 600, deviceScaleFactor: 2 });
await p.goto('http://localhost:4321/', { waitUntil: 'networkidle0' });
await new Promise(r => setTimeout(r, 2200));
// dark area, move and let lerp settle
const X = 250, Y = 230;
for (let i=0;i<20;i++){ await p.mouse.move(X, Y); await new Promise(r=>setTimeout(r,16)); }
await new Promise(r => setTimeout(r, 400));
await p.screenshot({ path: '/tmp/cursor-crop.png', clip: { x: X-60, y: Y-60, width: 120, height: 120 } });
// interactive state over the resume button area (approx center-top)
console.log('done');
await b.close();

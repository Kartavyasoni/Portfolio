import puppeteer from 'puppeteer-core';
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const b = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--no-sandbox','--ignore-gpu-blocklist','--enable-unsafe-swiftshader','--use-gl=angle','--use-angle=swiftshader'] });
const p = await b.newPage();
await p.setViewport({ width: 1280, height: 900, deviceScaleFactor: 1.5 });
await p.goto('http://localhost:4321/', { waitUntil: 'networkidle0' });
await new Promise(r => setTimeout(r, 2000));
// scroll the Expertise section into view
await p.evaluate(() => { document.getElementById('expertise')?.scrollIntoView({ block: 'center' }); });
await new Promise(r => setTimeout(r, 800));
// hover the first expertise card
const box = await p.evaluate(() => {
  const card = document.querySelector('#expertise [data-glow]');
  if (!card) return null;
  const r = card.getBoundingClientRect();
  return { x: r.x + r.width/2, y: r.y + r.height/2 };
});
if (box) { await p.mouse.move(box.x, box.y); }
await new Promise(r => setTimeout(r, 700));
await p.screenshot({ path: '/tmp/hover-card.png' });
console.log('hover card →', JSON.stringify(box));
await b.close();

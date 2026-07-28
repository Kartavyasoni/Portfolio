import puppeteer from 'puppeteer-core';
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const b = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--no-sandbox','--ignore-gpu-blocklist','--enable-unsafe-swiftshader','--use-gl=angle','--use-angle=swiftshader'] });
const shots = [
  ['http://localhost:4321/', 'expertise', '/tmp/s-expertise.png'],
  ['http://localhost:4321/', 'strengths', '/tmp/s-strengths.png'],
  ['http://localhost:4321/', 'journey', '/tmp/s-journey.png'],
];
for (const [url, id, out] of shots) {
  const p = await b.newPage();
  await p.setViewport({ width: 1280, height: 900, deviceScaleFactor: 1.5 });
  await p.goto(url, { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 1500));
  await p.evaluate((sid) => { document.documentElement.style.scrollBehavior='auto'; document.querySelectorAll('[data-reveal]').forEach(e=>e.style.opacity='1'); document.getElementById(sid)?.scrollIntoView(); }, id);
  await new Promise(r => setTimeout(r, 2600));
  await p.screenshot({ path: out });
  console.log(id, '→', out);
  await p.close();
}
await b.close();

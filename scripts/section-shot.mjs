import puppeteer from 'puppeteer-core';
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const b = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--no-sandbox','--ignore-gpu-blocklist','--enable-unsafe-swiftshader','--use-gl=angle','--use-angle=swiftshader'] });
const p = await b.newPage();
await p.setViewport({ width: 1280, height: 900, deviceScaleFactor: 1.5 });
await p.goto('http://localhost:4321/', { waitUntil: 'networkidle0' });
await new Promise(r => setTimeout(r, 1500));
// reveal + scroll to #expertise
await p.evaluate(() => { document.documentElement.style.scrollBehavior='auto'; document.querySelectorAll('[data-reveal]').forEach(e=>e.style.opacity='1'); const el=document.getElementById('expertise'); el?.scrollIntoView(); });
await new Promise(r => setTimeout(r, 700));
await p.screenshot({ path: '/tmp/expertise.png' });
console.log('expertise → /tmp/expertise.png');
await b.close();

import puppeteer from 'puppeteer-core';
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const URL = 'http://localhost:4321/';
const b = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--no-sandbox','--ignore-gpu-blocklist','--enable-unsafe-swiftshader','--use-gl=angle','--use-angle=swiftshader'] });
const p = await b.newPage();
await p.setViewport({ width: 1440, height: 700, deviceScaleFactor: 2 });
await p.goto(URL, { waitUntil: 'networkidle0' });
await new Promise(r => setTimeout(r, 2000));
// Scroll so the bright hero terrain sits behind the glass capsule
await p.evaluate(() => window.scrollTo({ top: 430, behavior: 'auto' }));
await new Promise(r => setTimeout(r, 700));
await p.screenshot({ path: '/tmp/header-scrolled.png', clip: { x: 0, y: 0, width: 1440, height: 150 } });
console.log('scrolled header → /tmp/header-scrolled.png');
await b.close();

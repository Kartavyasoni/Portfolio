import puppeteer from 'puppeteer-core';
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const URL = process.argv[2] ?? 'http://localhost:4321/';
const OUT = process.argv[3] ?? '/tmp/mobile.png';
const REDUCED = process.env.REDUCED === '1';

const b = await puppeteer.launch({
  executablePath: CHROME,
  headless: 'new',
  args: ['--no-sandbox', '--ignore-gpu-blocklist', '--enable-unsafe-swiftshader', '--use-gl=angle', '--use-angle=swiftshader'],
});
const p = await b.newPage();
await p.setViewport({ width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true });
if (REDUCED) await p.emulateMediaFeatures([{ name: 'prefers-reduced-motion', value: 'reduce' }]);

const errors = [];
p.on('pageerror', (e) => errors.push(e.message));
p.on('response', (r) => { if (r.status() >= 400) errors.push(`HTTP ${r.status()}: ${r.url()}`); });

await p.goto(URL, { waitUntil: 'networkidle0', timeout: 30000 });
await new Promise((r) => setTimeout(r, 2500));
await p.screenshot({ path: OUT });
console.log('errors:', errors.filter((e) => !e.includes('dev-toolbar')).length ? JSON.stringify(errors.filter((e) => !e.includes('dev-toolbar')), null, 2) : 'none');
console.log('screenshot:', OUT);
await b.close();

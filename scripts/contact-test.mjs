import puppeteer from 'puppeteer-core';
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const b = await puppeteer.launch({
  executablePath: CHROME,
  headless: 'new',
  args: ['--no-sandbox', '--ignore-gpu-blocklist', '--enable-unsafe-swiftshader', '--use-gl=angle', '--use-angle=swiftshader'],
});
const p = await b.newPage();
await p.setViewport({ width: 1200, height: 900 });
await p.goto('http://localhost:4321/contact', { waitUntil: 'networkidle0' });
await new Promise((r) => setTimeout(r, 1200));

// 1) Submit empty → client validation error
await p.click('button[type="submit"]');
await new Promise((r) => setTimeout(r, 400));
const clientErr = await p.evaluate(() => document.querySelector('[role="alert"]')?.textContent ?? null);

// 2) Fill valid data → server responds 503 (no key) → error shown gracefully
await p.type('#name', 'Ada Lovelace');
await p.type('#email', 'ada@example.com');
await p.type('#message', 'I would love to discuss a data engineering role with you.');
await p.click('button[type="submit"]');
await new Promise((r) => setTimeout(r, 1500));
const serverErr = await p.evaluate(() => document.querySelector('[role="alert"]')?.textContent ?? null);

console.log('client validation error:', JSON.stringify(clientErr));
console.log('server response shown:', JSON.stringify(serverErr));
await b.close();

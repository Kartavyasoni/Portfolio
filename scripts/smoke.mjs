import puppeteer from 'puppeteer-core';

const CHROME =
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const URL = process.argv[2] ?? 'http://localhost:4321/';
const OUT = process.argv[3] ?? '/tmp/home.png';

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: 'new',
  args: [
    '--no-sandbox',
    '--ignore-gpu-blocklist',
    '--enable-unsafe-swiftshader',
    '--use-gl=angle',
    '--use-angle=swiftshader',
    '--window-size=1440,900',
  ],
});

const THEME = process.env.THEME ?? null; // 'light' | 'dark' | null
const FULL = process.env.FULL === '1';

const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });

if (process.env.REDUCED === '1') {
  await page.emulateMediaFeatures([
    { name: 'prefers-reduced-motion', value: 'reduce' },
  ]);
}

if (THEME) {
  await page.evaluateOnNewDocument((t) => {
    localStorage.setItem('theme', t);
  }, THEME);
}

const errors = [];
page.on('console', (m) => {
  if (m.type() === 'error') errors.push(`console.error: ${m.text()}`);
});
page.on('pageerror', (e) => errors.push(`pageerror: ${e.message}`));
page.on('response', (r) => {
  if (r.status() >= 400) errors.push(`HTTP ${r.status()}: ${r.url()}`);
});

await page.goto(URL, { waitUntil: 'networkidle0', timeout: 30000 });
// Give the R3F island a moment to mount + render frames.
await new Promise((r) => setTimeout(r, 2500));

if (FULL) {
  // Auto-scroll top→bottom so GSAP ScrollTriggers fire, then back to top.
  // Force instant scrolling (the site uses scroll-behavior: smooth).
  await page.evaluate(async () => {
    const root = document.documentElement;
    const prev = root.style.scrollBehavior;
    root.style.scrollBehavior = 'auto';
    const step = window.innerHeight * 0.5;
    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo({ top: y, behavior: 'auto' });
      await new Promise((r) => setTimeout(r, 220));
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
    root.style.scrollBehavior = prev;
  });
  await new Promise((r) => setTimeout(r, 600));
}

const canvas = await page.evaluate(() => {
  const c = document.querySelector('canvas');
  if (!c) return { present: false };
  const r = c.getBoundingClientRect();
  return { present: true, w: Math.round(r.width), h: Math.round(r.height) };
});

await page.screenshot({ path: OUT, fullPage: FULL });

console.log('URL:', URL);
console.log('canvas:', JSON.stringify(canvas));
console.log('errors:', errors.length ? JSON.stringify(errors, null, 2) : 'none');
console.log('screenshot:', OUT);

await browser.close();

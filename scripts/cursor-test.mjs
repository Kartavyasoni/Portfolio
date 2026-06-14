import puppeteer from 'puppeteer-core';
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const b = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--no-sandbox','--ignore-gpu-blocklist','--enable-unsafe-swiftshader','--use-gl=angle','--use-angle=swiftshader'] });
const p = await b.newPage();
// Force the cursor's JS gate on (headless may report coarse pointer).
await p.evaluateOnNewDocument(() => {
  const orig = window.matchMedia.bind(window);
  window.matchMedia = (q) => {
    if (/hover|pointer/.test(q)) return { matches: true, media: q, onchange: null, addEventListener(){}, removeEventListener(){}, addListener(){}, removeListener(){}, dispatchEvent(){ return false; } };
    return orig(q);
  };
});
await p.setViewport({ width: 1280, height: 800, deviceScaleFactor: 1.5 });
await p.goto('http://localhost:4321/', { waitUntil: 'networkidle0' });
await new Promise(r => setTimeout(r, 2200));
const cssMatches = await p.evaluate(() => window.__origMatch ? null : matchMedia('(hover: hover) and (pointer: fine)').matches);
// If the CSS media query doesn't apply in headless, inject the same styles unconditionally so we can see the look.
await p.addStyleTag({ content: `#cursor{position:fixed;top:0;left:0;width:20px;height:20px;border-radius:9999px;background:radial-gradient(circle at 50% 42%,#d4f3ff 0%,#38bdf8 55%,#22d3ee 100%);box-shadow:0 0 8px 1px rgba(56,189,248,.8),0 0 20px 6px rgba(34,211,238,.35),0 0 34px 12px rgba(46,124,246,.18);pointer-events:none;z-index:9999;}` });
await p.mouse.move(380, 320, { steps: 12 });
await new Promise(r => setTimeout(r, 500));
const info = await p.evaluate(() => {
  const c = document.getElementById('cursor');
  return { present: !!c, visible: c?.classList.contains('is-visible'), transform: c?.style.transform };
});
await p.screenshot({ path: '/tmp/cursor-hero.png' });
console.log('cssMediaMatches(headless):', cssMatches);
console.log('cursor:', JSON.stringify(info));
await b.close();

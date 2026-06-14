import puppeteer from 'puppeteer-core';
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const URL = 'https://kartavyasoni.vercel.app/';
const MARKER = 'h-15'; // class unique to the new single-capsule navbar
const deadline = Date.now() + 180000;
let live = false;
process.stdout.write('Waiting for redeploy');
while (Date.now() < deadline) {
  try {
    const html = await fetch(URL, { cache: 'no-store' }).then((r) => r.text());
    if (html.includes(MARKER)) { live = true; break; }
  } catch {}
  process.stdout.write('.');
  await new Promise((r) => setTimeout(r, 8000));
}
console.log(live ? '\nNew capsule header is LIVE ✓' : '\nTimed out.');
if (live) {
  const b = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--no-sandbox','--ignore-gpu-blocklist','--enable-unsafe-swiftshader','--use-gl=angle','--use-angle=swiftshader'] });
  const p = await b.newPage();
  await p.setViewport({ width: 1440, height: 400, deviceScaleFactor: 2 });
  await p.goto(URL, { waitUntil: 'networkidle0' });
  await new Promise((r) => setTimeout(r, 2000));
  await p.screenshot({ path: '/tmp/live-capsule.png', clip: { x: 0, y: 0, width: 1440, height: 110 } });
  console.log('live header → /tmp/live-capsule.png');
  await b.close();
}

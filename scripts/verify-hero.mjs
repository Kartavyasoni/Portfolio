import puppeteer from 'puppeteer-core';
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const URL = 'https://kartavyasoni.vercel.app/';
const deadline = Date.now() + 180000;
let live = false;
process.stdout.write('Waiting for redeploy');
while (Date.now() < deadline) {
  try {
    const html = await fetch(URL, { cache: 'no-store' }).then((r) => r.text());
    if (html.includes('Open to work') && !html.includes('GPA · M.S. CS')) { live = true; break; }
  } catch {}
  process.stdout.write('.');
  await new Promise((r) => setTimeout(r, 8000));
}
console.log(live ? '\nNew hero is LIVE ✓ (Open to work present, stats removed)' : '\nTimed out.');
if (live) {
  const b = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--no-sandbox','--ignore-gpu-blocklist','--enable-unsafe-swiftshader','--use-gl=angle','--use-angle=swiftshader'] });
  const p = await b.newPage();
  await p.setViewport({ width: 1440, height: 860, deviceScaleFactor: 1.5 });
  await p.goto(URL, { waitUntil: 'networkidle0' });
  await new Promise((r) => setTimeout(r, 2600));
  await p.screenshot({ path: '/tmp/live-hero.png' });
  console.log('live hero → /tmp/live-hero.png');
  await b.close();
}

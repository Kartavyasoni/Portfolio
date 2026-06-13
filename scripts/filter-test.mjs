import puppeteer from 'puppeteer-core';
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const b = await puppeteer.launch({
  executablePath: CHROME,
  headless: 'new',
  args: ['--no-sandbox', '--ignore-gpu-blocklist', '--enable-unsafe-swiftshader', '--use-gl=angle', '--use-angle=swiftshader', '--window-size=1440,900'],
});
const p = await b.newPage();
await p.setViewport({ width: 1440, height: 900 });
await p.goto('http://localhost:4321/projects', { waitUntil: 'networkidle0' });
await new Promise((r) => setTimeout(r, 1500));
const clicked = await p.evaluate(() => {
  const tabs = [...document.querySelectorAll('[role="tab"]')];
  const t = tabs.find((el) => el.textContent.trim() === 'Machine Learning');
  if (t) { t.click(); return true; }
  return false;
});
await new Promise((r) => setTimeout(r, 800));
const result = await p.evaluate(() => {
  const cards = [...document.querySelectorAll('a[href^="/projects/"]')];
  const titles = cards.map((c) => c.querySelector('h3')?.textContent).filter(Boolean);
  const count = document.querySelector('.font-mono.text-faint')?.textContent;
  return { visibleTitles: titles, countLabel: count };
});
console.log('clicked ML tab:', clicked);
console.log(JSON.stringify(result, null, 2));
await b.close();

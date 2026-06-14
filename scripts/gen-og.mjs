import puppeteer from 'puppeteer-core';
import { mkdirSync } from 'node:fs';

const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
mkdirSync('public/og', { recursive: true });

const html = `<!doctype html><html><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Space+Grotesk:wght@600;700&family=JetBrains+Mono:wght@500&display=swap" rel="stylesheet">
<style>
  * { margin:0; box-sizing:border-box; }
  body { width:1200px; height:630px; font-family:'Inter',sans-serif;
    background:
      radial-gradient(120% 80% at 50% -10%, rgba(46,124,246,.28), transparent 60%),
      radial-gradient(70% 60% at 85% 110%, rgba(34,211,238,.18), transparent 55%),
      linear-gradient(160deg,#05070a,#0a0f1a);
    color:#e6edf3; overflow:hidden; position:relative; }
  .grid { position:absolute; inset:0;
    background-image:
      linear-gradient(rgba(46,124,246,.08) 1px,transparent 1px),
      linear-gradient(90deg,rgba(46,124,246,.08) 1px,transparent 1px);
    background-size:56px 56px; mask-image:radial-gradient(120% 90% at 50% 30%,#000,transparent 75%); }
  .wrap { position:relative; padding:72px 80px; height:100%; display:flex; flex-direction:column; justify-content:space-between; }
  .top { display:flex; align-items:center; gap:16px; }
  .mark { width:56px; height:56px; display:grid; place-items:center; border-radius:14px;
    border:1px solid rgba(46,124,246,.4); background:rgba(46,124,246,.12);
    font-family:'JetBrains Mono',monospace; color:#38bdf8; font-size:22px; }
  .name { font-family:'Space Grotesk',sans-serif; font-weight:600; font-size:26px; }
  .kicker { font-family:'JetBrains Mono',monospace; font-size:18px; letter-spacing:.18em;
    text-transform:uppercase; color:#38bdf8; }
  h1 { font-family:'Space Grotesk',sans-serif; font-weight:700; font-size:62px; line-height:1.06;
    letter-spacing:-.02em; max-width:1040px; margin-top:18px; }
  .grad { background:linear-gradient(120deg,#38bdf8,#22d3ee); -webkit-background-clip:text; background-clip:text; color:transparent; }
  .foot { display:flex; gap:14px; }
  .chip { font-family:'JetBrains Mono',monospace; font-size:17px; color:#94a3b8;
    border:1px solid rgba(148,163,184,.18); border-radius:999px; padding:8px 16px; }
</style></head>
<body>
  <div class="grid"></div>
  <div class="wrap">
    <div class="top">
      <div class="mark">KS</div>
      <div class="name">Kartavya Soni</div>
    </div>
    <div>
      <div class="kicker">Data Engineer</div>
      <h1>Engineering the Foundations for <span class="grad">Modern AI and Machine Learning</span></h1>
    </div>
    <div class="foot">
      <span class="chip">Data Engineering</span>
      <span class="chip">Pipeline Orchestration</span>
      <span class="chip">Cloud Infrastructure</span>
    </div>
  </div>
</body></html>`;

const b = await puppeteer.launch({ executablePath: CHROME, headless: 'new', args: ['--no-sandbox'] });
const p = await b.newPage();
await p.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1.5 });
await p.setContent(html, { waitUntil: 'networkidle0' });
await new Promise((r) => setTimeout(r, 600));
await p.screenshot({ path: 'public/og/default.png' });
console.log('OG image written → public/og/default.png');
await b.close();

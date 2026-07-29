import puppeteer from 'puppeteer-core';
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const b = await puppeteer.launch({ executablePath: CHROME, headless:'new', args:['--no-sandbox','--ignore-gpu-blocklist','--enable-unsafe-swiftshader','--use-gl=angle','--use-angle=swiftshader'] });
const p = await b.newPage();
await p.setViewport({ width:1440, height:900, deviceScaleFactor:1 });
await p.goto('http://localhost:4321/', { waitUntil:'networkidle0' });
await new Promise(r=>setTimeout(r,4200));
const rects = await p.evaluate(() => {
  const h1 = document.querySelector('h1');
  const sub = document.querySelector('[data-hero] p');
  const R = e => { const r = e.getBoundingClientRect(); return {x:Math.round(r.x),y:Math.round(r.y),width:Math.round(r.width),height:Math.round(r.height)}; };
  const r1 = R(h1);
  return {
    h1_lastline: { x:r1.x, y: Math.round(r1.y + r1.height*0.70), width:r1.width, height: Math.round(r1.height*0.26) },
    subheadline: R(sub),
    scroll_cue: { x: 690, y: 800, width: 60, height: 60 },
  };
});
// hide the foreground text so we sample only the backdrop
await p.evaluate(() => { const d=document.querySelector('[data-hero]'); if(d) d.style.visibility='hidden';
  document.querySelectorAll('.animate-pulse-glow, .font-mono').forEach(e=>e.style.visibility='hidden'); });
await new Promise(r=>setTimeout(r,400));
const shots = {};
for (const [k,r] of Object.entries(rects)) shots[k] = await p.screenshot({ clip:r, encoding:'base64' });
await p.close();

const p2 = await b.newPage();
await p2.goto('data:text/html,<body></body>');
const out = await p2.evaluate(async (shots) => {
  const lum = ([r,g,b]) => { const f=c=>{c/=255; return c<=0.03928?c/12.92:Math.pow((c+0.055)/1.055,2.4);}; return 0.2126*f(r)+0.7152*f(g)+0.0722*f(b); };
  const ratio = (a,bb) => { const L1=Math.max(lum(a),lum(bb)), L2=Math.min(lum(a),lum(bb)); return (L1+0.05)/(L2+0.05); };
  const res = {};
  for (const [k,b64] of Object.entries(shots)) {
    const img = new Image(); img.src = 'data:image/png;base64,'+b64;
    await img.decode();
    const c = document.createElement('canvas'); c.width=img.width; c.height=img.height;
    const ctx = c.getContext('2d'); ctx.drawImage(img,0,0);
    const d = ctx.getImageData(0,0,c.width,c.height).data;
    let R=0,G=0,B=0,n=0, brightest=0, bp=[0,0,0];
    for (let i=0;i<d.length;i+=4){ R+=d[i];G+=d[i+1];B+=d[i+2];n++;
      const L=lum([d[i],d[i+1],d[i+2]]); if(L>brightest){brightest=L;bp=[d[i],d[i+1],d[i+2]];} }
    res[k] = { avgBg:[Math.round(R/n),Math.round(G/n),Math.round(B/n)], brightestBg:bp };
  }
  const texts = { h1_lastline:[148,163,184], subheadline:[148,163,184], scroll_cue:[148,163,184] };
  for (const k of Object.keys(res)) {
    res[k].textColor = texts[k];
    res[k].contrast_avg = +ratio(texts[k], res[k].avgBg).toFixed(2);
    res[k].contrast_worst = +ratio(texts[k], res[k].brightestBg).toFixed(2);
  }
  return res;
}, shots);
await b.close();
console.log(JSON.stringify(out,null,2));

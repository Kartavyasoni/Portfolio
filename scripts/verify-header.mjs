const URL = 'https://kartavyasoni.vercel.app';
const deadline = Date.now() + 180000;
let ok = false;
process.stdout.write('Waiting for redeploy');
while (Date.now() < deadline) {
  try {
    const html = await fetch(URL + '/', { cache: 'no-store' }).then((r) => r.text());
    // New header present and old theme toggle gone?
    if (html.includes('Download Resume') && !html.includes('theme-toggle')) { ok = true; break; }
  } catch {}
  process.stdout.write('.');
  await new Promise((r) => setTimeout(r, 8000));
}
console.log(ok ? '\nNew header is LIVE ✓ (Download Resume present, theme toggle gone)' : '\nTimed out.');
if (ok) {
  const r = await fetch(URL + '/Kartavya_Soni_Resume.pdf', { method: 'GET', cache: 'no-store' });
  console.log(`resume PDF: HTTP ${r.status}, type=${r.headers.get('content-type')}, bytes=${r.headers.get('content-length')}`);
}

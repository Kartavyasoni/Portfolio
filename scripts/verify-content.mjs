const URL = 'https://kartavyasoni.vercel.app';
const deadline = Date.now() + 180000;
let ok = false;
process.stdout.write('Waiting for redeploy');
while (Date.now() < deadline) {
  try {
    const about = await fetch(URL + '/about', { cache: 'no-store' }).then((r) => r.text());
    if (about.includes('Florida Atlantic University')) { ok = true; break; }
  } catch {}
  process.stdout.write('.');
  await new Promise((r) => setTimeout(r, 8000));
}
console.log(ok ? '\nReal content is LIVE ✓' : '\nTimed out.');
if (ok) {
  // New projects 200, old fabricated ones should 404
  for (const slug of ['global-lens', 'loan-meter', 'realtime-lakehouse', 'churn-intelligence']) {
    const r = await fetch(URL + '/projects/' + slug, { redirect: 'manual' });
    console.log(`${r.status}  /projects/${slug}`);
  }
}

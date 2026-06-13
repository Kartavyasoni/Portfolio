const URL = 'https://kartavyasoni.vercel.app';
const deadline = Date.now() + 150000;
let ok = false;
process.stdout.write('Waiting for redeploy');
while (Date.now() < deadline) {
  try {
    const html = await fetch(URL + '/contact', { cache: 'no-store' }).then((r) => r.text());
    if (html.includes('linkedin.com/in/kartavyasoni8')) { ok = true; break; }
  } catch {}
  process.stdout.write('.');
  await new Promise((r) => setTimeout(r, 8000));
}
console.log(ok ? '\nLinkedIn URL is LIVE ✓ (linkedin.com/in/kartavyasoni8)' : '\nStill building — give it a moment.');

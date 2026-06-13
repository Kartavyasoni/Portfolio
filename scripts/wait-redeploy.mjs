const URL = process.argv[2];
const NEEDLE = 'sonikartavya2003@outlook.com';
const deadline = Date.now() + 180000; // 3 min
let live = false;
process.stdout.write('Waiting for redeploy');
while (Date.now() < deadline) {
  try {
    const html = await fetch(URL + '/contact', { cache: 'no-store' }).then((r) => r.text());
    if (html.includes(NEEDLE)) { live = true; break; }
  } catch {}
  process.stdout.write('.');
  await new Promise((r) => setTimeout(r, 8000));
}
console.log(live ? '\nNew email is LIVE on the site ✓' : '\nTimed out — redeploy may still be building.');

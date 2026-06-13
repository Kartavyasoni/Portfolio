const URL = process.argv[2];
const paths = ['/', '/about', '/projects', '/contact', '/projects/realtime-lakehouse', '/nonexistent', '/robots.txt', '/sitemap-index.xml', '/og/default.png'];
console.log('=== Status codes ===');
for (const p of paths) {
  try {
    const r = await fetch(URL + p, { redirect: 'manual' });
    console.log(`${r.status}  ${p}`);
  } catch (e) { console.log(`ERR  ${p}  ${e.message}`); }
}
console.log('=== Contact API (expect 503, no key) ===');
const r = await fetch(URL + '/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name: 'Test', email: 'a@b.com', message: 'Production smoke test message.' }) });
console.log(r.status, await r.text());

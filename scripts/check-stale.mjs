const URL = 'https://kartavyasoni.vercel.app';
const slugs = ['churn-intelligence', 'rag-knowledge-copilot', 'demand-forecasting', 'metrics-observability', 'streaming-feature-store'];
const deadline = Date.now() + 120000;
while (Date.now() < deadline) {
  const codes = {};
  for (const s of slugs) {
    const r = await fetch(`${URL}/projects/${s}`, { redirect: 'manual', cache: 'no-store' });
    codes[s] = r.status;
  }
  const allGone = Object.values(codes).every((c) => c === 404);
  console.log(new Date().toISOString().slice(11,19), JSON.stringify(codes));
  if (allGone) { console.log('All old project URLs now 404 ✓'); break; }
  await new Promise((r) => setTimeout(r, 12000));
}

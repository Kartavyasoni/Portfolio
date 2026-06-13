const URL = 'https://kartavyasoni.vercel.app';
const deadline = Date.now() + 180000;
let ok = false;
process.stdout.write('Waiting for redeploy');
while (Date.now() < deadline) {
  try {
    const html = await fetch(URL + '/', { cache: 'no-store' }).then((r) => r.text());
    const canonical = html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
    const ogUrl = html.match(/property="og:url" content="([^"]+)"/)?.[1];
    const ogImg = html.match(/property="og:image" content="([^"]+)"/)?.[1];
    if (canonical?.includes('kartavyasoni.vercel.app')) {
      console.log('\ncanonical:', canonical);
      console.log('og:url:   ', ogUrl);
      console.log('og:image: ', ogImg);
      ok = true; break;
    }
  } catch {}
  process.stdout.write('.');
  await new Promise((r) => setTimeout(r, 8000));
}
if (!ok) console.log('\nStill building — give it another minute.');

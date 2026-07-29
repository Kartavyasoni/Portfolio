const URL='https://kartavyasoni.vercel.app';
const deadline=Date.now()+240000;
let live=false;
process.stdout.write('Waiting for Vercel');
while(Date.now()<deadline){
  try{
    const h=await fetch(URL+'/',{cache:'no-store'}).then(r=>r.text());
    if(h.includes('View Projects')&&h.includes('HeroSceneLazy')){live=true;break;}
  }catch{}
  process.stdout.write('.');
  await new Promise(r=>setTimeout(r,8000));
}
console.log(live?'\nLIVE ✓':'\nstill building');
if(live){
  const h=await fetch(URL+'/',{cache:'no-store'}).then(r=>r.text());
  const checks={
    'Hero: View Projects primary CTA': h.includes('View Projects'),
    'Hero: 3D deferred (lazy island)': h.includes('HeroSceneLazy'),
    'Hero: credibility strip removed': !h.includes('3.96 GPA'),
    'Why Me: real numbers in HTML': /150K\+/.test(h)&&/16%/.test(h),
    'Projects: bespoke schematics': h.includes('dash'),
  };
  for(const [k,v] of Object.entries(checks)) console.log((v?'  ✓ ':'  ✗ ')+k);
  const big=[...h.matchAll(/modulepreload"[^>]*href="([^"]+)"/g)].map(m=>m[1]);
  console.log('  preloaded modules:', big.length?big.join(', '):'none');
}

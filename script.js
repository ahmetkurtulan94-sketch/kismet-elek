
const navWrap=document.querySelector('.nav');
document.querySelector('.menu')?.addEventListener('click',()=>navWrap?.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>navWrap?.classList.remove('open')));
document.querySelectorAll('form').forEach(f=>f.addEventListener('submit',e=>{
  e.preventDefault();
  const btn=f.querySelector('button'); const old=btn.textContent;
  btn.textContent='Talebiniz alındı ✓';
  setTimeout(()=>btn.textContent=old,2500);
}));

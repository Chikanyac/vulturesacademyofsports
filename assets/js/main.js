
document.addEventListener('DOMContentLoaded', function(){
  const btn = document.getElementById('menuBtn');
  const nav = document.getElementById('mobileNav');
  if(!btn || !nav) return;
  btn.addEventListener('click', function(){
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', !expanded);
    nav.classList.toggle('active');
    document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
  });
  nav.querySelectorAll('a').forEach(a=>{
    a.addEventListener('click', ()=>{ nav.classList.remove('active'); btn.setAttribute('aria-expanded','false'); document.body.style.overflow=''; });
  });
});

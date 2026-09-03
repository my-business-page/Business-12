const loader=document.querySelector('.loader');const nav=document.querySelector('.nav');const menu=document.querySelector('.menu-btn');
window.addEventListener('load',()=>setTimeout(()=>loader?.classList.add('done'),350));
menu?.addEventListener('click',()=>nav?.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav?.classList.remove('open')));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.08});document.querySelectorAll('.reveal').forEach(e=>observer.observe(e));
document.getElementById('year')?.replaceChildren(String(new Date().getFullYear()));
window.addEventListener('scroll',()=>{nav?.classList.toggle('scrolled',scrollY>30)});

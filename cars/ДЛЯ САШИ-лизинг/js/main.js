const swiper = new Swiper(".swiper", {
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },
});
  const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

btn.addEventListener('click', ()=>{
    nav.classList.toggle('menu-open');
});
const a = document.querySelector('.footer-btn-a');
const b = document.querySelector('.footer-nav');

a. addEventListener('click', ()=>{
  b.classList.toggle('footer-btn-open-a');
})
const c = document.querySelector('.footer-btn-b');
const d = document.querySelector('.footer-nav');

c. addEventListener('click', ()=>{
  d.classList.toggle('footer-btn-open-b');
})
const e = document.querySelector('.footer-btn-c');
const f = document.querySelector('.footer-nav');

e. addEventListener('click', ()=>{
  f.classList.toggle('footer-btn-open-c');
})
const g = document.querySelector('.footer-btn-d');
const h = document.querySelector('.footer-nav');

g. addEventListener('click', ()=>{
  h.classList.toggle('footer-btn-open-d');
})
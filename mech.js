const menu = document.querySelector('.nav-menu');
const navBtn = document.querySelector('.nav-btn');
const navbar = document.querySelector('.navbar');


navBtn.addEventListener('click', () => {
  menu.classList.toggle('show-menu');
  navBtn.classList.toggle('is-active');
});

window.addEventListener('scroll', () => {
  const navHeight = navbar.getBoundingClientRect().height
  if (window.pageYOffset > navHeight) {
    navbar.classList.add('fixed-nav')
  } else {
    navbar.classList.remove('fixed-nav');
  }
})
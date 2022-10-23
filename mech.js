const menu = document.querySelector('.nav-menu');
const navBtn = document.querySelector('.nav-btn');


navBtn.addEventListener('click', () => {
  menu.classList.toggle('show-menu');
  navBtn.classList.toggle('is-active');
});
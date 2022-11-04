const menu = document.querySelector('.nav-menu');
const navBtn = document.querySelector('.nav-btn');
const navbar = document.querySelector('.navbar');
const links = [...document.querySelectorAll('.nav-link'), document.querySelector('.watch')];


// navbar functionality

navBtn.addEventListener('click', () => {
  menu.classList.toggle('show-menu');
  navBtn.classList.toggle('is-active');
});

window.addEventListener('scroll', () => {
  const navHeight = navbar.getBoundingClientRect().height
  if (window.pageYOffset > navHeight) {
    navbar.classList.add('fixed-nav');
  } else {
    navbar.classList.remove('fixed-nav');
  }
})

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const data = link.getAttribute('href');
    const element = document.querySelector(data);
    const navHeight = navbar.getBoundingClientRect().height
    const destination = element.offsetTop;
    window.scroll({
      top: destination - navHeight
    });
    menu.classList.remove('show-menu');
    navBtn.classList.remove('is-active');
  });
});
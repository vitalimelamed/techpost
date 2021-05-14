const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.navbar-list');
const navbarLink = document.querySelectorAll('.navbar-brand, .navbar-link');

  navbarToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('open-menu');
});

  navbarLink.forEach( (link) =>  {
    link.addEventListener('click', () => {
      navbarMenu.classList.remove('open-menu');
  });
});
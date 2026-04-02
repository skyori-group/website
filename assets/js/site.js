document.addEventListener('DOMContentLoaded', function () {
  const navbar = document.querySelector('header nav.navbar');
  if (!navbar) return;

  const SCROLL_THRESHOLD = 10;

  function updateNavbar() {
    if (window.scrollY > SCROLL_THRESHOLD) {
      navbar.classList.add('navbar-scrolled');
    } else {
      navbar.classList.remove('navbar-scrolled');
    }
  }

  updateNavbar();
  window.addEventListener('scroll', updateNavbar);
});
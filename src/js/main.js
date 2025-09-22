//  Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector('#hamburger-menu');

//  ketika Hamburger menu di klik
hamburger.addEventListener("click", (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
});

// klik di luar Sidebar untuk menghilangkan nav
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});


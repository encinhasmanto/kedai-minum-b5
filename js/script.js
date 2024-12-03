// // Toggle class active
// const navbarNav = document.querySelector('.navbar-nav');

// // ketika hamburger-menu di click
// document.querySelector('#hamburger-menu').onclick = () => {
//     navbarNav.classList.toggle('active');
// };

// // hamburger-menu hilang ketika klik luar sidebar
// const hamburger = document.querySelector('#hamburger-menu');

// document.addEventListener('click', function (e) {
//     if (!hamburger.contains(e.target) && !navbarNav.contains(e.target))
//         navbarNav.classList.remove('active');
// });

// alternatif
// Sidebar active
const navbarNav = document.querySelector(".navbar-nav");
const hamburger = document.querySelector("#hamburger-menu");

document.querySelector("#hamburger-menu").onclick = (e) => {
  e.stopPropagation();
  navbarNav.classList.toggle("active");
};

// Sidebar deactivate when click anywhere
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Prevent clicks inside the sidebar from closing it
navbarNav.addEventListener("click", function (e) {
  e.stopPropagation();
});

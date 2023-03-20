// fixed nav
const navbar = document.querySelector("#nav");

window.addEventListener("scroll", function () {
  let navbarHeight = navbar.getBoundingClientRect().height;
  if (this.window.pageYOffset > navbarHeight) {
    navbar.classList.add("fixed_nav");
  } else {
    navbar.classList.remove("fixed_nav");
  }
})

// open and close side navbar
let openSideNav = document.querySelector(".nav_toggle");
let closeNav = document.querySelector(".close_btn");
let sideNav = document.querySelector(".side_nav");

// open nav
openSideNav.addEventListener("click", function () {
  if (!sideNav.classList.contains("show_side")) {
    sideNav.classList.add("show_side")
    document.body.style.overflow = "hidden";
  }
})

// close nav
closeNav.addEventListener("click", function () {
  sideNav.classList.remove("show_side");
  document.body.style.overflow = "auto";
})


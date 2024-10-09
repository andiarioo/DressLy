// Trigger hamburger menu

const hamburger = document.getElementById("hamburger-icon");
const menu = document.getElementById("nav-menu");
const close = document.getElementById("close-icon");
const overlay = document.getElementById("overlay");

const toggleMenu = () => {
  close.classList.toggle("active");
  menu.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.style.overflow = menu.classList.contains("active") ? "hidden" : "";
};

hamburger.addEventListener("click", toggleMenu);

close.addEventListener("click", toggleMenu);

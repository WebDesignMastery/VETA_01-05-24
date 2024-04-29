const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".commitment__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".commitment__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".commitment__content .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".commitment__list li", {
  ...scrollRevealOption,
  delay: 1500,
  interval: 500,
});

ScrollReveal().reveal(".build__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".build__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".build__content .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".build__grid li", {
  ...scrollRevealOption,
  delay: 1500,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});

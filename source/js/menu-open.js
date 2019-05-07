var navMain = document.querySelector(".main-nav");
var navToggle = document.querySelector(".main-nav__toggle");
var emailLink = document.querySelector(".contacts__email-link");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function() {
  if (navMain.classList.contains("main-nav--closed")) {
    navMain.classList.remove("main-nav--closed");
    navMain.classList.add("main-nav--opened");
  } else {
    navMain.classList.add("main-nav--closed");
    navMain.classList.remove("main-nav--opened");
  }
});

emailLink.addEventListener("click", function () {
  window.open('mailto:oknoff2008@yandex.ru');
});

"use strict";
const btn = document.querySelector(".header__nav--li-btn");
const nav = document.querySelector(".header__nav-overlay");

btn.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
});

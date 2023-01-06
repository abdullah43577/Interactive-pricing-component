"use strict";
// implementation of the toggle section
const toggle = document.querySelector(".toggle");
const toggleContainer = document.querySelector(".toggleCT");

(toggle, toggleContainer).addEventListener("click", () => {
  toggle.classList.toggle("active");
  toggleContainer.classList.toggle("act");
});

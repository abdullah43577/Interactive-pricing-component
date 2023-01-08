"use strict";
// implementation of the toggle section
const toggle = document.querySelector(".toggle");
const toggleContainer = document.querySelector(".toggleCT");

(toggle, toggleContainer).addEventListener("click", () => {
  toggle.classList.toggle("active");
  toggleContainer.classList.toggle("act");
});

// slider pricing toggle
const inputSlider = document.querySelector("input");
const price = document.querySelector(".price");

inputSlider.addEventListener("input", () => {
  let result = inputSlider.value;
  price.textContent = `$${result}.00`;
});

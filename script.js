const dropdownBtns = document.querySelectorAll(".dropdown-btn");
const dropdowns = document.querySelectorAll(".dropdown");
const hamburger = document.querySelector("#hamburger");
const menuBar = document.querySelector(".menu-bar");

// Dropdown toggle
dropdownBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const dropdownId = btn.getAttribute("data-dropdown");
    const dropdown = document.getElementById(dropdownId);
    dropdown.classList.toggle("active");
  });
});

// Hamburger toggle
hamburger.addEventListener("click", () => {
  menuBar.classList.toggle("active");
  hamburger.classList.toggle("open");
});

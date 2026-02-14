const toggle = document.querySelector(".menu-toggle");
const dropdown = document.querySelector(".dropdown");

toggle.addEventListener("click", () => {
dropdown.classList.toggle("active");
});

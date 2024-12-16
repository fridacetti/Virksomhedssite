// Burger
const burger = document.querySelector(".burger");
const nav = document.querySelector("nav");
const menu = document.querySelector(".menu");

burger.addEventListener("click", burgerClick);
function burgerClick() {
  burger.classList.toggle("active");
  nav.classList.toggle("active");
}
menu.addEventListener("click", menuClick);
function menuClick() {
  burger.classList.remove("active");
  nav.classList.remove("active");
}

// Menu

// Back to top knap
// Hent knappen
const backToTopButton = document.getElementById("back-to-top");

// Lyt efter scroll-events
window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    // Vises efter 200px scrolling
    backToTopButton.classList.add("show");
  } else {
    backToTopButton.classList.remove("show");
  }
});

// Tilføj klikfunktionalitet
backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Glat scroll til toppen
  });
});

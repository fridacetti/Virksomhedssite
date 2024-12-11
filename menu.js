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

document.addEventListener("DOMContentLoaded", function () {
  const menuLinks = document.querySelectorAll(".menu-link");

  // Marker det aktive link baseret på lokal lagring
  const activePage = localStorage.getItem("activeLink");
  if (activePage) {
    menuLinks.forEach((link) => {
      if (link.href.includes(activePage)) {
        link.classList.add("active");
      }
    });
  }

  // Tilføj 'active'-klasse og gem i lokal lagring ved klik
  menuLinks.forEach((link) => {
    link.addEventListener("click", function () {
      // Fjern 'active'-klasse fra alle links
      menuLinks.forEach((l) => l.classList.remove("active"));

      // Tilføj 'active' til det klikkede link
      this.classList.add("active");

      // Gem det aktive link i lokal lagring
      localStorage.setItem("activeLink", this.getAttribute("href"));
    });
  });
});

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

// common js file.
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector("#navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("bg-[#002c3f]");
    } else {
      navbar.classList.remove("bg-[#002c3f]");
    }
  });
});

const mobileNav = document.querySelector(".mobile-nav");
document.querySelector(".nav-open-button").addEventListener("click", () => {
  mobileNav.classList.remove("-translate-x-full");
});

const closeMobileNavButton = document.querySelector("#closeMobileNav");

closeMobileNavButton.addEventListener("click", () => {
  mobileNav.classList.add("-translate-x-full");
});

// common js file.
document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("#navbar");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("bg-[#002c3f]");
    } else {
      navbar.classList.remove("bg-[#002c3f]");
    }
  });
});

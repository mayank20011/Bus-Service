// common js file.
document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector("#navbar");
  const goUpButton = document.querySelector(".go-up");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      navbar.classList.add("bg-[#002c3f]");
      navbar.classList.remove("bg-transparent");
      goUpButton.classList.remove("hidden");
    } else {
      navbar.classList.remove("bg-[#002c3f]");
      navbar.classList.add("bg-transparent");
      goUpButton.classList.add("hidden");
    }
  });
  if (window.location.pathname == "/privacy-policy.html") {
    const privacyPolicyFooterLink = document.querySelector("#privacyPolicy");
    privacyPolicyFooterLink.classList.add("text-[#FFD700]");
  }
  if (window.location.pathname == "/terms-&-conditions.html") {
    const termsAndConditionsFooterLink = document.querySelector(
      "#termsAndConditions"
    );
    termsAndConditionsFooterLink.classList.add("text-[#FFD700]");
  }
});

const mobileNav = document.querySelector(".mobile-nav");
document.querySelector(".nav-open-button").addEventListener("click", () => {
  mobileNav.classList.remove("-translate-x-full");
});

const closeMobileNavButton = document.querySelector("#closeMobileNav");

closeMobileNavButton.addEventListener("click", () => {
  mobileNav.classList.add("-translate-x-full");
});

// for service nav in and out on service link hover
const desktopNavLinks = document.querySelectorAll("#desktopNavLink a");
const serviceLinksDesktopContainer = document.querySelector(
  "#desktopservicenavlink"
);
desktopNavLinks.forEach((link, id) => {
  if (id != 3) {
    link.addEventListener("mouseover", () => {
      serviceLinksDesktopContainer.classList.add(
        "hidden",
        "opacity-0",
        "translate-y-[100px]"
      );
    });
  } else {
    link.addEventListener("mouseover", () => {
      serviceLinksDesktopContainer.classList.remove(
        "hidden",
        "opacity-0",
        "translate-y-[100px]"
      );
    });
  }
});

const servicelinkcontainer = serviceLinksDesktopContainer.children[0];
servicelinkcontainer.addEventListener("mouseleave", () => {
  serviceLinksDesktopContainer.classList.add(
    "hidden",
    "opacity-0",
    "translate-y-[100px]"
  );
});

// for desktopservice nav links borders
const desktopservicenavlinksa =
  serviceLinksDesktopContainer.querySelectorAll("a");
const path = window.location.pathname;
if (path == "/school-bus-rental.html") {
  desktopservicenavlinksa[0].classList.add(
    "border",
    "border-dashed",
    "rounded-2xl",
    "border-[#FFD700]"
  );
} else if (path == "/wedding-transportation.html") {
  desktopservicenavlinksa[1].classList.add(
    "border",
    "border-dashed",
    "rounded-2xl",
    "border-[#FFD700]"
  );
} else if (path == "/corporate-travels.html") {
  desktopservicenavlinksa[2].classList.add(
    "border",
    "border-dashed",
    "rounded-2xl",
    "border-[#FFD700]"
  );
} else if (path == "/private-travelers.html") {
  desktopservicenavlinksa[3].classList.add(
    "border",
    "border-dashed",
    "rounded-2xl",
    "border-[#FFD700]"
  );
} else if (path == "/airport-shuttles.html") {
  desktopservicenavlinksa[4].classList.add(
    "border",
    "border-dashed",
    "rounded-2xl",
    "border-[#FFD700]"
  );
} else if (path == "/tour-and-excursions.html") {
  desktopservicenavlinksa[5].classList.add(
    "border",
    "border-dashed",
    "rounded-2xl",
    "border-[#FFD700]"
  );
} else {
}

// for mobilenav links

const mobilenavLinks = document.querySelectorAll("#mobileNav a");
mobilenavLinks.forEach((link) => {
  if (link.pathname == path) {
    link.classList.add("text-[#FFD700]");
  }
});

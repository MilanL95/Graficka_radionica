document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger-menu");
  const navLinks = document.querySelector(".navbar .container");

  // Handle click event on hamburger menu
  hamburger.addEventListener("click", function () {
    // Toggle navigation links display on mobile view
    navLinks.style.display =
      navLinks.style.display === "block" ? "none" : "block";
  });

  // Handle window resize event
  window.addEventListener("resize", function () {
    if (window.innerWidth > 1000) {
      navLinks.style.display = "flex";
    } else {
      if (navLinks.style.display !== "block") {
        navLinks.style.display = "none";
      }
    }
  });
});

// Function to handle smooth scrolling for anchor links
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});

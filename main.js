// Highlight current page in navbar
const page = location.pathname.split("/").pop() || "index.html";

const menuToggle = document.getElementById("menu-toggle");
const navbar = document.querySelector(".navbar ul");
const icon = menuToggle.querySelector("i");
document.querySelectorAll(".navbar a").forEach(a => {
  const href = a.getAttribute("href").replace("./", "");
  if (href === page) a.classList.add("active");
});


// Navbar scroll effect (optional)
let lastScrollY = window.scrollY;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > lastScrollY) {
    header.style.top = "-100px"; // hides on scroll down
  } else {
    header.style.top = "0"; // shows on scroll up
  }
  lastScrollY = window.scrollY;
});

// AOS Animation initialization
window.addEventListener("load", () => {
  AOS.init({
    duration: 1000,
    easing: "ease-in-out",
    once: true,
    mirror: false,
  });
});

// toggle-btn
menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("show");

    // Switch between bars and close icon
    if (navbar.classList.contains("show")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-xmark");
    } else {
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
    }
  });





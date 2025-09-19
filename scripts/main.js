const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

const techTrack = document.querySelector(".tech-track");

techTrack.addEventListener("mouseenter", () => {
  techTrack.style.animationPlayState = "paused";
});

techTrack.addEventListener("mouseleave", () => {
  techTrack.style.animationPlayState = "running";
});

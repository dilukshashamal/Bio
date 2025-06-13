import { Header } from "./components/Header.js";
import { Hero } from "./components/Hero.js";
import { About } from "./components/About.js";
import { Skills } from "./components/Skills.js";
import { Experience } from "./components/Experience.js";
import { Certifications } from "./components/Certifications.js";
import { Projects } from "./components/Projects.js";
import { Contact } from "./components/Contact.js";
import { Footer } from "./components/Footer.js";

document.querySelector("#app").innerHTML = `
  ${Header()}
  <main>
    ${Hero()}
    ${About()}
    ${Skills()}
    ${Experience()}
    ${Certifications()}
    ${Projects()}
    ${Contact()}
  </main>
  ${Footer()}
`;

// Hamburger menu functionality
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    hamburger.classList.remove("active");
    navLinks.classList.remove("active");
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Initialize Particle.js
particlesJS("particles-js", {
  particles: {
    number: { value: 80, density: { enable: true, value_area: 800 } },
    color: { value: "#8a2be2" }, // Primary color for particles
    shape: { type: "circle" },
    opacity: { value: 0.6, random: false },
    size: { value: 3, random: true },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#8a2be2",
      opacity: 0.4,
      width: 1,
    }, // Primary color for lines
    move: {
      enable: true,
      speed: 4,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
    },
    modes: { repulse: { distance: 100 }, push: { particles_nb: 4 } },
  },
  retina_detect: true,
});

// Intersection Observer for scroll animations
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll("section").forEach((section) => {
  section.classList.add("hidden");
  observer.observe(section);
});

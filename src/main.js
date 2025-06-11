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

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

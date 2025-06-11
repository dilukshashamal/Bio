import profilePic from "../assets/profile-pic.png";

export const Hero = () => {
  return `
    <section id="hero" class="hero">
      <div class="hero-image">
          <img src="${profilePic}" alt="Kavindu Shamal">
      </div>
      <div class="hero-content">
        <h1>Kavindu Shamal</h1>
        <p class="subtitle">AI Engineer | Bridging AI and Human Cognition</p>
        <a href="./src/assets/resume.pdf" class="btn" download>Download CV</a>
      </div>
    </section>
  `;
};

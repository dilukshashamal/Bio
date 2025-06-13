(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function c(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=c(e);fetch(e.href,t)}})();const o=()=>`
    <header class="header">
      <nav class="nav">
        <a href="#" class="nav-logo"></a>
        <ul class="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div class="hamburger">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </div>
      </nav>
    </header>
  `,d=()=>`
    <section id="hero" class="hero">
      <div class="hero-image">
      </div>
      <div class="hero-content">
        <h1>Diluksha Shamal</h1>
        <p class="subtitle">AI Engineer | Bridging AI and Human Cognition</p>
        <a href="./src/assets/resume.pdf" class="btn" download>Download CV</a>
      </div>
    </section>
  `,u=()=>`
    <section id="about">
        <h2 class="section-title">About Me</h2>
        <div class="about-container">
            <div class="about-image">            
            </div>
            <div class="about-text">
                <p>I am deeply passionate about the intersection of artificial intelligence and the human brain. The way our minds recognize patterns has always fascinated me, driving my curiosity to explore AI's potential in mimicking these natural processes. My journey in AI involves delving into various techniques within this domain, with a particular focus on understanding and replicating the intricate patterns found in nature. I firmly believe that the foundation of all technology lies in the natural world, and I am committed to uncovering these patterns to inspire innovative technological solutions.</p>
            </div>
        </div>
    </section>
  `,h=()=>`
    <section id="skills">
      <h2 class="section-title">Technical Skills</h2>
      <div class="skills-grid">
        <div class="skill-category">
          <h3>Cloud Platforms</h3>
          <ul class="skill-list">
            <li>AWS</li>
            <li>Azure</li>
            <li>GCP</li>
          </ul>
        </div>
        <div class="skill-category">
          <h3>Programming Languages</h3>
          <ul class="skill-list">
            <li>Python</li>
            <li>Java</li>
            <li>JavaScript</li>
            <li>SQL</li>
            <li>Shell Scripting</li>
          </ul>
        </div>
        <div class="skill-category">
          <h3>AI & Data Tools</h3>
          <ul class="skill-list">
            <li>Scikit-learn</li>
            <li>Pandas</li>
            <li>Numpy</li>
            <li>TensorFlow</li>
            <li>PyTorch</li>
          </ul>
        </div>
        <div class="skill-category">
          <h3>Frontend</h3>
          <ul class="skill-list">
            <li>React</li>
            <li>Vite.js</li>
            <li>Next.js</li>
          </ul>
        </div>
      </div>
    </section>
  `,m=()=>`
      <section id="experience">
          <h2 class="section-title">My Experience</h2>
          <div class="timeline">
              <div class="timeline-container right">
                  <div class="timeline-content">
                      <h3>Omdena: Junior AI Engineer</h3>
                      <small>Feb 2024 - Present</small>
                      <p>Enhanced regulatory decision-making for the Sri Lanka Tea Board by improving data extraction accuracy by 30% through LlamaIndex and OCR.</p>
                  </div>
              </div>
              <div class="timeline-container left">
                  <div class="timeline-content">
                      <h3>Insighture: Infrastructure Engineer (Contract)</h3>
                      <small>Feb 2024 - May 2024</small>
                      <p>Optimized AWS infrastructure by automating deployments with CloudFormation, achieving a 40% reduction in deployment time.</p>
                  </div>
              </div>
              <div class="timeline-container right">
                  <div class="timeline-content">
                      <h3>Virtusa: Software Engineer Intern</h3>
                      <small>Oct 2022 - Feb 2024</small>
                      <p>Gained over a year of hands-on experience in Unix, Teradata, DataStage, Airflow, and ServiceNow, improving data warehousing efficiency by 35%.</p>
                  </div>
              </div>
          </div>
      </section>
    `,p=()=>`
    <section id="certifications">
      <h2 class="section-title">Certifications</h2>
      <div class="certifications-grid">
        <div class="certification-card">
          <h3>Oracle Cloud Infrastructure 2024 Data Certified Foundations Associate</h3>
          <p>Oracle</p>
        </div>
        <div class="certification-card">
          <h3>Google Cloud Big Data and Machine Learning Fundamentals</h3>
          <p>Google</p>
        </div>
        <div class="certification-card">
          <h3>Career Essentials in Generative AI</h3>
          <p>Microsoft and LinkedIn</p>
        </div>
      </div>
    </section>
  `,v="/assets/project-1-DjEbsT8m.png",g="/assets/project-2-gry8C-Ug.png",f="/assets/project-3-Bdx30zLG.png",y=()=>`
    <section id="projects">
      <h2 class="section-title">My Projects</h2>
      <div class="projects-grid">
        <div class="project-card">
          <img src="${v}" alt="Project 1">
          <div class="project-card-content">
            <h3>Medical Document Data Extractor</h3>
            <p>A tool to extract data from medical documents with high accuracy.</p>
            <a href="https://github.com/dilukshashamal/Medical-Data-Extractor_Beta" class="btn" target="_blank">View on GitHub</a>
          </div>
        </div>
        <div class="project-card">
          <img src="${g}" alt="Project 2">
          <div class="project-card-content">
            <h3>Cumulative Table Design</h3>
            <p>An innovative approach to designing cumulative tables for data warehousing.</p>
            <a href="https://github.com/dilukshashamal/cumulative-table-design/tree/main" class="btn" target="_blank">View on GitHub</a>
          </div>
        </div>
        <div class="project-card">
          <img src="${f}" alt="Project 3">
          <div class="project-card-content">
            <h3>Document Processing RAG Based Chat System</h3>
            <p>A chat system that uses RAG for processing and understanding documents.</p>
            <a href="https://github.com/dilukshashamal/Omdena_RAG_Based_Chat" class="btn" target="_blank">View on GitHub</a>
          </div>
        </div>
      </div>
    </section>
  `,b=()=>`
      <section id="contact">
          <h2 class="section-title">Contact Me</h2>
          <form class="contact-form">
              <input type="text" name="name" placeholder="Your Name" required>
              <input type="email" name="email" placeholder="Your Email" required>
              <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
              <button type="submit" class="btn">Send Message</button>
          </form>
      </section>
    `,k=()=>`
      <footer class="footer">
          <p>&copy; 2025 Kavindu Shamal. All Rights Reserved.</p>
      </footer>
    `;document.querySelector("#app").innerHTML=`
  ${o()}
  <main>
    ${d()}
    ${u()}
    ${h()}
    ${m()}
    ${p()}
    ${y()}
    ${b()}
  </main>
  ${k()}
`;const s=document.querySelector(".hamburger"),l=document.querySelector(".nav-links");s.addEventListener("click",()=>{s.classList.toggle("active"),l.classList.toggle("active")});document.querySelectorAll('a[href^="#"]').forEach(n=>{n.addEventListener("click",function(i){i.preventDefault(),s.classList.remove("active"),l.classList.remove("active"),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"})})});

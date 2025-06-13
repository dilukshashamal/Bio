(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(e){if(e.ep)return;e.ep=!0;const i=o(e);fetch(e.href,i)}})();const c=()=>`
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
  `,p=()=>`
      <section id="experience">
          <h2 class="section-title">My Experience</h2>
          <div class="experience-list">

              <div class="experience-card">
                  <h3>AI Software Engineer</h3>
                  <small>Codezela Technologies | Feb 2025 – Present | Sri Lanka – On-site</small>
                  <ul>
                    <li>Spearheaded business process automation by developing scalable web scraping and data processing tools, improving efficiency and reducing manual tasks.</li>
                    <li>Engineered AI-powered image generation products using advanced generative AI models (e.g., GPT-4 Vision).</li>
                    <li>Utilized platforms including Vertex AI, Azure AI Foundry, and Amazon Bedrock to build and scale ML applications.</li>
                    <li>Integrated Text-to-Speech (TTS) models to enhance accessibility and content delivery.</li>
                    <li>Managed cloud infrastructure on Azure (N-, L-, F-series VMs, Entra ID) and AWS (SageMaker, Bedrock).</li>
                  </ul>
              </div>

              <div class="experience-card">
                  <h3>Junior AI Engineer</h3>
                  <small>Omdena | May 2024 – Apr 2025 (1 year) | Sri Lanka</small>
                  <ul>
                    <li>Led OCR-driven data processing for the Sri Lanka Tea Board, improving extraction accuracy by 30% through advanced noise reduction.</li>
                    <li>Developed a Retrieval-Augmented Generation (RAG) chatbot to enable interactive document indexing and querying.</li>
                    <li>Automated over 10,000 healthcare documents, achieving 95% accuracy and cutting manual workload by 70%.</li>
                  </ul>
              </div>

              <div class="experience-card">
                  <h3>Infrastructure Engineer</h3>
                  <small>Insighture | Feb 2024 – Apr 2024 (3 months) | Sri Lanka</small>
                  <ul>
                    <li>Managed and optimized AWS infrastructure; automated deployments via CloudFormation.</li>
                    <li>Strengthened cloud security by configuring IAM policies and access control layers.</li>
                    <li>Deployed and maintained Wazuh for log monitoring, file integrity, and SIEM integration.</li>
                    <li>Administered Azure Active Directory for enterprise identity management.</li>
                  </ul>
              </div>

              <div class="experience-card">
                  <h3>Infrastructure Operations Engineer (Internship)</h3>
                  <small>Virtusa | Oct 2022 – Feb 2024 (1 year 5 months) | Sri Lanka</small>
                  <ul>
                    <li>Provided production support in data warehousing using Unix, Teradata, DataStage, and Airflow.</li>
                    <li>Contributed to an AIOps Hackathon-winning project by building a robust observability system for Spring Boot microservices on AWS.</li>
                  </ul>
              </div>

          </div>
      </section>
    `,m=()=>`
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
  `,g="/assets/project-1-DjEbsT8m.png",v="/assets/project-2-gry8C-Ug.png",f="/assets/project-3-Bdx30zLG.png",b=()=>`
    <section id="projects">
      <h2 class="section-title">My Projects</h2>
      <div class="projects-grid">
        <div class="project-card">
          <img src="${g}" alt="Project 1">
          <div class="project-card-content">
            <h3>Medical Document Data Extractor</h3>
            <p>A tool to extract data from medical documents with high accuracy.</p>
            <a href="https://github.com/dilukshashamal/Medical-Data-Extractor_Beta" class="btn" target="_blank">View on GitHub</a>
          </div>
        </div>
        <div class="project-card">
          <img src="${v}" alt="Project 2">
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
  `,y=()=>`
      <section id="contact">
          <h2 class="section-title">Contact Me</h2>
          <form class="contact-form">
              <input type="text" name="name" placeholder="Your Name" required>
              <input type="email" name="email" placeholder="Your Email" required>
              <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
              <button type="submit" class="btn">Send Message</button>
          </form>
      </section>
    `,A=()=>`
      <footer class="footer">
          <p>&copy; 2025 Diluksha Shamal. All Rights Reserved.</p>
      </footer>
    `;document.querySelector("#app").innerHTML=`
  ${c()}
  <main>
    ${d()}
    ${u()}
    ${h()}
    ${p()}
    ${m()}
    ${b()}
    ${y()}
  </main>
  ${A()}
`;const n=document.querySelector(".hamburger"),l=document.querySelector(".nav-links");n.addEventListener("click",()=>{n.classList.toggle("active"),l.classList.toggle("active")});document.querySelectorAll('a[href^="#"]').forEach(a=>{a.addEventListener("click",function(t){t.preventDefault(),n.classList.remove("active"),l.classList.remove("active"),document.querySelector(this.getAttribute("href")).scrollIntoView({behavior:"smooth"})})});particlesJS("particles-js",{particles:{number:{value:80,density:{enable:!0,value_area:800}},color:{value:"#8a2be2"},shape:{type:"circle"},opacity:{value:.6,random:!1},size:{value:3,random:!0},line_linked:{enable:!0,distance:150,color:"#8a2be2",opacity:.4,width:1},move:{enable:!0,speed:4,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"repulse"},onclick:{enable:!0,mode:"push"}},modes:{repulse:{distance:100},push:{particles_nb:4}}},retina_detect:!0});const k=new IntersectionObserver(a=>{a.forEach(t=>{t.isIntersecting&&t.target.classList.add("visible")})},{threshold:.1});document.querySelectorAll("section").forEach(a=>{a.classList.add("hidden"),k.observe(a)});

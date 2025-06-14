import project1 from "../assets/project-1.png";
import project2 from "../assets/project-2.png";
import project3 from "../assets/project-3.png";
import project4 from "../assets/project-4.png";
import project5 from "../assets/project-5.png";

export const Projects = () => {
  return `
    <section id="projects">
      <h2 class="section-title">My Projects</h2>
      <div class="projects-grid">

        <div class="project-card">
          <img src="${project1}" alt="Project 1">
          <div class="project-card-content">
            <h3>Medical Document Data Extractor</h3>
            <p>A tool to extract data from medical documents with high accuracy.</p>
            <a href="https://github.com/dilukshashamal/Medical-Data-Extractor_Beta" class="btn" target="_blank">View on GitHub</a>
          </div>
        </div>

        <div class="project-card">
          <img src="${project2}" alt="Project 2">
          <div class="project-card-content">
            <h3>Cumulative Table Design</h3>
            <p>An innovative approach to designing cumulative tables for data warehousing.</p>
            <a href="https://github.com/dilukshashamal/cumulative-table-design/tree/main" class="btn" target="_blank">View on GitHub</a>
          </div>
        </div>

        <div class="project-card">
          <img src="${project3}" alt="Project 3">
          <div class="project-card-content">
            <h3>Document Processing RAG Based Chat System</h3>
            <p>A chat system that uses RAG for processing and understanding documents.</p>
            <a href="https://github.com/dilukshashamal/Omdena_RAG_Based_Chat" class="btn" target="_blank">View on GitHub</a>
          </div>
        </div>

        <div class="project-card">
          <img src="${project4}" alt="Project 1">
          <div class="project-card-content">
            <h3>Image Generation and Editing System</h3>
            <p>A modular image generation system integrating ConfiUI for user interaction and Bagel for orchestration, enabling streamlined pipeline control, real-time customization, and efficient neural network-driven image output.</p>
          </div>
        </div>

        <div class="project-card">
          <img src="${project5}" alt="Project 1">
          <div class="project-card-content">
            <h3>ETL Pipeline Automation</h3>
            <p>This project sets up an automated ETL pipeline using Apache Airflow and PostgreSQL, managing data extraction, transformation, and loading via modular DAGs, deployed with Docker Compose.</p>
            <a href="https://github.com/dilukshashamal/Medical-Data-Extractor_Beta" class="btn" target="_blank">View on GitHub</a>
          </div>
        </div>

      </div>
    </section>
  `;
};

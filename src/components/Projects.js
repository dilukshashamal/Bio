export const Projects = () => {
  return `
    <section id="projects">
      <h2 class="section-title">My Projects</h2>
      <div class="projects-grid">
        <div class="project-card">
          <img src="./src/assets/project-1.png" alt="Project 1">
          <div class="project-card-content">
            <h3>Medical Document Data Extractor</h3>
            <p>A tool to extract data from medical documents with high accuracy.</p>
            <a href="https://github.com/dilukshashamal/Medical-Data-Extractor_Beta" class="btn" target="_blank">View on GitHub</a>
          </div>
        </div>
        <div class="project-card">
          <img src="./src/assets/project-2.png" alt="Project 2">
          <div class="project-card-content">
            <h3>Cumulative Table Design</h3>
            <p>An innovative approach to designing cumulative tables for data warehousing.</p>
            <a href="https://github.com/dilukshashamal/cumulative-table-design/tree/main" class="btn" target="_blank">View on GitHub</a>
          </div>
        </div>
        <div class="project-card">
          <img src="./src/assets/project-3.png" alt="Project 3">
          <div class="project-card-content">
            <h3>Document Processing RAG Based Chat System</h3>
            <p>A chat system that uses RAG for processing and understanding documents.</p>
            <a href="https://github.com/dilukshashamal/Omdena_RAG_Based_Chat" class="btn" target="_blank">View on GitHub</a>
          </div>
        </div>
      </div>
    </section>
  `;
};

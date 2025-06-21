// App.js
import React, { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import ProjectCard from "./components/ProjectCard";
import ProjectModal from "./components/ProjectModal";
import InfoSection from "./components/InfoSection";
import projects from "./data/projects";
import info from "./data/info";

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="app">
      <Sidebar />
      <main className="main-content">
        <section className="projects-section">
          <h1>Projects</h1>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </section>

        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}

        <section className="info-section">
          <h2>Professional Experience</h2>
          <div>
            {info.map((info_item, index) => (
              info_item.category === "Professional Experience" ? (
                <InfoSection
                  key={index}
                  info={info_item}
                />
              ) : null
            ))}
          </div>
        </section>
        <section className="info-section">
          <h2>Education</h2>
          <div>
            {info.map((info_item, index) => (
              info_item.category === "Education" ? (
                <InfoSection
                  key={index}
                  info={info_item}
                />
              ) : null
            ))}
          </div>
        </section>
        <section className="info-section">
          <h2>Extracurricular Experience</h2>
          <div>
            {info.map((info_item, index) => (
              info_item.category === "Extra Education" ? (
                <InfoSection
                  key={index}
                  info={info_item}
                />
              ) : null
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;

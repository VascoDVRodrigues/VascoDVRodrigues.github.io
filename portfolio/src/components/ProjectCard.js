import "./Card.css";

export default function ProjectCard({ project, onClick }) {
  return (
    <div className="project-card" onClick={() => onClick(project)}>
      <img src={project.image} alt={project.title} className="card-image" />
      <h3>{project.title}</h3>
      <div className="card-tags">
        {project.tags.map(tag => (
          <span key={tag} className="tag">{tag}</span>
        ))}
      </div>
      <p>{project.description}</p>
    </div>
  );
}

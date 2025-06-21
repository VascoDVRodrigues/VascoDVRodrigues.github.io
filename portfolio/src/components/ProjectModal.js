import "./Modal.css";

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <img src={project.image} alt={project.title} className="modal-image" />
        <h2>{project.title}</h2>
        <div className="modal-tags">
          {project.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
        <p>{project.content}</p>
      </div>
    </div>
  );
}

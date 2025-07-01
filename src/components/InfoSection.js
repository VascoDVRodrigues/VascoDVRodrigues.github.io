import './InfoSection.css';

export default function InfoSection({info}) {
    console.log("Rendering InfoSection with info:", info);
    if (!info || !info.title || !info.date) {
        return null;
    }
  return (
    <div className="info-entry">
        <p className="date">{info.date}</p>
        <h3 className="title">{info.title}</h3>
        {info.customContent && <div className="custom-content">{info.customContent}</div>}
        <div className="tags">
          {info.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
    </div>
  );
}

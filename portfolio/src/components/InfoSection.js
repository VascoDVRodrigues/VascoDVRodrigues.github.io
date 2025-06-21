import './InfoSection.css';

export default function InfoSection({info}) {
    console.log("Rendering InfoSection with info:", info);
    if (!info || !info.title || !info.date || !info.details || !Array.isArray(info.details)) {
        return null;
    }
  return (
    <div className="info-entry">
        <p className="date">{info.date}</p>
        <h3 className="title">{info.title}</h3>
        <ul className="details">
          {info.details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
        <div className="tags">
          {info.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
        {info.customContent && <div className="custom-content">{info.customContent}</div>}
    </div>
  );
}

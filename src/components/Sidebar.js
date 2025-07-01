import "./Sidebar.css";
import profile_picture from '../assets/profile.png';

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <img src={profile_picture} alt="Profile" className="profile-img" />

      <h2 style={{ marginBottom: 0 }}>Vasco Rodrigues</h2>
      <p style={{ marginTop: 0 }}>Data Engineer @ SEA.AI<br />Lisbon, PT</p>

    
      <div className="social-links">
        <a href="https://www.linkedin.com/in/vasco-v-rodrigues/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={22} />
        </a>
        <a href="https://github.com/VascoDVRodrigues" target="_blank" rel="noopener noreferrer">
          <FaGithub size={22} />
        </a>
         <a href="mailto:vascodvrodrigues@gmail.com">
          <HiOutlineMail size={22} />
        </a>
      </div>
      <div>
      <p className="subtitle" style={{ marginBottom: 0 }}>About</p>
      <p style={{ marginTop: 0 }}>BSc and MSc in Electrical and Computer Engineering from Instituto Superior Técnico. </p>
      </div>

      <div>
        <p className="subtitle">Skills</p>
      <div className="tags">
        <span className="tag">SQL</span>
        <span className="tag">Python</span>
        <span className="tag">R</span>
        <span className="tag">Excel</span>
        <span className="tag">Sampling</span>
        <span className="tag">Data Analysis</span>
        <span className="tag">Machine Vision</span>
      </div>
        </div>
     
    </aside>
  );
}

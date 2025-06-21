import "./Sidebar.css";
import profile_picture from '../assets/profile.png';

import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <img src={profile_picture} alt="Profile" className="profile-img" />

      <h2>Vasco Rodrigues</h2>
      <p className="role">Data Engineer at SEA.AI</p>
      <p className="location">Lisbon, PT</p>
    
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
      <p className="about">BSc and MSc in Electrical and Computer Engineering from Instituto Superior Técnico. </p>
        
        <p className="about"> enjoy working with business stakeholders to support strategy.</p>
      <div className="tags">
        <span className="tag">SQL</span>
        <span className="tag">Python</span>
        <span className="tag">R</span>
        <span className="tag">Excel</span>
        <span className="tag">Sampling</span>
      </div>
    </aside>
  );
}

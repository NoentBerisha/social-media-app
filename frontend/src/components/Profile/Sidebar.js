// Sidebar.js
import React, { useState } from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDribbble, faBehance, faUpwork, faLinkedin, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

const skills = ["Brand Design", "UI Design", "Figma", "Adobe After Effects", "Sketch", "Pen & Paper"];
const portfolioLinks = [
  { name: 'Dribbble', icon: faDribbble },
  { name: 'Behance', icon: faBehance },
  { name: 'Upwork', icon: faUpwork },
  { name: 'LinkedIn', icon: faLinkedin },
];
const verifications = [
  { name: 'Facebook', icon: faFacebook },
  { name: 'LinkedIn', icon: faLinkedin },
  { name: 'Twitter', icon: faTwitter },
];

const SidebarItem = ({ name, icon }) => (
  <div className="sidebar-item">
    {icon && <FontAwesomeIcon icon={icon} className="sidebar-icon" />}
    <span className="sidebar-text">{name}</span>
  </div>
);

const Sidebar = () => {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-section skills">
        <h3>Skills</h3>
        {skills.map((skill, index) => (
          <div key={index} className="skill-item">{skill}</div>
        ))}
      </div>

      <div className="sidebar-section portfolio-links">
        <h3>Portfolio Links</h3>
        {portfolioLinks.map((link, index) => (
          <SidebarItem key={index} name={link.name} icon={link.icon} />
        ))}
      </div>

      <div className="sidebar-section verifications">
        <h3>Verifications</h3>
        {verifications.map((verification, index) => (
          <SidebarItem key={index} name={verification.name} icon={verification.icon} />
        ))}
      </div>

      <div className="sidebar-section more-menu-toggle" onClick={handleToggle}>
        <SidebarItem name="See More" icon={showMore ? faChevronUp : faChevronDown} />
      </div>
      {showMore && (
        <div className="sidebar-section more-menu">
          <h3>Additional Info</h3>
          {/* Add more dynamic content here */}
        </div>
      )}
    </div>
  );
};

export default Sidebar;

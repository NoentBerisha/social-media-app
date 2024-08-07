import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faBriefcase, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import './ProfileBar.css';



function ProfileBar() {
  return (
    <div className="profile-card">
      <div className="header"></div>
      <div className="avatar">
        <img src="https://via.placeholder.com/100" alt="Avatar" />
      </div>
      <div className="content">
        <h2>Art Grantolli</h2>
        <p>Software Engineer</p>
        <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Prishtine, Kosovo</p>
        <div className="icons">
          <FontAwesomeIcon icon={faEnvelope} />
          <FontAwesomeIcon icon={faBriefcase} />
          <FontAwesomeIcon icon={faGraduationCap} />
        </div>
        <div className="details">
          <div className="work">
            <h3>Work</h3>
            <p>Celonis, Prishtine</p>
          </div>
          <div className="education">
            <h3>Education</h3>
            <p>University for Business and Technology</p>
          </div>
        </div>
        <button className="hire-me">Hire Me</button>
      </div>
    </div>
  );
};

export default ProfileBar;

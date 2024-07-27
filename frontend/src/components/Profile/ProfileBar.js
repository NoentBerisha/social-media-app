import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBell, faUserCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { SlGraduation } from "react-icons/sl";
import './ProfileBar.css';
import ProfileIconComponent from '../Main/profile-icon/ProfileIconComponent';

const user = [
  {
    name: "John Doe",
    photoUrl: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-55958-614810.jpg&fm=jpg",
  }
]

function ProfileBar() {
  return (
    <div className="navbar">
      <div className="logo-icon-container">
        <SlGraduation className="logo-icon" />
        <p className="logo-text">Social Media App</p>
      </div>
      <div className="search-container">
        <input type="text" placeholder="Search for friends, groups, pages" className="search-input" />
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
      </div>
      <div className="icons-container">
        <FontAwesomeIcon icon={faBell} className="navbar-icon" />
        {/* <FontAwesomeIcon icon={faUserCircle} className="navbar-icon" /> */}
        <div style={{ transform: 'scale(1.3)', 'margin-left': '30px' }}>
          <Link to='../Profile/Profile.js'>
           <ProfileIconComponent name={user[0].name} photoUrl={user[0].photoUrl} showBadge={false} text={user[0].name} /> 
          </Link>

</div>
      </div>
    </div>
  );
}

export default ProfileBar;

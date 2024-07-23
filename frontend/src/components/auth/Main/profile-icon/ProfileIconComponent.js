import React, {useState}from 'react';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import './ProfileIcon.css';
import { Link } from 'react-router-dom';

function ProfileIconComponent({ name, photoUrl, isOnline, dropdownOptions, text }) {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  return (
    <div 
      className="profile-icon-component" 
      onMouseEnter={() => setIsDropdownVisible(true)} 
      onMouseLeave={() => setIsDropdownVisible(false)}
    >
      <Badge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot"
        className={`avatar-badge ${isOnline ? '' : 'offline'}`}
      >
      
        <Avatar alt={name} src={photoUrl} sx={{ width: '40px', height: '40px' }}/>
      </Badge>
      <p className="name" dangerouslySetInnerHTML={{ __html: text }}></p>
      {isDropdownVisible && (
        <div className="dropdown-menu">
          {dropdownOptions && dropdownOptions.map((option, index) => (
            <div key={index} className="dropdown-item" onClick={() => setIsDropdownVisible(false)}>
             <Link className="dropdown-item" to={option.url}>
                {option.name}
                 </Link>
         </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ProfileIconComponent;
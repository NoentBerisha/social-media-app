import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserFriends, faUsers, faShoppingCart, faBookmark, faFileAlt, faStar, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import './Sidebar.css'; // Assuming you have a CSS file for styling

const mainMenuItems = [
  { name: 'Home', icon: faHome },
  { name: 'Friends', icon: faUserFriends },
  { name: 'Groups', icon: faUsers },
  { name: 'Marketplace', icon: faShoppingCart },
  { name: 'Saved', icon: faBookmark },
];

const moreMenuItems = [
  { name: 'Pages', icon: faFileAlt },
  { name: 'Favourites', icon: faStar },
];

const Sidebar = () => {
  const [showMore, setShowMore] = useState(false);

  const handleToggle = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="sidebar">
      <ul>
        {mainMenuItems.map((item, index) => (
          <li key={index} className="sidebar-item">
            <FontAwesomeIcon icon={item.icon} className="sidebar-icon" />
            <span className="sidebar-text">{item.name}</span>
          </li>
        ))}
        <li className="sidebar-item" onClick={handleToggle}>
          <FontAwesomeIcon icon={faEllipsisH} className="sidebar-icon" />
          <span className="sidebar-text">See More</span>
        </li>
        {showMore && (
          <div className="more-menu">
            {moreMenuItems.map((item, index) => (
              <li key={index} className="sidebar-item">
                <FontAwesomeIcon icon={item.icon} className="sidebar-icon" />
                <span className="sidebar-text">{item.name}</span>
              </li>
            ))}
          </div>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;

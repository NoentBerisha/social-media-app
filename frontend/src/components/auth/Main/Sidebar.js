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
  { name: 'Pages', icon: faFileAlt },
  { name: 'Favourites', icon: faStar },
  { name: 'Pages', icon: faFileAlt },
  { name: 'Favourites', icon: faStar },

];
/*
const moreMenuItems = [
  { name: 'Pages', icon: faFileAlt },
  { name: 'Favourites', icon: faStar },
];
*/
const groups = [
  { name: '12/5', url: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?cs=srgb&dl=pexels-justin-shaifer-501272-1222271.jpg&fm=jpg' },
  { name: 'Xixellonjat', url: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?cs=srgb&dl=pexels-justin-shaifer-501272-1222271.jpg&fm=jpg' },
  { name: 'KarMdhenjet', url: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?cs=srgb&dl=pexels-justin-shaifer-501272-1222271.jpg&fm=jpg' },
  { name: 'Lucat', url: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?cs=srgb&dl=pexels-justin-shaifer-501272-1222271.jpg&fm=jpg' },
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
            <br></br>
            <h3>My Groups</h3>
            {groups.map((item, index) => (
              <li key={index} className="sidebar-item">
              <span className= "groups">{item.name}</span>
              <img src={item.url} width='50px'></img>
              </li>
            ))}
          </div>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;

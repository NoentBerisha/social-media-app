import React, { useEffect } from 'react';
import ProfileBar from './ProfileBar';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import SliderComponent from './SliderComponent';
import './Profile.css';

function Profile() {
  useEffect(() => {
    function adjustContainerSize() {
      const zoomLevel = window.devicePixelRatio || 1; 
      const outerContainer = document.querySelector('.outer-container-Profile');

      if (outerContainer) {
        const width = 1850 / zoomLevel;
        const height = 900 / zoomLevel;

        outerContainer.style.width = `${width}px`;
        outerContainer.style.height = `${height}px`;
      }
    }

    window.addEventListener('resize', adjustContainerSize);
    window.addEventListener('load', adjustContainerSize);

    const interval = setInterval(adjustContainerSize, 500);

    return () => {
      window.removeEventListener('resize', adjustContainerSize);
      window.removeEventListener('load', adjustContainerSize);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="outer-container-Profile">
      <div className="nav-layout-Profile">
        <ProfileBar />
      </div>
      <div className="main-layout-Profile">
        <div className="Sidebar-Content-Profile">
          <Sidebar />
        </div>
        <div className="Main-Content-Profile">
          <SliderComponent />
        </div>
      </div>
    </div>
  );
}

export default Profile;

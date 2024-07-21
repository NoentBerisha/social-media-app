import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import MainContent from './MainContent';
import RightSidebar from './RightSidebar';
import './Main.css';

function Main() {
  useEffect(() => {
    function adjustContainerSize() {
      const zoomLevel = window.devicePixelRatio || 1; 
      const outerContainer = document.querySelector('.outer-container');

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
    <div className="outer-container">
      <div className="nav-layout">
        <Navbar />
      </div>
      <div className="main-layout">
        <div className="Sidebar-Content">
          <Sidebar />
        </div>
        <div className="Main-Content">
          <MainContent />
        </div>
        <div className="RightSidebar-Content">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}

export default Main;

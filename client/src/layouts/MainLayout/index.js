import React from 'react';
import Sidebar from '../../components/Sidebar';

const MainLayout = ({ children }) => {
  return (
    <div
      style={{
        height: '100vh',
        width: '100vw',
        overflow: 'hidden',
        display: 'flex',
      }}
    >
      <Sidebar />
      {children}
    </div>
  );
};

export default MainLayout;

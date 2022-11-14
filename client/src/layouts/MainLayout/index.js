import React from 'react';
import Sidebar from '../../components/Sidebar';

const MainLayout = () => {
  return (
    <div style={{ height: '100vh', width: '100vw', overflow: 'hidden' }}>
      <Sidebar />
    </div>
  );
};

export default MainLayout;

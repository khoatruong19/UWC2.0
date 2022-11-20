import React from 'react';
import { useSelector } from 'react-redux';
import AreaModal from '../../components/modals/AreaModal';
import MCPModal from '../../components/modals/MCPModal';
import Sidebar from '../../components/Sidebar';

const MainLayout = ({ children }) => {
  const { openAreaModal, openMCPModal } = useSelector((state) => state.areas);

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
      {openMCPModal && <MCPModal />}
      {openAreaModal && <AreaModal />}
    </div>
  );
};

export default MainLayout;

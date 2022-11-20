import React from 'react';

const AuthLayout = ({ children }) => {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ width: '100vw', height: '100vh' }}
    >
      {children}
    </div>
  );
};

export default AuthLayout;

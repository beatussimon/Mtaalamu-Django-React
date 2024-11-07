// src/layouts/AuthLayout.jsx
import React from 'react';

const AuthLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Only the Auth pages are rendered here */}
      <div className="flex-grow flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;

import React from 'react';
import { Logo } from "./_components/logo";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        background: 'linear-gradient(60deg, #161616, #00204a)',
        backgroundSize: '400% 400%',
        animation: 'gradientMotion 10s ease infinite',
        color: '#ffffff',
        
      }}
    >
      <Logo />
      {children}
    </div>
  );
};

export default AuthLayout;

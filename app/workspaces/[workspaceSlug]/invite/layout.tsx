// src/workspaces/InviteLayout.jsx

import React, { ReactNode } from 'react';

type InviteLayoutProps = {
  children: ReactNode;
};

const InviteLayout = ({ children }: InviteLayoutProps) => {
  return (
    
      <div >
        {children}
      </div>
  
  );
};

export default InviteLayout;

import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBarTop from './NavBarTop';

const Layout: React.FC = () => {
  return (
    <>
      <NavBarTop />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
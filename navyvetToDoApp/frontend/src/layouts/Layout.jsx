import React from 'react';
import { Outlet } from 'react-router-dom'; // Import for nested routes
import Navbar from './Navbar';
import Footer from './Footer';

function Layout() {
  return (
    <>
        <Navbar />
        <main>
            <Outlet />  {/* Placeholder for content from child routes */}
        </main>
        <Footer />
    </>
  );
}

export default Layout;

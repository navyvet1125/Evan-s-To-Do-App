import React from 'react';
import { Outlet } from 'react-router-dom'; // Import for nested routes
import Navbar from './Navbar';
import Footer from './Footer';

function Layout() {
  return (
    <div className="layout">
        <Navbar />
        <header>My App Header</header>
        <main>
            <Outlet />  {/* Placeholder for content from child routes */}
        </main>
        <Footer />
    </div>
  );
}

export default Layout;

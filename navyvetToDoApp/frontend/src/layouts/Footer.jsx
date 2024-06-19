import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const Footer = () => {
    const navigate = useNavigate();
    const handleClick = (path) => {
      navigate(path);  // Programmatic navigation
    };
    return (
        <footer>
            <Navbar bg="dark" variant="dark" fixed='bottom' fill>
                <Nav className="mr-auto">
                    <Nav.Link onClick={() => handleClick("/")}>Home</Nav.Link>
                    <Nav.Link onClick={() => handleClick("/test")}>Test</Nav.Link>
                    <Nav.Link onClick={() => handleClick("/profile")}>Profile</Nav.Link>
                </Nav>
            </Navbar>
        </footer>
    );
};

export default Footer;
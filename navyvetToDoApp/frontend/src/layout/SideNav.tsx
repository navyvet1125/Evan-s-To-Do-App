import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { PencilSquare, PlusSquare, BoxArrowRight, Bootstrap, FileEarmarkPlus, StarFill, CalendarEvent } from 'react-bootstrap-icons';
import './SideNav.css';

const SideNav: React.FC = () => {
  const navigate = useNavigate();

  const handleClick =(path : string) => {
      navigate(path);
  }

  return (
    <Navbar collapseOnSelect expand="lg"  bg="light" data-bs-theme="light" className="flex-column side-nav">
      <Navbar.Brand href="#home">
        <Bootstrap className="union-icon" /> Navyvet To-Do
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto flex-column nav-items">
        <Nav.Link href="#today">
          <StarFill color="yellow" /> Today
        </Nav.Link>
        <Nav.Link href="#upcoming">
            <CalendarEvent color="red" size={16} /> Upcoming
        </Nav.Link>
          <Nav.Link href="#view-lists">
            <PencilSquare /> View Lists
          </Nav.Link>
          <Nav.Link href="#add-list">
            <PlusSquare /> Add List
          </Nav.Link>
          {/* Spacer to push logout to the bottom */}
          <div className="mt-auto">
            <Nav.Link href="#new-list">
                <FileEarmarkPlus /> New List
            </Nav.Link>
            <Nav.Link onClick={()=> handleClick("/")} className="logout-link">
              <BoxArrowRight /> Logout
            </Nav.Link>
          </div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default SideNav;
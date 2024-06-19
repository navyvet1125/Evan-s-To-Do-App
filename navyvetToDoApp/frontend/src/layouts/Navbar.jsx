import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


function Navigation() {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);  // Programmatic navigation
  };

  return (
  <Navbar collapseOnSelect  expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand onClick={() => handleClick("/")}>Navy Vet To Do App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav className="justify-content-end">
          <Nav.Link onClick={() => handleClick("/")}>Home</Nav.Link>
          <Nav.Link onClick={() => handleClick("/test")}>Test</Nav.Link>
          <Nav.Link onClick={() => handleClick("/profile")}>Profile</Nav.Link>
        </Nav>
        <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}

export default Navigation;
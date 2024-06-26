import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

// import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';


const NavBarTop:FunctionComponent = () => {
	const navigate = useNavigate();

    const handleClick =(path : string) => {
        navigate(path);
    }

  	return (
        <Navbar collapseOnSelect  expand="lg" className="bg-body-tertiary">
          <Navbar.Brand onClick={() => handleClick("/")}>Navy Vet To Do App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="justify-content-end">
              <Nav.Link onClick={() => handleClick("/")}>Home</Nav.Link>
              <Nav.Link>Features</Nav.Link>
              <Nav.Link>For Teams</Nav.Link>
              <Nav.Link>Resources</Nav.Link>
              <Nav.Link>Pricing</Nav.Link>
              <Nav.Link onClick={() => handleClick("/dashboard")}>Login</Nav.Link>
              <Nav.Link>
                <Button className="btn btn-alert">Start for free</Button>
              </Nav.Link>

              {/* <Nav.Link onClick={() => handleClick("/test")}>Test</Nav.Link> */}
              {/* <Nav.Link onClick={() => handleClick("/profile")}>Profile</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
	);
};

export default NavBarTop;

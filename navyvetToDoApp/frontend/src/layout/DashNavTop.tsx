import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';


const DashNavTop:FunctionComponent = () => {
	const navigate = useNavigate();

    const handleClick =(path : string) => {
        navigate(path);
    }

  	return (
        <Navbar collapseOnSelect  expand="lg" className="bg-body-tertiary">
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="justify-content-end">
              <Nav.Link onClick={() => handleClick("/dashboard")}>Dashboard</Nav.Link>
              <Nav.Link>Help</Nav.Link>
              {/* <Nav.Link onClick={() => handleClick("/test")}>Test</Nav.Link> */}
              {/* <Nav.Link onClick={() => handleClick("/profile")}>Profile</Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
	);
};

export default DashNavTop;

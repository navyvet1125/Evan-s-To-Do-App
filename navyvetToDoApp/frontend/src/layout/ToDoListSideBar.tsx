import Nav from 'react-bootstrap/Nav';
import './ToDoListSideBar.css';
import { FilePlus, DoorOpenFill  } from 'react-bootstrap-icons';
// import { Button } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';

function ToDoListSideBar() {
  return (
    <Nav defaultActiveKey="/home" className="flex-column border sidebar">
      <Nav.Link href="/home">Active</Nav.Link>
      <Nav.Link eventKey="link-1">
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            <FilePlus color='white'/> New...
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">To-do List</Dropdown.Item>
            <Dropdown.Item href="#/action-2">To-do Item</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Nav.Link>
      <Nav.Link eventKey="link-2">Link</Nav.Link>
      <Nav.Link eventKey="disabled" disabled>
        Disabled
      </Nav.Link>
      <Nav.Link eventKey="link-3">
        <DoorOpenFill color='red'/> Logout
      </Nav.Link>
    </Nav>
  );
}

export default ToDoListSideBar;
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { PencilSquare, PlusSquare, BoxArrowRight, Bootstrap, FileEarmarkPlus, StarFill, CalendarEvent, CardList, Trash } from 'react-bootstrap-icons';
import './SideNav.css';
import { selectAllLists, removeList } from '../store';
import NewListModal from '../components/NewListModal';
import { useSelector, useDispatch } from 'react-redux';

const SideNav: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);

  const navigate = useNavigate();
  const lists = useSelector(selectAllLists);
  const dispatch = useDispatch();

  const handleClick =(path : string) => {
      navigate(path);
  }
  const handleDelete = (listId: string) => {
    dispatch(removeList(listId));
    navigate('/dashboard');
  };

  useEffect(() => {
    if (lists.length === 0) {
      console.log('No lists found, add a new list');
    }
  }, [lists]);

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
            <PencilSquare /> Lists
          </Nav.Link>
          <div style={{ width: '100%', height: '1px', backgroundColor: '#ddd', margin: '10px 0' }}></div>
          {lists.map(list => (
            <Nav.Link key={list.id} >
             <CardList />
              <Link to={`/dashboard/${list.id}`}>{list.title}</Link>
             <Trash
              style={{ color: 'red', cursor: 'pointer' }}
              onClick={() => handleDelete(list.id)} 
             />
            </Nav.Link>
          ))}
          <Nav.Link href="#add-list">
            <PlusSquare /> Add List
          </Nav.Link>
          {/* Spacer to push logout to the bottom */}
          <div className="mt-auto">
            <Nav.Link href="#new-list">
              <Button variant="primary" onClick={toggleModal}>
                <FileEarmarkPlus /> New List
              </Button>
              {showModal && <NewListModal show={showModal} handleClose={toggleModal} />}
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
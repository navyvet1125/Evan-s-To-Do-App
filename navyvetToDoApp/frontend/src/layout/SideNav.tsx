import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { PencilSquare, PlusSquare, BoxArrowRight, Bootstrap, FileEarmarkPlus, StarFill, CalendarEvent, CardList, Trash } from 'react-bootstrap-icons';
import './SideNav.css';
import { selectAllLists, removeList, removeTasksByListId } from '../store';
import NewListModal from '../components/NewListModal';
import { useSelector, useDispatch } from 'react-redux';


const StaticNavLinks: React.FC = () =>  {
  return (
    <>
      <Nav.Link href="#today">
        <StarFill color="yellow" /> Today
      </Nav.Link>
      <Nav.Link href="#upcoming">
        <CalendarEvent color="red" size={16} /> Upcoming
      </Nav.Link>
      <Nav.Link href="#view-lists">
        <PencilSquare /> Lists
      </Nav.Link>
    </>
  );
}

function ListLinks({ lists, handleDelete }: { lists: any[], handleDelete: any }) {
  return (
    <>
      {lists.map(list => (
        <Nav.Link key={list.id}>
          <CardList />
          <Link to={`/dashboard/${list.id}`}>{list.title}</Link>
          <Trash
            style={{ color: 'red', cursor: 'pointer' }}
            onClick={() => handleDelete(list.id)}
          />
        </Nav.Link>
      ))}
    </>
  );
}


const SideNav: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  // const toggleModal = () => setShowModal(!showModal);
  const toggleModal = useCallback(() => setShowModal(prevModal => !prevModal), []);
  const navigate = useNavigate();
  const lists = useSelector(selectAllLists);
  const hasLists = useMemo(() => lists.length > 0, [lists]);

  const dispatch = useDispatch();

  const handleClick =(path : string) => {
      navigate(path);
  }
  const handleDelete = useCallback((listId: string) => {
    dispatch(removeList(listId));
    dispatch(removeTasksByListId(listId));
    navigate('/dashboard');
  }, [dispatch, navigate]);

  useEffect(() => {
    if (!hasLists) {
      console.log('No lists found, add a new list');
    }
  }, [hasLists]);

  return (
    <Navbar collapseOnSelect expand="lg"  bg="light" data-bs-theme="light" className="flex-column side-nav">
      <Navbar.Brand href="/dashboard">
        <Bootstrap className="union-icon" /> Navyvet To-Do
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto flex-column nav-items">
          <StaticNavLinks />
          <div className='separator'></div>
          <div className='center-links'>
            <ListLinks lists={lists} handleDelete={handleDelete} />
          </div>
          <Nav.Link href="#add-list">
            <PlusSquare /> Add List
          </Nav.Link>
          {/* Spacer to push logout to the bottom */}
          <div className="bottom-links">
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
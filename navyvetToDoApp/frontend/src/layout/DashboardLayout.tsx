import React from 'react';
import { Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavBarTop from './NavBarTop';
import ToDoListSideBar from './ToDoListSideBar';
import './DashboardLayout.css';

const Layout: React.FC = () => {
    return (
      <Container fluid="md" className='full-width-container px-0 mx-0'>
        <NavBarTop />
        <Row>
            <Col md={3}>
                <ToDoListSideBar />
            </Col>
            <Col md={9}>
                <Outlet />
            </Col>
        </Row>
      </Container>
    );
  };
  
  export default Layout;
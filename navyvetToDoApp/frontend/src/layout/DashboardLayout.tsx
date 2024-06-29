import React from 'react';
import { Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SideNav from './SideNav';
import DashNavTop from './DashNavTop';

const Layout: React.FC = () => {
    return (
      <Container fluid>
        <Row className='p-3'>
            <Col md={2}>
                <SideNav />
            </Col>
            <Col md={10}>
              <DashNavTop />
              <Outlet />
            </Col>
        </Row>
      </Container>
    );
  };
  
  export default Layout;
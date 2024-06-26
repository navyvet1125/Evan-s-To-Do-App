import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Outlet } from 'react-router-dom';
import NavBarTop from './NavBarTop';

const Layout: React.FC = () => {
  return (
    <Container fluid>
      <Row className='p-3'>
        <NavBarTop />
        <Outlet />
      </Row>
    </Container>
  );
};

export default Layout;
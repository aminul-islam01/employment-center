import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';

const Navbars = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Link to="/" className='fs-2 fw-bold'>Employment <span className='text-primary'>center</span></Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0 mx-lg-auto td-none"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavLink
                            to='/'
                            className={({ isActive }) => (isActive ? 'active' : '')}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to='/statistics'
                            className={({ isActive }) => (isActive ? 'active' : '')}
                        >
                            Statistics
                        </NavLink>
                        <NavLink
                            to='/applied-jobs'
                            className={({ isActive }) => (isActive ? 'active' : '')}
                        >
                            Applied Jobs
                        </NavLink>
                        <NavLink
                            to='/blogs'
                            className={({ isActive }) => (isActive ? 'active' : '')}
                        >
                            Blogs
                        </NavLink>
                    </Nav>

                    <Button variant="primary btn-lg">Start Applying</Button>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

};

export default Navbars;
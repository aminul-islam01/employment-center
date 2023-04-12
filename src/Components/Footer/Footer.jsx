import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
    return (
        <div className='bg-dark pb-5 text-light'>
            <Container >
                <Row>
                    <Col xs={12} sm={12} md={4}>
                        <h4 className='pt-4'>Employment Center</h4>
                        <p className='text-secondary'>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                        <a className='' href="">
                            <img src="/public/Group 9969.png" alt="" />
                        </a>
                    </Col>
                    <Col xs={6} sm={6} md={2}>
                        <h5 className='pt-4'>Company</h5>
                        <a href="">About Us</a><br />
                        <a href="">Work</a><br />
                        <a href="">Latest News</a><br />
                        <a href="">Careers</a><br />
                    </Col>
                    <Col xs={6} sm={6} md={2}>
                        <h5 className='pt-4'>Products</h5>
                        <a href="">Prototype</a><br />
                        <a href="">Plans & Pricing</a><br />
                        <a href="">Customers</a><br />
                        <a href="">Integrations</a><br />
                    </Col>
                    <Col xs={6} sm={6} md={2}>
                        <h5 className='pt-4'>Support</h5>
                        <a href="">Help Desk</a><br />
                        <a href="">Sales</a><br />
                        <a href="">Become a Partner</a><br />
                        <a href="">Developers</a><br />
                    </Col>
                    <Col xs={6} sm={6} md={2}>
                        <h5 className='pt-4'>Contact</h5>
                        <p className='text-secondary'>524 Broadway , NYC</p>
                        <a href="">+1 777 - 978 - 5570</a>
                    </Col>
                </Row>
                <p className='text-center text-secondary mt-5'>&copy;2023 Employment Center. <small>All Right Reserved</small></p>
            </Container>
        </div>
    );
};

export default Footer;
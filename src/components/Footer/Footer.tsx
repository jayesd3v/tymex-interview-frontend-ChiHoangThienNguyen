/* eslint jsx-a11y/anchor-is-valid: 0 */

import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import './footer.css';

const Footer = () => {
    return (
        <footer className='pb-5 pt-5'>
            <Container>
                <Row>
                    <Col xs={12} md={5} lg={4}>
                        <div className='section mb-5'>
                            <div className='title mb-4'>NAVIGATION</div>
                            <Row>
                                <Col xs={4}>
                                    <ul className='list-unstyled'>
                                        <li>
                                            <a href='#'>Home</a>
                                        </li>
                                        <li>
                                            <a href='#'>About Us</a>
                                        </li>
                                        <li>
                                            <a href='#'>Our teams</a>
                                        </li>
                                    </ul>
                                </Col>
                                <Col xs={4}>
                                    <ul className='list-unstyled'>
                                        <li>
                                            <a href='#'>Home</a>
                                        </li>
                                        <li>
                                            <a href='#'>About Us</a>
                                        </li>
                                        <li>
                                            <a href='#'>Our teams</a>
                                        </li>
                                    </ul>
                                </Col>
                                <Col xs={4}>
                                    <ul className='list-unstyled'>
                                        <li>
                                            <a href='#'>Home</a>
                                        </li>
                                        <li>
                                            <a href='#'>About Us</a>
                                        </li>
                                        <li>
                                            <a href='#'>Our teams</a>
                                        </li>
                                    </ul>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col xs={12} md={{ span: 5, offset: 1 }} lg={{ span: 4, offset: 0 }}>
                        <div className='section mb-5'>
                            <div className='title mb-4'>CONTACT US</div>
                            <ul className='list-unstyled'>
                                <li>
                                    <a href='#'>
                                        <img src='/phone.png' alt='phone' /> 012345678910
                                    </a>
                                </li>
                                <li>
                                    <a href='#'>
                                        <img src='/mail.png' alt='email' /> tymex-talent@tyme.com
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col xs={12} lg={{ span: 4, offset: 0 }}>
                        <div className='section mb-5'>
                            <div className='title mb-4'>SUBSCRIBE TO RECEIVE OUR LATEST UPDATE</div>
                            <Form>
                                <Form.Group as={Row}>
                                    <Col xs={12} sm={8}>
                                        <Form.Control placeholder='email@example.com' className='mb-3' />
                                    </Col>
                                    <Col xs={12} sm={4}>
                                        <Button>Subscribe</Button>
                                    </Col>
                                </Form.Group>
                            </Form>
                        </div>
                    </Col>
                </Row>
                <hr />
                <Row className='d-flex'>
                    <Col xs={12} md={6} className='text-center text-md-start'>
                        &copy; 2023 - Edit, All Rights Reserved.
                    </Col>
                    <Col xs={12} md={6} className='justify-content-center justify-content-md-end d-flex'>
                        <ul className='list-unstyled list-group list-group-horizontal text-white                                                                                                                                                                                    '>
                            <li>
                                <a href='#'>Security</a>
                            </li>
                            <li>
                                <a href='#'>Legal</a>
                            </li>
                            <li>
                                <a href='#'>Privacy</a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;

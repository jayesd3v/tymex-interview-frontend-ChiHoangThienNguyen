import { Button, Container, Nav, Navbar, Form } from 'react-bootstrap';
import './header.css';

const Header = () => {
    return (
        <Navbar fixed='top' expand='lg' className='bg-body-tertiary'>
            <Container>
                <Navbar.Toggle aria-controls='navbarScroll' />
                <Navbar.Collapse id='navbarScroll'>
                    <Nav className='me-auto my-2 my-lg-0' navbarScroll>
                        <Nav.Link href='/'>HOME</Nav.Link>
                        <Nav.Link href='/'>ABOUT US</Nav.Link>
                        <Nav.Link href='/'>OUR TEAMS</Nav.Link>
                        <Nav.Link href='/marketplace'>MARKETPLACE</Nav.Link>
                        <Nav.Link href='/'>WHITEPAPER</Nav.Link>
                    </Nav>
                    <Form className='d-flex'>
                        <Button variant='outline-success'>Connect Wallet</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;

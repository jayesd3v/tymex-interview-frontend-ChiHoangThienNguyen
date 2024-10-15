import { Button, Container, Nav, Navbar, Form } from 'react-bootstrap';
import './header.css';

const Header = () => {
    return (
        <Navbar fixed='top' expand='lg' className='bg-body-tertiary'>
            <Container>
                <Navbar.Toggle aria-controls='navbarScroll' />
                <Navbar.Collapse id='navbarScroll'>
                    <Nav className='me-auto my-2 my-lg-0' navbarScroll>
                        <Nav.Link href='#action1'>HOME</Nav.Link>
                        <Nav.Link href='#action2'>ABOUT US</Nav.Link>
                        <Nav.Link href='#action2'>OUR TEAMS</Nav.Link>
                        <Nav.Link href='#action2'>MARKETPLACE</Nav.Link>
                        <Nav.Link href='#action2'>WHITEPAPER</Nav.Link>
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

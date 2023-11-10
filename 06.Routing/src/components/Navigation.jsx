import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (

        // <nav>
        //     <h2>NavBar</h2>
        //     <Link to="/About">About Us</Link> <br />
        //     <Link to="/">Home</Link> <br />
        //     <Link to="/Contacts">Contact Us</Link>
        // </nav>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
               <Navbar.Brand as={Link} to="/">Navigation Page</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>
                        <Nav.Link as={Link} to="/contacts">Contacts</Nav.Link>
                        <Nav.Link as={Link} to="/characters">Star-War-Characters</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );

}
export default Navigation;
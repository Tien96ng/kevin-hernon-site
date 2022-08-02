import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
      <Navbar id="navbar" bg="light" variant="light" sticky="top">
        <Container>
          <Navbar.Brand href="#home">Kevin Hernon</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#features">Resume</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
}

export default NavBar;
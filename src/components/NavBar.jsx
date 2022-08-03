import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Modal, Button } from 'react-bootstrap';
import style from '../../styles/NavBar.module.css';

function NavBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar id="navbar" className={style.overall} variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="#home">Kevin Hernon</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#features" onClick={handleShow}>Resume</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Modal show={show} onHide={handleClose} fullscreen={true} className={style.container}>
        <Modal.Body> 
          <iframe src="https://docdro.id/sz5vqGC" title="resume" height="100%" width="100%" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose} >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NavBar;
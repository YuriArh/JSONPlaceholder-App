import { useState } from "react";
import logo from "./assets/me/me.jpg";
import {
  Navbar,
  NavDropdown,
  Nav,
  Container,
  Form,
  Offcanvas,
  Button,
  Stack,
} from "react-bootstrap";

// import "./App.css";

function App() {
  return (
    <>
      <Navbar bg="light" expand={false} className="mb-3">
        <Container fluid>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-false`} />
          <Navbar.Brand href="#">JsonPlaceholder App</Navbar.Brand>
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-false`}
            aria-labelledby={`offcanvasNavbarLabel-expand-false`}
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-false`}>
                <Stack direction="horizontal" gap={2}>
                  <Navbar.Brand href="#me">
                    <img
                      src={logo}
                      width="80"
                      height="80"
                      className="d-inline-block align-top"
                      alt="React Bootstrap logo"
                    />
                  </Navbar.Brand>
                  <Stack gap={2}>
                    <Nav.Link href="#me">Юрий</Nav.Link>
                    <p>
                      <small>arhipow.yuri@gmail.com</small>
                    </p>
                  </Stack>
                </Stack>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">List of posts</Nav.Link>
                <Nav.Link href="#action2">About me</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default App;

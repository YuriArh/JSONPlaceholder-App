import logo from "../assets/me/me.jpg";
import { Navbar, Nav, Container, Offcanvas, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
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
                <Link to={"/"}>
                  <Nav.Link href="#action1">List of posts</Nav.Link>
                </Link>
                <Link to={"/my"}>
                  <Nav.Link href="#action2">About me</Nav.Link>
                </Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;

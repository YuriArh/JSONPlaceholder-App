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
                  <Link to="/my">
                    <img
                      src={logo}
                      width="80"
                      height="80"
                      className="d-inline-block align-top"
                      alt="React Bootstrap logo"
                    />
                  </Link>
                  <Stack gap={2}>
                    <Link
                      to="/my"
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      Юрий
                    </Link>
                    <p>
                      <small>arhipow.yuri@gmail.com</small>
                    </p>
                  </Stack>
                </Stack>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Link
                  to={"/"}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  List of posts
                </Link>
                <Link
                  to={"/my"}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  About me
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

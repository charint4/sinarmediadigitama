import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../../Images/smd-logo.png";
import "../Navigation/nav.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function BasicExample() {
  return (
    <Navbar bg="light" expand="lg" className="p-3 fixed-top">
      <Container>
        <Navbar.Brand href="#home">
          <img src={Logo} className="nav-logo"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav-btn">
            <Nav.Link>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/AboutUs" className="nav-link">
                About us
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/Services" className="nav-link">
                Services
              </Link>
            </Nav.Link>
          </Nav>
          <Nav>
            <Button className="contact-btn px-4">Contact Us</Button>{" "}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;

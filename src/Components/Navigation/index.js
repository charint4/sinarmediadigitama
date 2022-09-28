import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../../Images/smd-logo.png";
import "../Navigation/nav.css";
import Button from "react-bootstrap/Button";
import { Link, useParams } from "react-router-dom";
import { HashLink} from 'react-router-hash-link';

function BasicExample() {

  return (
    <Navbar bg="light" expand="lg" className="p-3 fixed-top">
      <Container>
        <Navbar.Brand>
        <Link to="/">
          <img src={Logo} className="nav-logo"></img>
              </Link>
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
              <HashLink smooth to="/#section2" className="nav-link">
                Services
              </HashLink>
            </Nav.Link>
          </Nav>
          <Nav>
            <HashLink smooth to='/#section6'>
              <Button className="contact-btn px-4">Contact Us</Button>{" "}
            </HashLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;

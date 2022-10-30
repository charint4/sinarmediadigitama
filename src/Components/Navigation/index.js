import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "../../Images/webp/smd-logo.webp";
import "../Navigation/nav.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Data from "./Data"

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
        {Data.map ((data, id) => (
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto nav-btn">
              <Nav.Link>
                <Link to="/" className="nav-link">
                  {data.nav1}
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/AboutUs" className="nav-link">
                {data.nav2}
                </Link>
              </Nav.Link>
              <Nav.Link>
                <HashLink smooth to="/#section2" className="nav-link">
                {data.nav3}
                </HashLink>
              </Nav.Link>
              <Nav.Link>
                <HashLink smooth to="/#section2" className="nav-link">
                  <Form>
                  <Form.Check 
                      type="switch"
                      id="custom-switch"
                      label="ENG"
                    />
                  </Form>
                </HashLink>
              </Nav.Link>
              
            </Nav>
            <Nav>
              <HashLink smooth to="/#section6">
                <Button className="contact-btn px-4">{data.nav4}</Button>{" "}
              </HashLink>
            </Nav>
          </Navbar.Collapse>
        ))}
        
      </Container>
    </Navbar>
  );
}

export default BasicExample;

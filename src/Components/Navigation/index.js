import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../../Images/smd-logo.png';
import '../Navigation/nav.css';
import Button from 'react-bootstrap/Button';


function BasicExample() {
  return (
    <Navbar bg="light" expand="lg" className="p-3">
      <Container>
        <Navbar.Brand href="#home" >
          <img src={Logo} className="nav-logo"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav-btn">
            <Nav.Link href="#home" className="nav-link">Home</Nav.Link>
            <Nav.Link href="#link" className="nav-link">About Us</Nav.Link>
            <Nav.Link href="#link" className="nav-link">Services</Nav.Link>
          
          </Nav>
          <Nav>
            <Button className="contact-btn px-4">Contact Us</Button>{' '}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import "./header.css";
import Button from "react-bootstrap/Button";
import asset1 from "../../../Images/bi_arrow-down-right.png";
import asset2 from "../../../Images/Group.png";
import asset3 from "../../../Images/digitama-new-full.png";

const Header = () => {
  return (
    <>
      <div className="wrap-head">
        <Container>
          <div className="row container-head">
            <div className="col-md-7 cont-heads">
              <h1>OOH (Out of Home Units)</h1>
              <h3>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </h3>
              <Button className="contact-btn px-4">Contact Us</Button>{" "}
            </div>
            <div className="col-md cont-head"></div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import "./header.css";
import Button from "react-bootstrap/Button";
import { HashLink } from "react-router-hash-link";

const Header = (props) => {
  const { data } = props;
  return (
    <>
      <div
        className="wrap-heads"
        style={{ backgroundImage: `url(${data.ava})` }}
      >
        <Container>
          <div className="row container-head">
            <div className="col-md-7 cont-heads">
              <h1>{data.name}</h1>
              <h3>{data.texts}</h3>
              <HashLink smooth to="/#section6">
                <Button className="services-btn px-4">Contact Us</Button>{" "}
              </HashLink>
            </div>
            <div className="col-md cont-head"></div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;

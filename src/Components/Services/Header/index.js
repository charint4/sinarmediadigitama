import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import "./header.css";
import Button from "react-bootstrap/Button";
import asset1 from "../../../Images/bi_arrow-down-right.png";
import asset2 from "../../../Images/Group.png";
import asset3 from "../../../Images/digitama-new-full.png";

const Header = (props) => {
  const {data} = props;
  // console.log(data.name)
  return (
    <>
      <div className="wrap-heads" 
      style={{backgroundImage: `url(${data.ava})`}}
      >
        <Container>
          <div className="row container-head">
            <div className="col-md-7 cont-heads">
              <h1>{data.name}</h1>
              <h3>
               {data.texts}
              </h3>
              <Button className="services-btn px-4">Contact Us</Button>{" "}
            </div>
            <div className="col-md cont-head"></div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;

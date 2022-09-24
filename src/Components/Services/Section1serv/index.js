import React from "react";
import { Container } from "react-bootstrap";
import "./section1serv.css";
import services from "../../../Images/services.png";

const index = () => {
  return (
    <Container>
      <div className="row wrap-services">
        <div className="col-md bg-blur p-5 cont-services">
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
            inventore veritatis et quasi architecto beatae vitae dicta sunt
            explicabo.
          </h3>
        </div>
        <div className="col-md cont-services">
          <img src={services} alt="services" />
        </div>
      </div>
    </Container>
  );
};

export default index;

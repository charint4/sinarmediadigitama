import React from "react";
import { Container } from "react-bootstrap";
import "./section1serv.css";
import services from "../../../Images/services.png";

const index = (props) => {
  const { data } = props;
  return (
    <Container>
      <div className="row wrap-services">
        <div className="col-md bg-blur p-5 cont-services">
          <h3>{data.description}</h3>
        </div>
        <div className="col-md cont-services d-flex flex-wrap align-items-center justify-content-center">
          <img
            src={data.products.length ? data.products[0].img : services}
            alt="services"
          />
        </div>
      </div>
    </Container>
  );
};

export default index;

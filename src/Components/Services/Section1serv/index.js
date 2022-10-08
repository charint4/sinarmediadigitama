import React from "react";
import { Container } from "react-bootstrap";
import "./section1serv.css";

const index = (props) => {
  const { data } = props;
  return (
    <Container>
      <div className="row wrap-services bg-blur p-5">
        <div className="col-lg cont-services">
          <h3>{data.description}</h3>
        </div>
        <div className="col-lg cont-services d-flex flex-wrap align-items-center justify-content-center">
          <img src={data.ava2} alt="services" />
        </div>
      </div>
    </Container>
  );
};

export default index;

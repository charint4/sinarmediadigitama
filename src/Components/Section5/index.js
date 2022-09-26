import React from "react";
import { Card, Container } from "react-bootstrap";
import "./section5.css";
import CardImg from "../../Images/Frame-589.jpg";

const Section5 = () => {
  return (
    <Container>
      <div className="text d-flex flex-column sec5 text-center">
        <h3 className="t1-s5 fw-bold fs-title">Meet our team</h3>
        <h4 className="t2-s5 fs-normal">
          A group of highly motivated people with diverse backgrounds, extensive
          experience, special interest, and track records of success, while
          their differences complement one another’s skills
        </h4>
      </div>
      <div className="carousel d-flex">
        <Card
          style={{ width: "248px" }}
          className="border border-light rounded-4 card"
        >
          <Card.Img variant="top" src={CardImg} className="p-2 rounded-5" />
          <Card.Body>
            <Card.Title>
              <h5 className="fw-bold fs-normal py-3">Haryanto</h5>
            </Card.Title>
          </Card.Body>
        </Card>
        <Card
          style={{ width: "248px" }}
          className="border border-light rounded-4 card"
        >
          <Card.Img variant="top" src={CardImg} className="p-2 rounded-5" />
          <Card.Body>
            <Card.Title>
              <h5 className="fw-bold fs-normal py-3">Haryanto</h5>
            </Card.Title>
          </Card.Body>
        </Card>
        <Card
          style={{ width: "248px" }}
          className="border border-light rounded-4 card"
        >
          <Card.Img variant="top" src={CardImg} className="p-2 rounded-5" />
          <Card.Body>
            <Card.Title>
              <h5 className="fw-bold fs-normal py-3">Haryanto</h5>
            </Card.Title>
          </Card.Body>
        </Card>
        <Card
          style={{ width: "248px" }}
          className="border border-light rounded-4 card"
        >
          <Card.Img variant="top" src={CardImg} className="p-2 rounded-5" />
          <Card.Body>
            <Card.Title>
              <h5 className="fw-bold fs-normal py-3">Haryanto</h5>
            </Card.Title>
          </Card.Body>
        </Card>
        <Card
          style={{ width: "248px" }}
          className="border border-light rounded-4 card"
        >
          <Card.Img variant="top" src={CardImg} className="p-2 rounded-5" />
          <Card.Body>
            <Card.Title>
              <h5 className="fw-bold fs-normal py-3">Haryanto</h5>
            </Card.Title>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default Section5;

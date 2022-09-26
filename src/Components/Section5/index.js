import React from "react";
import { Card, Container } from "react-bootstrap";
import "./section5.css";
import CardImg1 from "../../Images/ourteam1.png";
import CardImg3 from "../../Images/ourteam2.png";
import CardImg2 from "../../Images/ourteam3.png";

const Section5 = () => {
  return (
    <Container>
      <div className="text d-flex flex-column sec5 text-center">
        <h3 className="t1-s5 fw-bold fs-title">Meet our team</h3>
        <h4 className="t2-s5 fs-20">
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
          <Card.Img variant="top" src={CardImg1} className="p-2 rounded-5" />
          <Card.Body>
            <Card.Title>
              <h5 className="fw-bold fs-16 fw-400 color-gray py-3">Kate Leon Coleman</h5>
            </Card.Title>
          </Card.Body>
        </Card>
        <Card
          style={{ width: "248px" }}
          className="border border-light rounded-4 card"
        >
          <Card.Img variant="top" src={CardImg2} className="p-2 rounded-5" />
          <Card.Body>
            <Card.Title>
              <h5 className="fw-bold fs-16 fw-400 color-gray py-3">Judy Warren</h5>
            </Card.Title>
          </Card.Body>
        </Card>
        <Card
          style={{ width: "248px" }}
          className="border border-light rounded-4 card"
        >
          <Card.Img variant="top" src={CardImg3} className="p-2 rounded-5" />
          <Card.Body>
            <Card.Title>
              <h5 className="fw-bold fs-16 fw-400 color-gray py-3">Dalton Johnson</h5>
            </Card.Title>
          </Card.Body>
        </Card>
        <Card
          style={{ width: "248px" }}
          className="border border-light rounded-4 card"
        >
          <Card.Img variant="top" src={CardImg2} className="p-2 rounded-5" />
          <Card.Body>
            <Card.Title>
              <h5 className="fw-bold fs-16 fw-400 color-gray py-3">Judy Warren</h5>
            </Card.Title>
          </Card.Body>
        </Card>
        <Card
          style={{ width: "248px" }}
          className="border border-light rounded-4 card"
        >
          <Card.Img variant="top" src={CardImg1} className="p-2 rounded-5" />
          <Card.Body>
            <Card.Title>
              <h5 className="fw-bold fs-16 fw-400 color-gray py-3">Kate Leon Coleman</h5>
            </Card.Title>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default Section5;

import React from "react";
import { Card, Container } from "react-bootstrap";
import "./section5.css";
import Bagus from "../../Images/webp/bagus.webp";
import Lina from "../../Images/webp/lina-1.webp";
import Ebiet from "../../Images/webp/bhara.webp";
import Anna from "../../Images/webp/anna.webp";
import Tety from "../../Images/webp/tety.webp";
import Malki from "../../Images/webp/malki.webp";
import Ikrar from "../../Images/webp/ikrar.webp";
import Evy from "../../Images/webp/evy-1.webp";
import Seni from "../../Images/webp/seni.webp";
import Syafrudin from "../../Images/webp/syafrudin.webp";
import Retno from "../../Images/webp/siska.webp";
import Slider from "react-slick";
const Section5 = () => {
  const settings = {
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2500,
    autoplaySpeed: 2500,
    cssEase: "linear",
    adaptiveHeight: true,
    arrows: false,
    pauseOnHover: false,
    infinite: true,
    touchThreshold: 100,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 476,
        settings: {
          slidesToShow: 1.5,
        },
      },
    ],
  };

  return (
    <Container>
      <div className="text d-flex flex-column sec5 text-center">
        <h3 className="t1-s5 fw-bold fs-title">Meet Our Team</h3>
        <h4 className="t2-s5 fs-20 fw-400 lh-30">
          We are led by a group of highly motivated people with diverse
          backgrounds and extensive experience to unlock creativity around every
          corner.
        </h4>
      </div>
      <Slider {...settings} className="slick-team">
        <Card
          style={{ minWidth: "200px" }}
          className="border border-light rounded-4 card cont-card-team"
        >
          <Card.Img variant="top" src={Lina} className="p-2 rounded-5" />
          <Card.Body>
            <Card.Title>
              <h5 className="card-text fw-bold py-3">Derlina Yusuf</h5>
              <h5 className="card-text fw-400">Managing Director</h5>
            </Card.Title>
          </Card.Body>
        </Card>
        <Card
          style={{ minWidth: "200px" }}
          className="border border-light rounded-4 card cont-card-team"
        >
          <Card.Img variant="top" src={Tety} className="p-2 rounded-5" />
          <Card.Body>
            <Card.Title>
              <h5 className="card-text fw-bold py-3">Tety Kartikasari</h5>
              <h5 className="card-text fw-400">HRGA Director</h5>
            </Card.Title>
          </Card.Body>
        </Card>
        <Card
          style={{ minWidth: "200px" }}
          className="border border-light rounded-4 card cont-card-team"
        >
          <Card.Img variant="top" src={Retno} className="p-2 rounded-5" />
          <Card.Body>
            <Card.Title>
              <h5 className="card-text fw-bold py-3">Francisca Retno</h5>
              <h5 className="card-text fw-400">Business Development</h5>
            </Card.Title>
          </Card.Body>
        </Card>
        <Card
          style={{ minWidth: "200px" }}
          className="border border-light rounded-4 card cont-card-team"
        >
          <Card.Img variant="top" src={Malki} className="p-2 rounded-5" />
          <Card.Body>
            <Card.Title>
              <h5 className="card-text fw-bold py-3">Malki Jaehanto</h5>
              <h5 className="card-text fw-400">Head of Production</h5>
            </Card.Title>
          </Card.Body>
        </Card>
        <Card
          style={{ minWidth: "200px" }}
          className="border border-light rounded-4 card cont-card-team"
        >
          <Card.Img variant="top" src={Anna} className="p-2 rounded-5" />
          <Card.Body>
            <Card.Title>
              <h5 className="card-text fw-bold py-3">Amerlina H. L.</h5>
              <h5 className="card-text fw-400">Strategic Planning</h5>
            </Card.Title>
          </Card.Body>
        </Card>
        <Card
          style={{ minWidth: "200px" }}
          className="border border-light rounded-4 card cont-card-team"
        >
          <Card.Img variant="top" src={Evy} className="p-2 rounded-5" />
          <Card.Body>
            <Card.Title>
              <h5 className="card-text fw-bold py-3">Evy Ariza</h5>
              <h5 className="card-text fw-400">General Affair</h5>
            </Card.Title>
          </Card.Body>
        </Card>
        <Card
          style={{ minWidth: "200px" }}
          className="border border-light rounded-4 card cont-card-team"
        >
          <Card.Img variant="top" src={Syafrudin} className="p-2 rounded-5" />
          <Card.Body>
            <Card.Title>
              <h5 className="card-text fw-bold py-3">Syafrudin Asyhari</h5>
              <h5 className="card-text fw-400">Production Specialist</h5>
            </Card.Title>
          </Card.Body>
        </Card>
        <Card
          style={{ minWidth: "200px" }}
          className="border border-light rounded-4 card cont-card-team"
        >
          <Card.Img variant="top" src={Ikrar} className="p-2 rounded-5" />
          <Card.Body>
            <Card.Title>
              <h5 className="card-text fw-bold py-3">Ikrar H. Mahardhika</h5>
              <h5 className="card-text fw-400">Head of Marketing</h5>
            </Card.Title>
          </Card.Body>
        </Card>
        <Card
          style={{ minWidth: "200px" }}
          className="border border-light rounded-4 card cont-card-team"
        >
          <Card.Img variant="top" src={Seni} className="p-2 rounded-5" />
          <Card.Body>
            <Card.Title>
              <h5 className="card-text fw-bold py-3">Seni Iriani Loka</h5>
              <h5 className="card-text fw-400">
                Head of Digital & Partnership
              </h5>
            </Card.Title>
          </Card.Body>
        </Card>
        <Card
          style={{ minWidth: "200px" }}
          className="border border-light rounded-4 card cont-card-team"
        >
          <Card.Img variant="top" src={Ebiet} className="p-2 rounded-5" />
          <Card.Body>
            <Card.Title>
              <h5 className="card-text fw-bold py-3">Ebiet Mubharak</h5>
              <h5 className="card-text fw-400">Head of Creative</h5>
            </Card.Title>
          </Card.Body>
        </Card>
        <Card
          style={{ minWidth: "200px" }}
          className="border border-light rounded-4 card cont-card-team"
        >
          <Card.Img variant="top" src={Bagus} className="p-2 rounded-5" />
          <Card.Body>
            <Card.Title>
              <h5 className="card-text fw-bold py-3">Bagus F. Asyhari</h5>
              <h5 className="card-text fw-400">Founder</h5>
            </Card.Title>
          </Card.Body>
        </Card>
      </Slider>
    </Container>
  );
};

export default Section5;

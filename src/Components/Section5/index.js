import React from "react";
import { Card, Container } from "react-bootstrap";
import "./section5.css";
import Bagus from "../../Images/bagus.png";
import Lina from "../../Images/lina.png";
import Ebiet from "../../Images/bhara.png";
import Anna from "../../Images/anna.png";
import Tety from "../../Images/tety.png";
import Malki from "../../Images/malki.png";
import Ikrar from "../../Images/ikrar.png";
import Evy from "../../Images/evy.png";
import Seni from "../../Images/seni.png";
import Syafrudin from "../../Images/syafrudin.png";
import Retno from "../../Images/siska.png";
import Slider from "react-slick";

const Section5 = () => {
  const settings = {
    slidesToShow: 6.5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 1500,
    cssEase: "linear",
    adaptiveHeight: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 810,
        settings: {
          slidesToShow: 3.6,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2.7,
        },
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 2.7,
        },
      },
      {
        breakpoint: 428,
        settings: {
          slidesToShow: 2.05,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1.9,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1.65,
        },
      },
    ],
  };

  return (
    <Container>
      <div className="text d-flex flex-column sec5 text-center">
        <h3 className="t1-s5 fw-bold fs-title">Meet Our Team</h3>
        <h4 className="t2-s5 fs-20 fw-400 lh-30">
          A group of highly motivated people with diverse backgrounds, extensive
          experience, special interest, and track records of success, while
          their differences complement one another’s skills
        </h4>
      </div>
      <Slider {...settings}>
        <Card
          style={{ minWidth: "200px" }}
          className="border border-light rounded-4 card"
        >
          <Card.Img
            variant="top"
            src={Bagus}
            className="p-2 rounded-5 img-card-team"
          />
          <Card.Body>
            <Card.Title>
              <h5 className="fw-bold fs-16 fw-400 color-gray py-3">
                Bagus F. Asyhari
              </h5>
              <h5 className="fs-16 fw-400 color-gray">Founder</h5>
            </Card.Title>
          </Card.Body>
        </Card>
        <Card
          style={{ minWidth: "200px" }}
          className="border border-light rounded-4 card"
        >
          <Card.Img
            variant="top"
            src={Lina}
            className="p-2 rounded-5 img-card-team"
          />
          <Card.Body>
            <Card.Title>
              <h5 className="fw-bold fs-16 fw-400 color-gray py-3">
                Derlina Yusuf
              </h5>
              <h5 className="fs-16 fw-400 color-gray">Managing Director</h5>
            </Card.Title>
          </Card.Body>
        </Card>
        <Card
          style={{ minWidth: "200px" }}
          className="border border-light rounded-4 card"
        >
          <Card.Img
            variant="top"
            src={Tety}
            className="p-2 rounded-5 img-card-team"
          />
          <Card.Body>
            <Card.Title>
              <h5 className="fw-bold fs-16 fw-400 color-gray py-3">
                Tety Kartikasari
              </h5>
              <h5 className="fs-16 fw-400 color-gray">HRGA Director</h5>
            </Card.Title>
          </Card.Body>
        </Card>
        <Card
          style={{ minWidth: "200px" }}
          className="border border-light rounded-4 card"
        >
          <Card.Img
            variant="top"
            src={Retno}
            className="p-2 rounded-5 img-card-team"
          />
          <Card.Body>
            <Card.Title>
              <h5 className="fw-bold fs-16 fw-400 color-gray py-3">
                Franciska Retno
              </h5>
              <h5 className="fs-16 fw-400 color-gray">Business Development</h5>
            </Card.Title>
          </Card.Body>
        </Card>
        <Card
          style={{ minWidth: "200px" }}
          className="border border-light rounded-4 card"
        >
          <Card.Img
            variant="top"
            src={Malki}
            className="p-2 rounded-5 img-card-team"
          />
          <Card.Body>
            <Card.Title>
              <h5 className="fw-bold fs-16 fw-400 color-gray py-3">
                Malki Jaehanto
              </h5>
              <h5 className="fs-16 fw-400 color-gray">Head of Production</h5>
            </Card.Title>
          </Card.Body>
        </Card>
        <Card
          style={{ minWidth: "200px" }}
          className="border border-light rounded-4 card"
        >
          <Card.Img
            variant="top"
            src={Anna}
            className="p-2 rounded-5 img-card-team"
          />
          <Card.Body>
            <Card.Title>
              <h5 className="fw-bold fs-16 fw-400 color-gray py-3">
                Amerlina H. L.
              </h5>
              <h5 className="fs-16 fw-400 color-gray">Strategic Planning</h5>
            </Card.Title>
          </Card.Body>
        </Card>
        <Card
          style={{ minWidth: "200px" }}
          className="border border-light rounded-4 card"
        >
          <Card.Img
            variant="top"
            src={Evy}
            className="p-2 rounded-5 img-card-team"
          />
          <Card.Body>
            <Card.Title>
              <h5 className="fw-bold fs-16 fw-400 color-gray py-3">
                Evy Ariza
              </h5>
              <h5 className="fs-16 fw-400 color-gray">General Affair</h5>
            </Card.Title>
          </Card.Body>
        </Card>
        <Card
          style={{ minWidth: "200px" }}
          className="border border-light rounded-4 card"
        >
          <Card.Img
            variant="top"
            src={Syafrudin}
            className="p-2 rounded-5 img-card-team"
          />
          <Card.Body>
            <Card.Title>
              <h5 className="fw-bold fs-16 fw-400 color-gray py-3">
                Syafrudin Asyhari
              </h5>
              <h5 className="fs-16 fw-400 color-gray">Production Specialist</h5>
            </Card.Title>
          </Card.Body>
        </Card>
        <Card
          style={{ minWidth: "200px" }}
          className="border border-light rounded-4 card"
        >
          <Card.Img
            variant="top"
            src={Ikrar}
            className="p-2 rounded-5 img-card-team"
          />
          <Card.Body>
            <Card.Title>
              <h5 className="fw-bold fs-16 fw-400 color-gray py-3">
                Ikrar H. Mahardika
              </h5>
              <h5 className="fs-16 fw-400 color-gray">Head of Marketing</h5>
            </Card.Title>
          </Card.Body>
        </Card>
        <Card
          style={{ minWidth: "200px" }}
          className="border border-light rounded-4 card"
        >
          <Card.Img
            variant="top"
            src={Seni}
            className="p-2 rounded-5 img-card-team"
          />
          <Card.Body>
            <Card.Title>
              <h5 className="fw-bold fs-16 fw-400 color-gray py-3">
                Seni Iriani Loka
              </h5>
              <h5 className="fs-16 fw-400 color-gray">
                Head of Digital & Partnership
              </h5>
            </Card.Title>
          </Card.Body>
        </Card>
        <Card
          style={{ minWidth: "200px" }}
          className="border border-light rounded-4 card"
        >
          <Card.Img
            variant="top"
            src={Ebiet}
            className="p-2 rounded-5 img-card-team"
          />
          <Card.Body>
            <Card.Title>
              <h5 className="fw-bold fs-16 fw-400 color-gray py-3">
                Ebiet Mubharak
              </h5>
              <h5 className="fs-16 fw-400 color-gray">Head of Creative</h5>
            </Card.Title>
          </Card.Body>
        </Card>
      </Slider>
    </Container>
  );
};

export default Section5;

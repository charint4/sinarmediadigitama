import React from "react";
import { Container } from "react-bootstrap";
import "./alts.css";
import Bhara from "../../Images/ourTeam/bhara.png";
import LinkedIn from "../../Images/linkedin.png";
import Slider from "react-slick";

const Section5alts = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Container>
      <Slider {...settings}>
        <div className="wrap-team-card">
          <img src={Bhara} className="rounded-4"></img>
          <div className="cont-team-card p-3">
            <div className="d-flex justify-content-between align-items-center">
              <p className="mb-0">
                <b>Ebiet Mubharak</b>
              </p>
              <img src={LinkedIn} alt="" className="rounded-1 linkedin" />
            </div>
            <p>
              <i>Head of Creative</i>
            </p>
          </div>
        </div>
      </Slider>
    </Container>
  );
};

export default Section5alts;

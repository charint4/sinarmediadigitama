import React from "react";
import { Container } from "react-bootstrap";
import "./alts.css";
import Bhara from "../../Images/ourTeam/bhara.png";
import LinkedIn from "../../Images/linkedin.png";
import Slider from "react-slick";
import Data from "./Data";

const Section5alts = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    // autoplay: true,
    // autoplaySpeed: 5000,
    // cssEase: "linear",
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
      <Slider {...settings} className="mt-60">
        {Data.map((data, index) => (
          <div
            className="d-flex flex-column align-items-center"
            key={index + 1}
          >
            <div className="card-sec5">
              <img src={data.image} className="rounded-4"></img>
              <div className="p-3 card-sec5-desc">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <p className="mb-0">
                    <b>{data.name}</b>
                  </p>
                  <a href={data.linkedin}>
                    <img src={LinkedIn} alt="" className="rounded-1 linkedin" />
                  </a>
                </div>
                <p className="role-text mb-0">
                  <i>{data.role}</i>
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default Section5alts;

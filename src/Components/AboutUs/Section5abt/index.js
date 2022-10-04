import React from "react";
import { Container, Card } from "react-bootstrap";
import Slider from "react-slick";
import "./section5abt.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Data from "./Data";
import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

const Secslide = () => {
  const settings = {
    slidesToShow: 2.85,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    adaptiveHeight: true,
    // adaptiveWeight: true,
    arrows: false,
    pauseOnHover: false,
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 2.05,
    //     },
    //   },
    //   {
    //     breakpoint: 810,
    //     settings: {
    //       slidesToShow: 1.55,
    //     },
    //   },
    //   {
    //     breakpoint: 412,
    //     settings: {
    //       slidesToShow: 1.3,
    //     },
    //   },
    //   {
    //     breakpoint: 414,
    //     settings: {
    //       slidesToShow: 1.32,
    //     },
    //   },
    //   {
    //     breakpoint: 375,
    //     settings: {
    //       slidesToShow: 1.4,
    //     },
    //   },
    //   {
    //     breakpoint: 428,
    //     settings: {
    //       slidesToShow: 1.8,
    //     },
    //   },
    //   {
    //     breakpoint: 360,
    //     settings: {
    //       slidesToShow: 1.34,
    //     },
    //   },
    // ],
  };

  // const ref = useRef();
  // const { events } = useDraggable(ref);
  return (
    <Container>
      <div className="mt-120 wrap-abt-slide">
        <h1 className="text-center">Our Facilities</h1>
        <Slider {...settings} className="carousel-abt-slide">
          {/* <div
          className="carousel-abt-slide d-flex flex-row flex-nowrap overflow-auto py-2"
          {...events}
          ref={ref}
        > */}
          {Data.map((data, index) => (
            <Card
              className="border border-light rounded-4 p-2 cont-card-abt"
              key={index}
              style={{ minWidth: "350px" }}
            >
              <Card.Img
                variant="top"
                src={data.image}
                className="p-2 rounded-5 img-card-slide"
              />
              <Card.Body>
                <Card.Title>
                  <h5 className="fw-bold fs-16 fw-400 color-gray font-fac">
                    {data.name}
                  </h5>
                </Card.Title>
              </Card.Body>
            </Card>
          ))}
          {/* </div> */}
        </Slider>
      </div>
    </Container>
  );
};

export default Secslide;

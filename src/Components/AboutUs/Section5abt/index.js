import React from "react";
import { Container, Card } from "react-bootstrap";
import Slider from "react-slick";
import "./section5abt.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Data from "./Data";

const Secslide = (props) => {
  const { lang = "en" } = props;
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 3,
    // speed: 500,
    // autoplay: true,
    // autoplaySpeed: 4000,
    // cssEase: "linear",
    // adaptiveHeight: true,
    adaptiveWeight: true,
    arrows: true,
    dots: true,
    pauseOnHover: false,
    infinite: true,
    responsive: [
      // {
      //   breakpoint: 1200,
      //   settings: {
      //     slidesToShow: 2,
      //     slidesToScroll: 2,
      //   },
      // },
      // {
      //   breakpoint: 992,
      //   settings: {
      //     slidesToShow: 2.3,
      //   },
      // },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // const ref = useRef();
  // const { events } = useDraggable(ref);
  return (
    <Container>
      <div className="mt-120 wrap-abt-slide">
        <h1 className="text-center">
          {lang === "en" ? "Our Facilities" : "Fasilitas Kami"}
        </h1>
        <Slider {...settings} className="carousel-abt-slide ">
          {/* <div
          className="carousel-abt-slide d-flex flex-row flex-nowrap overflow-auto py-2"
          {...events}
          ref={ref}
        > */}
          {Data.map((data, index) => (
            <div className=" d-flex flex-column align-items-center">
              <Card
                className="border border-light rounded-4 p-2 cont-card-5abt"
                key={index}
                style={{ minWidth: "350px" }}
              >
                <Card.Img
                  variant="top"
                  src={data.image}
                  className="p-2 rounded-5 img-card-slide-sec5abt"
                />
                <Card.Body>
                  <Card.Title>
                    <h5 className="fw-bold fs-16 fw-400 color-gray font-fac">
                      {lang === "en" ? data.name : data.nameId}
                    </h5>
                  </Card.Title>
                </Card.Body>
              </Card>
            </div>
          ))}
          {/* </div> */}
        </Slider>
      </div>
    </Container>
  );
};

export default Secslide;

import React, { Component } from "react";
import { Container, Card } from "react-bootstrap";
import Slider from "react-slick";
import "./section3serv.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MultipleItems = (props) => {
  const { data } = props;
  const settings = {
    slidesToShow: 2.6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    adaptiveHeight: true,
    arrows: false,
    pauseOnHover: false,
    infinite: true,
    // responsive: [
    //   {
    //     breakpoint: 991,
    //     settings: {
    //       slidesToShow: 4,
    //     },
    //   },
    //   {
    //     breakpoint: 810,
    //     settings: {
    //       slidesToShow: 1.5,
    //     },
    //   },
    //   {
    //     breakpoint: 767,
    //     settings: {
    //       slidesToShow: 1.1,
    //     },
    //   },
    //   {
    //     breakpoint: 412,
    //     settings: {
    //       slidesToShow: 1.2,
    //     },
    //   },
    //   {
    //     breakpoint: 375,
    //     settings: {
    //       slidesToShow: 1.3,
    //     },
    //   },
    //   {
    //     breakpoint: 360,
    //     settings: {
    //       slidesToShow: 1.3,
    //     },
    //   },
    // ],
  };

  return (
    <Container className={data.products.length === 0 ? "d-none" : ""}>
      <div className={`wrap-serv5-sec`}>
        <h1 className="text-center"> Our Products </h1>
        <h3 className="text-center t2-s5 fs-20 fw-400 lh-30">
          Your Brand Image is Our Priority
        </h3>
        {data.products.length < 4 ? (
          <div className="d-flex overflow-scroll">
            {data.products.map((product, index) => (
              <Card
                className="border border-light rounded-4 card p-2 mx-3"
                data-value={index + 1}
                key={index}
                style={{ minWidth: "200px" }}
              >
                <Card.Img
                  variant="top"
                  src={product.img}
                  className="p-2 rounded-5 img-card-slide"
                />
              </Card>
            ))}
          </div>
        ) : (
          // <></>
          <Slider {...settings} className="carousel-abt-slide">
            {data.products.map((product, index) => (
              <Card
                className="border border-light rounded-4 card p-2 cont-card-abt"
                data-value={index + 1}
                key={index}
                style={{ maxWidth: "500px" }}
              >
                <Card.Img
                  variant="top"
                  src={product.img}
                  className="p-2 rounded-5 img-card-slide"
                />
                <Card.Body>
                  <Card.Title>
                    <h5 className="fw-bold fs-16 fw-400 color-gray p-3">
                      {product.title}
                    </h5>
                  </Card.Title>
                </Card.Body>
              </Card>
            ))}
          </Slider>
        )}
      </div>
    </Container>
  );
};
export default MultipleItems;

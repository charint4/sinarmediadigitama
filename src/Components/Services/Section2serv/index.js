import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import "./section2serv.css"
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import frontOffice from "../../../Images/frontoffice.jpg";
import kitchenOffice from "../../../Images/kitchen.jpg";
import insideOffice from "../../../Images/Insideoffice.jpg";
import roomOffice from "../../../Images/roomoffice.jpg";
import meetOffice from "../../../Images/meetoffice.jpg";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500
      
    };
    const responsive = {
      0: { items: 1 },
      568: { items: 2 },
      1024: { items: 3 },
  };
    const handleDragStart = (e) => e.preventDefault();
    const items = [
      <div className="item" data-value="1">
        <img src={frontOffice}>
        </img>
      </div>,
      <div className="item" data-value="2">
        <img src={kitchenOffice}>
        </img>
      </div>,
      
      <div className="item" data-value="3">
        <img src={meetOffice}>
      </img>
      </div>,
      <div className="item" data-value="4">
        <img src={insideOffice}>
        </img>
      </div>,
      <div className="item" data-value="5">
        <img src={roomOffice}>
        </img>
      </div>,
  ];
  
    return (
      <Container className="slider-foto">
      {/* <div>
        <h2>Center Mode</h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div> */}
      <AliceCarousel
        mouseTracking
        items={items}
        // paddingLeft={50}
        // paddingRight={50}
        responsive={responsive}
    />
      </Container>
    );
  }
}


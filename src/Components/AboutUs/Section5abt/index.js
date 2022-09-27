import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import "./section5abt.css"
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import frontOffice from "../../../Images/frontoffice.jpg";
import kitchenOffice from "../../../Images/kitchen.jpg";
import insideOffice from "../../../Images/Insideoffice.jpg";
import roomOffice from "../../../Images/roomoffice.jpg";
import meetOffice from "../../../Images/meetoffice.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// export default class CenterMode extends Component {
//   render() {
//     const settings = {
//       className: "center",
//       centerMode: true,
//       infinite: true,
//       centerPadding: "60px",
//       slidesToShow: 2,
//       speed: 500
      
//     };
//     const responsive = {
//       0: { items: 1 },
//       568: { items: 2 },
//       1024: { items: 2 },
//   };
//     const handleDragStart = (e) => e.preventDefault();
//     const items = [
//       <div className="item wrap-img bg-blur" data-value="1">
//         <img className="img-abt" src={frontOffice}>
//         </img>
//         <h1 className="fs-20">Front Office</h1>
//       </div>,
//       <div className="item wrap-img" data-value="2">
//         <img className="img-abt" src={kitchenOffice}>
//         </img>
//       </div>,
      
//       <div className="item wrap-img" data-value="3">
//         <img className="img-abt" src={meetOffice}>
//       </img>
//       </div>,
//       <div className="item wrap-img" data-value="4">
//         <img className="img-abt" src={insideOffice}>
//         </img>
//       </div>,
//       <div className="item wrap-img" data-value="5">
//         <img className="img-abt" src={roomOffice}>
//         </img>
//       </div>,
//   ];
  
//     return (
//       <Container className="slider-foto wrapper-sec5">
//     <div className="wrap-abt5-sec">
//         <h1 className="text-center fs-title">Our Office</h1>
//       <AliceCarousel
//         mouseTracking
//         items={items}
//         paddingLeft={50}
//         paddingRight={50}
//         responsive={responsive}
//         />
//     </div>
//       </Container>
//     );
//   }
// }

export default class MultipleItems extends Component {
    render() {
      const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        adaptiveHeight: true
      };
      return (
        <Container>
            <div className="wrap-abt5-sec">
            <h1 className="text-center"> Our Office </h1>
            <Slider {...settings} className="slick-container container-wrap ">
                <div className="item wrap-img bg-blur p-3" data-value="1">
                    <img className="img-abt" src={frontOffice}>
                    </img>
                    <h1 className="fs-20">Front Office</h1>
                </div>
                <div className="item wrap-img bg-blur p-3" data-value="2">
                    <img className="img-abt" src={kitchenOffice}>
                    </img>
                    <h1 className="fs-20">Kitchen</h1>
                </div>
                
                <div className="item wrap-img bg-blur p-3" data-value="3">
                    <img className="img-abt" src={meetOffice}>
                    </img>
                    <h1 className="fs-20">Meeting Room</h1>
                </div>
                <div className="item wrap-img bg-blur p-3" data-value="4">
                    <img className="img-abt" src={insideOffice}>
                    </img>
                    <h1 className="fs-20">Inside Office</h1>
                </div>
                <div className="item wrap-img bg-blur p-3" data-value="5">
                    <img className="img-abt" src={roomOffice}>
                    </img>
                    <h1 className="fs-20">Work Room</h1>
                </div>
            </Slider>
            </div>
        </Container>
      );
    }
  }
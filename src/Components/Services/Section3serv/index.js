import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import "./section3serv.css"
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Product1 from "../../../Images/PRODUK-1.jpg";
import Product2 from "../../../Images/PRODUK-2.jpg";
import Product3 from "../../../Images/PRODUK-3.jpg";
// import Product4 from "../../../Images/PRODUK-4.jpg";
import Product5 from "../../../Images/PRODUK-5.jpg";
import Product6 from "../../../Images/PRODUK-6.jpg";
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

const MultipleItems = (props) => {
    const {data} = props

    const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 3,
    adaptiveHeight: true
    };

    //   console.log(this.props.data.products.map((product, index) => (
    //     <div className="item wrap-imga bg-blur p-3" data-value={index+1} key={index}>
    //          <img className="img-abt" src={product.img}>
    //          </img>
    //          <h1 className="fs-20">{product.title}</h1>
    //      </div>
    //     )))
      return (
        <Container>
            <div className="wrap-serv5-sec">
            <h1 className="text-center"> Our Products </h1>
            <Slider {...settings}>
                {data.products.map((product, index) => (
                <div className="item wrap-imga bg-blur p-3" data-value={index+1} key={index}>
                     <img className="img-abt" src={product.img}>
                     </img>
                     <h1 className="fs-20">{product.title}</h1>
                 </div>
                ))}
                {/* <div className="item wrap-imga bg-blur p-3" data-value="1">
                    <img className="img-abt" src={Product1}>
                    </img>
                    <h1 className="fs-20">Front Office</h1>
                </div>
                <div className="item wrap-imga bg-blur p-3" data-value="2">
                    <img className="img-abt" src={Product2}>
                    </img>
                    <h1 className="fs-20">Kitchen</h1>
                </div>
                
                <div className="item wrap-imga bg-blur p-3" data-value="3">
                    <img className="img-abt" src={Product3}>
                    </img>
                    <h1 className="fs-20">Meeting Room</h1>
                </div>
                <div className="item wrap-imga bg-blur p-3" data-value="5">
                    <img className="img-abt" src={Product5}>
                    </img>
                    <h1 className="fs-20">Work Room</h1>
                </div>
                <div className="item wrap-imga bg-blur p-3" data-value="5">
                    <img className="img-abt" src={Product6}>
                    </img>
                    <h1 className="fs-20">Work Room</h1>
                </div> */}
            </Slider>
            </div>
        </Container>
      );
    }
export default MultipleItems;
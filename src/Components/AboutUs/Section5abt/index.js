import React, { Component } from "react";
import { Container, Card } from "react-bootstrap";
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
import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
// import styles from "./App.module.css";
// import "./App2.css";

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

const Secslide = () => {
    const ref = useRef(); 
    const { events } = useDraggable(ref); 
    return (
    <Container>
        <div className="wrap-abt-slide">
            <h1 className="text-center">Our Office</h1>
            <div className="carousel-abt-slide d-flex flex-row flex-nowrap overflow-auto py-2" 
            {...events} ref={ref}
            >
                <div className="bg-blur wrap-card-ofc p-2">
                    <img variant="top" src={frontOffice} className="p-2 rounded-5 img-card-slide" />
                    <h5 className="fw-bold fs-16 fw-400 color-gray p-2">Front Office</h5>
                </div>      
                <div className="bg-blur wrap-card-ofc p-2">    
                    <img variant="top" src={kitchenOffice} className="p-2 rounded-5 img-card-slide" />
                    <h5 className="fw-bold fs-16 fw-400 color-gray p-2">Kitchen Office</h5>
                </div>       
                <div className="bg-blur wrap-card-ofc p-2">
                    <img variant="top" src={meetOffice} className="p-2 rounded-5 img-card-slide" />
                    <h5 className="fw-bold fs-16 fw-400 color-gray p-2">Meeting Room</h5>
                </div>        
                <div className="bg-blur wrap-card-ofc p-2">  
                    <img variant="top" src={insideOffice} className="p-2 rounded-5 img-card-slide" />
                    <h5 className="fw-bold fs-16 fw-400 color-gray p-2">Inside Office</h5>
                </div>       
                <div className="bg-blur wrap-card-ofc p-2">
                    <img variant="top" src={roomOffice} className="p-2 rounded-5 img-card-slide" />
                    <h5 className="fw-bold fs-16 fw-400 color-gray p-2">Work Room</h5>
                </div>         
            </div>
        </div>
    </Container>
    )
}

export default Secslide;
// export default class MultipleItems extends Component {
//     render() {
//       const settings = {
//         dots: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 2,
//         slidesToScroll: 2,
//         adaptiveHeight: true
//       };
       
//       return (
//         <Container>
//             <div className="wrap-abt5-sec slidur">
//                 <h1 className="text-center"> Our Office </h1>
//                 <Slider {...settings} className="slick-container container-wrap ">
//                     <div className="item wrap-img bg-blur p-3" data-value="1">
//                         <img className="img-abt" src={frontOffice}>
//                         </img>
//                         <h1 className="fs-20">Front Office</h1>
//                     </div>
//                     <div className="item wrap-img bg-blur p-3" data-value="2">
//                         <img className="img-abt" src={kitchenOffice}>
//                         </img>
//                         <h1 className="fs-20">Kitchen</h1>
//                     </div>
                    
//                     <div className="item wrap-img bg-blur p-3" data-value="3">
//                         <img className="img-abt" src={meetOffice}>
//                         </img>
//                         <h1 className="fs-20">Meeting Room</h1>
//                     </div>
//                     <div className="item wrap-img bg-blur p-3" data-value="4">
//                         <img className="img-abt" src={insideOffice}>
//                         </img>
//                         <h1 className="fs-20">Inside Office</h1>
//                     </div>
//                     <div className="item wrap-img bg-blur p-3" data-value="5">
//                         <img className="img-abt" src={roomOffice}>
//                         </img>
//                         <h1 className="fs-20">Work Room</h1>
//                     </div>
//                 </Slider>
//             </div>
//             <div className="wrap-abt-slide">
//                 <div className="carousel-abt-slide d-flex flex-row flex-nowrap overflow-auto" 
//                 {...events} ref={ref}
//                 >
//                     <Card
//                     style={{ minWidth: "200px" }}
//                     className="border border-light rounded-4 card"
//                     >
//                     <Card.Img variant="top" src={frontOffice} className="p-2 rounded-5" />
//                     <Card.Body>
//                         <Card.Title>
//                         <h5 className="fw-bold fs-16 fw-400 color-gray py-3">Derlina</h5>
//                         </Card.Title>
//                     </Card.Body>
//                     </Card>
//                     <Card
//                     style={{ minWidth: "200px" }}
//                     className="border border-light rounded-4 card"
//                     >
//                     <Card.Img variant="top" src={kitchenOffice} className="p-2 rounded-5" />
//                     <Card.Body>
//                         <Card.Title>
//                         <h5 className="fw-bold fs-16 fw-400 color-gray py-3">Bagus</h5>
//                         </Card.Title>
//                     </Card.Body>
//                     </Card>
//                     <Card
//                     style={{ minWidth: "200px" }}
//                     className="border border-light rounded-4 card"
//                     >
//                     <Card.Img variant="top" src={meetOffice} className="p-2 rounded-5" />
//                     <Card.Body>
//                         <Card.Title>
//                         <h5 className="fw-bold fs-16 fw-400 color-gray py-3">Anna Lumintang</h5>
//                         </Card.Title>
//                     </Card.Body>
//                     </Card>
//                     <Card
//                     style={{ minWidth: "200px" }}
//                     className="border border-light rounded-4 card"
//                     >
//                     <Card.Img variant="top" src={insideOffice} className="p-2 rounded-5" />
//                     <Card.Body>
//                         <Card.Title>
//                         <h5 className="fw-bold fs-16 fw-400 color-gray py-3">Seni</h5>
//                         </Card.Title>
//                     </Card.Body>
//                     </Card>
//                     <Card
//                     style={{ minWidth: "200px" }}
//                     className="border border-light rounded-4 card"
//                     >
//                     <Card.Img variant="top" src={roomOffice} className="p-2 rounded-5" />
//                     <Card.Body>
//                         <Card.Title>
//                         <h5 className="fw-bold fs-16 fw-400 color-gray py-3">Ebiet Mubharak</h5>
//                         </Card.Title>
//                     </Card.Body>
//                     </Card>
//                 </div>
//             </div>
//         </Container>
//         // <Container>
//         //     <div>

//         //     </div>
//         // </Container>
//       );
//     }
//   }
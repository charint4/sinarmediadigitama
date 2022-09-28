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
import transUnit from "../../../Images/transunit.jpg";
import storRoom1 from "../../../Images/storroom1.jpg";
import storRoom2 from "../../../Images/storeroom2.png";
// import workShop from "../../../Images/workshop.png";
import meetOffice from "../../../Images/meetoffice.jpg";
import workShop from "../../../Images/workshop.jpg";
import metalSec from "../../../Images/metalsec.jpg";
import printSec from "../../../Images/MESIN3.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";


const Secslide = () => {
    const ref = useRef(); 
    const { events } = useDraggable(ref); 
    return (
    <Container>
        <div className="mt-120 wrap-abt-slide">
            <h1 className="text-center">Our Facilities</h1>
            <div className="carousel-abt-slide d-flex flex-row flex-nowrap overflow-auto py-2" 
            {...events} ref={ref}
            >
                <div className="bg-blur wrap-card-ofc p-2">
                    <img variant="top" src={frontOffice} className="p-2 rounded-5 img-card-slide" />
                    <h5 className="fw-bold fs-16 fw-400 color-gray p-3">Office Building</h5>
                </div>      
                <div className="bg-blur wrap-card-ofc p-2">    
                    <img variant="top" src={kitchenOffice} className="p-2 rounded-5 img-card-slide" />
                    <h5 className="fw-bold fs-16 fw-400 color-gray p-3">Lounge Area</h5>
                </div>       
                <div className="bg-blur wrap-card-ofc p-2">
                    <img variant="top" src={meetOffice} className="p-2 rounded-5 img-card-slide" />
                    <h5 className="fw-bold fs-16 fw-400 color-gray p-3">Meeting Room</h5>
                </div>        
                <div className="bg-blur wrap-card-ofc p-2">  
                    <img variant="top" src={insideOffice} className="p-2 rounded-5 img-card-slide" />
                    <h5 className="fw-bold fs-16 fw-400 color-gray p-3">Office Area</h5>
                </div>       
                <div className="bg-blur wrap-card-ofc p-2">
                    <img variant="top" src={transUnit} className="p-2 rounded-5 img-card-slide" />
                    <h5 className="fw-bold fs-16 fw-400 color-gray p-3">Transportation Units </h5>
                </div>  
                <div className="bg-blur wrap-card-ofc p-2">
                    <img variant="top" src={storRoom1} className="p-2 rounded-5 img-card-slide" />
                    <h5 className="fw-bold fs-16 fw-400 color-gray p-3">Storage Room A</h5>
                </div>  
                <div className="bg-blur wrap-card-ofc p-2">
                    <img variant="top" src={storRoom2} className="p-2 rounded-5 img-card-slide stor" />
                    <h5 className="fw-bold fs-16 fw-400 color-gray p-3">Storage Room B</h5>
                </div> 
                <div className="bg-blur wrap-card-ofc p-2">
                    <img variant="top" src={workShop} className="p-2 rounded-5 img-card-slide" />
                    <h5 className="fw-bold fs-16 fw-400 color-gray p-3">Acrylic Section</h5>
                </div>    
                <div className="bg-blur wrap-card-ofc p-2">
                    <img variant="top" src={metalSec} className="p-2 rounded-5 img-card-slide" />
                    <h5 className="fw-bold fs-16 fw-400 color-gray p-3">Metal Section</h5>
                </div>   
                <div className="bg-blur wrap-card-ofc p-2">
                    <img variant="top" src={printSec} className="p-2 rounded-5 img-card-slide" />
                    <h5 className="fw-bold fs-16 fw-400 color-gray p-3">Print Section</h5>
                </div>        
            </div>
        </div>
    </Container>
    )
}

export default Secslide;
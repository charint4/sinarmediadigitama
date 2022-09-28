import React, { Component } from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import "./section3serv.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

const MultipleItems = (props) => {
    const {data} = props
    const ref = useRef(); 
    const { events } = useDraggable(ref); 
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
            <h3 className="text-center t2-s5 fs-20 fw-400 lh-30">Your Brand Image is Our Priority</h3>
            <div className="carousel-abt-slide d-flex flex-row flex-nowrap overflow-auto py-2" 
                {...events} ref={ref}
                >
                {data.products.map((product, index) => (
                
                    <div className="bg-blur wrap-card-ofc p-2" data-value={index+1} key={index}>
                        <img variant="top" src={product.img} className="p-2 rounded-5 img-card-slide" />
                        <h5 className="fw-bold fs-16 fw-400 color-gray p-3">{product.title}</h5>
                    </div>      
                
                ))}
             </div>   
            </div>
        </Container>
      );
    }
export default MultipleItems;
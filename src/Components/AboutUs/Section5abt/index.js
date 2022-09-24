import React from 'react'
import { Container } from 'react-bootstrap'
import "./section5abt.css"
import Groups from "../../../Images/groups.png";
import Vector from "../../../Images/Vector.png";

const index = () => {
  return (
    <Container>
        <div className="wrap-abt4 text-center">
            <h1>Our Experiences</h1>
        </div>
        <div className="row wrap-cont-abt4 justify-content-center">
            <div className="col-md bg-blur cont-abt4 p-4">
                <img src={Vector}></img>
                <h2>
                    Front Office
                </h2>
            </div>
            <div className="col-md bg-blur cont-abt4 p-4">
                <img src={Groups}></img>
                <h2>
                    Works
                </h2>
            </div>
        </div>
    </Container>
  )
}

export default index
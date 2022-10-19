import React from 'react'
import { Container } from 'react-bootstrap'
import "./section4abt.css"
import Groups from "../../../Images/webp/groups.webp";
import Vector from "../../../Images/webp/Vector.webp";
import Section5 from '../../Section5'
import Data from "./Data"

const index = () => {
  return (
    <>
    {Data.map ((data, index) =>(
        <Container>
                <div className="wrap-abt4 text-center">
                    <h1>{data.head}</h1>
                </div>
                <div className="row wrap-cont-abt4 justify-content-center">
                    <div className="col-md bg-blur cont-abt4 text-center p-4 align-items-center">
                        <img src={Vector}></img>
                        <h2>
                            50+
                        </h2>
                        <h2>
                            {data.first}
                        </h2>
                        {/* <h3>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magn
                        </h3> */}
                    </div>
                    <div className="col-md bg-blur cont-abt4 text-center p-4">
                        <img src={Groups}></img>
                        <h2>
                            100+
                        </h2>
                        <h2>
                            {data.second}
                        </h2>
                        {/* <h3>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magn
                        </h3> */}
                    </div>
                </div>
                <Section5 />
            </Container>
    ))}
    </>
  )
}

export default index
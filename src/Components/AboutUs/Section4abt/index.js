import React from "react";
import { Container } from "react-bootstrap";
import "./section4abt.css";
import Groups from "../../../Images/webp/groups.webp";
import Vector from "../../../Images/webp/Vector.webp";
import Section5 from "../../Section5";
import Data from "./Data";

const index = (props) => {
  const { lang = "en" } = props;

  return (
    <>
      {lang === "en" ? (
        <Container>
          <div className="wrap-abt4 text-center">
            <h1>{Data[0].head}</h1>
          </div>
          <div className="row wrap-cont-abt4 justify-content-center">
            <div className="col-md bg-blur cont-abt4 text-center p-4 align-items-center">
              <img src={Vector}></img>
              <h2>50+</h2>
              <h2>{Data[0].first}</h2>
            </div>
            <div className="col-md bg-blur cont-abt4 text-center p-4">
              <img src={Groups}></img>
              <h2>100+</h2>
              <h2>{Data[0].second}</h2>
            </div>
          </div>
        </Container>
      ) : (
        <Container>
          <div className="wrap-abt4 text-center">
            <h1>{Data[1].head}</h1>
          </div>
          <div className="row wrap-cont-abt4 justify-content-center">
            <div className="col-md bg-blur cont-abt4 text-center p-4 align-items-center">
              <img src={Vector}></img>
              <h2>50+</h2>
              <h2>{Data[1].first}</h2>
            </div>
            <div className="col-md bg-blur cont-abt4 text-center p-4">
              <img src={Groups}></img>
              <h2>100+</h2>
              <h2>{Data[1].second}</h2>
            </div>
          </div>
        </Container>
      )}
    </>
  );
};

export default index;

import React from "react";
import { Container } from "react-bootstrap";
import "./abtsec2.css";
import Timeline from "../../../Images/webp/timeline.webp";
import logoSMD from "../../../Images/webp/logosmd-1.webp";
import logoSMS from "../../../Images/webp/logosms.webp";
import Data from "./Data.js"

const index = () => {
  return (
    <>
      {/* <div className="bg-navy py-150 text-center">
        <h2 className="fw-bold fs-sm-title">Our Purpose</h2>
        <h2 className="fw-bold fs-big quote">
          We take your brand’s image as our priority
        </h2>
      </div> */}
      {Data.map ((data, i) => (
      <Container className="mb-150">
        <div className="text-center mb-5">
          <h2 className="fw-bold fs-sm-title text-center">{data.head}</h2>
          {/* <h4 className="fw-400 fs-20 text-center">
            We Take Your Brand’s Image as our priority
          </h4> */}
        </div>
        
          <div className="wrapper-timeline" key={i}>
            <div className="garis">
              <img src={Timeline} alt="" className="garisnya" />
            </div>
            <div className="row gap-72 mb-80 wrap-timeline">
              <div className="col-md bg-blur rounded-4 py-3 border-left">
                <h2 className="fw-bold fs-sm-title">2009</h2>
                <h4 className="fs-15 fw-400 lh-28">
                {data.first}
                </h4>
              </div>
              <div className="col-md disp-none"></div>
            </div>
            <div className="row gap-72 mb-80 wrap-timeline row-tl">
              <div className="col-md disp-none"></div>
              <div className="col-md bg-blur rounded-4 py-3 border-left">
                <h2 className="fw-bold fs-sm-title">2011</h2>
                <h4 className="fs-15 fw-400 lh-28">
                {data.second}

                </h4>
              </div>
            </div>
            <div className="row gap-72 mb-80 wrap-timeline row-tl">
              <div className="col-md bg-blur rounded-4 py-3 border-left">
                <h2 className="fw-bold fs-sm-title">2015</h2>
                <h4 className="fs-15 fw-400 lh-28">
                {data.third}
                </h4>
              </div>
              <div className="col-md disp-none"></div>
            </div>
            <div className="row gap-72 wrap-timeline row-tl">
              <div className="col-md disp-none"></div>
              <div className="col-md bg-blur py-3 border-left rounded-4 wrap-boxd">
                <h2 className="fw-bold fs-sm-title">2022 - {data.onw}</h2>
                <h4 className="fs-15 fw-400 lh-28">
                {data.fourth}

                </h4>
                <div className="wrap-img-tl">
                  <img src={logoSMS} width='110'alt='tllogo'/>
                  <img src={logoSMD} alt='tllogo'/>
                </div>
                
              </div>
            </div>
          </div>
      </Container>
      ))}
    </>
  );
};

export default index;

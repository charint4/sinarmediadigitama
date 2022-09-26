import React from "react";
import { Container } from "react-bootstrap";
import "./abtsec2.css";
import Timeline from "../../../Images/timeline.png";
import TlLogo from "../../../Images/timeline-logo.png";

const index = () => {
  return (
    <>
      <div className="bg-navy py-140 text-center">
        <h2 className="fw-bold fs-sm-title">Our Purpose</h2>
        <h2 className="fw-bold fs-big quote">
          We take your brand’s image as our priority
        </h2>
      </div>
      <Container className="mt-100 mb-200">
        <div className="text-center mb-5">
          <h2 className="fw-bold fs-sm-title text-center">Our History</h2>
          <h4 className="fw-400 fs-20 text-center">
            We Take Your Brand’s Image as our priority
          </h4>
        </div>
        <div className="wrapper-timeline">
          <div className="garis">
            <img src={Timeline} alt="" className="garisnya" />
          </div>
          <div className="row gap-72 mb-80 wrap-timeline">
            <div className="col-md bg-blur rounded-4 py-3 border-left">
              <h2 className="fw-bold fs-sm-title">2009</h2>
              <h4 className="fs-15 fw-400 lh-28">
                Started as small agency, served printing materials & promotional
                units (acrylic , plastic, and wood based)
              </h4>
            </div>
            <div className="col-md disp-none"></div>
          </div>
          <div className="row gap-72 mb-80 wrap-timeline">
            <div className="col-md disp-none"></div>
            <div className="col-md bg-blur rounded-4 py-3 border-left">
              <h2 className="fw-bold fs-sm-title">2011</h2>
              <h4 className="fs-15 fw-400 lh-28">
              Build metal based workshop
              </h4>
            </div>
          </div>
          <div className="row gap-72 mb-80 wrap-timeline">
            <div className="col-md bg-blur rounded-4 py-3 border-left">
              <h2 className="fw-bold fs-sm-title">2015</h2>
              <h4 className="fs-15 fw-400 lh-28">
              More clients and bigger workshops
              </h4>
            </div>
            <div className="col-md disp-none"></div>
          </div>
          <div className="row gap-72 wrap-timeline">
            <div className="col-md disp-none"></div>
            <div className="col-md bg-blur rounded-4 py-3 border-left">
              <h2 className="fw-bold fs-sm-title">2022 - Onwards</h2>
              <h4 className="fs-15 fw-400 lh-28">
              Establish SMD to build creative and agile teamwork with better system & technology
              </h4>
              <img src={TlLogo} alt='tllogo'/>
            </div>
          </div>
        </div>
        
      </Container>
    </>
  );
};

export default index;

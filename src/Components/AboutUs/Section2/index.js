import React from "react";
import { Container } from "react-bootstrap";
import "./abtsec2.css";
import Timeline from "../../../Images/webp/timeline.webp";
import logoSMD from "../../../Images/webp/logosmd-1.webp";
import logoSMS from "../../../Images/webp/logosms.webp";
import Data from "./Data.js";

const index = (props) => {
  const { lang = "en" } = props;
  return (
    <>
      {lang === "en" ? (
        <Container className="mb-150">
          <div className="text-center mb-5">
            <h2 className="fw-bold fs-sm-title text-center">{Data[0].head}</h2>
          </div>

          <div className="wrapper-timeline">
            <div className="garis">
              <img src={Timeline} alt="" className="garisnya" />
            </div>
            <div className="row gap-72 mb-80 wrap-timeline">
              <div className="col-md bg-blur rounded-4 py-3 border-left wrap-boxd">
                <h2 className="fw-bold fs-sm-title">2009</h2>
                <h4 className="fs-15 fw-400 lh-28">{Data[0].first}</h4>
              </div>
              <div className="col-md disp-none"></div>
            </div>
            <div className="row gap-72 mb-80 wrap-timeline row-tl">
              <div className="col-md disp-none"></div>
              <div className="col-md bg-blur rounded-4 py-3 border-left wrap-boxd">
                <h2 className="fw-bold fs-sm-title">2011</h2>
                <h4 className="fs-15 fw-400 lh-28">{Data[0].second}</h4>
              </div>
            </div>
            <div className="row gap-72 mb-80 wrap-timeline row-tl">
              <div className="col-md bg-blur rounded-4 py-3 border-left wrap-boxd">
                <h2 className="fw-bold fs-sm-title">2015</h2>
                <h4 className="fs-15 fw-400 lh-28">{Data[0].third}</h4>
              </div>
              <div className="col-md disp-none"></div>
            </div>
            <div className="row gap-72 wrap-timeline row-tl">
              <div className="col-md disp-none"></div>
              <div className="col-md bg-blur py-3 border-left rounded-4 wrap-boxd">
                <h2 className="fw-bold fs-sm-title">2022 - {Data[0].onw}</h2>
                <h4 className="fs-15 fw-400 lh-28">{Data[0].fourth}</h4>
                <h4 className="fs-15 fw-400 lh-28">{Data[0].fifth}</h4>
                <div className="wrap-img-tl">
                  <img src={logoSMS} width="110" alt="tllogo" />
                  <img src={logoSMD} alt="tllogo" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      ) : (
        <Container className="mb-150">
          <div className="text-center mb-5">
            <h2 className="fw-bold fs-sm-title text-center">{Data[1].head}</h2>
          </div>

          <div className="wrapper-timeline">
            <div className="garis">
              <img src={Timeline} alt="" className="garisnya" />
            </div>
            <div className="row gap-72 mb-80 wrap-timeline">
              <div className="col-md bg-blur rounded-4 py-3 border-left">
                <h2 className="fw-bold fs-sm-title">2009</h2>
                <h4 className="fs-15 fw-400 lh-28">{Data[1].first}</h4>
              </div>
              <div className="col-md disp-none"></div>
            </div>
            <div className="row gap-72 mb-80 wrap-timeline row-tl">
              <div className="col-md disp-none"></div>
              <div className="col-md bg-blur rounded-4 py-3 border-left">
                <h2 className="fw-bold fs-sm-title">2011</h2>
                <h4 className="fs-15 fw-400 lh-28">{Data[1].second}</h4>
              </div>
            </div>
            <div className="row gap-72 mb-80 wrap-timeline row-tl">
              <div className="col-md bg-blur rounded-4 py-3 border-left">
                <h2 className="fw-bold fs-sm-title">2015</h2>
                <h4 className="fs-15 fw-400 lh-28">{Data[1].third}</h4>
              </div>
              <div className="col-md disp-none"></div>
            </div>
            <div className="row gap-72 wrap-timeline row-tl">
              <div className="col-md disp-none"></div>
              <div className="col-md bg-blur py-3 border-left rounded-4 wrap-boxd">
                <h2 className="fw-bold fs-sm-title">2022 - {Data[1].onw}</h2>
                <h4 className="fs-15 fw-400 lh-28">{Data[1].fourth}</h4>
                <div className="wrap-img-tl">
                  <img src={logoSMS} width="110" alt="tllogo" />
                  <img src={logoSMD} alt="tllogo" />
                </div>
              </div>
            </div>
          </div>
        </Container>
      )}
    </>
  );
};

export default index;

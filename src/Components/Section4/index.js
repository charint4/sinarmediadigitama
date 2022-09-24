import React from "react";
import { Container } from "react-bootstrap";
import map from "../../Images/map.jpg";
import "../Section4/section4.css";

const Section4 = () => {
  return (
    <Container>
      <div className="row justify-content-center align-item-center sec4">
        <div className="col-md map">
          <img src={map} alt="map" className="map-img" />
        </div>
        <div className="col-md-5 bg-text">
          <h3 className="title">Get in touch</h3>
          <h4 className="text1 mb-5">
            Jl. Aria Putra No. 8 RT 01 / RW 06 <br /> Kel. Sarua Indah, Kec.
            Ciputat, Tangerang Selatan 15414
          </h4>
          <h4 className="text2 mb-5">
            bagus.sms@gmail.com sinarmediasakti.adv@gmail.com
            baliho.sms@gmail.com
          </h4>
          <h4 className="text3 mb-5">
            Telp / Fax <br /> 021 - 74634075 - 74633530
          </h4>
        </div>
      </div>
    </Container>
  );
};

export default Section4;

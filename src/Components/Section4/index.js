import React from "react";
import { Container } from "react-bootstrap";
import map from "../../Images/map.jpg";
import "../Section4/section4.css";

const Section4 = () => {
  return (
    <Container>
      <div className="d-flex justify-content-center align-item-center sec4">
        <div className="map">
          <img src={map} alt="map" />
        </div>
        <div className="bg-text">
          <h3 className="title">Get in touch</h3>
          <h4 className="text1">
            Jl. Aria Putra No. 8 RT 01 / RW 06 Kel. Sarua Indah, Kec. Ciputat,
            Tangerang Selatan 15414
          </h4>
          <h4 className="text2">
            bagus.sms@gmail.com sinarmediasakti.adv@gmail.com
            baliho.sms@gmail.com
          </h4>
          <h4 className="text3">Telp / Fax 021 - 74634075 - 74633530</h4>
        </div>
      </div>
    </Container>
  );
};

export default Section4;

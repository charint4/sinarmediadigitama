import React from "react";
import { Container } from "react-bootstrap";
import "../SectionMap/section4.css";
import Data from "./Data"

const Section4 = () => {
  return (
    <Container>
      <div className="row justify-content-center align-item-center sec4">
        <div className="col-md map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.6828994018347!2d106.71432309131094!3d-6.30532798088642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69eff06f3ac257%3A0x255275b0a3914694!2sSinar%20Media%20Sakti%20Adv.!5e0!3m2!1sid!2sid!4v1664973825694!5m2!1sid!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-4 "
          ></iframe>
        </div>
        {Data.map ((data, i) => (
          <div className="col-lg-4 bg-text wrap-box" key={i}>
            <h3 className="title">{data.head}</h3>
            <h2 className="text1"><b>{data.subhead}</b></h2>
            <h4 className="text1">
              <b>{data.addy}</b> 
              
            </h4>
            <h4 className="text2 ">
              <span>
                {/* <img src ={}></img> */}
              </span>
              <b>{data.mail}</b> 
              
            </h4>
            <h4 className="text3 mb-5">
              <b>{data.phone}</b> 
            </h4>
          </div>
        ))}
        
      </div>
    </Container>
  );
};

export default Section4;

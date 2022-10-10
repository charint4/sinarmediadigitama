import React from "react";
import { Container } from "react-bootstrap";
import "../SectionMap/section4.css";

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
        <div className="col-lg-5 bg-text wrap-box">
          <h3 className="title">Get in touch</h3>
          <h4 className="text1 mb-5">
            <b>Address</b> <br></br>
            Aria Putra 8, Serua Indah Ciputat - South Tangerang
          </h4>
          <h4 className="text2 mb-5">
            <b>Email</b> <br></br>
            info@smdigitama.com
          </h4>
          <h4 className="text3 mb-5">
            <b>Telephone</b> <br /> 021 - 74634075
          </h4>
        </div>
      </div>
    </Container>
  );
};

export default Section4;

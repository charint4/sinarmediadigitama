import React from "react";
import { Container } from "react-bootstrap";
import "../SectionMap/section4.css";
import Data from "./Data";
import Mail from "../../Images/mail.png";
import Phone from "../../Images/phone.png";
import { Link } from "react-router-dom";


const Section4 = (props) => {
  const { lang } = props;

  return (
    <Container>
      <div className="row justify-content-center align-item-center sec4">
        <div className="col-md map">
          <iframe
            // src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.6828994018347!2d106.71432309131094!3d-6.30532798088642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69eff06f3ac257%3A0x255275b0a3914694!2sSinar%20Media%20Sakti%20Adv.!5e0!3m2!1sid!2sid!4v1664973825694!5m2!1sid!2sid"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.680030515603!2d106.71628957711286!3d-6.305703093683514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69efbd8e406d89%3A0x3d57608bb36f6f6c!2sSinar%20Media%20Digitama!5e0!3m2!1sen!2sid!4v1687596315793!5m2!1sen!2sid"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-4 "
          ></iframe>
        </div>
        {lang === "en" ? (
          <div className="col-lg-4 bg-text wrap-box justify-content-center gap-2">
            <h3 className="title">{Data[0].head}</h3>
            <h2 className="text1">
              <b>{Data[0].subhead}</b>
            </h2>
            <h4 className="text1">
              <b>{Data[0].addy}</b>
            </h4>
            <Link 
              to='#'
              onClick={() => window.location.href = 'mailto:info@smdigitama.com'}
              className="textLink">
              <h4 className="text2 ">
                <span>
                  <img className="mail" src={Mail}></img>
                  <b> : {Data[0].mail}</b>
                </span>
              </h4>    
            </Link>
            
            <h4 className="text3">
              <span>
                <img className="phone" src={Phone}></img>
                <b> : {Data[0].phone}</b>
              </span>
            </h4>
          </div>
        ) : (
          <div className="col-lg-4 bg-text wrap-box justify-content-center gap-2">
            <h3 className="title">{Data[1].head}</h3>
            <h2 className="text1">
              <b>{Data[1].subhead}</b>
            </h2>
            <h4 className="text1">
              <b>{Data[1].addy}</b>
            </h4>
            <Link 
              to='#'
              onClick={() => window.location.href = 'mailto:info@smdigitama.com'}
              className="textLink">
              <h4 className="text2 ">
                <span>
                  <img className="mail" src={Mail}></img>
                  <b> : {Data[1].mail}</b>
                </span>
              </h4>    
            </Link>
            <h4 className="text3">
              <span>
                <img className="phone" src={Phone}></img>
                <b> : {Data[1].phone}</b>
              </span>
            </h4>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Section4;

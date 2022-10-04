import React from "react";
import { Container } from "react-bootstrap";
import Gmail from "../..//Images/gmail.png";
import Logowhite from "../../Images/logowhite.png";
import Whatsapp from "../../Images/whatsapp.png";
import Instagram from "../../Images/ig-icon.png";
import "./footer.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <section className="wrap-footer">
      <Container>
        <div className="row pt-5 pb-5">
          <div className="col-md-4 cont-footer">
            <img src={Logowhite}></img>
            <h1>We Take Your Brand's Image as Our Priority</h1>
          </div>
          <div className="col-md-2 cont-footer">
            <h1>Menu</h1>
            <Link to="/" className="footer-nav">
              <h3>Home</h3>
            </Link>
            <Link to="/AboutUs" className="footer-nav">
              <h3>About Us</h3>
            </Link>
            <HashLink smooth to="/#section2" className="footer-nav">
              <h3>Services</h3>
            </HashLink>
            <HashLink smooth to="/#section6" className="footer-nav">
              <h3>Contact Us</h3>
            </HashLink>
          </div>
          <div className="col-md-3 cont-footer">
            <h1>Get in touch</h1>
            <h3 className="">
            <b>PT. Sinar Media Digitama</b><br></br> 
            Aria Putra 8, Sarua Indah<br></br> 
            Ciputat South Tangerang
            </h3>
            <h3>
            info@smdigitama.com
            </h3>
            <h3>
              Telephone<br></br>
              021 - 74634075 
            </h3>
          </div>
          <div className="col-md">
            <div className="cont-logo">
              <img src={Whatsapp}></img>
              <a href="https://api.whatsapp.com/send?phone=085692403618">
                Contact us via Whatsapp
              </a>
            </div>
            <div className="cont-logo">
              <img src={Gmail}></img>
              <a>Contact us via Email</a>
            </div>
            <div className="cont-logo">
              <img src={Instagram}></img>
              <a href="https://www.instagram.com/smdigitama/">@smdigitama</a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Footer;

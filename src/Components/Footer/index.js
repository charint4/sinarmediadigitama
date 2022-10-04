import React from "react";
import { Container } from "react-bootstrap";
import Gmail from "../..//Images/gmail.png";
import Logowhite from "../../Images/logowhite.png";
import Whatsapp from "../../Images/whatsapp.png";
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
            <h3>
              Jl. Aria Putra No. 8 RT 01 / RW 06 <br></br>
              Kel. Sarua Indah, Kec. Ciputat,
              <br></br> Tangerang Selatan 15414
            </h3>
            <h3>
              bagus.sms@gmail.com <br></br>
              sinarmediasakti.adv@gmail.com <br></br>
              baliho.sms@gmail.com
            </h3>
            <h3>
              Telp / Fax <br></br>
              021 - 74634075 - 74633530
            </h3>
          </div>
          <div className="col-md">
            <div className="cont-logo">
              <img src={Whatsapp}></img>
              <h3>Contact us via Whatsapp</h3>
            </div>
            <div className="cont-logo">
              <img src={Gmail}></img>
              <h3>Contact us via Email</h3>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Footer;

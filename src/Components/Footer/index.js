import React from "react";
import { Container } from "react-bootstrap";
import Gmail from "../../Images/webp/gmail.webp";
import Logowhite from "../../Images/webp/logowhite.webp";
import SMDw from "../../Images/smd-w.png"
import Whatsapp from "../../Images/webp/whatsapp.webp";
import Instagram from "../../Images/webp/ig-icon.webp";
import "./footer.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import mailW from "../../Images/mail-w.png";
import phoneW from "../../Images/phone-w.png";
import Data from "./Data.js"

const Footer = () => {
  return (
    <section className="wrap-footer">
      <Container>
        {Data.map ((data, i) => (
          <div className="row pt-5 pb-5 gap-5" key={i}>
            <div className="col-md-4 cont-footer">
              <img src={SMDw}></img>
              <h1>{data.head}</h1>
            </div>
            <div className="col-md-2 cont-footer">
              <h1>Menu</h1>
              <Link to="/" className="footer-nav">
                <h3>{data.nav1}</h3>
              </Link>
              <Link to="/AboutUs" className="footer-nav">
                <h3>{data.nav2}</h3>
              </Link>
              <HashLink smooth to="/#section2" className="footer-nav">
                <h3>{data.nav3}</h3>
              </HashLink>
              <HashLink smooth to="/#section6" className="footer-nav">
                <h3>{data.nav4} Us</h3>
              </HashLink>
            </div>
            <div className="col-md cont-footer getin">
              <h1>{data.subhead}</h1>
              <h3 className="">
                <b>PT. Sinar Media Digitama</b>
                <br></br>
                Aria Putra 8, Serua Indah<br></br>
                {data.addy}
              </h3>
              <h3>
                <span className="img-foot">
                  <img src={mailW}></img>
                : info@smdigitama.com
                </span>
                
                </h3>
              <h3>
                <span className="img-foot">
                  <img src={phoneW}></img>
                  : 021 - 74634075
                </span>
              </h3>
            </div>
            <div className="col-md">
              <div className="cont-logo">
                <img src={Whatsapp}></img>
                <a href="https://api.whatsapp.com/send?phone=085692403618">
                  : {data.wa}
                </a>
              </div>
              {/* <div className="cont-logo">
                <img src={Gmail}></img>
                <a>Contact us via Email</a>
              </div> */}
              <div className="cont-logo">
                <img src={Instagram}></img>
                <a href="https://www.instagram.com/smdigitama/">: @smdigitama</a>
              </div>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};

export default Footer;

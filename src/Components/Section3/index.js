import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import "../Section3/section3.css";
import client1 from "../../Images/webp/Rectangle-1.webp";
import client2 from "../../Images/webp/Rectangle-2.webp";
import client3 from "../../Images/webp/Rectangle-3.webp";
import client4 from "../../Images/webp/Rectangle-4.webp";
import client5 from "../../Images/webp/Rectangle-5.webp";
import client6 from "../../Images/webp/Rectangle-18.webp";
import client7 from "../../Images/webp/Rectangle-19.webp";
import client8 from "../../Images/webp/Rectangle-20.webp";
import client9 from "../../Images/webp/Rectangle-23.webp";
import client10 from "../../Images/webp/Rectangle-24.webp";
import client11 from "../../Images/webp/Rectangle-25.webp";
import client12 from "../../Images/webp/Rectangle-26.webp";
import client13 from "../../Images/webp/Rectangle-27.webp";
import client14 from "../../Images/webp/Rectangle-28.webp";
import client15 from "../../Images/webp/Rectangle-29.webp";
import client16 from "../../Images/webp/Rectangle-30.webp";
import client17 from "../../Images/webp/Rectangle-31.webp";
import client18 from "../../Images/webp/Rectangle-32.webp";
import client19 from "../../Images/webp/Rectangle-33.webp";
import client20 from "../../Images/webp/Rectangle-34.webp";
import Slider from "react-slick";
import Data from "./Data.js";

const Section3 = () => {
  const settings = {
    slidesToShow: 3.5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 1500,
    cssEase: "linear",
    adaptiveHeight: true,
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 526,
        settings: {
          slidesToShow: 2.5,
        },
      },
    ],
  };

  return (
    <>
      <Container>
        {Data.map((data, index) => (
          <div className="container-sec3" key={index}>
            <h1>{data.head}</h1>
            <h3>{data.subhead}</h3>
            <div className="wrap-client p-3">
              <div className="row cont-row-client">
                <div className="col cont-sec3 mx-auto">
                  <img className="img-client" src={client1}></img>
                </div>
                <div className="col cont-sec3">
                  <img className="img-client" src={client2}></img>
                </div>
                <div className="col cont-sec3">
                  <img className="img-client" src={client3}></img>
                </div>
                <div className="col cont-sec3">
                  <img className="img-client" src={client4}></img>
                </div>
                <div className="col cont-sec3">
                  <img className="img-client" src={client5}></img>
                </div>
              </div>
              <div className="row cont-row-client">
                <div className="col cont-sec3 mx-auto">
                  <img className="img-client" src={client6}></img>
                </div>
                <div className="col cont-sec3">
                  <img className="img-client" src={client7}></img>
                </div>
                <div className="col cont-sec3">
                  <img className="img-client" src={client8}></img>
                </div>
                <div className="col cont-sec3">
                  <img className="img-client" src={client9}></img>
                </div>
                <div className="col cont-sec3">
                  <img className="img-client" src={client10}></img>
                </div>
              </div>
              <div className="row cont-row-client">
                <div className="col cont-sec3 mx-auto">
                  <img className="img-client" src={client11}></img>
                </div>
                <div className="col cont-sec3">
                  <img className="img-client" src={client12}></img>
                </div>
                <div className="col cont-sec3">
                  <img className="img-client" src={client13}></img>
                </div>
                <div className="col cont-sec3">
                  <img className="img-client" src={client14}></img>
                </div>
                <div className="col cont-sec3">
                  <img className="img-client" src={client15}></img>
                </div>
              </div>
              <div className="row cont-row-client">
                <div className="col cont-sec3 mx-auto">
                  <img className="img-client" src={client16}></img>
                </div>
                <div className="col cont-sec3">
                  <img className="img-client" src={client17}></img>
                </div>
                <div className="col cont-sec3">
                  <img className="img-client" src={client18}></img>
                </div>
                <div className="col cont-sec3">
                  <img className="img-client" src={client19}></img>
                </div>
                <div className="col cont-sec3">
                  <img className="img-client" src={client20}></img>
                </div>
              </div>
            </div>
            <div className="wrap-client-resp p-3">
              {/* <div className="wrap-cont-row-client"> */}
              <Slider {...settings} className="h-100">
                <img className="img-client" src={client1}></img>
                <img className="img-client" src={client2}></img>
                <img className="img-client" src={client3}></img>
                <img className="img-client" src={client4}></img>
                <img className="img-client" src={client5}></img>
                <img className="img-client" src={client6}></img>
                <img className="img-client" src={client7}></img>
                <img className="img-client" src={client8}></img>
                <img className="img-client" src={client9}></img>
                <img className="img-client" src={client10}></img>
                <img className="img-client" src={client11}></img>
                <img className="img-client" src={client12}></img>
                <img className="img-client" src={client13}></img>
                <img className="img-client" src={client14}></img>
                <img className="img-client" src={client15}></img>
                <img className="img-client" src={client16}></img>
                <img className="img-client" src={client17}></img>
                <img className="img-client" src={client18}></img>
                <img className="img-client" src={client19}></img>
                <img className="img-client" src={client20}></img>
              </Slider>
              {/* </div> */}
            </div>
          </div>
        ))}
      </Container>
    </>
  );
};

export default Section3;

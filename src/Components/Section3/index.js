import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import "../Section3/section3.css";
import client1 from "../../Images/Rectangle-1.png";
import client2 from "../../Images/Rectangle-2.png";
import client3 from "../../Images/Rectangle-3.png";
import client4 from "../../Images/Rectangle-4.png";
import client5 from "../../Images/Rectangle-5.png";
import client6 from "../../Images/Rectangle-18.png";
import client7 from "../../Images/Rectangle-19.png";
import client8 from "../../Images/Rectangle-20.png";
import client9 from "../../Images/Rectangle-23.png";
import client10 from "../../Images/Rectangle-24.png";
import client11 from "../../Images/Rectangle-25.png";
import client12 from "../../Images/Rectangle-26.png";
import client13 from "../../Images/Rectangle-27.png";
import client14 from "../../Images/Rectangle-28.png";
import client15 from "../../Images/Rectangle-29.png";
import client16 from "../../Images/Rectangle-30.png";
import client17 from "../../Images/Rectangle-31.png";
import client18 from "../../Images/Rectangle-32.png";
import client19 from "../../Images/Rectangle-33.png";
import client20 from "../../Images/Rectangle-34.png";
import Slider from "react-slick";

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
        <div className="container-sec3">
          <h1>Our Top Clients</h1>
          <h3>Finest Clients</h3>
          <div className="wrap-client p-3 bg-blur">
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
          <div className="wrap-client-resp p-3 bg-blur">
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
      </Container>
    </>
  );
};

export default Section3;

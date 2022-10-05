import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import "../Section2/section2.css";
import Data from "./Data";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const Section2 = () => {
  const settings = {
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 1500,
    cssEase: "linear",
    adaptiveHeight: true,
    arrows: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4.5,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 440,
        settings: {
          slidesToShow: 1.7,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1.5,
        },
      },
      {
        breakpoint: 340,
        settings: {
          slidesToShow: 1.3,
        },
      },
    ],
  };

  return (
    <>
      <div id="section2"></div>
      <Container>
        <div className="container-sec2">
          <h1>Our Services</h1>
          <h3>We take your brand's image as our priority</h3>
          <Slider {...settings}>
            {Data.map((data, index) => (
              <div className="col-sm cont-sec2" key={index}>
                <img src={data.ava}></img>
                <div className="wrap-abs"></div>
                <div className="wrap-text">
                  <h2>{data.name}</h2>
                  <p className={index === 2 ? "p3" : ""}>{data.texts}</p>
                  <Link
                    to={`Service/${data.name.replaceAll(" ", "-")}/${index}`}
                  >
                    {data.quotes}
                  </Link>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </>
  );
};

export default Section2;

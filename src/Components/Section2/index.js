import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import "../Section2/section2.css";
import OOH from "../../Images/ooh.png";
import Button from "react-bootstrap/Button";
import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import Data from "./Data";
import { Link } from "react-router-dom";

const Section2 = () => {
  const ref = useRef(); // We will use React useRef hook to reference the wrapping div:
  const { events } = useDraggable(ref); // Now we pass the reference to the useDraggable hook:
  return (
    <>
      <Container>
        {/* {Data.map((data, index) => (
          

        ))} */}
        <div className="container-sec2">
          <h1>Our Services</h1>
          <h3>We take your brand's image as our priority</h3>
          <div className="row d-flex flex-row flex-nowrap sec2wrap"
          {...events} ref={ref}
          >
            {Data.map((data, index) => (
              <div className="col-sm cont-sec2" key={index}>
                <img src={data.ava}></img>
                <div className="wrap-abs">
                </div>
                <div className="wrap-text">
                  <h2>{data.name}</h2>
                  <p>{data.texts}</p>
                  <Link 
                  to={`Service/${data.name.replaceAll(' ', '-')}/${index}`} 
                  // to={`Service/${index}`}
                  >
                    {data.quotes}
                  </Link>
                  {/* <a href="#">{data.quotes}</a> */}
                </div>
              </div>

            ))}
            {/* <div className="col-sm cont-sec2">
              <img src={OOH}></img>
              <div className="wrap-abs">
              </div>
              <div className="wrap-text">
                <h2>OOH out of home units</h2>
                <p>Nationwide</p>
                <a href="#">read more</a>
              </div>
            </div> */}
            {/* <div className="col-sm cont-sec2">
              <img src={OOH}></img>
              <div className="wrap-abs">
              </div>
              <div className="wrap-text">
                <h2>Promotional Units</h2>
                <p>Paper, wood, acrylic, & metal based</p>
                <a href="#">read more</a>
              </div>
            </div> */}
            {/* <div className="col-sm cont-sec2">
              <img src={OOH}></img>
              <div className="wrap-abs">
              </div>
              <div className="wrap-text">
                <h2>Creative Development Promotional Units</h2>
                <p className="p3">Paper, wood, acrylic, & metal based</p>
                <a href="#">read more</a>
              </div>
            </div> */}
            {/* <div className="col-sm cont-sec2">
              <img src={OOH}></img>
              <div className="wrap-abs">
              </div>
              <div className="wrap-text">
                <h2>Printed Material</h2>
                <p>Paper, wood, acrylic, & metal based</p>
                <a href="#">read more</a>
              </div>
            </div> */}
            {/* <div className="col-sm cont-sec2">
              <img src={OOH}></img>
              <div className="wrap-abs">
              </div>
              <div className="wrap-text">
                <h2>Printed Material</h2>
                <p>Paper, wood, acrylic, & metal based</p>
                <a href="#">read more</a>
              </div>
            </div> */}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Section2;

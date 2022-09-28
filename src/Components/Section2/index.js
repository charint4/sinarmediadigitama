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
      <div id="section2"></div>
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
                  <p className={index === 2 ? 'p3' : ''}>{data.texts}</p>
                  <Link 
                  to={`Service/${data.name.replaceAll(' ', '-')}/${index}`} 
                  >
                    {data.quotes}
                  </Link>
                </div>
              </div>

            ))}
          </div>
        </div>
      </Container>
    </>
  );
};

export default Section2;

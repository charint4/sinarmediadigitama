import React from "react";
import { Container } from "react-bootstrap";
import "./section3abt.css";
import Data from "./Data";
const index = (props) => {
  const { lang = "en" } = props;

  return (
    <Container>
      {lang === "en" ? (
        <div className="wrap-abt2">
          <h1 className="text-center">{Data[0].head}</h1>
          <h3 className="text-center">{Data[0].subhead}</h3>
          <div className="row wrap-cont-abt-te mt-5">
            <div className="col-md-4 cont-abt3">
              <h1>{Data[0].first}</h1>
            </div>
            <hr className="col-1 line1" />
            <div className="col-md cont-abt3">
              <h3>{Data[0].second} </h3>
            </div>
          </div>
          <div className="row wrap-cont-abt-te mt-5">
            <div className="col-md-3 cont-abt3">
              <h1>{Data[0].third}</h1>
            </div>
            <hr className="col-1 line2" />
            <div className="col-md cont-abt3">
              <h3>{Data[0].fourth}</h3>
            </div>
          </div>
          <div className="row wrap-cont-abt-te mt-5">
            <div className="col-3 cont-abt3">
              {/* <div className='wrap-line'> */}
              <h1>{Data[0].fifth}</h1>
              {/* </div> */}
            </div>
            <hr className="col-1 line3" />
            <div className="col-md cont-abt3">
              <h3>{Data[0].sixth}</h3>
            </div>
          </div>
        </div>
      ) : (
        <div className="wrap-abt2">
          <h1 className="text-center">{Data[1].head}</h1>
          <h3 className="text-center">{Data[1].subhead}</h3>
          <div className="row wrap-cont-abt-te mt-5">
            <div className="col-md-4 cont-abt3">
              <h1>{Data[1].first}</h1>
            </div>
            <hr className="col-1 line1" />
            <div className="col-md cont-abt3">
              <h3>{Data[1].second} </h3>
            </div>
          </div>
          <div className="row wrap-cont-abt-te mt-5">
            <div className="col-md-3 cont-abt3">
              <h1>{Data[1].third}</h1>
            </div>
            <hr className="col-1 line2" />
            <div className="col-md cont-abt3">
              <h3>{Data[1].fourth}</h3>
            </div>
          </div>
          <div className="row wrap-cont-abt-te mt-5">
            <div className="col-3 cont-abt3">
              {/* <div className='wrap-line'> */}
              <h1>{Data[1].fifth}</h1>
              {/* </div> */}
            </div>
            <hr className="col-1 line3" />
            <div className="col-md cont-abt3">
              <h3>{Data[1].sixth}</h3>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
};

export default index;

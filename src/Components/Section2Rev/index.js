import React from "react";
import { Container } from "react-bootstrap";
import Data from "./Data";
import DataTitle from "./DataTitle";
import { Link } from "react-router-dom";

const Section2Rev = (props) => {
  const { lang = "en" } = props;
  return (
    <Container>
      <div className="container-sec2">
          <h1>{lang === "en" ? DataTitle[0].title : DataTitle[1].title}</h1>
          <h3 className="mb-60">{DataTitle[0].desc}</h3>
        <div className="d-flex flex-wrap justify-content-center">
          {Data.map((data, index) => (
            <Link
              to={`Service/${data.name.replaceAll(" ", "-")}/${index}`}
              className="d-flex justify-content-center home-service-link"
            >
              <div
                key={index}
                className="d-flex flex-column align-items-center"
              >
                <img
                  src={data.cover}
                  alt={data.cover}
                  className="home-service-image"
                />
                <div className="text-center text-dark">
                  {(index + 1) % 2 ? (
                    <>
                      <h2 className="fs-service-text">{data.textNotBold}</h2>
                      <h2 className="fs-service-text fw-bold">
                        {data.textBold}
                      </h2>
                    </>
                  ) : (
                    <>
                      <h2 className="fs-service-text fw-bold">
                        {data.textBold}
                      </h2>
                      <h2 className="fs-service-text">{data.textNotBold}</h2>
                    </>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Section2Rev;

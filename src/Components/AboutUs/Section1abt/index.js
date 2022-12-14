import React from "react";
import { Container } from "react-bootstrap";
import Section1 from "../../Section1";
import "./section1abt.css";
const Section1abt = (props) => {
  const { lang = "en" } = props;
  return (
    <Container className="sec1-wrap">
      <div className="section1abt">
        <Section1 lang={lang} />
      </div>
    </Container>
  );
};

export default Section1abt;

import React from "react";
import { Container } from "react-bootstrap";
import "./sectionvid.css";
import circAnim from "../../Images/circ-red.png";

const Sectionvid = () => {
  return (
    <div className="wrap-vid">
      <Container>
      <div className="container-secvid">
        <h1>Our Company Profile</h1>
        <center>
          <iframe
            width="90%"
            height="600"
            src="https://www.youtube.com/embed/Stp5M7fDrgo"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            className="rounded-4"
          ></iframe>
        </center>
        
      </div>
    </Container>
      {/* <img src={circAnim}></img> */}
    </div>
    
  );
};

export default Sectionvid;

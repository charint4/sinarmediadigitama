import React from "react";
import { Card, Container } from "react-bootstrap";
import "./section5.css";
import CardImg1 from "../../Images/ourteam1.png";
import CardImg3 from "../../Images/ourteam2.png";
import CardImg2 from "../../Images/ourteam3.png";
import CardImg4 from "../../Images/bulina.png";
import CardImg5 from "../../Images/pakbagus.png";
import Bagus from "../../Images/bagus.png"
import Lina from "../../Images/lina.png"
import Ebiet from "../../Images/bhara.png"
import Anna from "../../Images/anna.png"
import Tety from "../../Images/tety.png"
import Malki from "../../Images/malki.png"
import Ikrar from "../../Images/ikrar.png"
import Evy from "../../Images/evy.png"
import Seni from "../../Images/seni.png"
import Syafrudin from "../../Images/syafrudin.png"
import Retno from "../../Images/siska.png"

import { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

const Section5 = () => {
  const ref = useRef(); // We will use React useRef hook to reference the wrapping div:
  const { events } = useDraggable(ref); // Now we pass the reference to the useDraggable hook:

  return (
    <Container>
      <div className="text d-flex flex-column sec5 text-center">
        <h3 className="t1-s5 fw-bold fs-title">Meet Our Team</h3>
        <h4 className="t2-s5 fs-20 fw-400 lh-30">
          A group of highly motivated people with diverse backgrounds, extensive
          experience, special interest, and track records of success, while
          their differences complement one another’s skills
        </h4>
      </div>
      <div className="carousel d-flex flex-row flex-nowrap overflow-auto" 
      {...events} ref={ref}
      >
        <Card
          style={{ minWidth: "200px" }}
          className="border border-light rounded-4 card"
        >
          <Card.Img variant="top" src={Bagus} className="p-2 rounded-5 img-card-team" />
          <Card.Body>
            <Card.Title>
              <h5 className="fw-bold fs-16 fw-400 color-gray py-3">Bagus F. Asyhari</h5>
            </Card.Title>
          </Card.Body>
        </Card>
        <Card
          style={{ minWidth: "200px" }}
          className="border border-light rounded-4 card"
        >
          <Card.Img variant="top" src={Lina} className="p-2 rounded-5 img-card-team" />
          <Card.Body>
            <Card.Title>
              <h5 className="fw-bold fs-16 fw-400 color-gray py-3">Derlina Yusuf</h5>
            </Card.Title>
          </Card.Body>
        </Card>
        <Card
          style={{ minWidth: "200px" }}
          className="border border-light rounded-4 card"
        >
          <Card.Img variant="top" src={Tety} className="p-2 rounded-5 img-card-team" />
          <Card.Body>
            <Card.Title>
              <h5 className="fw-bold fs-16 fw-400 color-gray py-3">Tety Kartikasari</h5>
            </Card.Title>
          </Card.Body>
        </Card>
        <Card
          style={{ minWidth: "200px" }}
          className="border border-light rounded-4 card"
        >
          <Card.Img variant="top" src={Retno} className="p-2 rounded-5 img-card-team" />
          <Card.Body>
            <Card.Title>
              <h5 className="fw-bold fs-16 fw-400 color-gray py-3">Franciska Retno</h5>
            </Card.Title>
          </Card.Body>
        </Card>
        <Card
          style={{ minWidth: "200px" }}
          className="border border-light rounded-4 card"
        >
          <Card.Img variant="top" src={Malki} className="p-2 rounded-5 img-card-team" />
          <Card.Body>
            <Card.Title>
              <h5 className="fw-bold fs-16 fw-400 color-gray py-3">Malki Jaehanto</h5>
            </Card.Title>
          </Card.Body>
        </Card>
        <Card
          style={{ minWidth: "200px" }}
          className="border border-light rounded-4 card"
        >
          <Card.Img variant="top" src={Anna} className="p-2 rounded-5 img-card-team" />
          <Card.Body>
            <Card.Title>
              <h5 className="fw-bold fs-16 fw-400 color-gray py-3">Amerlina H. Lumintang</h5>
            </Card.Title>
          </Card.Body>
        </Card>
        <Card
          style={{ minWidth: "200px" }}
          className="border border-light rounded-4 card"
        >
          <Card.Img variant="top" src={Evy} className="p-2 rounded-5 img-card-team" />
          <Card.Body>
            <Card.Title>
              <h5 className="fw-bold fs-16 fw-400 color-gray py-3">Evy Ariza</h5>
            </Card.Title>
          </Card.Body>
        </Card>
        <Card
          style={{ minWidth: "200px" }}
          className="border border-light rounded-4 card"
        >
          <Card.Img variant="top" src={Syafrudin} className="p-2 rounded-5 img-card-team" />
          <Card.Body>
            <Card.Title>
              <h5 className="fw-bold fs-16 fw-400 color-gray py-3">Syafrudin Asyhari</h5>
            </Card.Title>
          </Card.Body>
        </Card>
        <Card
          style={{ minWidth: "200px" }}
          className="border border-light rounded-4 card"
        >
          <Card.Img variant="top" src={Ikrar} className="p-2 rounded-5 img-card-team" />
          <Card.Body>
            <Card.Title>
              <h5 className="fw-bold fs-16 fw-400 color-gray py-3">Ikrar H. Mahardika</h5>
            </Card.Title>
          </Card.Body>
        </Card>
        <Card
          style={{ minWidth: "200px" }}
          className="border border-light rounded-4 card"
        >
          <Card.Img variant="top" src={Seni} className="p-2 rounded-5 img-card-team" />
          <Card.Body>
            <Card.Title>
              <h5 className="fw-bold fs-16 fw-400 color-gray py-3">Seni Iriani Loka</h5>
            </Card.Title>
          </Card.Body>
        </Card>
        <Card
          style={{ minWidth: "200px" }}
          className="border border-light rounded-4 card"
        >
          <Card.Img variant="top" src={Ebiet} className="p-2 rounded-5 img-card-team" />
          <Card.Body>
            <Card.Title>
              <h5 className="fw-bold fs-16 fw-400 color-gray py-3">Ebiet Mubharak</h5>
            </Card.Title>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default Section5;

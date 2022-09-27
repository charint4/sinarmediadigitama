import React from "react";
import { Container } from "react-bootstrap";
import "./section6.css";
import { Form, Button } from "react-bootstrap";

const Section6 = () => {
  return (
    <Container className="wrapper-cta">
      <div className="row justify-content-center gap-3">

        <div className="t1-s6 col-md-4">
          <h2 className="fw-bold fs-title mb-3 py-5">
            Your company <br />
            will go places,
            <br />
            yet you can stay <br />
            under our roof
          </h2>
          <h1 className="fs-title fw-bold text-color-rb">Tell us your <br></br> needs!</h1>
        </div>
        <Form className="bg-blur p-4 w-30 rounded-4 col-md">
          <h2 className="fs-sm-title fw-bold color-navy mb-5">
            Send us a message
          </h2>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="fs-18 fw-500 text-dark">Name</Form.Label>
            <Form.Control type="text" placeholder="Ex: Imanuel Simatupang" className="fs-14"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="fs-18 fw-500 text-dark">Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ex: simatupang30@example.com"
              className="fs-14"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="fs-18 fw-500 text-dark">
              Subject
            </Form.Label>
            <Form.Control type="text" placeholder="Ex: New Project Proposal" className="fs-14" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="fs-18 fw-500 text-dark">
              Message
            </Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Write your message here"
              style={{ height: "80px" }}
              className="fs-14"
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            className="bg-navy btn-submit float-end fw-bold px-3 py-2 rounded-2 fs-15"
          >
            Send message
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Section6;

import React from "react";
import { Container } from "react-bootstrap";
import "./section6.css";
import { Form, Button } from "react-bootstrap";

const Section6 = () => {
  return (
    <Container fluid className="mt-200 d-flex justify-content-center gap-3">
      <div className="t1-s6">
        <h2 className="fw-bold fs-big mb-5 py-5">
          Your company <br />
          will go places,
          <br />
          yet you can stay <br />
          under our roof
        </h2>
        <h1 className="fs-bigger fw-bold text-color-rb">Tell us your needs!</h1>
      </div>
      <Form className="bg-blur p-4 w-30">
        <h2 className="fs-sm-title fw-bold color-navy mb-5">
          Send us a message
        </h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fs-normal fw-500 text-dark">Name</Form.Label>
          <Form.Control type="text" placeholder="Ex: Imanuel Simatupang" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fs-normal fw-500 text-dark">Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ex: simatupang30@example.com"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fs-normal fw-500 text-dark">
            Subject
          </Form.Label>
          <Form.Control type="text" placeholder="Ex: New Project Proposal" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fs-normal fw-500 text-dark">
            Message
          </Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Write your message here"
            style={{ height: "144px" }}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          className="bg-navy btn-submit float-end fw-bold px-5 py-3 ls-1 rounded-4"
        >
          Send message
        </Button>
      </Form>
    </Container>
  );
};

export default Section6;

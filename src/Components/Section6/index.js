import React from "react";
import { Container } from "react-bootstrap";
import "./section6.css";
import { Form, Button } from "react-bootstrap";

const Section6 = () => {
  return (
    <Container className="mt-200 d-flex justify-content-center gap-3">
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
      <Form className="bg-blur p-4 w-45">
        <h2 className="fs-title fw-bold color-navy my-3">Send us a message</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fs-normal fw-500">Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ex: simatupang30@example.com"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fs-normal fw-500">Subject</Form.Label>
          <Form.Control type="text" placeholder="Ex: New Project Proposal" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fs-normal fw-500">Message</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Write your message here"
            style={{ height: "144px" }}
          />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          className="bg-navy btn-submit float-end fw-bold"
        >
          Send message
        </Button>
      </Form>
    </Container>
  );
};

export default Section6;

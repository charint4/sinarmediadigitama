import React, { useRef } from "react";
import { Container } from "react-bootstrap";
import "./section6.css";
import { Form, Button } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const Section6 = ({ notify }) => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2isq2kh",
        "template_ph5k4gc",
        form.current,
        "L_x8LbXR3EiFWi0bQ"
      )
      .then(
        (result) => {
          console.log(result.text);
          notify();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <Container className="wrapper-cta" id="section6">
        <div className="row justify-content-center gap-3">
          <div className="t1-s6 col-md-4">
            <h2 className="fw-bold fs-title mb-3 py-5">
              Your company <br />
              will go places,
              <br />
              yet you can stay <br />
              under our roof
            </h2>
            <h1 className="fs-title fw-bold text-color-rb">
              Tell us your <br></br> needs!
            </h1>
          </div>
          <Form
            className="bg-blur p-4 w-30 rounded-4 col-md"
            ref={form}
            onSubmit={sendEmail}
          >
            <h2 className="fs-sm-title fw-bold color-navy mb-5">
              Send us a message
            </h2>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="fs-18 fw-500 text-dark">Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ex: Imanuel Simatupang"
                className="fs-14"
                name="user_name"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="fs-18 fw-500 text-dark">Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ex: simatupang30@example.com"
                className="fs-14"
                name="user_email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="fs-18 fw-500 text-dark">
                Subject
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Ex: New Project Proposal"
                className="fs-14"
                name="user_subject"
              />
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
                name="user_message"
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              className="bg-navy btn-submit float-end fw-bold px-3 py-2 rounded-2 fs-15"
              value="send"
            >
              Send message
            </Button>
          </Form>
        </div>
      </Container>
    </>
  );
};

export default Section6;

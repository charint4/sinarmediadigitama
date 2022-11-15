import React, { useRef } from "react";
import { Container } from "react-bootstrap";
import "./section6.css";
import { Form, Button } from "react-bootstrap";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import Data from "./Data";

const Section6 = ({ notify, lang = "en" }) => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_p63fjrf",
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
        {lang === "en" ? (
          <div className="row justify-content-center align-items-center gap-3">
            <div className="t1-s6 col-md-4">
              <h2 className="fw-bold fs-title mb-3 py-5">
                {/* Your company <br />
                will go places,
                <br />
                yet you can stay <br />
                under our roof */}
                {Data[0].head}
              </h2>
              <h1 className="fs-title fw-bold text-color-rb anim-text">
                {/* Tell us your <br></br> needs! */}
                {Data[0].subhead}
              </h1>
            </div>
            <Form
              className="bg-blur p-4 w-30 rounded-4 col-md"
              ref={form}
              onSubmit={sendEmail}
            >
              <h2 className="fs-sm-title fw-bold color-navy mb-5">
                {Data[0].text1}
              </h2>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="fs-18 fw-500 text-dark">
                  {Data[0].text2}
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ex: Imanuel Simatupang"
                  className="fs-14"
                  name="user_name"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="fs-18 fw-500 text-dark">
                  {Data[0].text3}
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ex: simatupang30@example.com"
                  className="fs-14"
                  name="user_email"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="fs-18 fw-500 text-dark">
                  {Data[0].text4}
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
                  {Data[0].text5}
                </Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Write your message here"
                  style={{ height: "80px" }}
                  className="fs-14"
                  name="user_message"
                />
              </Form.Group>
              <h3 className="disc">*{Data[0].text7}</h3>
              <Button
                variant="primary"
                type="submit"
                className="bg-navy btn-submit float-end fw-bold px-3 py-2 rounded-2 fs-15"
                value="send"
              >
                {Data[0].text6}
              </Button>
            </Form>
          </div>
        ) : (
          <div className="row justify-content-center align-items-center gap-3">
            <div className="t1-s6 col-md-4">
              <h2 className="fw-bold fs-title mb-3 py-5">
                {/* Your company <br />
                will go places,
                <br />
                yet you can stay <br />
                under our roof */}
                {Data[1].head}
              </h2>
              <h1 className="fs-title fw-bold text-color-rb anim-text">
                {/* Tell us your <br></br> needs! */}
                {Data[1].subhead}
              </h1>
            </div>
            <Form
              className="bg-blur p-4 w-30 rounded-4 col-md"
              ref={form}
              onSubmit={sendEmail}
            >
              <h2 className="fs-sm-title fw-bold color-navy mb-5">
                {Data[1].text1}
              </h2>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="fs-18 fw-500 text-dark">
                  {Data[1].text2}
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ex: Imanuel Simatupang"
                  className="fs-14"
                  name="user_name"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="fs-18 fw-500 text-dark">
                  {Data[1].text3}
                </Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Ex: simatupang30@example.com"
                  className="fs-14"
                  name="user_email"
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="fs-18 fw-500 text-dark">
                  {Data[1].text4}
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
                  {Data[1].text5}
                </Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Write your message here"
                  style={{ height: "80px" }}
                  className="fs-14"
                  name="user_message"
                />
              </Form.Group>
              <h3 className="disc">*{Data[1].text7}</h3>
              <Button
                variant="primary"
                type="submit"
                className="bg-navy btn-submit float-end fw-bold px-3 py-2 rounded-2 fs-15"
                value="send"
              >
                {Data[1].text6}
              </Button>
            </Form>
          </div>
        )}
      </Container>
    </>
  );
};

export default Section6;

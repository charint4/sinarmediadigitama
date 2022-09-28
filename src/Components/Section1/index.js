import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import "../Section1/section1.css";
import Button from "react-bootstrap/Button";

const Section1 = () => {
  return (
    <>
      <Container>
        <div className="row container-sec1 bg-blur  p-5">
          <div className="col-md cont-sec1-left ">
            <h1>A One Stop Branding Agency in Indonesia</h1>
          </div>
          <div className="col-md cont-sec1-right">
            <h3>
            PT. Sinar Media Digitama has the vision to offer 360 marketing services for creative entrepreneurs who need a one-stop service for their marketing campaign needs. 
            </h3>
            <h3>
            In line with our company's mission of always prioritizing the added value of every service and customer satisfaction, we aspire to be your professional partner in helping you develop your brand or product so that they always shine. We believe that our future endeavors have the potential to bring breathtaking results.
            </h3>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Section1;

import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import '../Section1/section1.css';
import Button from 'react-bootstrap/Button';

const Section1 = () => {
    return (
      <>
        <Container>
            <div className="row container-sec1">
                <div className="col-md cont-sec1-left p-5">
                    <h1>A One Stop Branding Agency in Indonesia</h1>
                </div>
                <div className="col-md cont-sec1-right">
                    <h3>PT. Sinar Media Digitama has a vision to provide 360 marketing services to business owners or brand owners who need one-stop services or one-stop solutions for marketing campaign needs for FMCG, MSMEs and your private business </h3>
                    <h3>In accordance with the company's mission to always prioritize added value in every service and prioritize customer satisfaction, we hope to be a professional partner in helping develop your brand or product so that it always shines.</h3>
                </div>
            </div>
        </Container>

      </>
    );
  };
  
  export default Section1;
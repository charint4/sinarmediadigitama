import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import '../Section2/section2.css';
import OOH from '../../Images/ooh.png'
import Button from 'react-bootstrap/Button';

const Section2 = () => {
    return (
      <>
        <Container>
            <div className="row container-sec2">
                <h1>Our Services</h1>
                <h3>We take your brand's image as our priority</h3>
                <div className="col-md cont-sec2">
                    <img src={OOH}></img>
                    <h2>OOH out of home units</h2>
                </div>
                <div className="col-md cont-sec2">
                    <img src={OOH}></img>
                    <h2>Promotional Units</h2>
                </div>
                <div className="col-md cont-sec2">
                    <img src={OOH}></img>
                    <h2>Creative Development Promotional Units</h2>
                </div>
                <div className="col-md cont-sec2">
                    <img src={OOH}></img>
                    <h2>Printed Material</h2>
                </div>
            </div>
        </Container>

      </>
    );
  };
  
  export default Section2;
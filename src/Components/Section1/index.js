import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import "../Section1/section1.css";
import Button from "react-bootstrap/Button";
import Data from './Data.js'

const Section1 = () => {
  return (
    <>
      <Container>
        {Data.map((data, index) => (
          <div className="row container-sec1 bg-blur  p-5" key={index}>
          <div className="col-md cont-sec1-left ">
            <h1>{data.text1}</h1>
          </div>
          <div className="col-md cont-sec1-right">
            <h3>
            {data.head}
            </h3>
            <h3>
            {data.subhead}
            </h3>
          </div>
        </div>
        ))}
        
      </Container>
    </>
  );
};

export default Section1;

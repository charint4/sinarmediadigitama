import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Link, useLocation } from "react-router-dom";
import "../Section1/section1.css";
import Data from "./Data.js";

const Section1 = (props) => {
  const { lang = "en" } = props;
  // const isLink = useParams();
  let {pathname} = useLocation()
  console.log(pathname);


  return (
    <>
      <Container>
        
        {lang === "en" ? (
          <div className="row container-sec1 bg-blur  p-5">
            <div className="col-md cont-sec1-left ">
              <h1>{Data[0].text1}</h1>
            </div>
            <div className="col-md cont-sec1-right">
              <h3>{Data[0].head}</h3>
              <h3>{Data[0].subhead}</h3>
              <h3>{Data[0].trihead}</h3>
              <div className="d-flex flex-row-reverse" >
                <Link to="/AboutUs" style={ pathname === "/AboutUs" ? { display:'none'} : {display : 'block'} }>
                  <Button className="ctn-btn px-4">Read More</Button>{" "}
                </Link>
              </div>
            </div>

          </div>
        ) : (
          <div className="row container-sec1 bg-blur  p-5">
            <div className="col-md cont-sec1-left ">
              <h1>{Data[1].text1}</h1>
            </div>
            <div className="col-md cont-sec1-right">
              <h3>{Data[1].head}</h3>
              <h3>{Data[1].subhead}</h3>
              <h3>{Data[1].trihead}</h3>
              <div className="d-flex flex-row-reverse">
                <Link to="/AboutUs">
                  <Button className="ctn-btn px-4">Baca Selanjutnya</Button>{" "}
                </Link>
              </div>
            </div>
          </div>
        )}
      </Container>
    </>
  );
};

export default Section1;

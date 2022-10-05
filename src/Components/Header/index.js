import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import './header.css';
import Button from 'react-bootstrap/Button';
import asset1 from '../../Images/bi_arrow-down-right.png';
import arrow from '../../Images/arrow-down.png';
import asset2 from '../../Images/Group.png';
import asset3 from '../../Images/digitama-new-full.png';
import videoBg from '../../Images/slide-pro.mp4'

const Header = () => {
    return (
      <>
            <div className="wrap-head">
                <video src={videoBg} autoPlay loop muted id="slide-bg"/>
            <Container>
                <div className="container-head">
                    <div className="cont-head">
                        <img align="middle" className="" src={asset3}></img>
                    </div>
                    <div className="cont-head">
                        <img className=" ar-left" src={asset1}></img>
                        <img align="middle" className=" ar-down" src={arrow}></img>
                        <h2>just call us</h2>
                    </div>
                    <div className="cont-head">
                        <img align="middle" className="" src={asset2}></img>
                    </div>
                </div>
                </Container>
            </div>
    
      </>
    );
  };
  
  export default Header;
import "bootstrap/dist/css/bootstrap.min.css";
import Container from 'react-bootstrap/Container';
import './header.css';
import Button from 'react-bootstrap/Button';
import asset1 from '../../Images/bi_arrow-down-right.png';
import arrow from '../../Images/arrow-down.png';
import asset2 from '../../Images/Group.png';
import asset3 from '../../Images/digitama-new-full.png';

const Header = () => {
    return (
      <>
            <div className="wrap-head">
            <Container>
                <div className="row container-head">
                    <div className="col-md cont-head">
                        <img align="middle" className="img-client" src={asset3}></img>
                    </div>
                    <div className="col-md cont-head">
                        <img align="middle" className="img-client ar-left" src={asset1}></img>
                        <img align="middle" className="img-client ar-down" src={arrow}></img>
                    </div>
                    <div className="col-md cont-head">
                        <h2>just call us</h2>
                        <img align="middle" className="img-client" src={asset2}></img>
                    </div>
                </div>
                </Container>
            </div>
    
      </>
    );
  };
  
  export default Header;
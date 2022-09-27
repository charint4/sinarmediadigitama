import React from 'react'
import { Container } from 'react-bootstrap'
import "./section3abt.css"
const index = () => {
  return (
    <Container>
        <div className="wrap-abt2">
            <h1 className="text-center">Why Us?</h1>
            <h3 className="text-center">What makes us different?</h3>
            <div className="row wrap-cont-abt-te mt-5">
                <div className="col-md-4 cont-abt3">
                    <h1>
                        One stop service
                    </h1>
                </div>
                <hr className="col-1 line1"/>
                <div className="col-md cont-abt3">
                    <h3>
                    One Stop Marketing Solutions arose from our desire to be a comprehensive marketing agency that delivers cohesive results to our clients, regardless of the service you need.                    </h3>
                </div>
            </div>
            <div className="row wrap-cont-abt-te mt-5">
                <div className="col-md-3 cont-abt3">
                    <h1>
                        360 Approach
                    </h1>
                </div>
                <hr className="col-1 line2"/>
                <div className="col-md cont-abt3">
                    <h3>
                    Choosing the best placement for your ad is crucial for your brand and product. Successful ad placement will elevate your brand awareness and visibility. Allow us to assist you in choosing the best option for your marketing strategy.
                    </h3>
                </div>
            </div>
            <div className="row wrap-cont-abt-te mt-5">
                <div className="col-3 cont-abt3">
                    {/* <div className='wrap-line'> */}
                        <h1>
                            Years of experience
                            {/* <span className='line'> */}
                            
                            {/* </span> */}
                        </h1>
                    {/* </div> */}
                    
                </div>
                <hr className="col-1 line3"/>
                <div className="col-md cont-abt3">
                    <h3>
                    Our experience in the advertising industry has helped brands attain larger and more targeted audiences. We understand what the audience desires in order to convey an unforgettable brand.
                    </h3>
                </div>
            </div>
        </div>
    </Container>
  )
}

export default index
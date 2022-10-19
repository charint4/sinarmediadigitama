import React from 'react'
import { Container } from 'react-bootstrap'
import "./section3abt.css"
import Data from "./Data"
const index = () => {
  return (
    <Container>
        {Data.map ((data, index) =>(
            <div className="wrap-abt2" key={index}>
                <h1 className="text-center">{data.head}</h1>
                <h3 className="text-center">{data.subhead}</h3>
                <div className="row wrap-cont-abt-te mt-5">
                    <div className="col-md-4 cont-abt3">
                        <h1>
                            {data.first}
                        </h1>
                    </div>
                    <hr className="col-1 line1"/>
                    <div className="col-md cont-abt3">
                        <h3>
                        {data.second} </h3>
                    </div>
                </div>
                <div className="row wrap-cont-abt-te mt-5">
                    <div className="col-md-3 cont-abt3">
                        <h1>
                            {data.third}
                        </h1>
                    </div>
                    <hr className="col-1 line2"/>
                    <div className="col-md cont-abt3">
                        <h3>
                        {data.fourth}
                        </h3>
                    </div>
                </div>
                <div className="row wrap-cont-abt-te mt-5">
                    <div className="col-3 cont-abt3">
                        {/* <div className='wrap-line'> */}
                            <h1>
                                {data.fifth}
                            </h1>
                        {/* </div> */}
                        
                    </div>
                    <hr className="col-1 line3"/>
                    <div className="col-md cont-abt3">
                        <h3>
                        {data.sixth}
                        </h3>
                    </div>
                </div>
            </div>
        ))}
        
    </Container>
  )
}

export default index
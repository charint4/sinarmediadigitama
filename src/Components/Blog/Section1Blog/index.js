import React, {useEffect} from 'react'
import { Container } from 'react-bootstrap'
import "./Section1blog.css"
import Data from "./Data.js"
import { Link } from "react-router-dom";

// const Section1Blog = (props) => {
//     const {data} = props
const Section1Blog = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { lang = "en" } = props;
  return (
    <Container>
        <div className="section-blg">
            <h1 className="fs-title fw-bold">Blog</h1>
            <h4 className="fw-400 fs-20 mb-60">Read Our Blog</h4>
            <div className='outer-wrap-blog'>
            {Data.map((data,index) => (
                <div className="wrap-card-blog rounded-5" key={index}>
                    <div className="card-blog">
                        <img className="" src={data.img}></img>
                        <div className="cont-blog bg-blur">
                            <p><b>{data.title}</b></p>
                            <div className="sub-blog">
                                <h2 className=''>{data.sub}</h2>
                            </div>
                            
                            <Link
                                to={`Detailed-Blog/${data.title.replaceAll(" ", "-")}/${index}`}
                                className="read-more fixed-bottom"
                            >
                                <b>{data.read}</b>
                            </Link>
                            {/* <p className="read-more"><b>{data.read}</b></p> */}
                        </div>
                    </div>
                </div>
            ))}
            </div>
            
        </div>

    </Container>
  )
}

export default Section1Blog
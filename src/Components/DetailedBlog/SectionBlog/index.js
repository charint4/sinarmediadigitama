import React from 'react'
import { Container } from 'react-bootstrap'
import "./blog.css"
import Data from "./Data.js"
import { Link } from "react-router-dom";

const SectionBlog = (props) => {
    const { data, lang = "en" } = props;
  return (
    <Container>
        <div className="section1-blg">
            <h3 className="fw-bold">Blog</h3>
            <h1 className="fs-title fw-bold">{data.title}</h1>
            <img src={data.img}></img>
            {/* <h4 className="fw-400 fs-20">Read Our Blog</h4> */}
        </div>
        
    </Container>
  )
}

export default SectionBlog
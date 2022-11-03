import React from 'react'
import { Container } from 'react-bootstrap'
import "./blog.css"
import Data from "./Data.js"
import { Link } from "react-router-dom";

const SectionBlog = () => {
  return (
    <Container>
        <div className="section-blg">
            <h1 className="fs-title fw-bold">Blog</h1>
            <h4 className="fw-400 fs-20">Read Our Blog</h4>
            {Data.map((data,index) => (
                <div className="wrap-card-blog rounded-5 mt-60" key={index}>
                    <div className="card-blog">
                        <img className="" src={data.img}></img>
                        <div className="cont-blog bg-blur">
                            <p><b>{data.title}</b></p>
                            <h2>{data.sub}</h2>
                            <Link
                                to={`Blog/${data.title.replaceAll(" ", "-")}/${index}`}
                                className="read-more"
                            >
                                <b>{data.read}</b>
                            </Link>
                            <p className="read-more"><b>{data.read}</b></p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
        
    </Container>
  )
}

export default SectionBlog
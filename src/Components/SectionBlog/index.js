import React from 'react'
import { Container } from 'react-bootstrap'
import "./blog.css"
import Data from "./Data.js"

const SectionBlog = () => {
  return (
    <Container>
        <div className="section-blg">
            <h1>Blog</h1>
            <h3>Read Our Blog</h3>
            {Data.map((data,index) => (
                <div className="wrap-card-blog rounded-5" key={index}>
                    <div className="card-blog">
                        <img className="" src={data.img}></img>
                        <div className="cont-blog bg-blur">
                            <p><b>{data.title}</b></p>
                            <h2>{data.sub}</h2>
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
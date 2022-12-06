import React from 'react'
import { Container } from 'react-bootstrap';
import "./Article.css"
// import Data from '../../AboutUs/SectionQt/Data'

const SectionArticle = (props) => {
    const { data, lang = "en" } = props;
  return (
    <Container>
    {data.para.map((paragh, index) => (
      <div className="wrap-art mt-50" key={index}> {/* use mapping keanya sabi*/}
        <p className="mt-20">{paragh.par}</p>
        {/* <p className="mt-40">{data.par2}</p>
        <p className="mt-40">{data.par3}</p>
        <p className="mt-40">{data.par4}</p>
        <p className="mt-40">{data.par5}</p> */}
      </div>
    ))}
    
    </Container>
  )
}

export default SectionArticle
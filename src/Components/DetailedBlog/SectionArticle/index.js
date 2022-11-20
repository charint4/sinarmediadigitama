import React from 'react'
import { Container } from 'react-bootstrap';
// import Data from '../../AboutUs/SectionQt/Data'

const SectionArticle = (props) => {
    const { data, lang = "en" } = props;
  return (
    <Container>
    <div className="wrap-art mt-60"> {/* use mapping keanya sabi*/}
        <p className="mt-40">{data.par1}</p>
        <p className="mt-40">{data.par2}</p>
        <p className="mt-40">{data.par3}</p>
        <p className="mt-40">{data.par4}</p>
        <p className="mt-40">{data.par5}</p>
    </div>
    </Container>
  )
}

export default SectionArticle
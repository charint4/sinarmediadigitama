import React from 'react'
import { Container } from 'react-bootstrap';
// import Data from '../../AboutUs/SectionQt/Data'

const SectionArticle = (props) => {
    const { data, lang = "en" } = props;
  return (
    <Container>
    <div className="wrap-art mt-60"> {/* use mapping keanya sabi*/}
        <h3 className="mt-60">{data.par1}</h3>
        <h3 className="mt-60">{data.par2}</h3>
        <h3 className="mt-60">{data.par3}</h3>
        <h3 className="mt-60">{data.par4}</h3>
        <h3 className="mt-60">{data.par5}</h3>
    </div>
    </Container>
  )
}

export default SectionArticle
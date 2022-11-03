import React from 'react'
import { Container } from 'react-bootstrap'

const Section1Blog = (props) => {
    const {data} = props
  return (
    <Container>
        <div>
            <h1 className="fs-title fw-bold">{data.title}</h1>
        </div>

    </Container>
  )
}

export default Section1Blog
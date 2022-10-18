import React from 'react'
import { Container } from 'react-bootstrap'
import "./alts.css"
import Bhara from '../../Images/webp/bhara.webp'

const Section5alts = () => {
  return (
    <Container>
        <div className="wrap-team-card">
            <img src={Bhara}></img>
            <div className="cont-team-card p-3">
                <h2>Ebiet Mubharak</h2>
                <h3>Head of Creative</h3>
            </div>
        </div>
    </Container>
  )
}

export default Section5alts
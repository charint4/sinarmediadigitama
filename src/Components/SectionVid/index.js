import React from 'react'
import { Container } from 'react-bootstrap'
import './sectionvid.css'
import circAnim from '../../Images/circ.png'

const Sectionvid = () => {
  return (
    <Container >
        <div className='container-secvid'>
            <h1>Our Company Profile</h1>
            <center>
            <iframe width="90%" height="600" src="https://www.youtube.com/embed/Stp5M7fDrgo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </center>
            <img src={circAnim}></img>
        </div>
        
    </Container>
  )
}

export default Sectionvid
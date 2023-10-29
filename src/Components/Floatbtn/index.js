import React from 'react'
import WA from "../../Images/logoWa.png"
import "./float.css"

const Floatbtn = () => {
  return (
    <div className="wrap-wa fixed-bottom d-flex justify-content-end">
        <a href="https://api.whatsapp.com/send?phone=6285692403618">
        <img src={WA} width="40" height="">
        </img>
        </a>
    </div>
    
  )
}

export default Floatbtn
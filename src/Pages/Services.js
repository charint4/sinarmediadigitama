import React from "react";
import Header from "../Components/Services/Header";
import Section1serv from "../Components/Services/Section1serv";
import Section3serv from "../Components/Services/Section3serv";
import { useParams } from "react-router-dom";
import Data from '../Components/Section2/Data'

const Services = () => {
  const {title, id} = new useParams()
  // console.log(title)

  return (
    <>
      <Header className="" data={Data[id]}/>
      <div className="wrap-sec13-serv">
        <Section1serv data={Data[id]}/>
        <Section3serv data={Data[id]}/>
      </div>
    </>
  );
};

export default Services;

import React, { useEffect } from "react";
import Header from "../Components/Services/Header";
import Section1serv from "../Components/Services/Section1serv";
import Section3serv from "../Components/Services/Section3serv";
import { useParams } from "react-router-dom";
import Data from "../Components/Section2Rev/Data";
import { useContext } from "react";
import langContext from "../Context/languageContext";

const Services = () => {
  const { lang, setLang } = useContext(langContext);
  const { title, id } = new useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header className="" data={Data[id]} lang={lang} />
      <div className="wrap-sec13-serv">
        <Section1serv data={Data[id]} lang={lang} />
        <Section3serv data={Data[id]} lang={lang} />
      </div>
    </>
  );
};

export default Services;

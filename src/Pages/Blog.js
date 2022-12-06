import React, { useEffect } from "react";
import Header from "../Components/Services/Header";
import { useParams } from "react-router-dom";
import Data from "../Components/DetailedBlog/SectionBlog/Data";
import { useContext } from "react";
import langContext from "../Context/languageContext";
import Section1Blog from "../Components/Blog/Section1Blog";

const Services = () => {
  const { lang, setLang } = useContext(langContext);
  const { title, id } = new useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <div className="bg-blg">
      <Section1Blog />
    </div>
      {/* <Header className="" data={Data[id]} lang={lang} />
      <div className="wrap-sec13-serv">
        <Section1serv data={Data[id]} lang={lang} />
        <Section3serv data={Data[id]} lang={lang} />
      </div> */}
      {/* <Section1Blog data={Data[id]}/> */}
      
    </>
  );
};

export default Services;

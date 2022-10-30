import React, { useEffect } from "react";
import Section1abt from "../Components/AboutUs/Section1abt";
import Section2 from "../Components/AboutUs/Section2";
import Section3abt from "../Components/AboutUs/Section3abt";
import Section4abt from "../Components/AboutUs/Section4abt";
import Section5abt from "../Components/AboutUs/Section5abt";
import SectionQt from "../Components/AboutUs/SectionQt";
import Footer from "../Components/Footer";
import SectionVid from "../Components/SectionVid";
import Section5alts from "../Components/Section5alts";
import { useContext } from "react";
import langContext from "../Context/languageContext";

const AboutUs = () => {
  const { lang, setLang } = useContext(langContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <div className="wrap-sec1-ab">
        <Section1abt lang={lang} />
      </div>
      <SectionQt lang={lang} />

      <div className="wrap-sec2-ab">
        <SectionVid lang={lang} />
        <Section2 lang={lang} />
        <Section3abt lang={lang} />
        <Section4abt lang={lang} />
        {/* </div> */}
        {/* <div className="wrap-sec3-ab"> */}
        <Section5alts lang={lang} />
        <Section5abt lang={lang} />
      </div>
    </div>
  );
};

export default AboutUs;

import React , {useEffect} from "react";
import Section1 from "../Components/AboutUs/Section1abt";
import Section2 from "../Components/AboutUs/Section2";
import Section3abt from "../Components/AboutUs/Section3abt";
import Section4abt from "../Components/AboutUs/Section4abt";
import Section5abt from "../Components/AboutUs/Section5abt";
import Footer from "../Components/Footer";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div >
      <div className="wrap-sec1-ab">
        <Section1 />
      </div>
      <div className="wrap-sec2-ab">
        <Section2 />
        <Section3abt />
        <Section4abt />
      </div>
      <div className="wrap-sec3-ab">
        <Section5abt />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default AboutUs;

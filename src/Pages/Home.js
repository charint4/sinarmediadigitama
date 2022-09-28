import React , {useEffect}from "react";
import "../App.css";
import Header from "../Components/Header";
import Section1 from "../Components/Section1";
import Section2 from "../Components/Section2";
import Section3 from "../Components/Section3";
import Section4 from "../Components/Section4";
import Section5 from "../Components/Section5";
import Section6 from "../Components/Section6";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="Home">
      <header className="App-header">
        <Header />
        <section className="sec-1-3">        
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
          <Section6 />
        </section>
      </header>
    </div>
  );
};

export default Home;

import React, { useEffect } from "react";
import "../App.css";
import Header from "../Components/Header";
import Section1 from "../Components/Section1";
import Section2 from "../Components/Section2";
import Section3 from "../Components/Section3";
import SectionMap from "../Components/SectionMap";
import Section5 from "../Components/Section5";
import Section6 from "../Components/Section6";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sectionvid from "../Components/SectionVid";
import Section5alts from "../Components/Section5alts";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNotify = () =>
    toast.success("Email sent!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  return (
    <div className="Home">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
      <header className="App-header">
        <Header />
        <section className="sec-1-3">
          <Section1 />
          {/* <Sectionvid /> */}
          <Section2 />
          <Section3 />
          <SectionMap />
          <Section5 />
          <Section5alts />
          <Section6 notify={handleNotify} />
        </section>
      </header>
    </div>
  );
};

export default Home;

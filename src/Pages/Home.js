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
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import langContext from "../Context/languageContext";
import SectionBlog from "../Components/SectionBlog";

const Home = () => {
  const { lang, setLang } = useContext(langContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNotify = (result) =>
    result.status === 200
      ? toast.success("Email sent!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "colored",
        })
      : toast.error("Error sending email!", {
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
        <Header lang={lang} />
        <section className="sec-1-3">
          <Section1 lang={lang} />
          {/* <Sectionvid /> */}
          <Section2 lang={lang} />
          <Section3 lang={lang} />
          <SectionMap lang={lang} />
          {/* <Section5 /> */}
          <Section5alts lang={lang} />
          <SectionBlog />
          <Section6 notify={handleNotify} lang={lang} />
        </section>
      </header>
    </div>
  );
};

export default Home;

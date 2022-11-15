import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import SectionBlog from '../Components/DetailedBlog/SectionBlog';
import Data from "../Components/Blog/Section1Blog/Data";

const DetailedBlog = () => {
    // const { lang, setLang } = useContext(langContext);
  const { title, id } = new useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <SectionBlog data={Data[id]}/>
  )
}

export default DetailedBlog
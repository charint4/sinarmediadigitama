import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import SectionBlog from '../Components/DetailedBlog/SectionBlog';
import Data from "../Components/Blog/Section1Blog/Data";
import SectionArticle from '../Components/DetailedBlog/SectionArticle';
import SectionBlogNav from '../Components/DetailedBlog/SectionBlogNav';

const DetailedBlog = () => {
    // const { lang, setLang } = useContext(langContext);
  const { title, id } = new useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <SectionBlog data={Data[id]}/>
      <SectionBlogNav data={Data[id]} />
      <SectionArticle data={Data[id]} />
    </>
    
  )
}

export default DetailedBlog
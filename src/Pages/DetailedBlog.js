import React, { useEffect } from 'react'
import { useParams } from "react-router-dom";
import SectionBlog from '../Components/DetailedBlog/SectionBlog';
import Data from "../Components/Blog/Section1Blog/Data";
import SectionArticle from '../Components/DetailedBlog/SectionArticle';
import SectionBlogNav from '../Components/DetailedBlog/SectionBlogNav';
import { Container } from 'react-bootstrap';

const DetailedBlog = () => {
    // const { lang, setLang } = useContext(langContext);
  const { title, id } = new useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
    <Container>
    <div className='row'>
      <div className='col-sm-1 d-flex justify-content-center text-center'>
      <SectionBlogNav data={Data[id]} />
      </div>
      <div className='col-sm scrol-blog'>
        <SectionBlog data={Data[id]}/>
        <SectionArticle data={Data[id]} />
      </div>
    </div>
    </Container>
      
      
    </>
    
  )
}

export default DetailedBlog
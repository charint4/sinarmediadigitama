import React from 'react'
import "./Blognav.css"
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "react-share";

const SectionBlogNav = () => {
  const shareUrl = window.location.href
  return (
    <div className='navBlog mt-150'>
      <p>Share Article</p>
      <FacebookShareButton url={shareUrl}>
        <FacebookIcon size={40}/>
      </FacebookShareButton>
      <WhatsappShareButton>
      <WhatsappIcon size={40}/>
      </WhatsappShareButton>
      <TwitterShareButton>
      <TwitterIcon size={40}/>
      </TwitterShareButton>
      <TelegramShareButton>
      <TelegramIcon size={40}/>
      </TelegramShareButton>
      <LinkedinShareButton>
      <LinkedinIcon size={40}/>
      </LinkedinShareButton>
    </div>
  )
}

export default SectionBlogNav
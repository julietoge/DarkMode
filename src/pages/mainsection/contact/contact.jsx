import React from 'react'
import './contact.css'
import Title from "../../../components/mainsection/titleComp";
import ContactForm from './form';
import SocialMediaHandles from './socialMediaHandles';
import Emoji from '../../../components/helloEmoji/emoji';



const Contact = () => {
  return (
    <div className="contact-wrapper">
      <Title title={"Contact Me"} subTitle={'Say Hello!'}/>
      <Emoji/>
      <ContactForm/>
      <SocialMediaHandles />
      </div>
  )
}

export default Contact
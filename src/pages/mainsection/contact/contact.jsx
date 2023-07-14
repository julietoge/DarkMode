import React from 'react'
import './contact.css'
import Title from "../../../components/mainsection/titleComp";
import ContactForm from './form';
import SocialMediaHandles from './socialMediaHandles';
import HelloEmoji from '../../../components/mainsection/HelloEmoji';

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <Title title={"Contact Me"} subTitle={'Say Hello!'}/>
      <HelloEmoji/>
      <ContactForm/>
      <SocialMediaHandles />
      </div>
  )
}

export default Contact
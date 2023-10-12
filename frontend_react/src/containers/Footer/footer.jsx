import React, {useState} from 'react'

import{images} from "../../constants";
import{ Appwrap, Motionwrap } from "../../wrapper";

import {client} from "../../client";
import './footer.scss';
const Footer = () => {

const [formData, setFormData] = useState({name: "", email: "", message: ""})
const [isFormSubmitted, setIsFormSubmitted] = useState(false);
const [loading, setLoading] = useState(false)

const {name, email, message} = formData;
const handleChangeInput = (e) =>{
  const {name, value} = e.target;

  setFormData({...formData, [name]: value});
}

const handleSubmit = () =>{
  setLoading(true);

  const contact = {
    _type: 'contact',
    name: name,
    email: email,
    message: message,
  }

  client.create(contact)
  .then(() =>{
    setLoading(false);
    setIsFormSubmitted(true)
  })
}
  return (
    <>
    <h2 className='head-text'>Take a Coffee and Chat with Me</h2>

    <div className='app__footer-cards'>
      <div className='app__footer-card'>
<img src={images.email} alt="email" />
    <a href="mailto: israelbernd@gmail.com" className='p-text'>israelbernd@gmail.com</a>
      </div>
      <div className='app__footer-card'>
<img src={images.mobile} alt="mobile" />
    <a href="tel: +234 9042606968" className='p-text'>+234 9042606968</a>
      </div>

    </div>

    {!isFormSubmitted ?
    <div className='app__footer-form app__flex'>
      <div className='app__flex'>
        <input type="text" className='p-text' placeholder='Your Name' value={name} onChange={handleChangeInput}
        name='name'/>
      </div>
      <div className='app__flex'>
        <input type="email" className='p-text' placeholder='Your email' value={email} onChange={handleChangeInput}
        name='email'/>
      </div>
      <div>
        <textarea name="message" className='p-text' placeholder='your Message' value={message} onChange={handleChangeInput}></textarea>
      </div>
        <button type='button' className='p-text' onClick={handleSubmit}>{loading ? "Sending": "Send Message"}</button>
    </div>
    :<div>
      <h3 className='head-text'>Thank you for getting in touch!</h3>
    </div>}
    </>
  )
}

export default Appwrap(Motionwrap(Footer, 'app__footer'),
'contact', 'app__whitebg'
)
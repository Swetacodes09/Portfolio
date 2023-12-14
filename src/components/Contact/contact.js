import React, { useRef } from "react";
import './contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_pmsu2im', 'template_wpdsi6l', form.current, '9iWIEr1QMGexAK77V')
          .then((result) => {
              console.log(result.text);
              e.target.reset();
              alert('email sent')
          }, (error) => {
              console.log(error.text);
          });
      };

    return (
        <>
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1> 
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities</span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name field" placeholder="Your Name" name='from_name' />
                    <input type="email" className="email field" placeholder="Your Email" name='from_email' />
                    <textarea name="message" className="field message" rows="5" placeholder="Message" ></textarea>
                    <button type="submit" value="send" className="submitBtn">Submit</button>
                </form>
            </div>
        </>
    );
}

export default Contact;

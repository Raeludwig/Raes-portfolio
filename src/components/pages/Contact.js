import React, { useState } from 'react';
import { motion } from 'framer-motion';
import "./styles/Contact.css";

const Contact = () => {
  const handleSubmit = (formData) => {
    console.log('Submitted form data:', formData);
  };

  //adding the motion to the 'Contact Page' when you are on the page
  return (
    <div>
      <motion.h1 initial={{ y: -250 }} animate={{ y: 0 }}>
        Contact Page
      </motion.h1>
      
      <div className="container mt-5">
        <h2 className="mb-3">Send me a message!</h2>
        <ContactForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
};

// Sending the email through herotofu to my email address
const FORM_ENDPOINT = "https://public.herotofu.com/v1/6f1ad500-0f6f-11ee-8267-d3eb100789b4";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    const inputs = e.target.elements;
    const data = {};

    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].name) {
        data[inputs[i].name] = inputs[i].value;
      }
    }

    fetch(FORM_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Form response was not ok');
        }

        setSubmitted(true);
      })
      .catch((err) => {
        // Submit the form manually
        e.target.submit();
      });
  };

  if (submitted) {
    return (
      <>
        <h2>Thank you!</h2>
        <div>We'll be in touch soon.</div>
      </>
    );
  }

  //the actual form for messages
  return (
    <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
    >
      <div className="mb-3">
        <input className="form-label" type="text" placeholder="Your name" name="name" required />
      </div>
      <div className="mb-3">
        <input className="form-label" type="email" placeholder="Email" name="email" required />
      </div>
      <div className="mb-3">
        <textarea className="form-label" placeholder="Your message" name="message" required />
      </div>
      <div className="mb-3">
        <button type="submit"> Send a message </button>
      </div>
    </form>

    
  );
  
};


export default Contact;

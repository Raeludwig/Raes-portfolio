import React from 'react';
import { motion } from 'framer-motion';

const ContactForm = ({ onSubmit }) => {
  const [formStatus, setFormStatus] = React.useState('Send');
  const [nameError, setNameError] = React.useState(false);
  const [emailError, setEmailError] = React.useState(false);
  const [messageError, setMessageError] = React.useState(false);
  const nameRef = React.useRef(null);
  const emailRef = React.useRef(null);
  const messageRef = React.useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // validate inputs
    let nameValid = nameRef.current.checkValidity();
    let emailValid = emailRef.current.checkValidity();
    let messageValid = messageRef.current.checkValidity();
    setNameError(!nameValid);
    setEmailError(!emailValid);
    setMessageError(!messageValid);

    if (nameValid && emailValid && messageValid) {
      setFormStatus('Submitting...');
      const formData = {
        name: nameRef.current.value,
        email: emailRef.current.value,
        message: messageRef.current.value,
      };
      console.log(formData);
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label" htmlFor="name">
          Name
        </label>
        <input
          ref={nameRef}
          className={`form-control ${nameError ? 'is-invalid' : ''}`}
          type="text"
          id="name"
          required
        />
        {nameError && (
          <div className="invalid-feedback">Please enter your name.</div>
        )}
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="email">
          Email
        </label>
        <input
          ref={emailRef}
          className={`form-control ${emailError ? 'is-invalid' : ''}`}
          type="email"
          id="email"
          required
        />
        {emailError && (
          <div className="invalid-feedback">Please enter a valid email.</div>
        )}
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="message">
          Message
        </label>
        <textarea
          ref={messageRef}
          className={`form-control ${messageError ? 'is-invalid' : ''}`}
          id="message"
          required
        ></textarea>
        {messageError && (
          <div className="invalid-feedback">Please enter a message.</div>
        )}
      </div>
      <button className="btn" type="submit">
        {formStatus}
      </button>
    </form>
  );
};

const Contact = () => {
  const handleSubmit = (formData) => {
    console.log('Submitted form data:', formData);
    // Do something with the form data if needed
  };

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

export default Contact;

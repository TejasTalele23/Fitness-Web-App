import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  return (
    <footer id="contact" className="page page-dark">
      <h2>CONTACT US</h2><br />
      <h3>Mobile:</h3>
      <a href="tel:1234567894"><FontAwesomeIcon icon={faPhone} /> 1234567894</a>
      <br /><br />
      <h3>E-Mail:</h3>
      <a href="mailto:tejastalele23@gmail.com"><FontAwesomeIcon icon={faEnvelope} /> tejastalele23@gmail.com</a>
      <br /><br />
      <br /><br /><hr /><br />
      2025 | Designed and developed by ATC.
    </footer>
  );
};

export default Contact;
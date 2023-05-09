import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import 'C:/Users/Rachel/bootcamp/Rae-s-portfolio/src/components/pages/styles/Footer.css';

function Footer() {
  return (
    <footer className="footer" class="Footer" position="fixed">
      <div className="icons" class="social-icon" >
        <a href="https://github.com/raeludwig" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
        <a href="https://twitter.com/Code_Rae"   target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
        <a href="https://www.linkedin.com/in/rae-ludwig-57164b51/"  target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;

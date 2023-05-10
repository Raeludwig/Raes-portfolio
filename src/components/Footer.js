import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import './pages/styles/Footer.css';


function FooterComponent() {
  return (
    <footer className="footer" class="Footer" position="fixed">
      <div className="icons social-icon">
        <a href="https://github.com/raeludwig" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" style={{color: "#de5935",}}/>
        </a>
        <a href="https://twitter.com/Code_Rae"   target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faTwitter} size="2x"  style={{color: "#de5935",}}/>
        </a>
        <a href="https://www.linkedin.com/in/rae-ludwig-57164b51/"  target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="2x " style={{color: "#de5935",}} />
        </a>
      </div>
    </footer>
  );
}

export default FooterComponent;


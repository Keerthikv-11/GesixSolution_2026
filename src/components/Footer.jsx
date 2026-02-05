import React from 'react';
import './Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'; 
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-logo">
            Gesix Solution<span>.</span>
          </div>
          <p>© {currentYear} All rights reserved.</p>
        </div>

        <div className="footer-links">
          <a 
            href="https://www.linkedin.com/in/keerthi-k-v-75a488240?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
            target="_blank" 
            className="footer-link"
          ><FontAwesomeIcon icon={faLinkedin} />
            LinkedIn
          </a>
          <a 
            href="https://github.com/Keerthikv-11" 
            target="_blank" 
            rel="noopener noreferrer"
            className="footer-link"
          >
            <FontAwesomeIcon icon={faGithub} />
            GitHub 
          </a>
          <a 
            href="mailto:Keerthikv018@gmail.com" 
            className="footer-link email-link"
          >
           <FontAwesomeIcon icon={faEnvelope} /> Email Me 
          </a>
        </div>
      </div>
    </footer>
  );
};
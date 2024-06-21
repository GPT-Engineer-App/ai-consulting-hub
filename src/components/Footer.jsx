import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer>
    <p>&copy; 2024 Brainpool.AI. All rights reserved.</p>
    <div className="social-media">
      <a href="https://twitter.com"><img src="twitter-icon.png" alt="Twitter" /></a>
      <a href="https://linkedin.com"><img src="linkedin-icon.png" alt="LinkedIn" /></a>
      <a href="https://facebook.com"><img src="facebook-icon.png" alt="Facebook" /></a>
    </div>
  </footer>
);

export default Footer;
import React from 'react';
import './Header.css';

const Header = () => (
  <header>
    <div className="logo">BRAINPOOL.AI</div>
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#services">Our Services</a></li>
        <li><a href="#products">Our Products</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
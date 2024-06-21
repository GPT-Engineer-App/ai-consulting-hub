import React from 'react';
import './Header.css';
import Banner from './Banner.jsx';

const Header = () => (
  <header>
    <div className="logo">Straub Klobe Leong Consulting</div>
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#services">Our Services</a></li>
        <li><a href="#products">Our Products</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
    </nav>
    <Banner />
  </header>
);

export default Header;
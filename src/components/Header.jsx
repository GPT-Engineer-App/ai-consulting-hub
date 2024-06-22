import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';


const Header = () => (
  <header>
    <div className="logo">Straub Klobe Leong Consulting</div>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#services">Our Services</a></li>
        <li><a href="#products">Our Products</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
    </nav>
    
  </header>
);

export default Header;
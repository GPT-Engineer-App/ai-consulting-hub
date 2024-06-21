import React from 'react';
import './Featured.css';
import forbesLogo from '../assets/forbes-logo.png';
import bloombergLogo from '../assets/bloomberg-logo.png';
import aiLogo from '../assets/ai-logo.png';
import observerLogo from '../assets/observer-logo.png';
import mediumLogo from '../assets/medium-logo.png';
import aiBusinessLogo from '../assets/ai-business-logo.png';
import telegraphLogo from '../assets/telegraph-logo.png';

const Featured = () => (
  <section className="featured">
    <h2>As featured in</h2>
    <div className="logos">
      <img src={forbesLogo} alt="Forbes" />
      <img src={bloombergLogo} alt="Bloomberg" />
      <img src={aiLogo} alt="AI" />
      <img src={observerLogo} alt="Observer" />
      <img src={mediumLogo} alt="Medium" />
      <img src={aiBusinessLogo} alt="AI Business" />
      <img src={telegraphLogo} alt="The Telegraph" />
    </div>
  </section>
);

export default Featured;
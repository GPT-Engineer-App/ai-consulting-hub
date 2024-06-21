import React from 'react';
import './Featured.css';

const Featured = () => (
  <section className="featured">
    <h2>Featured in</h2>
    <div className="logos">
      <img src="forbes-logo.png" alt="Forbes" />
      <img src="bloomberg-logo.png" alt="Bloomberg" />
      <img src="ai-business-logo.png" alt="AI Business" />
      <img src="observer-logo.png" alt="Observer" />
      <img src="medium-logo.png" alt="Medium" />
      <img src="telegraph-logo.png" alt="The Telegraph" />
    </div>
  </section>
);

export default Featured;
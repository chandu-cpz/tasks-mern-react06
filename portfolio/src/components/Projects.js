import React from 'react';

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div style={{ display: "flex", }}>
        <div style={{ padding: "26px" }}>
          <h3>IPL WIN PREDICTOR</h3>
          <p> A machine learning project that predicts the win probability of an IPL match
            in realtime . Uses Random Forest Classifier ML algorithm and BS4 for live data
            scraping and inputs
          </p>
        </div>
        <div style={{ padding: "26px" }}>
          <h3>Hive Installer</h3>
          <p>A bash script that can auto detect hive installation and install hive on top .
            Focussed on mainly debian based systems .
          </p>
        </div>
      </div>
      <div style={{ display: "flex", padding: "16px" }}>
        <div>
          <h3 style={{textAlign:"center"}}>Online Shoppers Intentions</h3>
          <p>A machine learning approach to understand a users behaviour .
            Basic few inputs on user behaviour predicting wheather the user will buy a product or not.
            A probabilistic approach to understanding user behaviour giving online product sites with great info to how to target user,
            user segmentation , intending to make user to purchase more and right product . Helping recomender systems on product to user hit ratio.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Projects;

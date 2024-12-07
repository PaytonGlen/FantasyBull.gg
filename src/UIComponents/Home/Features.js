import React from "react";
import GreenBull from "../UXImages/GreenBull.svg";
import PurpleBull from "../UXImages/PurpleBull.svg";
import SilverBull from "../UXImages/SilverBull.svg";

const Features = () => {
  return (
    <section className="features-section">
      <h2>Why FantasyBull?</h2>
      <div className="features-container">
        <div className="feature">
          {/* Placeholder for feature icon */}
          <img src={`${SilverBull}`} alt="Feature 1" />
          <p>Draft a new lineup anytime.</p>
        </div>
        <div className="feature">
          {/* Placeholder for feature icon */}
          <img src={`${PurpleBull}`} alt="Feature 2" />
          <p>Play against friends or in public contests.</p>
        </div>
        <div className="feature">
          {/* Placeholder for feature icon */}
          <img src={`${GreenBull}`} alt="Feature 3" />
          <p>Win weekly cash prizes!</p>
        </div>
      </div>
    </section>
  );
};

export default Features;

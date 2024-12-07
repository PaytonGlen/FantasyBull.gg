import React from "react";

const Steps = () => {
  return (
    <section className="steps-section">
      <h2>Here's How to Get Started</h2>
      <div className="steps-container">
        <div className="step">
          <div className="step-number">1</div>
          <p>Sign up and create your FantasyBull account.</p>
        </div>
        <div className="step">
          <div className="step-number">2</div>
          <p>Deposit funds to start playing.</p>
        </div>
        <div className="step">
          <div className="step-number">3</div>
          <p>Join a contest and compete for cash prizes!</p>
        </div>
      </div>
    </section>
  );
};

export default Steps;

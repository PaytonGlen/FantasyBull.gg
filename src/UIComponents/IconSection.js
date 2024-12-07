import React from "react";

const IconSection = () => {
  return (
    <section className="icon-section">
      <div className="icon-cards">
        <div className="icon-card">
          <h2>Deposit funds</h2>
          <p style={{ fontSize: "18px" }}>Deposit as much as you'd like!</p>
        </div>
        <div className="icon-card">
          <h2>Select which game</h2>
          <p style={{ fontSize: "18px" }}>
            You can draft your own team for as many games as you'd like!
          </p>
        </div>
        <div className="icon-card">
          <h2>Pick your line up!</h2>
          <p style={{ fontSize: "18px" }}>
            Build your team and start earning $!
          </p>
        </div>
      </div>
    </section>
  );
};

export default IconSection;

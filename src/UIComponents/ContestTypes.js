import React from "react";
import "./ContestType.css";

const ContestTypes = () => {
  return (
    <section className="contest-types">
      <h2 style={{ fontFamily: "Finger Paint" }}>How to play</h2>
      <div className="contest-cards">
        <div className="contest-card">
          <h1 style={{ fontSize: "30px" }}>ePlaybook</h1>
          <p style={{ fontSize: "30px" }}>
            Ready to level up your esports experience?
          </p>
          <p>
            Choose your favorite player and simply decide – will they finish the
            game with “more” or fall short with “less”?
          </p>
          <p> It’s that easy!</p>
          <p>Here’s how it works:</p>
        </div>
        <div className="contest-card">
          <h2 style={{ fontFamily: "Finger Paint" }}>Select which game</h2>
          <p style={{ fontSize: "18px" }}>
            You can draft your own team for as many games as you'd like!
          </p>
        </div>
        <div className="contest-card">
          <h2 style={{ fontFamily: "Finger Paint" }}>Pick your line up!</h2>
          <p style={{ fontSize: "18px" }}>
            Build your team and start earning $!
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContestTypes;

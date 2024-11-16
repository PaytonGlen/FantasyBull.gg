import React from "react";

const GameCardItem = ({ image, alt, name }) => (
  <div className="game-card">
    <div className="game-name">
      <img src={image} alt={alt} className="gamecard-img" />
      {name}
    </div>
  </div>
);

export default GameCardItem;

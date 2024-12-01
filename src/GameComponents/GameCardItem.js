import React from "react";
import { game } from "./game.js";

const GameCardItem = ({ image, alt, name, onClick }) => (
  <div className="game-card" onClick={onClick}>
    <div className="game-name">
      <img src={image} alt={alt} className="gamecard-img" />
      {name}
    </div>
  </div>
);

export default GameCardItem;

import React from "react";
import GameCardItem from "./GameCardItem.js";
import "./GameCard.css";
import { game } from "./game.js";

function GameCards({
  scrollLeftFunction,
  scrollRightFunction,
  scrollableSectionRef,
  handleCardClick,
}) {
  console.log("handleCardClick", handleCardClick);

  return (
    <div
      id="game-cards-container"
      className="scrollable-container"
      style={{ position: "relative" }}
    >
      <button className="arrow arrow-left" onClick={scrollLeftFunction}>
        ‹
      </button>
      <div className="scrollable-section" ref={scrollableSectionRef}>
        {game.map((game) => (
          <GameCardItem
            key={game.name}
            image={game.image}
            alt={game.alt}
            name={game.name}
            onClick={() => handleCardClick(game)}
          />
        ))}
      </div>
      <button className="arrow arrow-right" onClick={scrollRightFunction}>
        ›
      </button>
    </div>
  );
}

export default GameCards;

import React from "react";
import GameCardItem from "./GameCardItem.js";
import RL from "/Users/pglen/Desktop/1TourneyZone/TourneyZone/src/images/rocketleague/rocketleague1.webp";
import LoL from "/Users/pglen/Desktop/1TourneyZone/TourneyZone/src/images/LOL/LOL2.webp";
import CSGO from "/Users/pglen/Desktop/1TourneyZone/TourneyZone/src/images/CSGO/CSGO3.webp";
import R6 from "/Users/pglen/Desktop/1TourneyZone/TourneyZone/src/images/rsix/rsix.webp";
import dota from "/Users/pglen/Desktop/1TourneyZone/TourneyZone/src/images/Dota/Dota1.webp";
import pubg from "/Users/pglen/Desktop/1TourneyZone/TourneyZone/src/images/pubg/pubg.webp";
import fortnite from "/Users/pglen/Desktop/1TourneyZone/TourneyZone/src/images/fortnite/fortnite.webp";
import apex from "/Users/pglen/Desktop/1TourneyZone/TourneyZone/src/images/apexlegends/apexlegends.webp";
import smashbros from "/Users/pglen/Desktop/1TourneyZone/TourneyZone/src/images/smashbros/smashbro.webp";
import sc2 from "/Users/pglen/Desktop/1TourneyZone/TourneyZone/src/images/starcraft/starcraft.webp";
import mw3 from "/Users/pglen/Desktop/1TourneyZone/TourneyZone/src/images/COD/MW3.webp";
import "./GameCard.css";
import fifa from "/Users/pglen/Desktop/1TourneyZone/TourneyZone/src/images/Fifa/Fifa.webp";

const games = [
  { image: LoL, alt: "League of Legends", name: "LoL" },
  { image: RL, alt: "Rocket League", name: "Rocket League" },
  { image: CSGO, alt: "Counter Strike", name: "CSGO" },
  { image: R6, alt: "Rainbow 6", name: "Rainbow 6" },
  { image: dota, alt: "Dota 2", name: "Dota 2" },
  { image: pubg, alt: "PubG", name: "PubG" },
  { image: fortnite, alt: "Fortnite", name: "Fortnite" },
  { image: apex, alt: "Apex Legends", name: "Apex Legends" },
  { image: smashbros, alt: "Super Smash Bros", name: "Super Smash Bros" },
  { image: sc2, alt: "Starcraft", name: "Starcraft" },
  { image: mw3, alt: "Call of Duty", name: "Call of Duty MW3" },
  { image: fifa, alt: "FIFA", name: "FIFA" },
];

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
        {games.map((game) => (
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

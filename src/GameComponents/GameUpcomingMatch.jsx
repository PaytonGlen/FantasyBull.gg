import React from "react";

function GameUpcomingMatches({ gameName, matches }) {
  return (
    <div className="upcoming-matches-container">
      {/* Header */}
      <header className="game-header">
        <h1>{gameName} - Upcoming Matches</h1>
      </header>

      {/* Matches List */}
      <div className="matches-list">
        {matches.map((match, index) => (
          <div key={match.id} className="match-card">
            {/* Match Details */}
            <div className="match-info">
              <h3>{match.title}</h3>
              <p>{match.time}</p>
              <p>{match.details}</p>
            </div>

            {/* Teams Info */}
            <div className="teams">
              <div className="team">
                <h4>{match.team1.name}</h4>
                <p>Win %: {match.team1.winPercentage}</p>
                <p>Last 5: {match.team1.last5.join(" ")}</p>
              </div>
              <div className="team">
                <h4>{match.team2.name}</h4>
                <p>Win %: {match.team2.winPercentage}</p>
                <p>Last 5: {match.team2.last5.join(" ")}</p>
              </div>
            </div>

            {/* Betting/Odds */}
            <div className="betting">
              <button className="view-details">View Details</button>
              <p>Stake & Win: {match.odds}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GameUpcomingMatches;

import React from "react";
import PropTypes from "prop-types";
import "./MatchCard.css";

const MatchCard = ({ match }) => {
  console.log("MatchCard:", match);
  console.log("teams:", match.teams);

  // Get today's date without the time
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Get tomorrow's date without the time
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  // Get match date without the time
  const matchDate = new Date(match.beginAt);
  matchDate.setHours(0, 0, 0, 0);

  // Check if the match date is today or tomorrow
  const isToday = today.getTime() === matchDate.getTime();
  const isTomorrow = tomorrow.getTime() === matchDate.getTime();

  return (
    <div className="match-card">
      {/* Match Image and Start Time */}
      <p className="game-name">{match.gameName}</p>
      <p className="match-time">
        {isToday ? (
          <>
            <strong>TODAY @</strong>{" "}
            {new Date(match.beginAt).toLocaleTimeString()}
          </>
        ) : isTomorrow ? (
          <>Tomorrow @ {new Date(match.beginAt).toLocaleTimeString()}</>
        ) : (
          new Date(match.beginAt).toLocaleString()
        )}
      </p>

      {/* League Info and Stream Link */}
      <div className="league-info">
        <img
          src={match.league.imageUrl}
          alt={match.league.name}
          className="league-image"
        />
        <div className="league-details">
          <p className="league-name">{match.league.name}</p>
          {match.streams.length > 0 && (
            <a
              href={match.streams[0].rawUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="stream-link"
            >
              Watch Stream
            </a>
          )}
        </div>
      </div>

      {/* Teams */}
      <div className="teams">
        {match.teams.map((team, index) => (
          <div
            key={team.teamId}
            className="team"
            style={{
              backgroundColor: index % 2 === 0 ? "#B59410" : "#357EC7",
              color: "white",
            }}
          >
            <img src={team.imageUrl} alt={team.name} className="team-image" />
            <p className="team-name">{team.name}</p>
            <p className="team-score">Score: {team.score}</p>
          </div>
        ))}
      </div>

      {/* Pool Bets */}
      <div className="pool-bets">
        {match.teams?.length >= 2 ? (
          <>
            <button
              className="bet-button"
              onClick={() =>
                alert(`Bet on ${match.teams[0]?.name || "Unknown Team"}`)
              }
            >
              <h2>{`${match.teams[0]?.name || "Unknown Team"}`}</h2>
              <h3>Pool Amount: $15,000</h3>
            </button>
            <button
              className="bet-button"
              style={{ color: "rgb(121, 182, 255)" }}
              onClick={() =>
                alert(`Bet on ${match.teams[1]?.name || "Unknown Team"}`)
              }
            >
              <h2>{`${match.teams[1]?.name || "Unknown Team"}`}</h2>
              <h3>Pool Amount: $8,000</h3>
            </button>
          </>
        ) : (
          <p>No teams available for betting</p>
        )}
      </div>
    </div>
  );
};

MatchCard.propTypes = {
  match: PropTypes.shape({
    matchImageUrl: PropTypes.string.isRequired,
    matchId: PropTypes.number.isRequired,
    matchName: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    numberOfGames: PropTypes.number.isRequired,
    beginAt: PropTypes.string.isRequired,
    league: PropTypes.shape({
      name: PropTypes.string.isRequired,
      imageUrl: PropTypes.string.isRequired,
    }).isRequired,
    teams: PropTypes.arrayOf(
      PropTypes.shape({
        teamId: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        score: PropTypes.number.isRequired,
      })
    ).isRequired,
    streams: PropTypes.arrayOf(
      PropTypes.shape({
        rawUrl: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default MatchCard;

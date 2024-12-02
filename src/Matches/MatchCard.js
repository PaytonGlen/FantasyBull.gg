import React from "react";
import PropTypes from "prop-types";
import "./MatchCard.css";

const MatchCard = ({ match }) => {
  return (
    <div className="match-card">
      <h3>{match.matchName}</h3>
      <p>Status: {match.status}</p>
      <p>Number of Games: {match.numberOfGames}</p>
      <p>Start Time: {new Date(match.beginAt).toLocaleString()}</p>
      <div className="league-info">
        <img src={match.league.imageUrl} alt={match.league.name} />
        <p>{match.league.name}</p>
      </div>
      <div className="teams">
        {match.teams.map((team) => (
          <div key={team.teamId} className="team">
            <img src={team.imageUrl} alt={team.name} />
            <p>
              {team.name} ({team.acronym}) - Score: {team.score}
            </p>
          </div>
        ))}
      </div>
      {match.streams.length > 0 && (
        <div className="streams">
          <h4>Watch Live:</h4>
          {match.streams.map((stream, index) => (
            <a
              key={index}
              href={stream.rawUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {stream.language.toUpperCase()} Stream
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

MatchCard.propTypes = {
  match: PropTypes.shape({
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
        acronym: PropTypes.string,
        imageUrl: PropTypes.string.isRequired,
        score: PropTypes.number.isRequired,
      })
    ).isRequired,
    streams: PropTypes.arrayOf(
      PropTypes.shape({
        language: PropTypes.string.isRequired,
        embedUrl: PropTypes.string,
        rawUrl: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default MatchCard;

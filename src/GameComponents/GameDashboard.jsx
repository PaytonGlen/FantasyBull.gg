import React, { useState, useEffect } from "react";
import GameCards from "./GameCards";
import axios from "axios";
import MatchCard from "../Matches/MatchCard";

const Dashboard = () => {
  const [selectedGame, setSelectedGame] = useState(null); // Selected game state
  const [matches, setMatches] = useState([]); // Matches state
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  // Handle game card click
  const handleCardClick = (game) => {
    console.log("Selected Game Slug:", game.slug);
    console.log("Game clicked:", game);
    setSelectedGame(game); // Set the selected game
  };

  // Fetch matches for the selected game
  useEffect(() => {
    if (!selectedGame) return; // Do nothing if no game is selected

    const fetchMatches = async () => {
      setLoading(true);
      setError(null);

      try {
        console.log("Attempting to fetch matches for:", selectedGame);

        // Fetch matches for the selected game
        const response = await axios.get(
          `http://localhost:5001/api/matches/${selectedGame.slug}`
        );

        // Set matches data directly from the response
        setMatches(response.data);
      } catch (err) {
        setError("Failed to fetch matches. Please try again later.");
        console.error("Error fetching matches:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchMatches();
  }, [selectedGame]);

  return (
    <div>
      <h1>Game Dashboard</h1>

      {/* Game Cards */}
      <GameCards handleCardClick={handleCardClick} />

      {/* Upcoming Matches */}
      <div>
        {loading ? (
          <p>Loading matches...</p>
        ) : error ? (
          <p style={{ color: "red" }}>{error}</p>
        ) : selectedGame ? (
          <div className="match-cards">
            {matches.map((match) => (
              <MatchCard key={match.matchId} match={match} />
            ))}
          </div>
        ) : (
          <p>Please select a game to view upcoming matches.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

import React, { useState, useEffect } from "react";
import GameCards from "./GameCards";
import GameUpcomingMatches from "./GameUpcomingMatches";
import axios from "axios";

const Dashboard = () => {
  const [selectedGame, setSelectedGame] = useState(null); // Selected game state
  const [matches, setMatches] = useState([]); // Matches state
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  const handleCardClick = (game) => {
    setSelectedGame(game); // Set the selected game
  };

  // Fetch matches for the selected game
  useEffect(() => {
    if (!selectedGame) return;

    const fetchMatches = async () => {
      setLoading(true);
      setError(null);
      try {
        // Replace the endpoint with your API's endpoint
        const response = await axios.get(
          `https://api.pandascore.co/matches/upcoming?token=YOUR_API_KEY&videogame=${selectedGame.name}`
        );
        setMatches(
          response.data.map((match) => ({
            title: match.name,
            time: new Date(match.scheduled_at).toLocaleString(),
            details: `Best of ${match.number_of_games}`,
            team1: {
              name: match.opponents[0]?.opponent.name || "TBD",
              winPercentage:
                match.opponents[0]?.opponent.stats?.win_percentage || "N/A",
              last5: match.opponents[0]?.opponent.stats?.last_5 || [],
            },
            team2: {
              name: match.opponents[1]?.opponent.name || "TBD",
              winPercentage:
                match.opponents[1]?.opponent.stats?.win_percentage || "N/A",
              last5: match.opponents[1]?.opponent.stats?.last_5 || [],
            },
            odds: match.odds || "N/A",
          }))
        );
      } catch (err) {
        setError("Failed to fetch matches.");
        console.error(err);
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
          <GameUpcomingMatches gameName={selectedGame.name} matches={matches} />
        ) : (
          <p>Please select a game to view upcoming matches.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

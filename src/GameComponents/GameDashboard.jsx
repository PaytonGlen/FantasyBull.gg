import React, { useState, useEffect } from "react";
import GameCards from "./GameCards";
import axios from "axios";
import GameUpcomingMatches from "./GameUpcomingMatch";

const Dashboard = () => {
  const [selectedGame, setSelectedGame] = useState(null); // Selected game state
  const [matches, setMatches] = useState([]); // Matches state
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state

  console.log("handleCardClick", handleCardClick);

  // Handle game card click
  const handleCardClick = (game) => {
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
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/matches/upcoming`,
          {
            params: {
              "filter[videogame_id]": selectedGame.id,
              "filter[tier]": "s,a",
              token: process.env.REACT_APP_PANDASCORE_API_KEY,
            },
          }
        );

        // Transform match data for display
        const formattedMatches = response.data.map((match) => ({
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
        }));

        setMatches(formattedMatches);
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
          <GameUpcomingMatches gameName={selectedGame.name} matches={matches} />
        ) : (
          <p>Please select a game to view upcoming matches.</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

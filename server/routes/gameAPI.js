import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import games from "../games.js";

dotenv.config();

const router = express.Router();

// Fetch upcoming matches for a specific game
router.get("/matches/:gameSlug", async (req, res) => {
  const { gameSlug } = req.params;

  // Find the game by its slug
  const game = games.find((g) => g.slug === gameSlug);

  if (!game) {
    return res.status(404).json({ error: "Game not found" });
  }

  try {
    // Fetch upcoming tournaments for the game
    const tournamentsResponse = await axios.get(
      `https://api.pandascore.co/tournaments/upcoming`,
      {
        params: {
          "filter[videogame_id]": game.id, // Use game ID for filtering
          token: process.env.PANDASCORE_API_KEY,
        },
      }
    );

    const tournaments = tournamentsResponse.data;

    // Create a map of tournament IDs to their names
    const tournamentMap = tournaments.reduce((map, tournament) => {
      map[tournament.id] = tournament.name;
      return map;
    }, {});

    // Fetch upcoming matches for the game
    const matchesResponse = await axios.get(
      `https://api.pandascore.co/matches/upcoming`,
      {
        params: {
          "filter[videogame_id]": game.id,
          token: process.env.PANDASCORE_API_KEY,
        },
      }
    );

    // Enrich matches with tournament names
    const matches = matchesResponse.data.map((match) => ({
      ...match,
      tournament_name:
        tournamentMap[match.tournament_id] || "Unknown Tournament",
    }));

    res.json(matches); // Send the enriched matches to the client
  } catch (err) {
    console.error(
      "Error fetching matches or tournaments from PandaScore:",
      err
    );
    res.status(500).json({
      error: "Failed to fetch matches or tournaments from PandaScore",
    });
  }
});

export default router;

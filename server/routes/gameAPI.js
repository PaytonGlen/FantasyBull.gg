import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import { games } from "../games.js";

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
    // Fetch upcoming matches for the game using its ID
    const response = await axios.get(
      `https://api.pandascore.co/matches/upcoming`,
      {
        params: {
          videogame: game.id, // Use game ID for precise filtering
          token: process.env.PANDASCORE_API_KEY,
        },
      }
    );

    res.json(response.data); // Send the API response to the client
  } catch (err) {
    console.error("Error fetching matches from PandaScore:", err);
    res.status(500).json({ error: "Failed to fetch matches from PandaScore" });
  }
});

export default router;

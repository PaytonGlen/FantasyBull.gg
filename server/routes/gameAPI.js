import express from "express";
import axios from "axios";
import dotenv from "dotenv";
import games from "../games.js";

dotenv.config();

const router = express.Router();
const PANDASCORE_API_KEY = process.env.PANDASCORE_API_KEY;
const PANDASCORE_API_URL = process.env.PANDASCORE_API_URL;
const PANDASCORE_TOURNAMENT_URL = process.env.PANDA_API_URL_TOURNAMENTS;
const PANDASCORE_MATCH_URL = process.env.PANDA_API_URL_MATCHES;

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
          videogame: 22, //game.id, // Use game ID for filtering
        },
        headers: {
          accept: "application/json",
          Authorization: `mGAvPkwPA2Sc-OLgGwDQQJ1stUsFtow4cLtYO2MNLSFON-0Rnqw`,
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
          videogame: 22, //game.id, // Use game ID for filtering
        },
        headers: {
          accept: "application/json",
          Authorization: `mGAvPkwPA2Sc-OLgGwDQQJ1stUsFtow4cLtYO2MNLSFON-0Rnqw`,
        },
      }
    );

    // Transform matches data for front-end use
    const transformData = matchesResponse.data.map((match) => ({
      matchId: match.id,
      matchName: match.name,
      status: match.status,
      numberOfGames: match.number_of_games,
      beginAt: match.begin_at,
      league: {
        name: match.league.name,
        imageUrl: match.league.image_url,
      },
      teams: match.opponents.map((opponent) => ({
        teamId: opponent.opponent.id,
        name: opponent.opponent.name,
        acronym: opponent.opponent.acronym,
        imageUrl: opponent.opponent.image_url,
        score:
          match.results.find(
            (result) => result.team_id === opponent.opponent.id
          )?.score || 0,
      })),
      streams: match.streams_list.map((stream) => ({
        language: stream.language,
        embedUrl: stream.embed_url,
        rawUrl: stream.raw_url,
      })),
    }));

    res.json(transformData); // Send the transformed matches data to the client
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

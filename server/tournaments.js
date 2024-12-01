import fetch from "node-fetch";

const tournamentsCache = {};

// Fetch tournaments from PandaScore API
const fetchTournamentsFromAPI = async (endpoint) => {
  try {
    const response = await fetch(endpoint, {
      headers: { Authorization: `Bearer ${process.env.PANDASCORE_API_KEY}` },
    });
    if (!response.ok) throw new Error(`API Error: ${response.statusText}`);
    return await response.json();
  } catch (error) {
    console.error("Error fetching tournaments:", error);
    return [];
  }
};

// Update the cache for a specific game
export const updateTournamentsCache = async (videogameId) => {
  if (!videogameId) {
    console.error("No videogameId provided!");
    return;
  }

  const upcomingEndpoint = `https://api.pandascore.co/tournaments/upcoming?filter[tier]=s,a&filter[videogame_id]=${videogameId}`;
  const runningEndpoint = `https://api.pandascore.co/tournaments/running?filter[tier]=s,a&filter[videogame_id]=${videogameId}`;

  const [upcoming, running] = await Promise.all([
    fetchTournamentsFromAPI(upcomingEndpoint),
    fetchTournamentsFromAPI(runningEndpoint),
  ]);

  tournamentsCache[videogameId] = { upcoming, running };

  console.log(`Tournaments cache updated for game ID ${videogameId}`);
};

// Get tournaments for a specific game from the cache
export const getTournaments = (videogameId) =>
  tournamentsCache[videogameId] || { upcoming: [], running: [] };

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/user.js";
import bcrypt from "bcrypt";
import { check, validationResult } from "express-validator";
import jwt from "jsonwebtoken";
import { auth } from "./middleware/auth.js";
import cors from "cors";
import axios from "axios";
import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

dotenv.config({ path: "./server/.env" });

const PORT = process.env.PORT || 5001;
const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));

app.use(morgan("dev")); // log every request to the console

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));

// Home route
app.get("/", (req, res) => {
  const indexPath = path.join(__dirname, "../public/index.html");
  res.sendFile(indexPath);
});

// Route for fetching player stats by summoner name
app.get("/player-stats/:summonerName", async (req, res) => {
  const summonerName = req.params.summonerName;
  const apiUrl = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}`;

  try {
    const response = await axios.get(apiUrl, {
      headers: { "X-Riot-Token": process.env.RIOT_API_KEY },
    });
    res.json(response.data);
  } catch (error) {
    console.error("Error fetching player stats:", error);
    res.status(500).json({ msg: "Server error while fetching player stats" });
  }
});

// User Registration Route
app.post(
  "/register",
  [
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password must be 6 or more characters").isLength({
      min: 8,
    }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { username, email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ msg: "User already exists" });
      }

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      user = new User({ username, email, password: hashedPassword });
      await user.save();
      console.log("User saved:", user);
      res.status(200).json({ msg: "User registered successfully" });
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Server error");
      console.error("Error saving user:", err);
    }
  }
);

// Login Route
app.post(
  "/login",
  [
    check("email", "Please include a valid email").isEmail(),
    check("password", "Password is required").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ msg: "Invalid Email/Password." });
      }
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ msg: "Invalid Email/Password." });
      }

      const payload = { user: { id: user.id } };

      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: "1h" },
        (err, token) => {
          if (err) throw err;
          res.status(200).json({ token, msg: "User logged in successfully" });
        }
      );
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Server error");
    }
  }
);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

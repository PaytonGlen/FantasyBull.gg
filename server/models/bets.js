const mongoose = require("mongoose");

const betSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  amount: { type: Number, required: true },
  matchId: { type: String, required: true },
  odds: { type: Number, required: true },
  status: {
    type: String,
    enum: ["pending", "won", "lost"],
    default: "pending",
  },
});

export default mongoose.model("Bet", betSchema);

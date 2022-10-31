const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  gamename: { type: String, required: true },
  pic: { data: Buffer, type: String },
  gametype: { type: String  },
  genre: { type: String },
  description: { type: String, required: true }
});

module.exports = mongoose.model("Game", gameSchema);

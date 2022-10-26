const mongoose = require("mongoose");

const gameSchema = new mongoose.Schema({
  gamename: { type: String, required: true },
  pic: { type: String },
  gametype: { type: String},
  genre: { type: String},
});

module.exports = mongoose.model("Game", gameSchema);

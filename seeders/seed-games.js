const db = require("../models");
const mongoose = require('mongoose');
require("dotenv").config();


//MONGOOSE
const MONGO_URI = process.env.MONGO_URI
mongoose.connect(
  MONGO_URI, 
  {
    useNewUrlParser: true, 
    useUnifiedTopology: true
  }, 
  () => {
    console.log(`connected to mongo: ${MONGO_URI}`)
  }
)

db.Game.create([
  {
    gamename: "Monopoly",
    pic: "/Monopoly.jpg",
    gametype: "Board Game",
    genre: "family fun",
  },
])
  .then(() => {
    console.log("Success!");
    process.exit();
  })
  .catch((err) => {
    console.log("Failure!", err);
    process.exit();
  });

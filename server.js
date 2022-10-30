// Modules and Globals
require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const gamesController = require("./controllers/games_controller");


//MONGOOSE
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(
  MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log(`connected to mongo: ${MONGO_URI}`)
  }
)


// Express Settings

app.use(express.json());

app.use("/games", gamesController);


// Controllers & Routes
//app.use("/games/:id", gamesController)


// Listen for Connections
app.listen(process.env.PORT);

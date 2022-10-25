// Modules and Globals
require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require('mongoose')


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
// Express Settings

// Controllers & Routes

// Listen for Connections
app.listen(process.env.PORT);
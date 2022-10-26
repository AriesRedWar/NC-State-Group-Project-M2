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
//Middleware


// DEPENDENCIES


// MIDDLEWARE
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
app.set('views', __dirname + '/views')
app.use(express.json())

// Controllers & Routes

const GamesController = require('./controllers/games_controller')
app.use('/games', GamesController)


app.get('*', (req, res) => {
    res.render('404')
  })
  

// Listen for Connections
app.listen(process.env.PORT);
const db = require("./models");
const mongoose = require("mongoose");
require("dotenv").config();

//MONGOOSE
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(
  MONGO_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log(`connected to mongo: ${MONGO_URI}`);
  }
);

db.Game.create([
  {
    gamename: "Monopoly",
    pic: "/Monopoly.jpg",
    genre: "Board game",
    description: "Monopoly is a situation where there is a single seller in the market. In conventional economic analysis, the monopoly case is taken as the polar opposite of perfect competition. By definition, the demand curve facing the monopolist is the industry demand curve which is downward sloping.",
  },
  {
    gamename: "Solitaire",
    pic: "/solitaire.png",
    genre: "Playing card game",
    description: "Patience, card solitaire or solitaire, is a genre of card games whose common feature is that the aim is to arrange the cards in some systematic order or, in a few cases, to pair them off in order to discard them.",
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

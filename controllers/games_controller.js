const express = require('express')
const router = express.Router()
const Game = require('../models/games')


//Index/Get Route
router.get('/games', async  (req, res) => {
  console.log('WE SMACKED THE GET ROUTER /games !!!')
  Game.find()
    .then(foundGames => {
      res.json(foundGames)    //res.render
    })
    .catch(err => {
      console.log(err)
      res.json('error404')
    })
})

router.get('/games/:id', async  (req, res) => {
  console.log('WE SMACKED THE GET ROUTER /games/:id  FIND ONE!!!!!!', req.params)
  Game.findById(req.params.id)
    .then(foundGames => {
      res.json(foundGames)
    })
    .catch(err => {
      console.log(err)
      res.render('error404')
    })
})

router.get("/:id/edit", (req, res) => {
  Game.find()
    .then((foundGames) => {
      res.json(foundGames);
    })
    .catch((err) => {
      console.log(err);
      res.render("error404");
    });
});

//Put/Patch Route
router.put("/:id", (req, res) => {
  console.log("are you working?", req.params.id, req.body)
  Game.findByIdAndUpdate(req.params.id, req.body)
    .then((foundGames) => {
      console.log(foundGames)
      res.status(foundGames);
    })
    .catch((err) => {
      console.log(err);
      res.render("error404");
    });
});

//Post Route
router.post('/', (req, res) => {
  Game.create(req.body)
    .then((foundGames) => {
      res.json(foundGames)
    })
    .catch(err => {
      console.log(err)
      res.render('error404')
    })
})


//Delete Route
router.delete("/:id", (req, res) => {
  console.log(' DELETE ROUTE!!!! WE SMACKED THE GET ROUTER /games:id !!!')
  Game.findByIdAndDelete(req.params.id)
    .then(() => {
      res.send("Delete was successful");
    })
    .catch((err) => {
      console.log(err);
      res.render("error404");
    });
});

module.exports = router;
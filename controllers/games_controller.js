const express = require('express')
const router = express.Router()
const Game = require('../models/games')


//Index/Get Route
router.get('/', (req, res) => {
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

router.get('/:id', (req, res) => {
    Game.find()
        .then(foundGames => {
            res.json(foundGames)
        })
        .catch(err => {
            console.log(err)
            res.render('error404')
        })
})

router.get("/games/:id/edit", (req, res) => {
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
  Game.findOne()
    .then((foundGames) => {
      res.json(foundGames);
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
router.delete("/games/:id", (req, res) => {
  console.log('WE SMACKED THE GET ROUTER /games:id !!!')
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
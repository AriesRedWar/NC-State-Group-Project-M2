const express = require('express');
const games = require('../models/games');
const router = express.Router()
const Game = require('../models/games')

router.get('/seed', (req, res) => {
    Game.insertMany([{
        gamename: "Monopoly",
        pic: "/Monopoly.jpg",
        gametype: "Board Game",
        genre: "family fun",
    },
    {
        gamename: "Solitaire",
        pic: "/Monopoly.jpg",
        gametype: "Card Game",
        genre: "Solo",

    }])
        .then(res.status(200).json({
            message: 'Seed successful'
        }))
        .catch(res.status(400).json({
            message: 'Seed unsuccessful'
        }))
})

//Index/Get Route
router.get('/', (req, res) => {
    console.log('WE SMACKED THE GET ROUTER /games !!!')
    Game.find()
        .then(foundGames => {
            res.json(foundGames)
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


//Put/Patch Route
router.put('/:id', (req, res) => {
    Game.findOne()
        .then(foundGames => {
            res.json(foundGames)
        })
        .catch(err => {
            console.log(err)
            res.render('error404')
        })
})

//Post Route
router.post('/', (req, res) => {
    Game.create(req.body)
        .then(() => {
            res.json(foundGames)
        })
        .catch(err => {
            console.log(err)
            res.render('error404')
        })
})


//Delete Route
router.delete('/:id', (req, res) => {
    Game.findByIdAndDelete(req.params.id)
        .then(() => {
            res.send('Delete was successful')
        })
        .catch(err => {
            console.log(err)
            res.render('error404')
        })
})

module.exports = router
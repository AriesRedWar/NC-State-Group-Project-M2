const express = require('express')
const router = express.Router()
const db = require("../models");

  router.get('/', async (req,res) => {
    db.find()
    .then((games) => {
        res.render("games/index", { games });
      })
      .catch((err) => {
        console.log(err);
        res.render("error404");
      });
});

router.post('/', async (req,res) => {
    console.log('req.body!!', req.body);
    const savedPost = await MongoBlogPostModel.create(req.body);
    res.json(savedPost);
});


  module.exports = router;

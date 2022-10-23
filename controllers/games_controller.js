const router = require("express").Router();
const db = require("../models");

//Index
router.get("/", (req, res) => {
  db.Place.find()
    .then((games) => {
      res.render("games/index", { games });
    })
    .catch((err) => {
      console.log(err);
      res.render("error404");
    });
});

// add new place page
router.get("/new", (req, res) => {
  res.render("games/new");
});

// add place New Submit
router.post("/", (req, res) => {
  db.Place.create(req.body)
    .then(() => {
      res.redirect("/games");
    })
    .catch((err) => {
      // console.log('err', err)
      if (err && err.name == "ValidationError") {
        let message = "Validation Error:";
        for (var field in err.errors) {
          message += ` ${field} was ${err.errors[field].value}.`;
          message += ` ${err.errors[field].message}`;
        }
        console.log("Validation error message", message);

        // Todo: Find all validation errors
        res.render("games/new", { message });
      }
      res.render("error404");
    });
});

// show place page
router.get("/:id", (req, res) => {
  db.Place.findById(req.params.id)
  .populate('comments')
    .then((place) => {
      // console.log(place.comments)
      res.render("games/show", { place });
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});

// Edit a place
router.put('/:id', (req, res) => {
  db.Place.findByIdAndUpdate(req.params.id, req.body)
  .then(() => {
      res.redirect(`/games/${req.params.id}`)
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

// delete a place
router.delete('/:id', (req, res) => {
  db.Place.findByIdAndDelete(req.params.id)
  .then(place => {
      res.redirect('/games')
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

// Edit form
router.get('/:id/edit', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place => {
      res.render('games/edit', { place })
  })
  .catch(err => {
      res.render('error404')
  })
})

// post a comment submition
router.post('/:id/comment', (req, res) => {
  // console.log(req.body)
  req.body.rant = req.body.rant ? true : false
  db.Place.findById(req.params.id)
  .then(place => {
      db.Comment.create(req.body)
      .then(comment => {
          place.comments.push(comment.id)
          place.save()
          .then(() => {
              res.redirect(`/games/${req.params.id}`)
          })
      })
      .catch(err => {
          res.render('error404')
      })
  })
  .catch(err => {
      res.render('error404')
  })
  // res.send('GET /games/:id/comments stub')
})


router.delete("/:id/comment/:id", (req, res) => {
  db.Place.findById(req.params.id)
  .then(place => {
    db.Comment.findByIdAndDelete(req.body)
    res.redirect(`/games/${req.params.id}`)
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/rubicore2', function(req, res, next) {
  res.render('index', { title: 'Rubicore' });
});

router.get('/rubicore2/home', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/rubicore2/contacts', function(req, res, next) {
  res.render('index', { title: 'contacts' });
});

router.post("/create-key", (req,res,next) => {
  console.log("--- RUBICORE CREATE KEY TRIGGERED ----");
  res.status(200).send({received: req.body})
})


module.exports = router;

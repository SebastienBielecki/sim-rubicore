var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/rubicore2', function(req, res, next) {
  res.render('index', { title: 'Rubicore' });
});

router.post("/create-key", (req,res,next) => {
  console.log("--- RUBICORE CREATE KEY TRIGGERED ----");
  res.status(200).send({received: req.body})
})


module.exports = router;

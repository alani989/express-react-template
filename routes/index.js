var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({greeting:'Welcome To React Express JS Template'});
});

module.exports = router;

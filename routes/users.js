var express = require('express');
var router = express.Router();

/* GET users profile. */
router.get('/', function(req, res, next) {
  res.send(req.user);
});

module.exports = router;

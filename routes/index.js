var express = require("express");
var router = express.Router();
var appModel = require("../model/app.model");

/* GET home page. */
router.get("/", function(req, res, next) {
  appModel.all().then(item => {
    // res.render("index", );
    res.json({an:'hung'});
  });
  
});

module.exports = router;

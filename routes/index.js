var express = require('express');
var router = express.Router();
const { albumGenerator } = require('../helpers/albumGenerator');
const { songGenerator } = require('../helpers/albumGenerator');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { albums: albumGenerator(3) });
});

module.exports = router;

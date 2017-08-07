var express = require('express');
var router = express.Router();
const { albumGenerator } = require('../helpers/albumGenerator');
const { songGenerator } = require('../helpers/albumGenerator');

const _albums = {
  data : albumGenerator(10)
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('albums', {
    data: _albums.data
  });
});

router.get('/:albumId', function(req, res, next){
  const id = parseInt(req.params.albumId);
  if (id) {
    const albumIndex = id - 1;
    res.render('albums_details', {
      data: _albums.data[albumIndex]
    });
  }
});

module.exports = router;

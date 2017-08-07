var express = require('express');
var router = express.Router();

const generateUsersArray = (numberUsers) => {
  let arr = [];
  for (var i = 0; i < numberUsers; i++) {
    arr.push({
      firstName: 'Roberto',
      lastName: 'Torres',
      username: 'Chonguis',
      email: 'codecodecode@coding.code'
    });
  }
  return arr;
};

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', { users: generateUsersArray(5) });
});


module.exports = {
  router,
  generateUsersArray
}

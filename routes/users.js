var express = require('express');
var router = express.Router();
var usersController = require('../controllers/users')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', { title: 'Vista de usuarios' });
});
/* POST users listing. */
router.post('/', function(req, res, next) {
  // res.send('Probando');
  usersController.createUser(req, res);
});

module.exports = router;

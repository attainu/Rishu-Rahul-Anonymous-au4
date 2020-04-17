var express = require('express');
var router = express.Router();
var usersApi = require('../controllers/user')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/create-session', usersApi.createSession);
router.post('/register', usersApi.signUp);

module.exports = router;

var express = require('express');
var router = express.Router();

/* GET home page. */
var userRouter = require('./users');
var movieRouter = require('./movie');
app.use('/user', userRouter);
app.use('/movie', movieRouter);

module.exports = router;

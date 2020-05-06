var express = require('express');
var router = express.Router();

/* GET home page. */
var userRouter = require('./users');
var movieRouter = require('./movie');
var episodeRouter = require('./episode');
var showRouter = require('./show');
var seasonRouter = require('./season');
var genreRouter = require('./genre');
var directorRouter = require('./director');
var actorRouter = require('./actor');
 

app.use('/user', userRouter);
app.use('/movie', movieRouter);
app.use('/episodes', episodeRouter);
app.use('/show', showRouter);
app.use('/season', seasonRouter);
app.use('/movie', genreRouter);
app.use('/director',directorRouter);
app.use('/actor',actorRouter);




module.exports = router;

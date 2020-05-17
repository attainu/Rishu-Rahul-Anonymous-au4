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
 

router.use('/user', userRouter);
router.use('/movie', movieRouter);
router.use('/episodes', episodeRouter);
router.use('/show', showRouter);
router.use('/season', seasonRouter);
router.use('/genre', genreRouter);
router.use('/director',directorRouter);
router.use('/actor',actorRouter);




module.exports = router;

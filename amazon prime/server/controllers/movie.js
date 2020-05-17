const Movie = require("../models/movie");
const Actor = require("../models/actor");
const Director = require("../models/Director");
const Genre = require("../models/genre");

const controller = {
  add: async (req, res) => {
    try {
      const {
        body: {
          moviedbId,
          adult,
          posterPath,
          backdropPath,
          name,
          overview,
          originalTitle,
          language,
          rating,
          releaseDate,
          directorId
        },
      } = req;
      let movie = await Movie.create({
        moviedbId,
        adult,
        posterPath,
        backdropPath,
        name,
        overview,
        originalTitle,
        language,
        rating,
        releaseDate,
        directorId
      });
      res.send(movie);
    } catch (error) {
      res.json({
        status: 400,
        message: "bad request " + error,
      });
    }
  },

  update: async (req, res) => {
    try {
      const {
        body: {
          moviedbId,
          adult,
          posterPath,
          backdropPath,
          name,
          overview,
          originalTitle,
          language,
          rating,
          releaseDate,
          directorId
        },
      } = req;

      const {
        params: { id },
      } = req;
      let movie = await Movie.update(
        {
          moviedbId,
          adult,
          posterPath,
          backdropPath,
          name,
          overview,
          originalTitle,
          language,
          rating,
          releaseDate,
          directorId
        },
        { where: { id } }
      );
      await movie.save();
      res.send(movie);
    } catch (error) {
      res.json({
        status: 400,
        message: "bad request " + error,
      });
    }
  },

  getAll: async (req, res) => {
    try {
      let movie = await Movie.findAll();
      res.send(movie);
    } catch (error) {
      res.json({
        status: 400,
        message: "bad request " + error,
      });
    }
  },

  getOne: async (req, res) => {
    try {
      const {
        params: { id },
      } = req;
      let movie = await Movie.findAll({
        where: { id },
        include: [Actor, Director, Genre],
      });
      res.send(movie);
    } catch (error) {
      res.json({
        status: 400,
        message: "bad request " + error,
      });
    }
  },

  delete: async (req, res) => {
    try {
      const {
        params: { id },
      } = req;
      let movie = await Movie.destroy({ where: { id } });
      res.send("deleted successfully");
    } catch (error) {
      res.json({
        status: 400,
        message: "bad request " + error,
      });
    }
  },
};

module.exports = controller;

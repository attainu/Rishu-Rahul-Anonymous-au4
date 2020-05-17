const Movie = require("../models/movie");
const Actor = require("../models/actor");
const Director = require("../models/Director");
const Genre = require("../models/genre");
const Show = require('../models/show');
const Season = require("../models/season");

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
          originalTitle,
          language
        },
      } = req;
      let show = await Show.create({
          moviedbId,
          adult,
          posterPath,
          backdropPath,
          name,
          originalTitle,
          language
      });
      res.send(show);
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
            originalTitle,
            language
        },
      } = req;

      const {
        params: { id },
      } = req;
      let show = await Show.update(
        {
            moviedbId,
            adult,
            posterPath,
            backdropPath,
            name,
            originalTitle,
            language
        },
        { where: { id } }
      );
      await show.save();
      res.send(show);
    } catch (error) {
      res.json({
        status: 400,
        message: "bad request " + error,
      });
    }
  },

  getAll: async (req, res) => {
    try {
      let show = await Show.findAll({});
      res.send(show);
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
      let show = await Show.findAll({
        where: { id },
        // include: [Actor, Director, Genre],
      });
      res.send(show);
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
      let show = await Show.destroy({ where: { id } });
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

const Movie = require("../models/movie");
const Actor = require("../models/actor");
const Director = require("../models/movie");
const Genre = require("../models/genre");
const Episode =  require("../models/episode");

const controller = {
  add: async (req, res) => {
    try {
      const {
        body: {
          name,
          episodeNumber,
          overview,
          seasonNumber,
          stillPath,
          rating,
          releaseDate
        },
      } = req;
      let episode = await Episode.create({
          name,
          episodeNumber,
          overview,
          seasonNumber,
          stillPath,
          rating,
          releaseDate
      });
      res.send(episode);
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
            name,
            episodeNumber,
            overview,
            seasonNumber,
            stillPath,
            rating,
            releaseDate
        },
      } = req;

      const {
        params: { id },
      } = req;
      let episode = await Episode.update(
        {
            name,
            episodeNumber,
            overview,
            seasonNumber,
            stillPath,
            rating,
            releaseDate
        },
        { where: { id } }
      );
      await episode.save();
      res.send(episode);
    } catch (error) {
      res.json({
        status: 400,
        message: "bad request " + error,
      });
    }
  },

  getAll: async (req, res) => {
    try {
      let episode = await Episode.findAll({});
      res.send(episode);
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
      let episode = await Episode.findAll({
        where: { id },
        // include: [Actor, Director, Genre],
      });
      res.send(episode);
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
      let episode = await Episode.destroy({ where: { id } });
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

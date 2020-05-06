const Movie = require("../models/movie");
const Actor = require("../models/actor");
const Director = require("../models/movie");
const Genre = require("../models/genre");
const Season = require('../models/season');
const Show = require("../models/show");

const controller = {
  add: async (req, res) => {
    try {
      const {
        body: {
            seasonNumber,
            rating,
            releaseDate
        },
      } = req;
      let season = await Season.create({
            seasonNumber,
            rating,
            releaseDate
      });
      res.send(season);
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
            seasonNumber,
            rating,
            releaseDate
        },
      } = req;

      const {
        params: { id },
      } = req;
      let season = await Season.update(
        {
            seasonNumber,
            rating,
            releaseDate
        },
        { where: { id } }
      );
      await season.save();
      res.send(season);
    } catch (error) {
      res.json({
        status: 400,
        message: "bad request " + error,
      });
    }
  },

  getAll: async (req, res) => {
    try {
      let season = await Season.findAll({});
      res.send(season);
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
      let season = await Season.findAll({
        where: { id }
        // include: [Show,Episodes],
      });
      res.send(season);
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
      let season = await Season.destroy({ where: { id } });
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

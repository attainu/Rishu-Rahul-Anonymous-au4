const db = require('../confiq/sequelize');
const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');
var {DataTypes} = require("sequelize");
const Actor = require('./actor');
const Director = require('./director');
const Genre = require('./genre'); 


let Movie = db.define('movie' ,{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      moviedbId : {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      adult: DataTypes.BOOLEAN,
      posterPath: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      backdropPath: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      overview: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      originalTitle: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      language :{
        type: DataTypes.STRING,
        allowNull: false,
      },
      rating : {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      releaseDate : {
        type: DataTypes.STRING,
        allowNull: false,
      }
});

Movie.hasMany(Genre);
Genre.belongsTo(Movie);
Movie.hasMany(Actor);
Actor.belongsTo(Movie);
Movie.hasMany(Director);
Director.belongsTo(Movie);

module.exports = Movie ;
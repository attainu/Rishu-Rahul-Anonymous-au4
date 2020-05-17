const db = require('../confiq/sequelize');
const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');
var {DataTypes} = require("sequelize");
const Actor = require('./actor');
const Director = require('./director');
const Genre = require('./genre'); 
const Season = require('./season');
const Episode = require('./episode');

let Show = db.define('show' ,{
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
      orignalTitle: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      langugae :{
        type: DataTypes.STRING,
        allowNull: false,
      }
});

Show.hasMany(Genre);
Genre.belongsTo(Show);
Show.hasMany(Actor);
Actor.belongsTo(Show);
Show.hasMany(Director);
Director.belongsTo(Show);
Show.hasMany(Season);
Season.belongsTo(Show);
Show.hasMany(Episode);
Episode.belongsToMany(Show , { through : Season});

module.exports = Show ;
const db = require('../confiq/sequelize');
const Sequelize = require('sequelize');
const bcrypt = require('bcryptjs');
var {DataTypes} = require("sequelize");
const Actor = require('./actor');
const Director = require('./director');
const Genre = require('./genre'); 
const Season = require('./season');

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
Genre.belongsToMany(Show);
Show.hasMany(Actor);
Actor.belongsToMany(Show);
Show.hasMany(Director);
Director.belongsToMany(Show);
Show.hasMany(Season);
Season.belongsTo(Show);
Show.hasMany(Episode , {through : Season});
Episode.belongsTo(Show , { through : Season});

module.exports = Show ;
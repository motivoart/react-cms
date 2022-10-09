//import sequelize
var Sequelize = require('sequelize');
// importing connection database
var database = require('../../../config/db');

//console.log(database);

var User = database.define('user', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: Sequelize.STRING,
  password: Sequelize.STRING,
  role: Sequelize.STRING,
});

module.exports = User

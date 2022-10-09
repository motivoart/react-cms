//import sequelize
var Sequelize = require('sequelize');
// importing connection database
var database = require('../../../config/db');

//console.log(database);

var Log = database.define('log', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  module_id: Sequelize.INTEGER,
  module_name: Sequelize.STRING,
  user_id: Sequelize.INTEGER,
  username: Sequelize.STRING,
  action: Sequelize.STRING,
  date: Sequelize.DATE,
  url: Sequelize.STRING,
  ip_address: Sequelize.STRING,
}, {
  timestamps: false
});

module.exports = Log

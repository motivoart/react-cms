var Sequelize = require('sequelize');

const database = new Sequelize(
  'macms', // name database
  'root', // user database
  'root', // password database
  {
    host: 'localhost',
    dialect: 'mysql', // mariadb / sqlite / postgres
    port: '3307',
    define: {
      timestamps: false
    }
  }
);

database.sync()

module.exports = database;

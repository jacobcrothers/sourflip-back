const Sequelize = require("sequelize");

const db = new Sequelize('messenger', 'postgres', '123', {
  host: 'localhost',
  dialect: 'postgres'
});

module.exports = db;

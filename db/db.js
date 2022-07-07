const Sequelize = require("sequelize");

const db = new Sequelize('dd3momogl4484p', 'vnmocjazdxqygp', 'cf0361e3d07a4d388e1d5d152f95881682c2aa18c378e5ce61653e31365003be', {
  host: 'ec2-54-159-22-90.compute-1.amazonaws.com',
  dialect: 'vnmocjazdxqygp'
});

module.exports = db;

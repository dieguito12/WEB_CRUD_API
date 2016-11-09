var Sequelize = require('sequelize');

var sequelize = new Sequelize('WebCrud', 'root', 'ibornin1988', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 10,
    min: 0,
    idle: 10000
  },

});

module.exports = sequelize;
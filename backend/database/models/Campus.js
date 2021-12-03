const Sequelize = require('sequelize');
const db = require('../db');

const Campus = db.define("campus", {

  name: {
    type: Sequelize.STRING,
    allowNull: false
  },

  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue: "https://www.traditionalbuilding.com/.image/t_share/MTU1OTk4MjkwMTg0MjUxMTIw/3---prospect-walk-looking-southeast.jpg"
  },

  address: {
    type: Sequelize.STRING,
    allowNull: false
  },

  description: {
    type: Sequelize.TEXT
  }

});

module.exports = Campus;
const Sequelize = require('sequelize');
const db = require('../db');

const Student = db.define("student", {

  firstname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false
  },

  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue: "https://icons.iconarchive.com/icons/papirus-team/papirus-status/128/avatar-default-icon.png"
  },
  gpa: {
    type: Sequelize.REAL,
  }
});

module.exports = Student;
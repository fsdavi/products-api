const Sequelize = require('sequelize');
const database = require('../db');

const Categoria = database.define('Teste', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  nome: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});

module.exports = Categoria;
const env = require('./env.js');

const Sequelize = require('sequelize');
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: "ec2-34-233-214-228.compute-1.amazonaws.com",
  dialect: env.dialect,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Produto = require('../models/produto.model.js')(sequelize, Sequelize);

module.exports = db;
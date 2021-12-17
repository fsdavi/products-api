
const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://chpwaramdrdpla:91f1d55f30686b010474a14b3c1a46c4d47b1a0bdd349039c30a436b2382e268@ec2-34-233-214-228.compute-1.amazonaws.com:5432/d7rhu9jcf54t0b', {
  dialect: 'postgres',
  host: 'ec2-34-233-214-228.compute-1.amazonaws.com',
  port: 5432
});

module.exports = sequelize;
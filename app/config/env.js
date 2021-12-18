const env = {
  database: 'd7rhu9jcf54t0b',
  username: 'chpwaramdrdpla',
  password: '91f1d55f30686b010474a14b3c1a46c4d47b1a0bdd349039c30a436b2382e268',
  host: 'ec2-34-233-214-228.compute-1.amazonaws.com',
  port: 5432,
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

module.exports = env;
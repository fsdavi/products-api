const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');

const db = require('./app/config/db.config.js');
let router = require('./app/routers/router.js');

const app = express();

module.exports.handler = serverless(app);

db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync with { force: true }');
});

app.use(cors({
  origin: '*'
}));

app.use('/.netlify/functions/api', router);
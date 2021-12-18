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
  origin: '*',
  optionsSuccessStatus: 200
}));

app.use('/.netlify/functions/api', router);

const server = app.listen(8080, function () {

  let host = server.address().address
  let port = server.address().port

  console.log("App listening at http://%s:%s", host, port);
})
const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');

const app = express();
const router = express.Router();

module.exports.handler = serverless(app);

var data = require('../data/productsMock.json');

app.use(cors({
  origin: '*'
}));

router.get('/produtos', async (_, res) => {
  const database = require('./db');
  const Categoria = require('./models/categoria');
  await database.sync();

  let produtosAjustados = data.produtos.map(produto => ({id: produto.id, nome: produto.nome}));
  res.json(produtosAjustados);
})

router.get('/produtos/:id', (req, res) => {
  var IdDoProduto = req.params.id;
  var produtoRecuperadoPorId = data.produtos.find(produto => produto.id == IdDoProduto);
  res.json(produtoRecuperadoPorId);
});

app.use('/.netlify/functions/api', router);
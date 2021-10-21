const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');

const app = express();
const router = express.Router();

module.exports.handler = serverless(app);

var data = require('../data/productsMock.json');

router.get('/produtos', cors(), (req, res) => {
  let produtosAjustados = data.produtos.map(produto => ({id: produto.id, nome: produto.nome}));
  res.json(produtosAjustados);
})

router.get('/produtos/:id', cors(), (req, res) => {
  var IdDoProduto = req.params.id;
  var produtoRecuperadoPorId = data.produtos.find(produto => produto.id == IdDoProduto);
  res.json(produtoRecuperadoPorId);
})

app.use('/.netlify/functions/api', router);
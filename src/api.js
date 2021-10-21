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

app.use((_, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.get('/produtos', (_, res) => {
  let produtosAjustados = data.produtos.map(produto => ({id: produto.id, nome: produto.nome}));
  res.json(produtosAjustados);
})

router.get('/produtos/:id', (req, res) => {
  var IdDoProduto = req.params.id;
  var produtoRecuperadoPorId = data.produtos.find(produto => produto.id == IdDoProduto);
  res.json(produtoRecuperadoPorId);
});

app.use('/.netlify/functions/api', router);
const express = require('express');
const app = express();
const port = process.env.PORT || 3000

var data = require('./data/productsMock.json');

app.get('/produtos', (req, res) => {
  res.json(data);
})

app.get('/produtos/:id', (req, res) => {
  var IdDoProduto = req.params.id;
  var produtoRecuperadoPorId = data.produtos.find(produto => produto.id == IdDoProduto);
  res.json(produtoRecuperadoPorId);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})
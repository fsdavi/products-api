let express = require('express');
let router = express.Router();
var data = require('../../../data/productsMock.json');

router.get('/produtos', (_, res) => {
  let produtosAjustados = data.produtos.map(produto => ({id: produto.id, nome: produto.nome}));
  res.json(produtosAjustados);
})

router.get('/produtos/:id', (req, res) => {
  var IdDoProduto = req.params.id;
  var produtoRecuperadoPorId = data.produtos.find(produto => produto.id == IdDoProduto);
  res.json(produtoRecuperadoPorId);
});

module.exports = router;
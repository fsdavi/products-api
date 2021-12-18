let express = require('express');
let router = express.Router();
const produtos = require('../controllers/ControllerProduto.js');

router.post('/produtos/create', produtos.create);
router.get('/produtos', produtos.consultaTodosProdutos);
router.get('/produtos/:id', produtos.consultaProdutoPorId);
router.delete('/produtos/delete/:id', produtos.deletaProdutoPorId);

module.exports = router;
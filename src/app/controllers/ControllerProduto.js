const db = require('../config/db.config.js');
const Produto = db.Produto;

exports.create = (req, res) => {
  let produto = {};

  try {
    produto.nome = req.body.nome;
    produto.categoria = req.body.categoria;
    produto.estoque = req.body.estoque;
    produto.valorMedioDeVenda = req.body.valorMedioDeVenda;

    Produto.create(produto).then(result => {
      res.status(200).json({
        message: 'Produto criado com sucesso e possui o id: ' + result.id,
        produto: result
      });
    });
  } catch (error) {
    res.status(500).json({
      message: "Falhou em criar novo produto!",
      error: error.message
    });
  }
}

exports.consultaTodosProdutos = (req, res) => {
  Produto.findAll()
    .then(infosProduto => {
      res.status(200).json({
        message: "Consulta realizada com sucesso!",
        produtos: infosProduto
      })
    })
    .catch(error => {
      console.log(error);

      res.status(500).json({
          message: "Erro em consultar todos os produtos!",
          error: error
      });
    });
}

exports.consultaProdutoPorId = (req, res) => {
  let produtoId = req.params.id;

  Produto.findByPk(produtoId)
    .then(produto => {
      res.status(200).json({
          message: "Consulta realizada com sucesso ao produto com id: " + produtoId,
          produtos: produto
      });
    })
    .catch(error => {
      console.log(error);

      res.status(500).json({
          message: "Erro ao consultar produto por id!",
          error: error
      });
    });
}

exports.deletaProdutoPorId = async (req, res) => {
  try{
      let produtoId = req.params.id;
      let produto = await Produto.findByPk(produtoId);

      if(!produto){
          res.status(404).json({
              message: "Não existe produto com o id: " + produtoId,
              error: "404",
          });
      } else {
          await produto.destroy();
          res.status(200).json({
              message: "Produto deletado com sucesso, id: " + produtoId,
              produto: produto,
          });
      }
  } catch(error) {
      res.status(500).json({
          message: "Erro ao deletar produto com id: " + req.params.id,
          error: error.message,
      });
  }
}
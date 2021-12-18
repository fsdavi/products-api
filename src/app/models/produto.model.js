module.exports = (sequelize, Sequelize) => {
	const Produto = sequelize.define('produto', {
	  id: {
			type: Sequelize.INTEGER,
			autoIncrement: true,
			primaryKey: true
    },
	  nome: {
			type: Sequelize.STRING
	  },
    categoria: {
      type: Sequelize.INTEGER,
    },
    estoque: {
      type: Sequelize.INTEGER,
    },
    valorMedioDeVenda: {
      type: Sequelize.INTEGER,
    }
	});

	return Produto;
}
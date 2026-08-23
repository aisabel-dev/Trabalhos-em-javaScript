const produtos = [

	{

		nome: "Carro",
		preco: 789.500
	},

	{

		nome: "Telefone",
		preco: 67.036
	},

	{

		nome: "Compuyador",
		preco: 98.964
	}

]

const total = produtos.reduce(function(acomulador,item){

	return acomulador + item.preco 
}, 0)

console.log(total)

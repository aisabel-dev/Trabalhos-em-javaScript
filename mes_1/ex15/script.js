const produtos = [


	{

		nome: "Bola",
		preco: 55
	},

	{

		nome: "Camisa",
		preco: 35
	},

	{

		nome: "Telefone",
		preco: 150
	}

]

const novo_produto = produtos.filter(function(item){

	return item.preco >= 50 && item.preco <= 200

})

console.log(novo_produto)

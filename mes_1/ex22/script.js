const produtos = [

	{

		nome: "Telefone",
		preco: 89.456
	},

	{

		nome: "Auricular",
		preco: 6.755
	},

	{

		nome: "Carregador",
		preco: 3.500
	}

]

const desconto = produtos.map(function(item){

	return item.preco * 0.9
}).reduce(function(acomulador, valor){

	return acomulador + valor 
}, 0)

console.log(desconto)

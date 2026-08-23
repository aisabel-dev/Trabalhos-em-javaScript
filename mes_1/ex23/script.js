const produtos = [

	
	{
	
		nome: "Arroz",
		preco: 48.579,
		categoria: "Alimento"
	},

	{

		nome: "Telefone",
		preco: 169.509,
		categoria: "Eletronicos"
	},

	{

		nome: "Camisa",
		preco: 5.999,
		categoria: "Roupa"
	}

]

const total = produtos.filter(function(item){

	return item.categoria == "Alimento"
}).map(function(valor){

	return valor.preco
}).reduce(function(acomulador, valores){

	return acomulador + valores
}, 0)

console.log(total)

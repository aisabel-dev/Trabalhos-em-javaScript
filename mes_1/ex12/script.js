const produtos = [
	{
		nome: "Telefone",
		preco: 95.599
	},

	{
		nome: "Colunas",
		preco: 297.049
	},

	{
		nome: "Computador",
		preco: 432.899
	}
]

const dolar = produtos.map((valor) => valor.preco / 5);

console.log(dolar);


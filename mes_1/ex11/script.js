const usuario = [
	{
		nome: "Anderson",
		idade: 22
	},

	{
		nome: "Josue",
		idade: 19
	},

	{
		nome: "Loilo",
		idade: 22
	},

	{
		nome: "Sellynho",
		idade: 28
	},

	{
		nome: "Fandrio",
		idade: 22
	},

	{
		nome: "Catarina",
		idade: 31
	},

	{
		nome: "Meiraldina",
		idade: 19
	},

	{
		nome: "Percelana",
		idade: 20
	},

	{
		nome: "Conceicao",
		idade: 26
	},

	{
		nome: "Justina",
		idade: 29
	}
]

const novo = usuario.map(function(novaLista){
	return novaLista.nome;
});

console.log(novo);

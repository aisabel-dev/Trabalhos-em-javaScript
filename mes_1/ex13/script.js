const usuario = [
	
	{
		nome: "Anderson",
		idade: 22
	},

	{
		nome: "Sellynho",
		idade: 29
	},

	{
		nome: "Josue",
		idade: 19
	},

	{
		nome: "Rosario",
		idade: 13
	}
];


const novo = usuario.map(function(user){
	return {
		nome: user.nome,
		idade: user.idade,
		maiorIdade: user.idade > 18
	}
});

console.log(novo);

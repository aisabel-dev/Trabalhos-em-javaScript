const user = [

	{

		nome: "Andrrson",
		email: "anderson@gmail.com",
		estado: true
	},

	{

		nome: "Fandrio",
		email: "fandrio@gmail.con",
		estado: false
	},

	{

		nome: "Sellynho",
		email: "sellynho@gmail.con",
		estado: true
	},

	{

		nome: "Josue",
		email: "josue@gmail.com",
		estado: false
	}


]


const ativo = user.filter(function(item){

	return item.estado
}).map(function(itens){

	return itens.email
})

console.log(ativo)

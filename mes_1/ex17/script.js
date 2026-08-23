const user = [

	{
		id: 1,
		nome: "Anderson",
		idade: 22
	},

	{

		id: 2,
		nome: "Sellynho",
		idade: 29
	},

	{

		id: 3,
		nome: "Fandrio",
		idade: 20
	},

	{

		id: 4,
		nome: "Josue",
		idade: 19
	}

]

const achado = user.find(function(item){

	return item.id == 3
})

console.log(achado)

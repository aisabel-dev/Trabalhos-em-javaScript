const usuario = [

	{
		nome: "Anderson",
		idade: 22,
		estado: true
	},

	{

		nome: "Sellynho",
		idade: 29,
		estado: false
	},

	{

		nome: "Fandrio",
		idade: 22,
		estado: true
	},

	{

		nome: "Josue",
		idade: 19,
		estado: false
	}
]

const filtrado = usuario.filter(function(item){

	return item.estado;
})

console.log(filtrado)

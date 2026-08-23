const user = [

	{

		nome: "Anderson",
		estado: true
	},

	{

		nome: "Rosario",
		estado: false
	},

	{

		nome: "Fandrio",
		estado: true
	}
]

const retorno = user.reduce(function(acomulador, item){

	if (item.estado){
	
		return acomulador + 1
	}
	else{

		return acomulador
	}
}, 0)

console.log(retorno)

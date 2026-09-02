async function buscarVarios(pokem){

	try{

		const resposta = await fetch("https://pokeapi.co/api/v2/pokemon/"+ pokem)

		const dados = await resposta.json()

		return {

                        nome: dados.name,
                        tipo: dados.types.map(item => item.type.name),                                                                              altura: dados.height,
                        peso: dados.weight,                                           imagem: dados.sprites.front_default
                }
	
	}catch(erro){


		console.log("Tenta novamente!")
	}
}

async function chamada(){

	const chamar = await Promise.all([

		buscarVarios("Pikachu"),
		buscarVarios("Charizard"),
		buscarVarios("Snivy"),
		buscarVarios("Lucario"),
		buscarVarios("Eevee")
	])

	console.log(chamar)
}

chamada()

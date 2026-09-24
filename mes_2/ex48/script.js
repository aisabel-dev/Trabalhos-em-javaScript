// Simulando uma API lenta com números gerados aleatoriamente de 1
// a quase 5 segundos

async function buscar(){

	try{

		const resposta = await	new Promise(function(resolve, reject){

				console.log("Processando...")
				setTimeout(function(){

					resolve("Tempo esperado...")
				}, (Math.random()*4+1)*1000)
			})


		return resposta;
	}catch(erro){

		console.log("Tente novamente", erro);
	}
}


async function chamar(){

	const item = await Promise.all([

		buscar(),
		buscar(),
		buscar(),
		buscar(),
		buscar()
	])

	console.log(item);
}

chamar()

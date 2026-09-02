async function buscarMoney(moeda){

	try{

		const resposta = await fetch (`https://economia.awesomeapi.com.br/json/last/${moeda}`)
		const dados = await resposta.json()
		
		console.log(dados);
	}catch(erro){

		console.log("Tente novamente!")
	}
}

buscarMoney("ao")

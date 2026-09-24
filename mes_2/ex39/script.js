// Moeda de convercao

async function buscarMoney(moeda){

	try{

		const resposta = await fetch(`https://economia.awesomeapi.com.br/json/last/${moeda}`)
		const dados = await resposta.json()	


		return {

			dolar:
			{

				nome:dados.USDBRL.name,
				cotacao: dados.USDBRL.bid
			},

			euro:
			{
				nome:dados.EURBRL.name,
				cotacao: dados.EURBRL.bid
			},

			bitcon:
			{ 
				nome:dados.BTCBRL.name,
				cotacao: dados.BTCBRL.bid
			},
		}

	}catch(erro){

		console.log("Tente novamente!")
	}
}

buscarMoney("USD-BRL,EUR-BRL,BTC-BRL").then(function(resultado){

	console.log(resultado)
})

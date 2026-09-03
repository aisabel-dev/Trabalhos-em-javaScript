async function buscarMoney(moeda){

	try{

		const resposta = await fetch(`https://economia.awesomeapi.com.br/json/last/${moeda}`)
		const dados = await resposta.json()	


		return {

			dolar: dados.USDBRL.name,
			usdcotacao: dados.USDBRL.bid,
			euro:dados.EURBRL.name,
			eurocotacao: dados.EURBRL.bid,
			bitcon: dados.BTCBRL.name,
			btccotacao: dados.BTCBRL.bid
			}
	}catch(erro){

		console.log("Tente novamente!")
	}
}

buscarMoney("USD-BRL,EUR-BRL,BTC-BRL").then(function(resultado){

	console.log(resultado)
})

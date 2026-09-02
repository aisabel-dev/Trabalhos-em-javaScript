async function buscarTempo(X,Y){

	try{

		const resposta = await fetch("https://api.open-meteo.com/v1/forecast?latitude="+X+"&longitude="+Y+"&current_weather=true");
		const dados = await resposta.json();


		return {
			tenperatura: dados.current_weather.temperature,
			condicao: dados.current_weather.weathercode
		}


	}catch(erro){

		console.log("Tente novamente");
	}

}

buscarTempo(27.7167,85.3167).then(function(resultado){

	console.log(resultado)
})

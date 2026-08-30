fetch("http://isso_nao_existr.co.ao").then(function(resposta){

	return resposta.json()

}).then(function(dados){

	console.log(dados)

}).catch(function(erro){

	console.log("Não foi possivel aceder a essa pagina")

})

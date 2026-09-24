// Busca dados da API do GitHub com timeout de 3 segundos.
// // Se a resposta demorar mais que isso, a busca é cancelada e cai no erro.
async function buscarTimeout(){

	try{

		const resposta = await Promise.race([
			fetch("https://api.github.com/users/octocat"),

			new Promise( function(resolve, reject){
				setTimeout(function(){
					reject("Tempo esgotado");

			}, 3000);

		})

		]);

		const dados = await resposta.json();

		return dados;

	}catch(erro){

		console.log("Tenta novamente");
	}
}

buscarTimeout().then(function(item){

	console.log(item)
})

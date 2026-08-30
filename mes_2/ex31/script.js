
async function buscarUser(nome){

	try{

		const resposta = await fetch("https://api.github.com/users/" + nome);
		const dados = await resposta.json();

		return {

			nome: dados.name, 
			bio: dados.bio, 
			seguidores: dados.followers
		}

	}catch(erro){

		console.log(erro);
	}


}


buscarUser("octocat").then(function(resultado){

	console.log(resultado)
})

async function buscarRepositorios(username){

	try{

		const resposta = await fetch("https://api.github.com/users/" + username +"/repos");

		const dados = await resposta.json();

		return dados.map(function(item){

			return {
				nome: item.name,
				stars: item.stargazers_count
			}
		})

	}catch(erro){

		console.log("Não consguimos carregar. Tente mais tarde");

	}

}

buscarRepositorios("octocat").then(function(resultado){

	console.log(resultado);
})

//buscar dados de duas API diefrentes e retornar um único dados com os seus
//repectivos nomes

async function buscarPoke(poken){
	try{
		const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + poken);
		const dados = await res.json();

		return {

			nome: dados.name
		}

	}catch(erro){
		console.log("Tente novamente", erro);
	}
}

async function buscarUser(user){
	try{
		const res = await fetch("https://api.github.com/users/" + user);
		const dados = await res.json();

		return {

			nome: dados.name
		}

	}catch(erro){
		console.log("Tente novamente", erro)
	}
}

async function chamarVarios(){
	try{
		const [poken, user] = await Promise.all([
			buscarPoke("Pikachu"),
			buscarUser("octocat")

		])
		const relatorio = {
			pokemon: poken.nome,
			devGithub: user.nome,
			geradoEm: new Date().toISOString()
		}

		console.log(relatorio);
	}catch(erro){

		console.log("Erro ao gerar relatorio", erro);
	}
	
	
}

chamarVarios();

async function buscarUser(user){

	try{

		const resposta = await fetch("https://api.github.com/users/"+ user);
		const dados = await resposta.json();
		return dados;
	}catch(erro){

		console.log("Tenta novamente!!");
	}
}

async function buscarVarios(){

	const users = await Promise.all([

		buscarUser("octocat"),
		buscarUser("torvalds"),
		buscarUser("andersonandreisabel-a11y")

	]);

	console.log(users);

}

buscarVarios();

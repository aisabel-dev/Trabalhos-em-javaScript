async function buscarUser(user){

	try{
		const resposta = await fetch("https://api.github.com/users/" + user);
		const dados = await resposta.json();

		return dados;

	}catch(erro){

		console.log("Não carregou. Tenta novamente!")
	}
}


async function buscarVarios() {
  const user1 = await buscarUser("octocat");
  console.log(user1);

  const user2 = await buscarUser("torvalds");
  console.log(user2);

  const user3 = await buscarUser("andersonandreisabel-a11y");
	console.log(user3);
}

buscarVarios();

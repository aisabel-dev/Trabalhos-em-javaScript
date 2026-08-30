async function buscarDados(){

	const resposta = await fetch ("https://api.github.com/users/andersonandreisabel-a11y");

	const dados = await resposta.json();

	console.log(dados);

}

buscarDados();

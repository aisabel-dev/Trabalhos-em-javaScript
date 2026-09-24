async function buscarDados(){

	try{

		const resposta = await fetch("https://jsonplaceholder.typicode.com/posts");

		const dados = await resposta.json();

		return dados.filter(item => item.userId == 4)


	}catch(erro){

		console.log("Tenta novamente!");
	}

}

buscarDados().then(function(itens){

	console.log(itens)

})

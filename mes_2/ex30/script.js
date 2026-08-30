async function buscarDados(){

	try {

		const resposta = await fetch("isso_nao_funciona.co.ao");
		const dados = await resposta.json();
		console.log(dados);
	} catch(erro){

		console.log("Não carregou, tenta novamente mais tarde");

	}

}

buscarDados();

async function buscarCep(cep){

	try{

		const resposta = await fetch("https://viacep.com.br/ws/" + cep + "/json");

		const dados = await resposta.json();

		console.log("rua: "+dados.logradouro +",\n" + "bairro: " +dados.bairro + ", \n" + "cidade: " + dados.localidade + ", \n" + "estado: " +dados.uf);
	}catch(erro){


		console.log("Não foi possível. Tente novamente mais tarde...")

	}

}

buscarCep("01001000");

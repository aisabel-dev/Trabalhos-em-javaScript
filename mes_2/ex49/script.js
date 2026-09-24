// Tratamento de campos existentes e eventuais erros com if/else
// O try/catch protege contra o caso mais grave: quando dados é nulo

function processarDados(dados){

	try{

		if (dados.name){

			console.log(dados.name);
		}else{

			console.log("Não achamos");
		}
	}catch(erro){

		console.log("Tente novamente");
	}
}

processarDados(

	{name: "Anderson"}
);

processarDados(

	 {message: "Not Found"}
);

processarDados(null);

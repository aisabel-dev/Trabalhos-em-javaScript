// buscando usuário na API do GitHub com 3 tentativas automáticas
// caso as tentativas falharem, imprime a mensagem de desistência na pesquisa

async function buscar(){

	let contador = 0;

	while( contador < 3){

		try{

			const resposta = await fetch("	tps://api.github.com/users/octocat");
			const dados = await resposta.json();

			return dados;
		
		}catch(erro){

			console.log("Falhou na tentativa: "+ contador);

			contador = contador + 1;
		}

	}

		console.log("Desisto");
}

buscar().then(item => console.log(item))

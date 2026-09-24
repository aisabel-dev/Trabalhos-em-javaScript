// Procura as publicações do utilizador 10 na API e extrai apenas os seus títulos.
// Conta o total de títulos filtrados através do reduce e devolve o valor final.


async function pedidos(){

	try{

		const res = await fetch("https://jsonplaceholder.typicode.com/posts")
		const dados = await res.json();

		const tratado = dados.filter(user => user.userId == 10).map(function(titulos){

			console.log("Titulo: "+ titulos.title)
			return titulos.title;
			

		}).reduce(function(contador){
			return contador + 1 ;
		}, 0) 

		return tratado;

		
	}catch(erro){

		console.log("Tente novamente..", erro);
	}
}

pedidos().then(item => console.log(item))

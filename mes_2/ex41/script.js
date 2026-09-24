async function media(){

	try{

		const resposta = await fetch("https://fakestoreapi.com/products");

		const dados = await resposta.json();
		
		const soma = dados.reduce(function(acomulador, item){
			return acomulador + item.price

		}, 0)

		return soma / dados.length

	}catch(erro){

		console.log("Tenta novamente")
	}
}

media().then(function(valor){

	console.log(valor)
})

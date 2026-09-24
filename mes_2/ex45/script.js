// buscar dados e filtrar por uma categoria
// agrupar o preço dos produtos e fazer a soma para ter o total

async function buscar(){

	try{
		const res = await fetch("https://fakestoreapi.com/products");

		const dados = await res.json();

		const tratado = dados.filter(function(tipo){
			return tipo.category == 'electronics'
		}).map(valor => valor.price).reduce(function(contador, valor){
			return  contador + valor;
		}, 0);

		return tratado

	}catch(erro){

		console.log("Tenta novamente", erro);
	}

}

buscar().then(function(item){

	console.log(item)
})

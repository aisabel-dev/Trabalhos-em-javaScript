// Busca 3 páginas de posts em paralelo (Promise.all) e junta tudo
// // num único array de 60 itens usando flat()
// async function buscar(){...}

async function buscar60(url){

	try{

		const resposta = await fetch(url);
		const dados = await resposta.json();
		return dados;

	}catch(erro){

		console.log("Tente novamente", erro);
	}
}

async function buscar(){

	const item = await Promise.all([

		buscar60("https://jsonplaceholder.typicode.com/posts?_page=1&_limit=20"),
                buscar60("https://jsonplaceholder.typicode.com/posts?_page=2&_limit=20"),
		buscar60("https://jsonplaceholder.typicode.com/posts?_page=3&_limit=20")

	])

	const todos = item.flat();

	console.log(todos);

}

buscar();

async function processarDados(){
	try{
		const [user, post]  = await Promise.all([
			fetch("https://jsonplaceholder.typicode.com/users"),
			fetch("https://jsonplaceholder.typicode.com/posts")
		])

		const [dadosUser, dadosPost] = await Promise.all([
			user.json(),
			post.json()
		]);

		return dadosUser
		.map(usuario => {
			const total = dadosPost.filter(post =>post.userId == usuario.id).length;

			return {
				totalPedido: total
			}
		}
		).filter(usuario => usuario.totalPedidos > 5); // Filtra só os que têm mais de 5

	//	return 

	}catch(erro){

		console.log("Tente novamente...", erro);
	}
}

processarDados().then(item => console.log(item))

function mostrarPerfil(usuario) {
	console.log("Nome: " + usuario.nome + ", " + "idade: " + usuario.idade);
};


const usuario = {
	nome: "Anderson",
	idade: 22,
	email: "aanderson@gmail.com"
}

mostrarPerfil(usuario);

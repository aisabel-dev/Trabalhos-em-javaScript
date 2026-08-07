const carrinho = {
	itens: [],
	total: 0
};

carrinho.itens.push({ 
	nome: "Bola",
	preco: 8.750
});

carrinho.itens.push({
	nome: "Chuteira",
	preco: 43.830
});

carrinho.itens.push({
	nome: "Equipamento",
	preco: 13.999
});

carrinho.total = carrinho.itens.reduce(function(acomulador, item){
	return acomulador + item.preco;
}, 0);

console.log(carrinho);

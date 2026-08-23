const filmes = [ "Titanic", "A Sombra", "Arranha Ceus", "A Mumia"]


const nstring = filmes.filter(function(item){

	return item.length > 10
})

console.log(nstring)

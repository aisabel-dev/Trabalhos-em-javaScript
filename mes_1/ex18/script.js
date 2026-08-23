const user = [

        {

                id: 1,
                nome: "Anderson",
                idade: 22
        },

        {

                id: 2,
                nome: "Fandrio",
                idade: 20
        },

        {
                id: 3,
                nome: "Josue",
                idade: 19

        }


]

const novo_user = user.find (function(item){

        return item.nome == "Sellynho"

})

if (novo_user == undefined){
        console.log("Não encontrado")

}
else{
      console.log(novo_user)
}


let caixa = {};

async function buscar(url){

        if ( caixa[url]){

                return caixa[url]
        }else{

                const resposta = await fetch(url);
                const dados = await resposta.json();
                caixa[url] = dados;

                return dados;
        }

}

async function testar() {
            console.log("1ª chamada (deve fazer fetch):");
            const d1 = await buscar("https://jsonplaceholder.typicode.com/posts/1");
            console.log(d1.title);

            console.log("\n2ª chamada (deve vir do cache instantaneamente):");
            const d2 = await buscar("https://jsonplaceholder.typicode.com/posts/1");
            console.log(d2.title);

            console.log("\nEstado atual da caixa de memória:", caixa);
}

testar();

async function buscarPopulacao(siglaPais, ano) {
    try {
        // Usando a API do World Bank (funciona com sigla de 2 ou 3 letras)
        const url = `https://api.worldbank.org/v2/country/${siglaPais}/indicator/SP.POP.TOTL?format=json`;
        const resposta = await fetch(url);
        const dados = await resposta.json();
        
        // O retorno vem em duas partes: [metadados, dados]
        const resultados = dados[1] || [];
        
        // Procura o ano específico
        const encontrado = resultados.find(item => item.date == ano);
        
        if (encontrado && encontrado.value !== null) {
            console.log(`População do ${siglaPais} em ${ano}: ${encontrado.value.toLocaleString()}`);
            return {
                pais: siglaPais,
                ano: ano,
                populacao: encontrado.value
            };
        } else {
            console.log(`Dados para ${siglaPais} em ${ano} não encontrados`);
            return null;
        }
        
    } catch (erro) {
        console.log("Erro na requisição:", erro.message);
        return null;
    }
}

// Teste com Brasil
buscarPopulacao('np', 2025);

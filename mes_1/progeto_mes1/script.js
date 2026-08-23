const usuarios = [                              { nome: "Anderson Silva", email: "anderson.silva1@gmail.com", idade: 22, ativo: true, cidade: "Luanda" },
  { nome: "Maria Fernandes", email: "maria.fernandes2@gmail.com", idade: 34, ativo: false, cidade: "Benguela" },
  { nome: "João Neto", email: "joao.neto3@gmail.com", idade: 19, ativo: true, cidade: "Huambo" },
  { nome: "Isabel Costa", email: "isabel.costa4@gmail.com", idade: 45, ativo: true, cidade: "Lubango" },
  { nome: "Fandrio Manuel", email: "fandrio.manuel5@gmail.com", idade: 28, ativo: false, cidade: "Luanda" },
  { nome: "Sellynho Pedro", email: "sellynho.pedro6@gmail.com", idade: 29, ativo: true, cidade: "Cabinda" },
  { nome: "Rosário António", email: "rosario.antonio7@gmail.com", idade: 13, ativo: false, cidade: "Malanje" },
  { nome: "Josué Miguel", email: "josue.miguel8@gmail.com", idade: 19, ativo: true, cidade: "Namibe" },
  { nome: "Catarina Sousa", email: "catarina.sousa9@gmail.com", idade: 31, ativo: true, cidade: "Luanda" },
  { nome: "Meiraldina Alves", email: "meiraldina.alves10@gmail.com", idade: 19, ativo: false, cidade: "Benguela" },
  { nome: "Percelana Gomes", email: "percelana.gomes11@gmail.com", idade: 20, ativo: true, cidade: "Huambo" },
  { nome: "Conceição Ferreira", email: "conceicao.ferreira12@gmail.com", idade: 26, ativo: false, cidade: "Lubango" },
  { nome: "Justina Rodrigues", email: "justina.rodrigues13@gmail.com", idade: 29, ativo: true, cidade: "Luanda" },
  { nome: "Manuel Cardoso", email: "manuel.cardoso14@gmail.com", idade: 38, ativo: true, cidade: "Cabinda" },
  { nome: "Teresa Lopes", email: "teresa.lopes15@gmail.com", idade: 24, ativo: false, cidade: "Malanje" },
  { nome: "Domingos Baptista", email: "domingos.baptista16@gmail.com", idade: 41, ativo: true, cidade: "Namibe" },
  { nome: "Beatriz Nunes", email: "beatriz.nunes17@gmail.com", idade: 27, ativo: true, cidade: "Luanda" },
  { nome: "Francisco Tavares", email: "francisco.tavares18@gmail.com", idade: 33, ativo: false, cidade: "Benguela" },
  { nome: "Ana Correia", email: "ana.correia19@gmail.com", idade: 22, ativo: true, cidade: "Huambo" },
  { nome: "Paulo Ribeiro", email: "paulo.ribeiro20@gmail.com", idade: 30, ativo: true, cidade: "Lubango" },
  { nome: "Luísa Marques", email: "luisa.marques21@gmail.com", idade: 25, ativo: false, cidade: "Luanda" },
  { nome: "Carlos Vieira", email: "carlos.vieira22@gmail.com", idade: 36, ativo: true, cidade: "Cabinda" },
  { nome: "Sofia Machado", email: "sofia.machado23@gmail.com", idade: 21, ativo: true, cidade: "Malanje" },
  { nome: "Ricardo Pinto", email: "ricardo.pinto24@gmail.com", idade: 44, ativo: false, cidade: "Namibe" },
  { nome: "Helena Batista", email: "helena.batista25@gmail.com", idade: 18, ativo: true, cidade: "Luanda" },
  { nome: "André Santos", email: "andre.santos26@gmail.com", idade: 39, ativo: true, cidade: "Benguela" },
  { nome: "Cristina Moreira", email: "cristina.moreira27@gmail.com", idade: 23, ativo: false, cidade: "Huambo" },
  { nome: "Miguel Barros", email: "miguel.barros28@gmail.com", idade: 32, ativo: true, cidade: "Lubango" },
  { nome: "Adriana Freitas", email: "adriana.freitas29@gmail.com", idade: 17, ativo: false, cidade: "Luanda" },
  { nome: "Vítor Coelho", email: "vitor.coelho30@gmail.com", idade: 40, ativo: true, cidade: "Cabinda" },
  { nome: "Patrícia Faria", email: "patricia.faria31@gmail.com", idade: 26, ativo: true, cidade: "Malanje" },
  { nome: "Rui Antunes", email: "rui.antunes32@gmail.com", idade: 35, ativo: false, cidade: "Namibe" },
  { nome: "Ângela Simões", email: "angela.simoes33@gmail.com", idade: 20, ativo: true, cidade: "Luanda" },
  { nome: "Nuno Cunha", email: "nuno.cunha34@gmail.com", idade: 29, ativo: true, cidade: "Benguela" },
  { nome: "Sara Monteiro", email: "sara.monteiro35@gmail.com", idade: 16, ativo: false, cidade: "Huambo" },
  { nome: "Tiago Reis", email: "tiago.reis36@gmail.com", idade: 37, ativo: true, cidade: "Lubango" },
  { nome: "Vera Guerreiro", email: "vera.guerreiro37@gmail.com", idade: 24, ativo: false, cidade: "Luanda" },
  { nome: "Hugo Fonseca", email: "hugo.fonseca38@gmail.com", idade: 31, ativo: true, cidade: "Cabinda" },
  { nome: "Filipa Xavier", email: "filipa.xavier39@gmail.com", idade: 19, ativo: true, cidade: "Malanje" },
  { nome: "Bruno Esteves", email: "bruno.esteves40@gmail.com", idade: 43, ativo: false, cidade: "Namibe" },
  { nome: "Marta Cabral", email: "marta.cabral41@gmail.com", idade: 22, ativo: true, cidade: "Luanda" },
  { nome: "Gonçalo Peixoto", email: "goncalo.peixoto42@gmail.com", idade: 28, ativo: true, cidade: "Benguela" },
  { nome: "Diana Salgado", email: "diana.salgado43@gmail.com", idade: 15, ativo: false, cidade: "Huambo" },
  { nome: "Fábio Amaral", email: "fabio.amaral44@gmail.com", idade: 34, ativo: true, cidade: "Lubango" },
  { nome: "Cláudia Pires", email: "claudia.pires45@gmail.com", idade: 27, ativo: false, cidade: "Luanda" },
  { nome: "Sérgio Duarte", email: "sergio.duarte46@gmail.com", idade: 42, ativo: true, cidade: "Cabinda" },
  { nome: "Inês Carvalho", email: "ines.carvalho47@gmail.com", idade: 21, ativo: true, cidade: "Malanje" },
  { nome: "Diogo Loureiro", email: "diogo.loureiro48@gmail.com", idade: 33, ativo: false, cidade: "Namibe" },
  { nome: "Raquel Azevedo", email: "raquel.azevedo49@gmail.com", idade: 18, ativo: true, cidade: "Luanda" },
  { nome: "Emanuel Brito", email: "emanuel.brito50@gmail.com", idade: 39, ativo: true, cidade: "Benguela" },
  { nome: "Joana Pacheco", email: "joana.pacheco51@gmail.com", idade: 23, ativo: false, cidade: "Huambo" },
  { nome: "Renato Melo", email: "renato.melo52@gmail.com", idade: 36, ativo: true, cidade: "Lubango" },
  { nome: "Alexandra Rocha", email: "alexandra.rocha53@gmail.com", idade: 20, ativo: false, cidade: "Luanda" },
  { nome: "Leandro Campos", email: "leandro.campos54@gmail.com", idade: 45, ativo: true, cidade: "Cabinda" },
  { nome: "Verónica Teixeira", email: "veronica.teixeira55@gmail.com", idade: 25, ativo: true, cidade: "Malanje" },
  { nome: "Óscar Neves", email: "oscar.neves56@gmail.com", idade: 30, ativo: false, cidade: "Namibe" },
  { nome: "Célia Andrade", email: "celia.andrade57@gmail.com", idade: 17, ativo: true, cidade: "Luanda" },
  { nome: "Marco Figueiredo", email: "marco.figueiredo58@gmail.com", idade: 38, ativo: true, cidade: "Benguela" },
  { nome: "Sónia Bastos", email: "sonia.bastos59@gmail.com", idade: 22, ativo: false, cidade: "Huambo" },
  { nome: "Vasco Leite", email: "vasco.leite60@gmail.com", idade: 34, ativo: true, cidade: "Lubango" },
  { nome: "Cátia Soares", email: "catia.soares61@gmail.com", idade: 19, ativo: false, cidade: "Luanda" },
  { nome: "Rodrigo Matos", email: "rodrigo.matos62@gmail.com", idade: 41, ativo: true, cidade: "Cabinda" },
  { nome: "Débora Cruz", email: "debora.cruz63@gmail.com", idade: 26, ativo: true, cidade: "Malanje" },
  { nome: "Igor Pereira", email: "igor.pereira64@gmail.com", idade: 32, ativo: false, cidade: "Namibe" },
  { nome: "Lídia Martins", email: "lidia.martins65@gmail.com", idade: 24, ativo: true, cidade: "Luanda" },
  { nome: "Artur Gonçalves", email: "artur.goncalves66@gmail.com", idade: 37, ativo: true, cidade: "Benguela" },
  { nome: "Nádia Ramos", email: "nadia.ramos67@gmail.com", idade: 18, ativo: false, cidade: "Huambo" },
  { nome: "Pedro Castro", email: "pedro.castro68@gmail.com", idade: 35, ativo: true, cidade: "Lubango" },
  { nome: "Susana Dias", email: "susana.dias69@gmail.com", idade: 21, ativo: false, cidade: "Luanda" },
  { nome: "Eduardo Braga", email: "eduardo.braga70@gmail.com", idade: 40, ativo: true, cidade: "Cabinda" },
  { nome: "Mónica Vaz", email: "monica.vaz71@gmail.com", idade: 27, ativo: true, cidade: "Malanje" },
  { nome: "Fernando Assis", email: "fernando.assis72@gmail.com", idade: 33, ativo: false, cidade: "Namibe" },
  { nome: "Elisabete Farinha", email: "elisabete.farinha73@gmail.com", idade: 16, ativo: true, cidade: "Luanda" },
  { nome: "Gabriel Nogueira", email: "gabriel.nogueira74@gmail.com", idade: 29, ativo: true, cidade: "Benguela" },
  { nome: "Rita Domingos", email: "rita.domingos75@gmail.com", idade: 23, ativo: false, cidade: "Huambo" },
  { nome: "Henrique Paiva", email: "henrique.paiva76@gmail.com", idade: 44, ativo: true, cidade: "Lubango" },
  { nome: "Wilma Sequeira", email: "wilma.sequeira77@gmail.com", idade: 20, ativo: false, cidade: "Luanda" },
  { nome: "Ivo Delgado", email: "ivo.delgado78@gmail.com", idade: 31, ativo: true, cidade: "Cabinda" },
  { nome: "Zélia Quintas", email: "zelia.quintas79@gmail.com", idade: 25, ativo: true, cidade: "Malanje" },
  { nome: "Álvaro Lima", email: "alvaro.lima80@gmail.com", idade: 39, ativo: false, cidade: "Namibe" },
  { nome: "Yara Sampaio", email: "yara.sampaio81@gmail.com", idade: 19, ativo: true, cidade: "Luanda" },
  { nome: "Norberto Prates", email: "norberto.prates82@gmail.com", idade: 42, ativo: true, cidade: "Benguela" },
  { nome: "Ivone Serra", email: "ivone.serra83@gmail.com", idade: 22, ativo: false, cidade: "Huambo" },
  { nome: "Alberto Falcão", email: "alberto.falcao84@gmail.com", idade: 36, ativo: true, cidade: "Lubango" },
  { nome: "Odete Cordeiro", email: "odete.cordeiro85@gmail.com", idade: 18, ativo: false, cidade: "Luanda" },
  { nome: "Custódio Vale", email: "custodio.vale86@gmail.com", idade: 43, ativo: true, cidade: "Cabinda" },
  { nome: "Ester Feliciano", email: "ester.feliciano87@gmail.com", idade: 24, ativo: true, cidade: "Malanje" },
  { nome: "Alfredo Basílio", email: "alfredo.basilio88@gmail.com", idade: 34, ativo: false, cidade: "Namibe" },
  { nome: "Cármen Osório", email: "carmen.osorio89@gmail.com", idade: 17, ativo: true, cidade: "Luanda" },
  { nome: "Aurélio Bessa", email: "aurelio.bessa90@gmail.com", idade: 38, ativo: true, cidade: "Benguela" },
  { nome: "Filomena Godinho", email: "filomena.godinho91@gmail.com", idade: 21, ativo: false, cidade: "Huambo" },
  { nome: "Belmiro Sequeira", email: "belmiro.sequeira92@gmail.com", idade: 35, ativo: true, cidade: "Lubango" },
  { nome: "Iolanda Salvador", email: "iolanda.salvador93@gmail.com", idade: 26, ativo: false, cidade: "Luanda" },
  { nome: "Onofre Casimiro", email: "onofre.casimiro94@gmail.com", idade: 45, ativo: true, cidade: "Cabinda" },
  { nome: "Aida Formoso", email: "aida.formoso95@gmail.com", idade: 19, ativo: true, cidade: "Malanje" },
  { nome: "Baltazar Junqueira", email: "baltazar.junqueira96@gmail.com", idade: 32, ativo: false, cidade: "Namibe" },
  { nome: "Gracinda Portela", email: "gracinda.portela97@gmail.com", idade: 23, ativo: true, cidade: "Luanda" },
  { nome: "Firmino Aveiro", email: "firmino.aveiro98@gmail.com", idade: 40, ativo: true, cidade: "Benguela" },
  { nome: "Escolástica Baía", email: "escolastica.baia99@gmail.com", idade: 20, ativo: false, cidade: "Huambo" },
  { nome: "Anacleto Vasques", email: "anacleto.vasques100@gmail.com", idade: 30, ativo: true, cidade: "Lubango" }
];


function filtrarUser(usuarios) {

	return usuarios.filter(item => item.ativo)

}

function apenasNome (usuarios) {

	return usuarios.map(first => first.nome)
}

function pesquisarEmail (usuarios, buscar) {

	return usuarios.find(item => item.email == buscar)
}

function cidadesRepetidas (usuarios){

	return usuarios.reduce(function(acomulador, valor){


		if (acomulador[valor.cidade] == undefined){
	

			acomulador[valor.cidade] = 1
			return acomulador
		}

		else{

			acomulador[valor.cidade] = acomulador[valor.cidade] + 1

			return acomulador
		}


	}, {})
}


function menoresIdade (usuarios) {

	return usuarios.filter(item => item.idade < 18).map(nomes => nomes.nome)
}

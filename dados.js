// Este ficheiro contém apenas a lista de dados (o array de objetos)
const obras = [
    { 
        tipo: "filmes", 
        titulo: "Um Sonho de Liberdade (1994)", 
        imagem: "img/um_sonho.png", 
        descricao: "", 
        nota: 0.0 
    },
    { 
        tipo: "filmes", 
        titulo: "Parasita (2019)", 
        imagem: "img/parasita.jpg", 
        descricao: "", 
        nota: 0.0
    },
    { 
        tipo: "filmes", 
        titulo: "O Lobo de Wall Street (2013)", 
        imagem: "img/o_lobo.jpg", 
        descricao: "", 
        nota: 0.0 
    },
    { 
        tipo: "filmes", 
        titulo: "Akira (1988)", 
        imagem: "img/akira.jpg", 
        descricao: "", 
        nota: 0.0
    },
    { 
        tipo: "filmes", 
        titulo: "Pecadores (2025)", 
        imagem: "img/sinners.jpeg", 
        descricao: "", 
        nota: 0.0 
    },
    { 
        tipo: "filmes", 
        titulo: "Superman (2025)", 
        imagem: "img/superman.jpeg", 
        descricao: "", 
        nota: 0.0 
    },
	{ 
        tipo: "filmes", 
        titulo: "Entrevista com o Vampiro (1994)", 
        imagem: "img/entrevista_com.jpeg", 
        descricao: "", 
        nota: 0.0 
    },
    { 
        tipo: "filmes", 
        titulo: "O Grande Gatsby (2013)", 
        imagem: "img/gatsby.jpg", 
        descricao: "", 
        nota: 0.0 
    },
	{ 
        tipo: "filmes", 
        titulo: "Kpop Demon Hunters (2025)", 
        imagem: "img/kpop.jpg", 
        descricao: "Fiz ouvindo as músicas", 
        nota: 0.0 
    },
    { 
        tipo: "filmes", 
        titulo: "Drácula de Bram Stoker (1992)", 
        imagem: "img/dracula.jpg", 
        descricao: "", 
        nota: 0.0 
    },
	{ 
        tipo: "filmes", 
        titulo: "Blade Runner - O Caçador de Androides (1982)", 
        imagem: "img/blade_runner.jpg", 
        descricao: "", 
        nota: 0.0 
    },
    { 
        tipo: "filmes", 
        titulo: "Kung Fury (2015)", 
        imagem: "img/kung_fury.png", 
        descricao: "", 
        nota: 0.0 
    },
	{ 
        tipo: "filmes", 
        titulo: "O Senhor das Armas (2005)", 
        imagem: "img/armas.jpg", 
        descricao: "", 
        nota: 0.0 
    },
    { 
        tipo: "filmes", 
        titulo: "Sonic 3 (2024S)", 
        imagem: "img/sonic3.jpg", 
        descricao: "", 
        nota: 0.0 
    },
	{ 
        tipo: "filmes", 
        titulo: "Cisne Negro (2010)", 
        imagem: "img/cisne.jpg", 
        descricao: "", 
        nota: 0.0 
    },
    { 
        tipo: "filmes", 
		titulo: "Truque de Mestre - O 3º Ato (2025)", 
        imagem: "img/truque.jpeg", 
        descricao: "", 
        nota: 0.0 
    },
	{ 
        tipo: "filmes", 
        titulo: "A Entrevista (2014)", 
        imagem: "img/a_entrevista.jpg", 
        descricao: "", 
        nota: 0.0 
    },
    { 
        tipo: "filmes", 
        titulo: "Em Ritmo de Fuga (2017)", 
        imagem: "img/em_ritmo.jpg", 
        descricao: "", 
        nota: 0.0 
    },
	{ 
        tipo: "filmes", 
        titulo: "Jurado Nº2 (2024)", 
        imagem: "img/jurado.jpg", 
        descricao: "", 
        nota: 0.0 
    },
    { 
        tipo: "filmes", 
        titulo: "Bingo: O Rei das Manhãs (2017)", 
        imagem: "img/bingo.jpg", 
        descricao: "", 
        nota: 0.0 
    },
	{ 
        tipo: "filmes", 
        titulo: "Orgulho e Preconceito e Zumbis (2016)", 
        imagem: "img/orgulho.jpeg", 
        descricao: "", 
        nota: 0.0 
    },
	{ 
        tipo: "filmes", 
        titulo: "Rivais (2024)", 
        imagem: "img/rivais.jpeg", 
        descricao: "Demorei muito para entender que era um filme sobre broderagem. Honestamente, vi o filme uma vez em janeiro e não reassisti, então não lembro suficientemente bem dele para uma análise mais profunda. " +
		           "Talvez por isso esteja tão baixo, é esquecível. Durante a assistida, fiquei curioso com uma parte do filme que não era o foco, que encerra de maneira mais subjetiva em comparação com a linha pricipal que eu só saquei que tava lá no final. "+
				   "Sim, tinha várias passagens dessa trama que eu não as valorizei o suficiente porque queria saber quem ganharia a partida e se uma certa personagem plantaria o que cultivou. "+
				   "Em geral, o ritmo, direção e atuação são bons, mas nada que realmente tenha me marcado de alguma forma.", 
        nota: 5.1 
    },
	{ 
        tipo: "filmes", 
        titulo: "Diário de uma Paixão (2004)", 
        imagem: "img/diario.jpeg", 
        descricao: "", 
        nota: 0.0 
    },
	{ 
        tipo: "filmes", 
        titulo: "A Garota Ideal (2007)", 
        imagem: "img/a_garota.jpg", 
        descricao: "", 
        nota: 0.0 
    },
	{ 
        tipo: "filmes", 
        titulo: "Donnie Darko (2001)", 
        imagem: "img/donnie.jpg", 
        descricao: "", 
        nota: 0.0 
    },
	{ 
        tipo: "filmes", 
        titulo: "Ace Ventura: Um Detetive Diferente (1994)", 
        imagem: "img/ace.jpg", 
        descricao: "", 
        nota: 0.0 
    },
	{ 
        tipo: "filmes", 
        titulo: "Mickey 17 (2025)", 
        imagem: "img/mickey.jpeg", 
        descricao: "Eu adorei Parasita, adoro o Robert Pattinson, adoro ficção científica e adorei a premissa. Deve ser por isso que esse filme acabou sendo tão decepcionante. "+
				   "Primeiro que não parece um filme, parece dois filmes misturados, ligados por uma 'crítica social f#da'. Eu gostei das duas tramas e gostei da crítica, apesar de não achar que a junção final acabou muito bem. "+
				   "Não faço ideia do quanto disso já estava presente no livro, então considerando o que vi: Robert Pattinson está muito bem no filme, os conceitos de ficção e política apresentdos são bons, mas as peças não se encaixam da melhor maneira.", 
        nota: 4.4 
    },
	{ 
        tipo: "filmes", 
        titulo: "Corra que a Polícia Vem Aí! (2025)", 
        imagem: "img/policia.jpg", 
        descricao: "", 
        nota: 0.0 
    },
	{ 
        tipo: "filmes", 
        titulo: "O Mensageiro do Último Dia (2020)", 
        imagem: "img/emptyman.jpg", 
        descricao: "", 
        nota: 0.0 
    },
	{ 
        tipo: "filmes", 
        titulo: "Quarteto Fantástico: Primeiros Passos (2025)", 
        imagem: "img/quarteto.jpg", 
        descricao: "", 
        nota: 0.0 
    },
	{ 
        tipo: "filmes", 
        titulo: "Missão Impossível: O Acerto Final (2025)", 
        imagem: "img/missao.png", 
        descricao: "Eu gostei mais da parte um do que a maioria das pessoas. Acho que um antagonista praticamente onisciente em um filme de espionagem é um conceito que poderia ser muito bem aproveitado. Não foi. "+
				   "Não é um filme ruim, porém está muito mais próximo de um filme de ação genérico do que da franquia Missão Impossível. "+
				   "Acabei me perdendo do filme em cenas que extrapolam demais o 'impossível' e fiquei decepcionado com o suposto desfecho dessa saga.", 
        nota: 4.3 
    },
	{ 
        tipo: "filmes", 
        titulo: "Obrigado por Fumar (2005)", 
        imagem: "img/obrigado.jpg", 
        descricao: "", 
        nota: 0.0 
    },
	{ 
        tipo: "filmes", 
        titulo: "O Casamento do Meu Melhor Amigo (1997)", 
        imagem: "img/casamento.jpg", 
        descricao: "Não é minha comédia romântica favorita da Julia Roberts. Ao meu ver, o filme vai demais para o lado do constrangimento de uma forma não tão boa, porém é comédia e não acho justo julgá-lo somente pelo tipo de humor. "+
		           "Meu verdadeiro problema com esse filme é que não consigo torcer para a protagonista. Não acho que ela mereça o cara e a noiva dele é uma pessoa tão legal. Como podem ver, bem subjetivo.", 
        nota: 5.2 
    },
	{ 
        tipo: "filmes", 
        titulo: "Magnólia (1999)", 
        imagem: "img/magnolia.png", 
        descricao: "Eu não entendi esse filme. É a única expliação para eu não ter gostado. O elenco é estreladíssimo e entrega cenas muito bonitas e verdadeiras. "+
				   "Meu problema com o filme é esse, é tudo muito verdadeiro. Pessoas com problemas reais, agindo como pessoas reais. Eu quis domir, porque isso tudo não parecia estar indo para lugar nenhum. "+
				   "Provavelmente em alguns anos devo reassistir com uma bagagem que não tenho hoje e somente existir por mais tempo sobre a terra pode me trazer. Um spoiler: Chove sapo.", 
        nota: 4.1 
    },
	{ 
        tipo: "filmes", 
        titulo: "Jurassic World Rebirth (2025)", 
        imagem: "img/jurassic.jpg", 
        descricao: "Não fede nem cheira, o que para a maior franquia sobre dinossauros já concebida é algo que não deveria acontecer. Eles têm DINOSSAUROS e conseguem esquecer disso. "+
				   "Eu com uma faca de pão causo mais estrago que o T-Rex desse filme. O segundo núcleo de personagens é insuportável e não parece haver perigo real na ilha inventada da vez. ILHA, o nome é MUNDO dos dinossauros e o filme se passa em uma ILHA. "+
				   "A impressão que fica é a de mais um estúdio espremendo mais uma franquia até não sobrar nada, com decisões puramente comerciais que limitam o potencial que esse universo possui.", 
        nota: 3.2 
    },
	{ 
        tipo: "filmes", 
        titulo: "Amores Materialistas (2025)", 
        imagem: "img/amores.jpeg", 
        descricao: "Filmes de romance com teor mais realista e ácido não compõem uma categoria que pessoalmente me agrada e esse filme não mudou isso. "+
		           "Não consegui torcer por nenhum dos personagens e fui pego no contrapé por uma subtrama que muda completamente o tom do filme. "+
				   "A mensagem do filme fica bem clara: 'dinheiro e aparência não são tudo no relacionamento, mas são um bocado', mas, como dito antes, não é o tipo de mensagem que eu gosto em filmes românticos, principalmente executada dessa forma.", 
        nota: 3.0 
    },
	{ 
        tipo: "filmes", 
        titulo: "Coringa: Delírio a Dois (2024)", 
        imagem: "img/coringa.jpg", 
        descricao: "O vencedor do prêmio Morbius de pior do ano. A premissa não é necessariamente ruim, mas é pessimamente executada e se perde da mensagem que parecia querer passar. "+ 
					"O filme não justifica seu elenco e nem sua existência como musical, com números esquecíveis que não ajudam na progressão da trama. "+
					"Fiquei com uma sensação de decepção sobre algo que tinha um potencial para ser sim um bom filme.", 
        nota: 2.0 
    },

//jogos
	{ 
        tipo: "jogos", 
        titulo: "Batman: Arkham City (2011)", 
        imagem: "img/batman.jpg", 
        descricao: "", 
        nota: 0.0 
    },
	{ 
        tipo: "jogos", 
        titulo: "Tomb Raider (2013)", 
        imagem: "img/tomb1.jpg", 
        descricao: "", 
        nota: 0.0 
    },
	{ 
        tipo: "jogos", 
        titulo: "Rise of the Tomb Raider (2015)", 
        imagem: "img/tomb2.jpg", 
        descricao: "", 
        nota: 0.0 
    },
	{ 
        tipo: "jogos", 
        titulo: "Shadow of The Tomb Raider (2018)", 
        imagem: "img/tomb3.png", 
        descricao: "", 
        nota: 0.0 
    },
	{ 
        tipo: "jogos", 
        titulo: "Silent Hill 2 (2001)", 
        imagem: "img/silent.png", 
        descricao: "", 
        nota: 0.0 
    },
	{ 
        tipo: "jogos", 
        titulo: "South Park: The Stick of Truth (2014)", 
        imagem: "img/stick.jpeg", 
        descricao: "", 
        nota: 0.0 
    },
	{ 
        tipo: "jogos", 
        titulo: "South Park: The Fractured But Whole (2017)", 
        imagem: "img/fractured.jpeg", 
        descricao: "", 
        nota: 0.0 
    },
	{ 
        tipo: "jogos", 
        titulo: "Astro Bot (2024)", 
        imagem: "img/astro.jpg", 
        descricao: "", 
        nota: 0.0 
    },
	{ 
        tipo: "jogos", 
        titulo: "The Last of Us Part I (2022)", 
        imagem: "img/tlou1.png", 
        descricao: "", 
        nota: 0.0 
    },
	{ 
        tipo: "jogos", 
        titulo: "The Last of Us Part II (2024)", 
        imagem: "img/tlou2.jpeg", 
        descricao: "", 
        nota: 0.0 
    },
	{ 
        tipo: "jogos", 
        titulo: "Metroid Prime 3: Corruption (2007)", 
        imagem: "img/metroid.jpg", 
        descricao: "", 
        nota: 0.0 
    },
	{ 
        tipo: "jogos", 
        titulo: "Resident Evil 2 Remake (2019)", 
        imagem: "img/re2.png", 
        descricao: "", 
        nota: 0.0 
    },
	{ 
        tipo: "jogos", 
        titulo: "Resident Evil 3 Remake (2020)", 
        imagem: "img/re3.jpg", 
        descricao: "", 
        nota: 0.0 
    },
	{ 
        tipo: "jogos", 
        titulo: "Injustice 2 (2017)", 
        imagem: "img/injustice2.jpg", 
        descricao: "A injustiça já começa porque não sou fã de jogos de luta. O pouco que joguei com meus amigos foi a melhor parte, mas a maior parcela da experiência que tive foi no modo história. "+
				   "Com relação a história em si, também não sou um grande fã do caminho que o universo de Injustice seguiu. Cheguei a ler o primeiro ano de publicação, e realmente acho o conceito de heróis malvadões um dia fez muito sentido. "+
				   "Claro, a história nada mais é do que desculpas sucessivas para os personagens saírem no soco, mesmo com boa parte nem fazendo sentido. "+
				   "Então, quanto às lutas, foi divertido. Como já foi dito, não é o meu gênero favorito, mas as mecânicas e diferenças nos de movimentos dos bonecos são interessantes e realmente acho que uma maior experiência pvp melhore significativamente o que acho desse jogo.", 
        nota: 4.0 
    },
	{ 
        tipo: "jogos", 
        titulo: "Fallout 4 (2015)", 
        imagem: "img/fallout4.jpg", 
        descricao: "", 
        nota: 0.0 
    },
	
//series
	{ 
        tipo: "series", 
        titulo: "DAN DA DAN - 2º Temporada (2025)", 
        imagem: "img/dandadan.jpg", 
        descricao: "", 
        nota: 0.0 
    },
	{ 
        tipo: "series", 
        titulo: "Steins Gate (2011)", 
        imagem: "img/steins.jpg", 
        descricao: "", 
        nota: 0.0 
    },
	{ 
        tipo: "series", 
        titulo: "Avatar: A Lenda de Aang(2005 - 2008)", 
        imagem: "img/atla.jpg", 
        descricao: "", 
        nota: 0.0 
    },
	{ 
        tipo: "series", 
        titulo: "The Last of Us - 2º Temporada (2025)", 
        imagem: "img/tlouss.jpg", 
        descricao: "Essa série já esteve com uma nota mais alta para mim, daí eu joguei o jogo. Comparar as duas obras chega a ser desleal e, "+
				   "embora eu saiba que fazer essa comparação entre mídias diferentes não seja adequado, pontos chaves como a motivação dos personagens e o tom da história são mudados sem justificativa. "+
				   "Entendo que não quiseram copiar a obra original, mas nenhuma das mudanças feitas acaba agregando tanto na experiência. "+
				   "Ainda acho a primeira temporada muito boa e tenho esperança para a terceira, pois essa segunda parte teve sim bons momentos, possui um bom elenco e ótima qualidade técnica.", 
        nota: 3.1 
    },
	{ 
        tipo: "series", 
        titulo: "LEGO Star Wars: Reconstruir a Galáxia - 2º Temporada (2025)", 
        imagem: "img/lego.jpg", 
        descricao: "Não é ruim, mas não é bom, o que vindo de Star Wars ultimamente já é uma grande conquista. A temporada é bem curta e acaba servindo de tibuto ao universo da franquia. "+
				   "O que me gerou bons momentos nesses 4 episódios é que pude brevemente retornar aos momentos de infância nos quais eu fazia uma bagunça de conceitos ao brincar com meus Legos, em sua maioria, de Star Wars. "+
				   "Tirando a questão emocional, essa série como um todo fica como uma boa nota de rodapé na franquia e, diferente de muitas outras coisas dessa galáxia muito distante, fico grato que exista.", 
        nota: 5.0 
    },
	{ 
        tipo: "series", 
        titulo: "Buffy, a Caça-Vampiros - Temporadas 1-3 (1997-1999)", 
        imagem: "img/buffy.jpeg", 
        descricao: "", 
        nota: 0.0 
    },
	{ 
        tipo: "series", 
        titulo: "Andor - 2º Temporada (2025)", 
        imagem: "img/andor.jpeg", 
        descricao: "", 
        nota: 0.0 
    }
];
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
        descricao: "'Plot Twist: O Filme parte 3' seria um título mais adequado. Sendo uma obra sobre mágica, faz total sentido abusar de diversas viradas e ele faz isso de maneira mais consistente que os anteriores, "+
		           "com a virada final conseguindo justificar as pequenas conveniências ao longo da rodagem. Eu amo mágica, conheço relativamente bem esse universo e digo que esse filme incorpora bem a essência de que mágica não é só o truque, "+
				   "é como apresentá-lo da maneira mais cativante e criativa possível.", 
        nota: 7.1 
    },
	{ 
        tipo: "filmes", 
        titulo: "A Entrevista (2014)", 
        imagem: "img/a_entrevista.jpg", 
        descricao: "Besteirol de alto nível. O fato desse filme existir já é inacreditável. Para quem nunca ouviu falar, o James Franco e o seu fiel escudeiro, Seth Rogen, "+
		           "vão simplesmente entrevistar o líder norte coreano, virando parças dele no processo. Se fosse só isso já seria absurdo, mas eles ainda são encarregados da missão secreta de assassiná-lo. "+
				   "A partir dessa sinospse o filme entrega o esperado, idiotice em todos os níveis, com uma dupla/trio que se afunda cada vez mais em desconfiança. Eu achei muito engraçado, só é imbecíl demais em alguns momentos para estar mais alto nesse ranking.",  
        nota: 6.7 
    },
    { 
        tipo: "filmes", 
        titulo: "Em Ritmo de Fuga (2017)", 
        imagem: "img/em_ritmo.jpg", 
        descricao: "Com uma das melhores cenas de abertura já feitas, o filme é impecável até a loucura que se torna o terceiro ato. O destaque óbvio vai para as cenas musicais, "+
		           "sejam perseguições de carro ou apenas o protagonista indo comprar café. Essas cenas dão alma para o que seria só mais uma história de roubo, que agora carrega o carisma da sua playlist favorita.", 
        nota: 7.5 
    },
	{ 
        tipo: "filmes", 
        titulo: "Jurado Nº2 (2024)", 
        imagem: "img/jurado.jpg", 
        descricao: "Angústia é a palavra que melhor representa o filme para mim. Não há muito o que dizer, a situação do protagonista me manteve vidrado na tela. Imagine o seguinte: "+
		           "você é chamado para compor um júri de um homem acusado de assassinato, mas descobre que esse homem é inocente, porque foi você quem cometeu o crime por acidente, mas o homem parece ser uma pessoa ruim, "+
				   "mas talvez você não seja preso, já que foi um acidente, mas sua esposa está grávida. E esses 'mas' seguem te fazendo pensar 'o que eu faria?'. Então assista e me diga, o que você faria?", 
        nota: 7.6 
    },
    { 
        tipo: "filmes", 
        titulo: "Bingo: O Rei das Manhãs (2017)", 
        imagem: "img/bingo.jpg", 
        descricao: "Uma obra que sintetiza perfeitamente o famigerado 'jeitinho brasileiro'. Sim, é o Bozo, pelo menos fortemente baseado em um deles. Não chega a ser uma biografia, tendo boa parte adaptada para servir ao propósito narrativo. "+
		           "O filme narra a trajetória de um ator em declínio que vê no papel do palhaço da televisão brasileira uma oportunidade de chegar ao derradeiro estrelato. "+
				   "Para mim, o ponto alto dessa hitória são as ideias fora da caixa usadas para adaptar um personagem já famoso na gringa para o contexto nacional. Também achei bastante interessante a dinâmica familiar e o conflito entre fama e anonimato. "+
				   "Apenas para apontar um defeito, achei o final rápido demais, com uma epifania quase repentina, mas sem estragar a experiência que garantiu um lugar entre meus filmes nacionais favoritos.", 
        nota: 7.2
    },
	{ 
        tipo: "filmes", 
        titulo: "Orgulho e Preconceito e Zumbis (2016)", 
        imagem: "img/orgulho.jpeg", 
        descricao: "Considerando o título, sinopse e 10 primeiros minutos, parece que vai ser uma das maiores bobagens que você vai ver na vida e, mesmo sendo, é incrivelmente bom. "+
		           "O esqueleto ainda é o mesmo da história original, mas o novo contexto (zumbis) dá um ar novo, único e divertido para essa releitura. As cenas de ação são bem realizadas e os mortos-vivos realmente acrescentam na narrativa. "+
				   "A obra original ainda está lá, só misturada com 'Madrugada dos Mortos' e uma pitada de 'Meu Namorado é um Zumbi', criando belas 1h48min de entretenimento.", 
        nota: 6.6 
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
        descricao: "Foi-me vendido como O filme de romance e não acho que está muito distante disso. Ser um filme de época o torna atemporal, mas o que realmente me emocionou foram as cenas no 'presente'. "+
		           "Gostei da dinâmica crua de amor verdadeiro e situacional e como não saber diferenciar entre os dois traz as maiores feridas. E tem o Ryan Gosling, o que faz eu me identificar muito mais.", 
        nota: 7.4 
    },
	{ 
        tipo: "filmes", 
        titulo: "A Garota Ideal (2007)", 
        imagem: "img/a_garota.jpg", 
        descricao: "Quem poderia imaginar que o Ryan Gosling comprando uma companheira de silicone geraria um filme tão fofo e profundo. A chave é que não é sobre 'silicone', é sobre 'companheira'. "+
		           "Sim, parece estranho, mas para uma obra sobre uma boneca sexual, ela não encosta no aspecto carnal, focando na parte emocional de um homem que precisa lidar com inseguranças, solidão e medo de mudança. "+
				   "Além disso, é sobre como as pessoas a sua volta podem te ajudar a superar esses problemas, como julgamentos são superficiais e o que realmente importa é ser um ser humano gentil e empático.", 
        nota: 7.0 
    },
	{ 
        tipo: "filmes", 
        titulo: "Donnie Darko (2001)", 
        imagem: "img/donnie.jpg", 
        descricao: "Donnie Darko não é um filme, é uma experiência. Faz parte precisar assistir a um vídeo de uma hora do Rolandinho e do Bruno Brock explicando o que você acabou de ver. E mesmo assim continuei com alguns questionamentos. "+
		           "Realmente duvido que todas as cenas de fato se conectem e façam sentido completo e é aí que está a graça, montar uma segunda história dentro de sua própria cabeça para justificar e conectar o máximo possível de pontos aparentemente desconexos. "+
				   "Apesar das loucuras, o filme não me perdeu por nenhum momento e continuou me prendendo por horas refletindo sobre seus significados. Posso estar sendo brutalmente enganado por algo que só não faz sentido? Posso e, nesse caso, não me importo.", 
        nota: 7.3 
    },
	{ 
        tipo: "filmes", 
        titulo: "Ace Ventura: Um Detetive Diferente (1994)", 
        imagem: "img/ace.jpg", 
        descricao: "Ace Ventura foi uma surpresa divertida. Honestamente, não achei que acharia graça, mas, felizmente, estava redondamente enganado. Jim Carrey sendo Jim Carrey proporciona momentos Jim Carrey. E eu gosto do Jim Carrey. "+
		           "Por algum motivo que nunca parei para pensar, os gêneros de investigação e comédia funcionam bem juntos, provavelmente porque a investigação conduz a história e gera situações inusitadas, enquanto a comédia aproveita os ganchos e dá alma para o projeto." , 
        nota: 6.2 
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
        descricao: "Eu ri muito e ri alto. Eu adoro o gênero de comédia pastelão com situações e personagens mais que absurdos. "+
		           "O filme emplaca boas piadas que se alternam com outras não tão bem encaixadas, seja por se prologarem demais ou por só funcionarem para o público norte americano"+
				   ", porém sem comprometer completamente nenhum dos atos. Não há um longo período sem risadas. "+
				   "Não acho que esteja no mesmo nível do original, mas traz um bom respiro para ese gênero abandonado nos últimos anos.", 
        nota: 5.4 
    },
	{ 
        tipo: "filmes", 
        titulo: "O Mensageiro do Último Dia (2020)", 
        imagem: "img/emptyman.jpg", 
        descricao: "Um bom terror lovecraftiano. Sinto que esse tive maior apego com esse filme porque ele sintetizou bem a experiência que é jogar uma campanha de Call of Cthulhu. "+
				   "Trata-se de uma investigação que mergulha gradualmente no horror cósmico, questionando a realidade e moralidade do protagonista. "+
				   "A obra traz momentos tensos e macabros rodeados de uma atmosfera mística e sombria e, apesar do teor sobrenatural, o mistério não tira fortemente os pés do chão até os momentos seus momentos finais.", 
        nota: 6.3 
    },
	{ 
        tipo: "filmes", 
        titulo: "Quarteto Fantástico: Primeiros Passos (2025)", 
        imagem: "img/quarteto.jpg", 
        descricao: "Eu nunca fui um grande fã do Quarteto Fantástico e esse fato pesou bastante na minha visão sobre o filme. Atores bons interpretando personagens bons com roteiro bom, uma boa estética e um bom dilema. "+
		           "Realmente não acho que tenha muito a dizer. Ele é bom, ainda mais em comparação com os últimos deslizes da dona Marvel, só não me pegou como outras obras que vi esse ano. ", 
        nota: 6.5 
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
        descricao: "O filme traz uma mensagem sobre trazer mensagens. Achei bastante interessante o jeito que ele abusa de técnicas de discurso para expor que não é a ideia que importa, é quem a defende e como a defende. "+
				   "Ele tem momentos criativos, com montagens dinâmicas e narração em terceira pessoa, com um protagonista carismático com índole muito duvidosa. A trama também desenrola um conflito familiar que vai questionar suas atitudes, "+
				   "uma escolha interessante para trabalhar o auto-convencimento como única forma de mudança de opinião, afinal, não preciso estar certo, só preciso mostrar que você está errado.",
        nota: 6.0 
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
        titulo: "Shadow of the Colossus (2005)", 
        imagem: "img/colossu.jpg", 
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
        descricao: "É um mais do mesmo cansativo. Os primeiros dois jogos da trilogia deixam um gostinho de quero mais, algo que se perde nesse terceiro. "+ 
		           "Após terminá-lo, não tive vontade de ir atrás de qualquer outra obra de Tomb Raider. Avaliando somente o jogo em si, não há muito do que reclamar, porém não há inovação frente aos anteriores. "+
				   "Mesma jogabilidade e dinâmicas com uma história menos involvente. Para quem gosta do gênero de aventura é um prato cheio...que já foi comido outras duas vezes.",
        nota: 5.5 
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
        descricao: "Cadê essa esquerda jogador?! Eu passei mais tempo perdido ou tentando ir por caminhos sem saída do que jogando de fato. Os mapas são labirínticos e não acho que seja de propósito. "+
			       "Muitas vezes é preciso mudar de planeta para descobrir uma região inesplorada que eu podia jurar que não estava ali antes. Fora essa parte que me deixou muitas vezes frustado com minha incapacidade de localização, há muitos pontos positivos. "+
				   "O combate é dinâmico, ainda mais usando os controles do Nintendo Wii, as mecânicas de exploração e inimigos são criativas e os designs com estética biomecânica dão um toque único para o universo do jogo.",
        nota: 5.3 
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
        descricao: "O jogo inteiro é uma grande boss battle contra o Nemesis. O que acho que poderia ser melhor aproveitado como o Mr. X no jogo anterior. Penso isso porque os encontros são roteirizados, "+
				   "o que tira um pouco do tom de urgência que um inimigo perseguidor poderia ter. O caos da cidade também é pouco aproveitado em relação ao jogo original. "+
				   "Apesar desses dois pontos, o jogo não perde o tom de urgência e a recorrência do vilão transforma o medo em raiva, aproveitada de forma apoteótica no final. As mecânicas seguem aquelas do jogo anterior, o que possibilita uma gameplay fluida e dinâmica.", 
        nota: 6.1
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
        titulo: "Steins;Gate (2011)", 
        imagem: "img/steins.jpg", 
        descricao: "Viagem no tempo, mistério, decisões morais difíceis e personagens marcantes, isso é Steins Gate. Para mim, há dois picos na escrita desse anime, o modo experimental como é feita a viegam no tempo e nosso 'mad scientist Hououin Kyouma'. "+
		           "Como ponto baixo, a série foi baseada em uma visual novel jogável e o ritmo acabou não sendo tão bem adaptado, causando repetição e lentidão em vários momentos. Então a experiência acaba sendo carregada por ótimos momentos espaçados por certos marasmos. "+
				   "Caso não tivesse me conectado a um dos personagens, não sei se teria chegado ao final, mas não foi o caso. Eles são todos arismáticos e interessantes dentro dos próprios estereótipos, o que acarreta em decisões difíceis que comprometem a linha do tempo. "+
				   "No fundo, essas decisões e como elas mudam tanto os personagens quanto o mundo a sua volta são a alma da história fazem do próprio espço tempo um persongem.",
        nota: 6.4 
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
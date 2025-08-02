const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você acaba de tirar sua carteira de motorista e vê um carro esportivo elétrico em promoção. Qual a sua reação?",
        alternativas: [
            {
                texto: "Quero saber tudo sobre essa tecnologia!",
                afirmacao: "Você se interessou por carros elétricos e passou a estudar mais sobre o futuro da mobilidade. "
            },
            {
                texto: "Prefiro os motores a combustão, nada supera o ronco de um V8.",
                afirmacao: "Você manteve sua paixão pelos motores potentes e clássicos. "
            }
        ]
    },
    {
        enunciado: "Você foi chamado para participar de um projeto de carro autônomo. O que decide fazer?",
        alternativas: [
            {
                texto: "Aceita o desafio, tecnologia e carros são sua paixão.",
                afirmacao: "Contribuiu para o avanço da direção autônoma com ideias inovadoras. "
            },
            {
                texto: "Recusa, acredita que o prazer de dirigir deve ser mantido pelas pessoas.",
                afirmacao: "Defendeu que a direção humana é insubstituível para os apaixonados por carros. "
            }
        ]
    },
    {
        enunciado: "Durante um encontro de carros, alguém questiona a importância da sustentabilidade no setor automotivo. Como reage?",
        alternativas: [
            {
                texto: "Defende o uso de energias limpas e veículos híbridos.",
                afirmacao: "Passou a influenciar outras pessoas a considerar o impacto ambiental dos carros. "
            },
            {
                texto: "Acredita que o foco deve estar na performance e potência.",
                afirmacao: "Criou um grupo de entusiastas focado na melhoria de desempenho e estilo dos carros. "
            }
        ]
    },
    {
        enunciado: "É lançado um simulador de corrida com física hiper realista. O que você faz?",
        alternativas: [
            {
                texto: "Compra o jogo e monta um setup de simulação completo.",
                afirmacao: "Começou a competir em corridas virtuais e melhorou suas habilidades como piloto. "
            },
            {
                texto: "Prefere ir para a pista real com seu próprio carro.",
                afirmacao: "Organizou encontros de pista para treinar com carros reais. "
            }
        ]
    },
    {
        enunciado: "Seu grupo precisa entregar um projeto sobre inovação nos transportes. Um colega copia tudo de um site. O que faz?",
        alternativas: [
            {
                texto: "Aceita e entrega assim mesmo, já que foi feito com IA.",
                afirmacao: "Acabou se tornando dependente de fontes automáticas sem pensar por si mesmo. "
            },
            {
                texto: "Revisa, adapta e acrescenta ideias do grupo para torná-lo único.",
                afirmacao: "Valoriza o uso da tecnologia, mas entende que ela deve ser usada com responsabilidade. "
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    historiaFinal += opcaoSelecionada.afirmacao + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Seu destino no mundo automotivo...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

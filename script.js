
const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O que você prefere? ",
        alternativas: [
            {
                texto: "Calor",
                afirmacao: "Você prefere calor,"
            },
            {
                texto: "Frio",
                afirmacao: "Você prefere frio,"
            }
        ]
    },
    {
        enunciado: "Você prefere comidas quentes ou geladas?",
        alternativas: [
            {
                texto: "Quente",
                afirmacao: "gosta mais de comida quente,"
            },
            {
                texto: "Gelada",
                afirmacao: "gosta mais de comida gelada,"
            }
        ]
    },
    {
        enunciado: "Qual seu momento preferido de comer?",
        alternativas: [
            {
                texto: "Dia",
                afirmacao: "come mais de dia e"
            },
            {
                texto: "Noite",
                afirmacao: "come mais de noite e"
            }
        ]
    },
    {
        enunciado: "Que tipo de festa você prefere?",
        alternativas: [
            {
                texto: "Aníversário",
                afirmacao: "acha mais legal festa de aniversário."
            },
            {
                texto: "Casamento",
                afirmacao: "acha mais legal festa de casamento."
            }
        ]
    },
    {
        enunciado: "Você gosta de cozinhar? ",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "Após este questionário, descobrimos que seu sabor preferido é salgado."
            },
            {
                texto: "Não",
                afirmacao: "Após este questionário, descobrimos que seu sabor preferido é doce. "
            }
        ]
    },
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
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Resultado";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();

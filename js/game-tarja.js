const medicamentos = [
  // Medicamentos Humanos
  { nome: "Paracetamol 500mg", resposta: "branca" },
  { nome: "Amoxicilina 500mg", resposta: "vermelha" },
  { nome: "Isotretinoína", resposta: "vermelha-retida" },
  { nome: "Diazepam", resposta: "preta" },

  // Medicamentos Veterinários
  { nome: "Ivermectina", resposta: "branca" },
  { nome: "Enrofloxacino", resposta: "vermelha" },
  { nome: "Dipirona Veterinária", resposta: "vermelha-retida" },
  { nome: "Aceponato de metilprednisolona", resposta: "preta" },
  { nome: "Fenbendazol", resposta: "branca" },
  { nome: "Amlodipina", resposta: "vermelha" },
  { nome: "Clavulanato de Potássio + Amoxicilina", resposta: "vermelha-retida" },
  { nome: "Prednisolona", resposta: "preta" }
];

let atual = 0;
let respostasJogador = [];  // Array para armazenar as respostas do jogador
let pontos = 0;

// Função para mostrar a pergunta e as alternativas
function mostrarTarja() {
  const perguntaElemento = document.getElementById("pergunta");
  const opcoesElemento = document.getElementById("opcoes");

  // Exibe a pergunta
  perguntaElemento.innerText = `Qual é a tarja de: ${medicamentos[atual].nome}?`;

  // Limpa as opções anteriores
  opcoesElemento.innerHTML = "";

  const alternativas = [
    { valor: "branca", texto: "⚪ Tarja Branca" },
    { valor: "vermelha", texto: "🔴 Tarja Vermelha" },
    { valor: "vermelha-retida", texto: "🔴📄 Tarja Vermelha (Retida)" },
    { valor: "preta", texto: "⚫ Tarja Preta" }
  ];

  // Cria os botões para as opções
  alternativas.forEach(op => {
    const btn = document.createElement("button");
    btn.innerText = op.texto;
    btn.onclick = () => responder(op.valor);  // Armazena a escolha do jogador
    opcoesElemento.appendChild(btn);
  });

  // Exibe o botão de "Finalizar" durante o jogo
  document.getElementById("finalizar").style.display = 'block';
}

// Função que processa a resposta do jogador
function responder(escolha) {
  // Armazena a resposta do jogador
  respostasJogador.push(escolha);

  // Avança para a próxima pergunta
  atual++;

  // Verifica se ainda há perguntas para mostrar
  if (atual < medicamentos.length) {
    setTimeout(() => {
      mostrarTarja();  // Mostrar a próxima pergunta
    }, 1500);
  } else {
    // Se acabou o jogo, exibe a pontuação final
    setTimeout(() => {
      finalizarJogo();  // Chama a função para finalizar o jogo
    }, 1500);
  }
}

// Função para iniciar o jogo
function iniciarJogo() {
  // Esconde o botão Iniciar e as instruções
  document.getElementById("iniciar").style.display = 'none';
  document.getElementById("instrucoes").style.display = 'none';

  // Reseta variáveis e exibe a primeira pergunta
  atual = 0;
  pontos = 0;
  respostasJogador = [];  // Limpa as respostas armazenadas
  mostrarTarja();
}

// Função para reiniciar o jogo
function reiniciarJogo() {
  // Reseta variáveis
  atual = 0;
  pontos = 0;
  respostasJogador = [];  // Limpa as respostas armazenadas

  // Esconde o botão Reiniciar e Finalizar
  document.getElementById("reiniciar").style.display = 'none';
  document.getElementById("finalizar").style.display = 'none';

  // Exibe o botão Iniciar novamente
  document.getElementById("iniciar").style.display = 'block';

  // Exibe as instruções novamente
  document.getElementById("instrucoes").style.display = 'block';
}

// Função para finalizar o jogo
function finalizarJogo() {
  const resultado = document.getElementById("resultado");

  // Verifica todas as respostas ao final do jogo
  for (let i = 0; i < medicamentos.length; i++) {
    if (respostasJogador[i] === medicamentos[i].resposta) {
      pontos++;  // Incrementa a pontuação se a resposta for correta
    }
  }

  // Exibe a pontuação final quando o jogador clica em "Finalizar"
  resultado.innerText = `🎉 Você finalizou o jogo! Pontuação: ${pontos}/${medicamentos.length}`;

  // Esconde as alternativas e pergunta
  document.getElementById("opcoes").innerHTML = '';
  document.getElementById("pergunta").innerText = '';

  // Esconde o botão Finalizar e exibe o botão de Reiniciar
  document.getElementById("finalizar").style.display = 'none';
  document.getElementById("reiniciar").style.display = 'block';
}

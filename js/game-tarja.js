const medicamentos = [
  { nome: "Paracetamol 500mg", resposta: "branca" },
  { nome: "Amoxicilina 500mg", resposta: "vermelha" },
  { nome: "Isotretinoína", resposta: "vermelha-retida" },
  { nome: "Diazepam", resposta: "preta" },
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
let pontos = 0;

// Função para mostrar a pergunta e as alternativas
function mostrarTarja() {
  // Atualiza o contador
  document.getElementById("contador").innerText = `${atual + 1} de ${medicamentos.length}`;

  document.getElementById("pergunta").innerText =
    `Qual é a tarja de: ${medicamentos[atual].nome}?`;

  const opcoes = document.getElementById("opcoes");
  opcoes.innerHTML = "";  // Limpar as opções anteriores

  const alternativas = [
    { valor: "branca", texto: "⚪ Tarja Branca" },
    { valor: "vermelha", texto: "🔴 Tarja Vermelha" },
    { valor: "vermelha-retida", texto: "🔴📄 Tarja Vermelha (Retida)" },
    { valor: "preta", texto: "⚫ Tarja Preta" }
  ];

  alternativas.forEach(op => {
    const btn = document.createElement("button");
    btn.innerText = op.texto;
    btn.onclick = () => responder(op.valor);
    opcoes.appendChild(btn);
  });

  // Exibe o botão de "Finalizar" durante o jogo
  document.getElementById("finalizar").style.display = 'block';
}

// Função que processa a resposta do jogador
function responder(escolha) {
  const correta = medicamentos[atual].resposta;
  const resultado = document.getElementById("resultado");

  if (escolha === correta) {
    resultado.innerText = "✅ Correto!";
    pontos++;
  } else {
    resultado.innerText = `❌ Errado! Resposta certa: ${correta}`;
  }

  // Avançar para a próxima pergunta
  atual++;

  // Verifica se ainda há perguntas para mostrar
  if (atual < medicamentos.length) {
    setTimeout(() => {
      resultado.innerText = "";  // Limpar a resposta anterior
      mostrarTarja();  // Mostrar a próxima pergunta
    }, 1500);
  } else {
    // Se acabou o jogo, exibe a pontuação final
    setTimeout(() => {
      resultado.innerText = `🎉 Pontuação final: ${pontos}/${medicamentos.length}`;
      document.getElementById("reiniciar").style.display = 'block'; // Exibe o botão de Reiniciar
    }, 1500);
  }
}

// Função para iniciar o jogo
function iniciarJogo() {
  // Esconde o botão Iniciar e as instruções
  document.getElementById("iniciar").style.display = 'none';
  document.getElementById("instrucoes").style.display = 'none';

  // Exibe a primeira pergunta
  mostrarTarja();
}

// Função para reiniciar o jogo
function reiniciarJogo() {
  // Reseta variáveis
  atual = 0;
  pontos = 0;

  // Esconde o botão Reiniciar e Finalizar
  document.getElementById("reiniciar").style.display = 'none';
  document.getElementById("finalizar").style.display = 'none';

  // Exibe o botão Iniciar novamente
  document.getElementById("iniciar").style.display = 'block';

  // Exibe as instruções
  document.getElementById("instrucoes").style.display = 'block';
}

// Função para finalizar o jogo
function finalizarJogo() {
  // Exibe a pontuação final quando o jogador clica em "Finalizar"
  const resultado = document.getElementById("resultado");
  resultado.innerText = `🎉 Você finalizou o jogo! Pontuação: ${pontos}/${medicamentos.length}`;

  // Esconde as alternativas e pergunta
  document.getElementById("opcoes").innerHTML = '';
  document.getElementById("pergunta").innerText = '';

  // Esconde o botão Finalizar e exibe o botão de Reiniciar
  document.getElementById("finalizar").style.display = 'none';
  document.getElementById("reiniciar").style.display = 'block';
}

<<<<<<< HEAD
// =============================
// DADOS
// =============================

// Lista de medicamentos e suas respectivas tarjas
const medicamentos = [
    { nome: "Anfetamina 10mg", resposta: "preta" },
    { nome: "Aspirina 500mg", resposta: "branca" },
    { nome: "Azitromicina 500mg", resposta: "vermelha" },
    { nome: "Bromazepam 6mg", resposta: "preta" },
    { nome: "Buprenorfina 0.2mg", resposta: "preta" },
    { nome: "Captopril 25mg", resposta: "branca" },
    { nome: "Cetoconazol 200mg", resposta: "vermelha" },
    { nome: "Cefalexina 500mg", resposta: "vermelha" },
    { nome: "Citalopram 20mg", resposta: "vermelha" },
    { nome: "Clonazepam", resposta: "preta" },
    { nome: "Clonidina 0.1mg", resposta: "preta" },
    { nome: "Cocaína (uso medicinal controlado)", resposta: "vermelha-retida" },
    { nome: "Codeína 30mg", resposta: "vermelha-retida" },
    { nome: "Diazepam", resposta: "preta" },
    { nome: "Dipirona Sódica 500mg", resposta: "branca" },
    { nome: "Fluoxetina 20mg", resposta: "vermelha" },
    { nome: "Fluticasona 50mcg", resposta: "branca" },
    { nome: "Furosemida 40mg", resposta: "branca" },
    { nome: "Ibuprofeno 400mg", resposta: "branca" },
    { nome: "Ibuprofeno 600mg", resposta: "branca" },
    { nome: "Isotretinoína", resposta: "vermelha-retida" },
    { nome: "Levodopa 100mg", resposta: "vermelha" },
    { nome: "Losartana 50mg", resposta: "branca" },
    { nome: "Metadona 10mg", resposta: "preta" },
    { nome: "Metformina 500mg", resposta: "branca" },
    { nome: "Methohexital 10mg", resposta: "preta" },
    { nome: "Morfina 10mg", resposta: "preta" },
    { nome: "Omeprazol 20mg", resposta: "branca" },
    { nome: "Paracetamol 500mg", resposta: "branca" },
    { nome: "Prednisona 20mg", resposta: "vermelha" },
    { nome: "Ranitidina 150mg", resposta: "branca" },
    { nome: "Ritalina (Metilfenidato)", resposta: "preta" },
    { nome: "Sertralina 50mg", resposta: "vermelha" },
    { nome: "Sildenafil 50mg", resposta: "vermelha" },
    { nome: "Tansulosina 0.4mg", resposta: "branca" },
    { nome: "Tramadol 50mg", resposta: "vermelha-retida" }
];

// Alternativas de tarjas disponíveis
const alternativas = [
=======
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
>>>>>>> 89a047f1d26338511b167632f6aca1c05916395d
    { valor: "branca", texto: "⚪ Tarja Branca" },
    { valor: "vermelha", texto: "🔴 Tarja Vermelha" },
    { valor: "vermelha-retida", texto: "🔴📄 Tarja Vermelha (Retida)" },
    { valor: "preta", texto: "⚫ Tarja Preta" }
<<<<<<< HEAD
];

// =============================
// VARIÁVEIS DO JOGO
// =============================
let atual = 0;
let pontos = 0;
let respostasUsuario = [];

// =============================
// FUNÇÕES PRINCIPAIS
// =============================

// Inicia o jogo
function iniciarJogo() {
    document.getElementById("btn-iniciar").style.display = "none";
    document.getElementById("btn-reiniciar").style.display = "inline-block";
    document.getElementById("btn-finalizar").style.display = "inline-block";
    document.getElementById("contagem-pergunta").style.display = "block";
    document.getElementById("pergunta").style.display = "block";
    mostrarTarja();
}

// Reinicia o jogo
function reiniciarJogo() {
    atual = 0;
    pontos = 0;
    respostasUsuario = [];

    document.getElementById("btn-iniciar").style.display = "inline-block";
    document.getElementById("btn-reiniciar").style.display = "none";
    document.getElementById("btn-finalizar").style.display = "none";
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("pergunta").style.display = "block";

    mostrarTarja();
}

// Finaliza o jogo a qualquer momento
function finalizarJogo() {
    mostrarResultadoFinal();
}

// Mostra a pergunta atual e as opções de resposta
function mostrarTarja() {
    const perguntaAtual = medicamentos[atual];

    document.getElementById("pergunta").innerText = `Qual é a tarja de: ${perguntaAtual.nome}?`;
    document.getElementById("contagem-pergunta").innerText = `Pergunta ${atual + 1} de ${medicamentos.length}`;

    const opcoes = document.getElementById("opcoes");
    opcoes.innerHTML = "";

    alternativas.forEach(op => {
        const btn = document.createElement("button");
        btn.innerText = op.texto;
        btn.onclick = () => responder(op.valor, btn);
        opcoes.appendChild(btn);
    });
}

// Verifica a resposta do usuário
function responder(escolha, btn) {
    const correta = medicamentos[atual].resposta;

    respostasUsuario.push({
        pergunta: medicamentos[atual].nome,
        escolhaUsuario: escolha,
        respostaCorreta: correta
    });

    document.querySelectorAll("#opcoes button").forEach(button => button.disabled = true);

    if (escolha === correta) pontos++;
    atual++;

    if (atual < medicamentos.length) {
        setTimeout(mostrarTarja, 1000);
    } else {
        mostrarResultadoFinal();
    }
}

// Exibe a pontuação e o resumo das respostas
function mostrarResultadoFinal() {
    const resultado = document.getElementById("resultado");
    const opcoes = document.getElementById("opcoes");

    opcoes.innerHTML = "";
    document.getElementById("contagem-pergunta").style.display = "none";
    document.getElementById("btn-finalizar").style.display = "none";
    document.getElementById("pergunta").innerText = "";

    let htmlResultado = `<h2>🎉 Pontuação Final: ${pontos}/${respostasUsuario.length}</h2>`;
    htmlResultado += `<h3>Resumo das respostas:</h3>`;

    respostasUsuario.forEach((item, index) => {
        const status = item.escolhaUsuario === item.respostaCorreta ? "✅ Correto" : "❌ Errado";
        const textoCorreta = alternativas.find(a => a.valor === item.respostaCorreta).texto;
        const textoUsuario = alternativas.find(a => a.valor === item.escolhaUsuario).texto;

        htmlResultado += `
            <div class="resumo-pergunta">
                <p><strong>${index + 1}. ${item.pergunta}</strong></p>
                <p>Sua resposta: ${textoUsuario}</p>
                <p>Resposta correta: ${textoCorreta} (${status})</p>
                <hr>
            </div>
        `;
    });

    resultado.innerHTML = htmlResultado;
=======
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
>>>>>>> 89a047f1d26338511b167632f6aca1c05916395d
}

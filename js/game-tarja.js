// =============================
// LISTA DE MEDICAMENTOS
// =============================
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

// =============================
// ALTERNATIVAS DE TARJA
// =============================
const alternativas = [
  { valor: "branca", texto: "⚪ Tarja Branca" },
  { valor: "vermelha", texto: "🔴 Tarja Vermelha" },
  { valor: "vermelha-retida", texto: "🔴📄 Tarja Vermelha (Retida)" },
  { valor: "preta", texto: "⚫ Tarja Preta" }
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
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("instrucoes").style.display = "none"; // 👈 Esconde instruções
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
  document.getElementById("contagem-pergunta").style.display = "none";
  document.getElementById("opcoes").innerHTML = "";
  document.getElementById("instrucoes").style.display = "block"; // 👈 Mostra instruções

  mostrarTarja();
}

// Finaliza o jogo
function finalizarJogo() {
  mostrarResultadoFinal();
}

// Mostra a pergunta atual e as opções
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

  if (escolha === correta) {
    btn.style.backgroundColor = "#28a745";
    btn.style.color = "#fff";
  } else {
    btn.style.backgroundColor = "#dc3545";
    btn.style.color = "#fff";
  }

  if (escolha === correta) pontos++;
  atual++;

  if (atual < medicamentos.length) {
    setTimeout(mostrarTarja, 1000);
  } else {
    setTimeout(mostrarResultadoFinal, 1000);
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
}

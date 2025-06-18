const perguntas = [
  { combinacao: ["Omeprazol", "Clopidogrel"], resposta: "Interagem" },
  { combinacao: ["Paracetamol", "Amoxicilina"], resposta: "Seguros" },
  { combinacao: ["Warfarina", "AAS"], resposta: "Interagem" },
  { combinacao: ["Dipirona", "Ibuprofeno"], resposta: "Seguros" },
  { combinacao: ["Atorvastatina", "Rifampicina"], resposta: "Interagem" },
  { combinacao: ["Atenolol", "Losartana"], resposta: "Seguros" },
  { combinacao: ["Metotrexato", "Ibuprofeno"], resposta: "Interagem" },
  { combinacao: ["Prednisona", "Cetirizina"], resposta: "Seguros" },
  { combinacao: ["Furosemida", "Lisinopril"], resposta: "Seguros" },
  { combinacao: ["Clonazepam", "Alprazolam"], resposta: "Interagem" },
  { combinacao: ["Amoxicilina", "Ácido Clavulânico"], resposta: "Seguros" },
  { combinacao: ["Dexametasona", "Cetoconazol"], resposta: "Interagem" },
  { combinacao: ["Diazepam", "Ibuprofeno"], resposta: "Seguros" },
  { combinacao: ["Fluoxetina", "Clonazepam"], resposta: "Interagem" },
  { combinacao: ["Sertralina", "Paroxetina"], resposta: "Interagem" },
  { combinacao: ["Ibuprofeno", "Aspirina"], resposta: "Interagem" },
  { combinacao: ["Diazepam", "Clonazepam"], resposta: "Interagem" },
  { combinacao: ["Antiinflamatórios (ex: Diclofenaco)", "Losartana"], resposta: "Interagem" },
  { combinacao: ["Paracetamol", "Doxiciclina"], resposta: "Interagem" },
  { combinacao: ["Carbamazepina", "Dipirona"], resposta: "Interagem" },
  { combinacao: ["Antidepressivos (ex: Fluoxetina)", "Alcool"], resposta: "Interagem" },
  { combinacao: ["Omeprazol", "Warfarina"], resposta: "Interagem" },
  { combinacao: ["Prednisona", "Ibuprofeno"], resposta: "Interagem" },
  { combinacao: ["Metformina", "Álcool"], resposta: "Interagem" },
  { combinacao: ["Sinvastatina", "Verapamil"], resposta: "Interagem" },
  { combinacao: ["Ciprofloxacino", "Warfarina"], resposta: "Interagem" },
  { combinacao: ["Sertralina", "Ibuprofeno"], resposta: "Interagem" }
];

let atual = 0;
let pontos = 0;
let respostas = []; // Armazenar as respostas do jogador

// Função para embaralhar perguntas (Fisher-Yates)
function embaralhar(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Troca os elementos
  }
}

// Embaralha as perguntas no início do jogo
embaralhar(perguntas);

function mostrarInteracao() {
  const p = perguntas[atual];
  document.getElementById("pergunta").innerText =
    `Esses medicamentos interagem?\n${p.combinacao.join(" + ")}`;

  const opcoes = document.getElementById("opcoes");
  opcoes.innerHTML = "";

  ["Interagem", "Seguros"].forEach((resp) => {
    const btn = document.createElement("button");
    btn.innerText = resp;
    btn.onclick = () => responder(resp);
    opcoes.appendChild(btn);
  });

  // Atualiza o contador de perguntas
  document.getElementById("contador").innerText = `Pergunta ${atual + 1} de ${perguntas.length}`;
}

function responder(resp) {
  const correta = perguntas[atual].resposta;
  // Armazenar a resposta do jogador
  respostas.push({
    pergunta: perguntas[atual].combinacao.join(" + "),
    respostaJogador: resp,
    correta: correta,
    acertou: resp === correta
  });

  if (resp === correta) {
    pontos++;
  }

  atual++;
  if (atual < perguntas.length) {
    mostrarInteracao();  // Muda imediatamente para a próxima pergunta
  } else {
    mostrarResultado();  // Exibe o resultado final quando o jogador terminar todas as perguntas
  }
}

function mostrarResultado() {
  const resultado = document.getElementById("resultado");
  resultado.innerText = `🎉 Fim! Pontuação: ${pontos} de ${perguntas.length}`;

  // Exibir o relatório final
  const relatorio = document.createElement("div");
  relatorio.innerHTML = "<h2>Relatório de Respostas</h2>";

  respostas.forEach((resp, index) => {
    const status = resp.acertou ? "✅ Acertou" : `❌ Errou (Resposta correta: ${resp.correta})`;
    relatorio.innerHTML += `
      <p><strong>Pergunta ${index + 1}:</strong> ${resp.pergunta}</p>
      <p><strong>Sua resposta:</strong> ${resp.respostaJogador}</p>
      <p><strong>Status:</strong> ${status}</p><hr>
    `;
  });

  document.getElementById("resultado").appendChild(relatorio);

  // Exibir botões de "Finalizar" e "Reiniciar"
  document.getElementById("finalizarBtn").style.display = 'none';
  document.getElementById("reiniciarBtn").style.display = 'inline-block';
}

function reiniciar() {
  pontos = 0;
  atual = 0;
  respostas = [];  // Limpar as respostas armazenadas
  document.getElementById("resultado").innerText = "";
  document.getElementById("reiniciarBtn").style.display = 'none';
  document.getElementById("finalizarBtn").style.display = 'inline-block';
  embaralhar(perguntas);  // Reembaralha as perguntas ao reiniciar
  mostrarInteracao();
}

// Função de finalizar
function finalizar() {
  mostrarResultado();
  document.getElementById("reiniciarBtn").style.display = 'inline-block';
  document.getElementById("finalizarBtn").style.display = 'none';
}

// Função de iniciar o jogo
function iniciar() {
  document.getElementById("instrucoes").style.display = "none";
  document.getElementById("iniciarBtn").style.display = "none";
  mostrarInteracao();

  // Definir comportamento do botão de finalizar
  document.getElementById("finalizarBtn").onclick = finalizar;

  // Definir comportamento do botão de reiniciar
  document.getElementById("reiniciarBtn").onclick = reiniciar;
}

document.getElementById("iniciarBtn").onclick = iniciar;

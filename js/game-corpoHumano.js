const challenges = {
  "Sistema Nervoso": [
    {
      text: "Qual é a função principal do sistema nervoso central?",
      options: [
        { text: "Controlar movimentos involuntários", correct: false },
        { text: "Processar informações e coordenar respostas", correct: true },
        { text: "Bombear sangue pelo corpo", correct: false },
        { text: "Digestionar alimentos", correct: false }
      ]
    },
    {
      text: "Quais são as duas principais partes do sistema nervoso central?",
      options: [
        { text: "Coração e pulmões", correct: false },
        { text: "Estômago e intestinos", correct: false },
        { text: "Cérebro e medula espinhal", correct: true },
        { text: "Fígado e rins", correct: false }
      ]
    },
    {
      text: "Qual é a função dos neurônios?",
      options: [
        { text: "Transportar oxigênio", correct: false },
        { text: "Produzir hormônios", correct: false },
        { text: "Transmitir impulsos elétricos", correct: true },
        { text: "Filtrar o sangue", correct: false }
      ]
    },
    {
      text: "O que é uma sinapse?",
      options: [
        { text: "A menor unidade muscular", correct: false },
        { text: "A junção entre dois neurônios", correct: true },
        { text: "O processo de respiração celular", correct: false },
        { text: "Um tipo de osso", correct: false }
      ]
    }
  ],
  "Sistema Respiratório": [
    {
      text: "Qual é o principal órgão do sistema respiratório?",
      options: [
        { text: "Coração", correct: false },
        { text: "Pulmões", correct: true },
        { text: "Fígado", correct: false },
        { text: "Rins", correct: false }
      ]
    },
    {
      text: "Qual gás é absorvido pelo corpo durante a respiração?",
      options: [
        { text: "Dióxido de carbono", correct: false },
        { text: "Nitrogênio", correct: false },
        { text: "Oxigênio", correct: true },
        { text: "Metano", correct: false }
      ]
    },
    {
      text: "O que é a inspiração?",
      options: [
        { text: "O ato de expirar o ar", correct: false },
        { text: "O ato de inalar o ar", correct: true },
        { text: "O ato de tossir", correct: false },
        { text: "O ato de prender a respiração", correct: false }
      ]
    },
    {
      text: "Qual é a função do diafragma?",
      options: [
        { text: "Proteger o estômago", correct: false },
        { text: "Regular a pressão sanguínea", correct: false },
        { text: "Ajudar na respiração", correct: true },
        { text: "Sintetizar vitaminas", correct: false }
      ]
    }
  ],
  "Sistema Circulatório": [
    {
      text: "Qual é o principal órgão do sistema circulatório?",
      options: [
        { text: "Fígado", correct: false },
        { text: "Pulmões", correct: false },
        { text: "Coração", correct: true },
        { text: "Cérebro", correct: false }
      ]
    },
    {
      text: "Qual é a função do coração?",
      options: [
        { text: "Filtrar o sangue", correct: false },
        { text: "Produzir hormônios", correct: false },
        { text: "Bombear sangue para todo o corpo", correct: true },
        { text: "Armazenar gordura", correct: false }
      ]
    },
    {
      text: "O que são artérias?",
      options: [
        { text: "Vasos que levam sangue do coração para o corpo", correct: true },
        { text: "Vasos que levam sangue para o coração", correct: false },
        { text: "Células que transportam oxigênio", correct: false },
        { text: "Tecidos que se contraem", correct: false }
      ]
    },
    {
      text: "Qual é a principal função dos glóbulos vermelhos?",
      options: [
        { text: "Combater infecções", correct: false },
        { text: "Ajudar na coagulação", correct: false },
        { text: "Transportar oxigênio", correct: true },
        { text: "Digestionar nutrientes", correct: false }
      ]
    }
  ],
  "Sistema Digestivo": [
    {
      text: "Onde começa o processo de digestão?",
      options: [
        { text: "No estômago", correct: false },
        { text: "Na boca", correct: true },
        { text: "No intestino delgado", correct: false },
        { text: "No fígado", correct: false }
      ]
    },
    {
      text: "Qual é a função do estômago?",
      options: [
        { text: "Absorver nutrientes", correct: false },
        { text: "Digestionar proteínas e misturar alimentos", correct: true },
        { text: "Armazenar bile", correct: false },
        { text: "Produzir urina", correct: false }
      ]
    },
    {
      text: "O que acontece no intestino delgado?",
      options: [
        { text: "A absorção da maioria dos nutrientes", correct: true },
        { text: "A formação das fezes", correct: false },
        { text: "A mastigação dos alimentos", correct: false },
        { text: "A produção de saliva", correct: false }
      ]
    },
    {
      text: "Qual órgão produz a bile para ajudar na digestão de gorduras?",
      options: [
        { text: "Pâncreas", correct: false },
        { text: "Estômago", correct: false },
        { text: "Fígado", correct: true },
        { text: "Rim", correct: false }
      ]
    }
  ],
  "Sistema Urinário": [
    {
      text: "Qual é a função dos rins?",
      options: [
        { text: "Produzir hormônios do crescimento", correct: false },
        { text: "Bombear sangue", correct: false },
        { text: "Filtrar o sangue e remover resíduos", correct: true },
        { text: "Ajudar na visão", correct: false }
      ]
    },
    {
      text: "O que é a uretra?",
      options: [
        { text: "Um músculo da perna", correct: false },
        { text: "Um tubo que transporta a urina para fora do corpo", correct: true },
        { text: "Uma parte do cérebro", correct: false },
        { text: "Um osso do braço", correct: false }
      ]
    },
    {
      text: "O que é a bexiga?",
      options: [
        { text: "Um órgão que produz enzimas digestivas", correct: false },
        { text: "Um saco muscular que armazena a urina", correct: true },
        { text: "Uma glândula endócrina", correct: false },
        { text: "Uma parte do pulmão", correct: false }
      ]
    },
    {
      text: "Como o corpo se livra do excesso de água e resíduos?",
      options: [
        { text: "Através da transpiração e da urina", correct: true },
        { text: "Através da respiração", correct: false },
        { text: "Através da digestão", correct: false },
        { text: "Através do coração", correct: false }
      ]
    }
  ],
  "Sistema Endócrino": [
    {
      text: "Qual é a função do sistema endócrino?",
      options: [
        { text: "Coordenar movimentos", correct: false },
        { text: "Produzir hormônios para regular funções corporais", correct: true },
        { text: "Ajudar a coagular o sangue", correct: false },
        { text: "Bombear o coração", correct: false }
      ]
    },
    {
      text: "O que são hormônios?",
      options: [
        { text: "Sinais elétricos", correct: false },
        { text: "Mensageiros químicos do corpo", correct: true },
        { text: "Músculos do coração", correct: false },
        { text: "Células ósseas", correct: false }
      ]
    },
    {
      text: "Qual glândula é conhecida como a 'glândula mestre'?",
      options: [
        { text: "Tireoide", correct: false },
        { text: "Pâncreas", correct: false },
        { text: "Hipófise", correct: true },
        { text: "Adrenal", correct: false }
      ]
    },
    {
      text: "Quais são as funções do pâncreas?",
      options: [
        { text: "Produzir insulina e enzimas digestivas", correct: true },
        { text: "Filtrar o sangue", correct: false },
        { text: "Bombear o coração", correct: false },
        { text: "Armazenar cálcio", correct: false }
      ]
    }
  ],
  "Sistema Reprodutor": [
    {
      text: "Qual hormônio é responsável pelas características sexuais masculinas?",
      options: [
        { text: "Estrogênio", correct: false },
        { text: "Testosterona", correct: true },
        { text: "Insulina", correct: false },
        { text: "Progesterona", correct: false }
      ]
    },
    {
      text: "Qual órgão produz os espermatozoides?",
      options: [
        { text: "Pênis", correct: false },
        { text: "Testículos", correct: true },
        { text: "Próstata", correct: false },
        { text: "Útero", correct: false }
      ]
    },
    {
      text: "Qual hormônio é responsável pelas características sexuais femininas?",
      options: [
        { text: "Testosterona", correct: false },
        { text: "Adrenalina", correct: false },
        { text: "Estrogênio", correct: true },
        { text: "Cortisol", correct: false }
      ]
    },
    {
      text: "Onde ocorre a fertilização?",
      options: [
        { text: "No útero", correct: false },
        { text: "No ovário", correct: false },
        { text: "Na vagina", correct: false },
        { text: "Nas tubas uterinas", correct: true }
      ]
    }
  ],
  "Sistema Muscular": [
    {
      text: "Quantos músculos o corpo humano tem?",
      options: [
        { text: "Aproximadamente 206", correct: false },
        { text: "Aproximadamente 400", correct: false },
        { text: "Aproximadamente 650", correct: true },
        { text: "Aproximadamente 1000", correct: false }
      ]
    },
    {
      text: "Quais são os três tipos de músculos?",
      options: [
        { text: "Voluntários, involuntários e mistos", correct: false },
        { text: "Esquelético, liso e cardíaco", correct: true },
        { text: "Fibras brancas, vermelhas e cinzentas", correct: false },
        { text: "Longos, curtos e planos", correct: false }
      ]
    },
    {
      text: "Qual é a função dos músculos esqueléticos?",
      options: [
        { text: "Ajudar na digestão", correct: false },
        { text: "Bombear o sangue", correct: false },
        { text: "Permitir movimentos voluntários", correct: true },
        { text: "Controlar a temperatura corporal", correct: false }
      ]
    },
    {
      text: "Qual é a principal proteína que compõe os músculos?",
      options: [
        { text: "Colágeno", correct: false },
        { text: "Queratina", correct: false },
        { text: "Actina e Miosina", correct: true },
        { text: "Elastina", correct: false }
      ]
    }
  ],
  "Sistema Esquelético": [
    {
      text: "Quantos ossos um adulto tem?",
      options: [
        { text: "300", correct: false },
        { text: "206", correct: true },
        { text: "150", correct: false },
        { text: "400", correct: false }
      ]
    },
    {
      text: "Qual é a principal função do esqueleto?",
      options: [
        { text: "Produzir hormônios", correct: false },
        { text: "Dar suporte, proteger órgãos e permitir movimentos", correct: true },
        { text: "Transportar oxigênio", correct: false },
        { text: "Controlar a temperatura corporal", correct: false }
      ]
    },
    {
      text: "Quais são os principais componentes do esqueleto?",
      options: [
        { text: "Coração, pulmões e fígado", correct: false },
        { text: "Células sanguíneas", correct: false },
        { text: "Ossos, cartilagens e ligamentos", correct: true },
        { text: "Músculos e tendões", correct: false }
      ]
    },
    {
      text: "O que é a medula óssea?",
      options: [
        { text: "O tecido que conecta os ossos", correct: false },
        { text: "O tecido macio dentro dos ossos que produz células sanguíneas", correct: true },
        { text: "O tecido que reveste a pele", correct: false },
        { text: "O tecido que armazena gordura", correct: false }
      ]
    }
  ],
  "Sistema Imunológico": [
    {
      text: "Qual é a função do sistema imunológico?",
      options: [
        { text: "Digestionar alimentos", correct: false },
        { text: "Proteger o corpo contra doenças e infecções", correct: true },
        { text: "Bombear sangue", correct: false },
        { text: "Regular o humor", correct: false }
      ]
    },
    {
      text: "O que são anticorpos?",
      options: [
        { text: "Um tipo de hormônio", correct: false },
        { text: "Proteínas que combatem agentes infecciosos", correct: true },
        { text: "Células musculares", correct: false },
        { text: "Partes do DNA", correct: false }
      ]
    },
    {
      text: "O que são glóbulos brancos?",
      options: [
        { text: "Células que transportam oxigênio", correct: false },
        { text: "Células que combatem infecções", correct: true },
        { text: "Células que ajudam na coagulação do sangue", correct: false },
        { text: "Células que armazenam gordura", correct: false }
      ]
    },
    {
      text: "Qual é a diferença entre imunidade inata e adquirida?",
      options: [
        { text: "Inata é para vírus, adquirida é para bactérias", correct: false },
        { text: "Inata é a defesa geral; adquirida é específica, criada após exposição a um patógeno", correct: true },
        { text: "Inata é para adultos, adquirida é para crianças", correct: false },
        { text: "Não há diferença, são a mesma coisa", correct: false }
      ]
    }
  ]
};

let currentQuestionIndex = 0;
let currentSystem = '';
let score = 0;
let userAnswers = [];

function startGame() {
  document.getElementById("start-btn").classList.add("hidden");
  document.getElementById("restart-btn").classList.remove("hidden");
  document.getElementById("instructions").classList.add("hidden");
  document.getElementById("system-selection").classList.remove("hidden");
  document.getElementById("challenge-area").classList.add("hidden");
  clearChallengeArea();
}

function restartGame() {
  document.getElementById("start-btn").classList.remove("hidden");
  document.getElementById("restart-btn").classList.add("hidden");
  document.getElementById("instructions").classList.remove("hidden");
  document.getElementById("system-selection").classList.add("hidden");
  document.getElementById("challenge-area").classList.add("hidden");
  clearChallengeArea();
}

function clearChallengeArea() {
  document.getElementById("feedback").textContent = "";
  document.getElementById("challenge-text").textContent = "";
  document.getElementById("options").innerHTML = "";
}

function startChallenge(system) {
  document.getElementById("system-selection").classList.add("hidden");
  document.getElementById("challenge-area").classList.remove("hidden");
  currentSystem = system;
  currentQuestionIndex = 0;
  score = 0;
  userAnswers = [];
  loadQuestion();
}

function loadQuestion() {
  clearChallengeArea();
  const challenge = challenges[currentSystem][currentQuestionIndex];
  if (!challenge) {
    showFinalResults();
    return;
  }

  document.getElementById("challenge-text").textContent = challenge.text;

  const optionsDiv = document.getElementById("options");
  challenge.options.forEach((opt) => {
    const btn = document.createElement("button");
    btn.textContent = opt.text;
    btn.onclick = () => handleAnswer(opt);
    optionsDiv.appendChild(btn);
  });
}

function handleAnswer(selectedOption) {
  const currentQuestionData = challenges[currentSystem][currentQuestionIndex];
  const isCorrect = selectedOption.correct;
  userAnswers.push({
    question: currentQuestionData.text,
    userAnswer: selectedOption.text,
    isCorrect: isCorrect,
    correctAnswer: currentQuestionData.options.find(opt => opt.correct).text
  });

  if (isCorrect) {
    score++;
  }

  // Desabilitar botões de opção após a resposta
  const optionButtons = document.querySelectorAll("#options button");
  optionButtons.forEach(btn => btn.disabled = true);
  
  // Esperar um pouco antes de carregar a próxima pergunta
  setTimeout(() => {
    currentQuestionIndex++;
    loadQuestion();
  }, 500); 
}

function showFinalResults() {
  clearChallengeArea();
  document.getElementById("challenge-text").textContent = `Fim do desafio!`;
  
  const totalQuestions = challenges[currentSystem].length;
  document.getElementById("feedback").textContent = `Você acertou ${score} de ${totalQuestions} perguntas.`;

  const resultsList = document.createElement("ul");
  userAnswers.forEach((answer) => {
    const listItem = document.createElement("li");
    let icon = answer.isCorrect ? "✅" : "❌";
    
    if (answer.isCorrect) {
      listItem.innerHTML = `<strong>${answer.question}</strong><br>
                           Sua resposta: ${answer.userAnswer} ${icon}`;
    } else {
      listItem.innerHTML = `<strong>${answer.question}</strong><br>
                           Sua resposta: ${answer.userAnswer} ${icon}<br>
                           Resposta correta: ${answer.correctAnswer}`;
    }
    resultsList.appendChild(listItem);
  });
  document.getElementById("options").appendChild(resultsList);

  // Botão para voltar para seleção de sistemas
  const backBtn = document.createElement("button");
  backBtn.textContent = "Escolher outro sistema";
  backBtn.onclick = () => {
    document.getElementById("challenge-area").classList.add("hidden");
    document.getElementById("system-selection").classList.remove("hidden");
  };
  document.getElementById("options").appendChild(backBtn);
}
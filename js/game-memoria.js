const medications = [
    { name: "Dipirona", image: "img/nomes-remedios/dipirona.png", active: "Analgésico" },
    { name: "Dipirona", image: "img/nomes-remedios/dipirona.png", active: "Analgésico" },
    { name: "Ibuprofeno", image: "img/nomes-remedios/ibuprofeno.png", active: "Anti-inflamatório" },
    { name: "Ibuprofeno", image: "img/nomes-remedios/ibuprofeno.png", active: "Anti-inflamatório" },
    { name: "Paracetamol", image: "img/nomes-remedios/paracetamol.png", active: "Antitérmico" },
    { name: "Paracetamol", image: "img/nomes-remedios/paracetamol.png", active: "Antitérmico" },
    { name: "Captopril", image: "img/nomes-remedios/captopril.png", active: "Anti-hipertensivo" },
    { name: "Captopril", image: "img/nomes-remedios/captopril.png", active: "Anti-hipertensivo" },
    { name: "Omeprazol", image: "img/nomes-remedios/omeprazol.png", active: "Antiulceroso" },
    { name: "Omeprazol", image: "img/nomes-remedios/omeprazol.png", active: "Antiulceroso" },
    { name: "Losartana", image: "img/nomes-remedios/losartana.png", active: "Anti-hipertensivo" },
    { name: "Losartana", image: "img/nomes-remedios/losartana.png", active: "Anti-hipertensivo" },
    { name: "Loratadina", image: "img/nomes-remedios/loratadina.png", active: "Antialérgico" },
    { name: "Loratadina", image: "img/nomes-remedios/loratadina.png", active: "Antialérgico" },
    { name: "Salmeterol", image: "img/nomes-remedios/salmeterol.png", active: "Broncodilatador" },
    { name: "Salmeterol", image: "img/nomes-remedios/salmeterol.png", active: "Broncodilatador" },
    { name: "Cloridrato de Sertralina", image: "img/nomes-remedios/sertralina.png", active: "Antidepressivo" },
    { name: "Cloridrato de Sertralina", image: "img/nomes-remedios/sertralina.png", active: "Antidepressivo" },
    { name: "Furosemida", image: "img/nomes-remedios/furosemida.png", active: "Diurético" },
    { name: "Furosemida", image: "img/nomes-remedios/furosemida.png", active: "Diurético" },
    { name: "Metformina", image: "img/nomes-remedios/metformina.png", active: "Antidiabético" },
    { name: "Metformina", image: "img/nomes-remedios/metformina.png", active: "Antidiabético" },
    { name: "Dexametasona", image: "img/nomes-remedios/dexametasona.png", active: "Corticoide" },
    { name: "Dexametasona", image: "img/nomes-remedios/dexametasona.png", active: "Corticoide" },
    { name: "AAS", image: "img/nomes-remedios/aas.png", active: "Antiagregante plaquetário" },
    { name: "AAS", image: "img/nomes-remedios/aas.png", active: "Antiagregante plaquetário" },
    { name: "Diclofenaco", image: "img/nomes-remedios/diclofenaco.png", active: "Anti-inflamatório" },
    { name: "Diclofenaco", image: "img/nomes-remedios/diclofenaco.png", active: "Anti-inflamatório" },
    { name: "Amitriptilina", image: "img/nomes-remedios/amitriptilina.png", active: "Antidepressivo" },
    { name: "Amitriptilina", image: "img/nomes-remedios/amitriptilina.png", active: "Antidepressivo" },
    { name: "Tramadol", image: "img/nomes-remedios/tramadol.png", active: "Analgesia opioide" },
    { name: "Tramadol", image: "img/nomes-remedios/tramadol.png", active: "Analgesia opioide" },
    { name: "Cetoconazol", image: "img/nomes-remedios/cetoconazol.png", active: "Antifúngico" },
    { name: "Cetoconazol", image: "img/nomes-remedios/cetoconazol.png", active: "Antifúngico" },
    { name: "Trazodona", image: "img/nomes-remedios/trazodona.png", active: "Antidepressivo" },
    { name: "Trazodona", image: "img/nomes-remedios/trazodona.png", active: "Antidepressivo" },
    { name: "Ranitidina", image: "img/nomes-remedios/ranitidina.png", active: "Antiácido" },
    { name: "Ranitidina", image: "img/nomes-remedios/ranitidina.png", active: "Antiácido" },
    { name: "Bupropiona", image: "img/nomes-remedios/bupropiona.png", active: "Antidepressivo" },
    { name: "Bupropiona", image: "img/nomes-remedios/bupropiona.png", active: "Antidepressivo" },
    { name: "Naproxeno", image: "img/nomes-remedios/naproxeno.png", active: "Anti-inflamatório" },
    { name: "Naproxeno", image: "img/nomes-remedios/naproxeno.png", active: "Anti-inflamatório" },
    { name: "Anlodipino", image: "img/nomes-remedios/anlodipino.png", active: "Anti-hipertensivo" },
    { name: "Anlodipino", image: "img/nomes-remedios/anlodipino.png", active: "Anti-hipertensivo" },
    { name: "Espironolactona", image: "img/nomes-remedios/espironolactona.png", active: "Anti-hipertensivo" },
    { name: "Espironolactona", image: "img/nomes-remedios/espironolactona.png", active: "Anti-hipertensivo" },
    { name: "Atorvastatina", image: "img/nomes-remedios/atorvastatina.png", active: "Hipolipemiante" },
    { name: "Atorvastatina", image: "img/nomes-remedios/atorvastatina.png", active: "Hipolipemiante" }
];


let flippedCards = [];
let matchedCards = 0;
let timer;
let seconds = 0;
let minutes = 0;

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function startGame() {
    document.getElementById("start-button").style.display = "none";
    document.getElementById("restart-button").style.display = "inline-block";
    document.getElementById("instrucoes").style.display = "none"; // Esconde as instruções
    timer = setInterval(updateTime, 1000);
    createBoard(); 
}

function updateTime() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++;
    }
    document.getElementById("timer").textContent = `Tempo: ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function stopTimer() {
    clearInterval(timer);
}

function createBoard() {
    shuffle(medications);
    const board = document.getElementById("game-board");
    board.innerHTML = "";
    medications.forEach((med, index) => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.setAttribute("data-index", index);
        card.setAttribute("data-flipped", "false");
        card.style.backgroundImage = `url(img/medicamentos-capa.jpeg)`; // verso
        card.addEventListener("click", flipCard);
        board.appendChild(card);
    });
}

function flipCard() {
    const card = this;
    const index = card.getAttribute("data-index");
    const med = medications[index];

    if (card.getAttribute("data-flipped") === "true" || flippedCards.length >= 2) return;

    card.innerHTML = "";
    if (flippedCards.length === 0) {
        const img = document.createElement("img");
        img.src = med.image;
        card.appendChild(img);
    } else {
        const textDiv = document.createElement("div");
        textDiv.classList.add("category-text");
        textDiv.innerText = `${med.name} é um ${med.active}.`;
        card.appendChild(textDiv);
    }

    card.classList.add("flipped");
    card.setAttribute("data-flipped", "true");
    flippedCards.push(card);

    if (flippedCards.length === 2) {
        setTimeout(checkMatch, 1000);
    }
}

function checkMatch() {
    const [card1, card2] = flippedCards;
    const index1 = card1.getAttribute("data-index");
    const index2 = card2.getAttribute("data-index");

    if (medications[index1].name === medications[index2].name &&
        medications[index1].active === medications[index2].active) {
        card1.classList.add("matched");
        card2.classList.add("matched");
        matchedCards += 2;
    } else {
        card1.classList.remove("flipped");
        card2.classList.remove("flipped");
        card1.setAttribute("data-flipped", "false");
        card2.setAttribute("data-flipped", "false");
        card1.innerHTML = "";
        card2.innerHTML = "";
        card1.style.backgroundImage = `url(img/medicamentos-capa.jpeg)`;
        card2.style.backgroundImage = `url(img/medicamentos-capa.jpeg)`;
    }

    flippedCards = [];

    if (matchedCards === medications.length) {
        stopTimer();
        setTimeout(() => alert(`Parabéns! Você completou o jogo em ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.`), 200);
    }
}

function restartGame() {
    matchedCards = 0;
    flippedCards = [];
    seconds = 0;
    minutes = 0;
    document.getElementById("timer").textContent = `Tempo: 00:00`;
    startGame();
}

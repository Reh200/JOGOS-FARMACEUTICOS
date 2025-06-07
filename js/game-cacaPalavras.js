// Lista de palavras para o jogo
const words = [
  "ASPIRINA", "PARACETAMOL", "IBUPROFENO", "ANTIBIOTICO", "VITAMINA", "SORA", "CALCIO", "CORTICOIDE", "ALERGIA", "EXAME"
];

// Função para gerar a grade do caça-palavras
function generateGrid() {
  const gridContainer = document.getElementById("word-search");
  const gridSize = 12;
  let grid = Array.from({ length: gridSize }, () => Array(gridSize).fill(''));

  // Preencher as palavras na grade
  words.forEach(word => {
    placeWord(word, grid);
  });

  // Preencher espaços vazios com letras aleatórias
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      if (grid[i][j] === '') {
        grid[i][j] = String.fromCharCode(65 + Math.floor(Math.random() * 26));
      }
    }
  }

  // Criar as células da grade
  grid.forEach((row, rowIndex) => {
    row.forEach((cell, colIndex) => {
      const div = document.createElement("div");
      div.classList.add("cell");
      div.dataset.row = rowIndex;
      div.dataset.col = colIndex;
      div.textContent = cell;
      gridContainer.appendChild(div);
    });
  });
}

// Função para colocar uma palavra na grade
function placeWord(word, grid) {
  let placed = false;
  const gridSize = 12;

  while (!placed) {
    const direction = Math.random() < 0.5 ? 'horizontal' : 'vertical';
    const row = Math.floor(Math.random() * gridSize);
    const col = Math.floor(Math.random() * gridSize);
    const wordLength = word.length;

    if (direction === 'horizontal' && col + wordLength <= gridSize) {
      if (grid[row].slice(col, col + wordLength).every(cell => cell === '')) {
        for (let i = 0; i < wordLength; i++) {
          grid[row][col + i] = word[i];
        }
        placed = true;
      }
    } else if (direction === 'vertical' && row + wordLength <= gridSize) {
      if (grid.slice(row, row + wordLength).every(r => r[col] === '')) {
        for (let i = 0; i < wordLength; i++) {
          grid[row + i][col] = word[i];
        }
        placed = true;
      }
    }
  }
}

// Função para marcar uma palavra encontrada
function checkSelection(selectedCells) {
  const selectedWord = selectedCells.map(cell => cell.textContent).join('');
  if (words.includes(selectedWord)) {
    selectedCells.forEach(cell => {
      cell.classList.add('found');
    });
    document.querySelectorAll('#words li').forEach(item => {
      if (item.textContent === selectedWord) {
        item.classList.add('found');
      }
    });
  } else {
    selectedCells.forEach(cell => {
      cell.classList.remove('selected');
    });
  }
}

// Função para configurar a interação do jogo
function setupGame() {
  const gridContainer = document.getElementById("word-search");
  const cells = Array.from(gridContainer.getElementsByClassName("cell"));
  const selectedCells = [];
  
  cells.forEach(cell => {
    cell.addEventListener('mousedown', () => {
      selectedCells.length = 0;
      cell.classList.add('selected');
      selectedCells.push(cell);
    });

    cell.addEventListener('mouseover', () => {
      if (selectedCells.length > 0 && !selectedCells.includes(cell)) {
        cell.classList.add('selected');
        selectedCells.push(cell);
      }
    });

    cell.addEventListener('mouseup', () => {
      checkSelection(selectedCells);
    });
  });

  // Preencher a lista de palavras
  const wordList = document.getElementById('words');
  words.forEach(word => {
    const li = document.createElement('li');
    li.textContent = word;
    wordList.appendChild(li);
  });
}

// Iniciar o jogo
generateGrid();
setupGame();

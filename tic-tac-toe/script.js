(() => {
  const boardEl = document.getElementById('board');
  const statusEl = document.getElementById('status');
  const startBtn = document.getElementById('startBtn');
  const boardSizeInput = document.getElementById('boardSize');
  const winLengthInput = document.getElementById('winLength');
  const scoreXEl = document.getElementById('scoreX');
  const scoreOEl = document.getElementById('scoreO');
  const scoreDrawEl = document.getElementById('scoreDraw');
  const playAgainBtn = document.getElementById('playAgainBtn');
  const boardWrapper = document.querySelector('.board-wrapper');

  let boardSize = 10;
  let winLength = 5;
  let board = [];
  let currentPlayer = 'X';
  let gameActive = false;
  let moveCount = 0;
  const scores = { X: 0, O: 0, Draw: 0 };

  startBtn.addEventListener('click', startGame);
  playAgainBtn.addEventListener('click', playAgain);

  function startGame() {
    const size = parseInt(boardSizeInput.value, 10);
    const len = parseInt(winLengthInput.value, 10);

    if (isNaN(size) || size < 3 || size > 20) {
      showStatus('Board size must be between 3 and 20');
      return;
    }
    if (isNaN(len) || len < 3) {
      showStatus('Win length must be at least 3');
      return;
    }
    if (len > size) {
      showStatus('Win length cannot exceed board size');
      return;
    }

    boardSize = size;
    winLength = len;
    board = Array.from({ length: boardSize }, () => Array(boardSize).fill(null));
    currentPlayer = 'X';
    gameActive = true;
    moveCount = 0;

    playAgainBtn.style.display = 'none';
    removeStrikeLine();
    renderBoard();
    showStatus(`Player X's Turn`);
  }

  function renderBoard() {
    boardEl.innerHTML = '';

    const cellSize = Math.min(50, Math.floor(Math.min(window.innerWidth - 48, 760) / boardSize) - 2);
    const fontSize = Math.max(10, Math.floor(cellSize * 0.48));

    boardEl.style.gridTemplateColumns = `repeat(${boardSize}, ${cellSize}px)`;
    boardEl.style.gridTemplateRows = `repeat(${boardSize}, ${cellSize}px)`;

    for (let r = 0; r < boardSize; r++) {
      for (let c = 0; c < boardSize; c++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.style.fontSize = `${fontSize}px`;
        cell.dataset.row = r;
        cell.dataset.col = c;
        cell.addEventListener('click', onCellClick);
        boardEl.appendChild(cell);
      }
    }
  }

  function onCellClick(e) {
    if (!gameActive) return;

    const r = parseInt(e.target.dataset.row, 10);
    const c = parseInt(e.target.dataset.col, 10);

    if (board[r][c] !== null) return;

    board[r][c] = currentPlayer;
    moveCount++;

    const cell = e.target;
    cell.textContent = currentPlayer;
    cell.classList.add('taken', currentPlayer.toLowerCase(), 'pop');

    const winCells = checkWin(r, c);
    if (winCells) {
      gameActive = false;
      scores[currentPlayer]++;
      updateScoreboard();
      highlightWin(winCells);
      showStatus(`Player ${currentPlayer} Wins!`, 'winner');
      showPlayAgain();
      return;
    }

    if (moveCount === boardSize * boardSize) {
      gameActive = false;
      scores.Draw++;
      updateScoreboard();
      showStatus(`It's a Draw!`, 'draw');
      showPlayAgain();
      return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    showStatus(`Player ${currentPlayer}'s Turn`);
  }

  function checkWin(row, col) {
    const directions = [
      { dr: 0, dc: 1 },   // horizontal
      { dr: 1, dc: 0 },   // vertical
      { dr: 1, dc: 1 },   // diagonal ↘
      { dr: 1, dc: -1 },  // diagonal ↙
    ];

    const player = board[row][col];

    for (const { dr, dc } of directions) {
      const cells = [{ r: row, c: col }];

      for (let sign = -1; sign <= 1; sign += 2) {
        let r = row + dr * sign;
        let c = col + dc * sign;
        while (
          r >= 0 && r < boardSize &&
          c >= 0 && c < boardSize &&
          board[r][c] === player
        ) {
          cells.push({ r, c });
          r += dr * sign;
          c += dc * sign;
        }
      }

      if (cells.length >= winLength) return cells;
    }

    return null;
  }

  function highlightWin(cells) {
    cells.forEach(({ r, c }) => {
      const idx = r * boardSize + c;
      boardEl.children[idx].classList.add('win-cell');
    });
    drawStrikeLine(cells);
  }

  function drawStrikeLine(cells) {
    removeStrikeLine();

    const sorted = [...cells].sort((a, b) => a.r - b.r || a.c - b.c);
    const first = sorted[0];
    const last = sorted[sorted.length - 1];

    const firstIdx = first.r * boardSize + first.c;
    const lastIdx = last.r * boardSize + last.c;
    const firstEl = boardEl.children[firstIdx];
    const lastEl = boardEl.children[lastIdx];

    const wrapperRect = boardWrapper.getBoundingClientRect();
    const firstRect = firstEl.getBoundingClientRect();
    const lastRect = lastEl.getBoundingClientRect();

    const x1 = firstRect.left + firstRect.width / 2 - wrapperRect.left;
    const y1 = firstRect.top + firstRect.height / 2 - wrapperRect.top;
    const x2 = lastRect.left + lastRect.width / 2 - wrapperRect.left;
    const y2 = lastRect.top + lastRect.height / 2 - wrapperRect.top;

    const length = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    const angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI);

    const line = document.createElement('div');
    line.classList.add('strike-line');
    line.style.width = `${length}px`;
    line.style.left = `${x1}px`;
    line.style.top = `${y1}px`;
    line.style.transform = `rotate(${angle}deg) scaleX(0)`;

    boardWrapper.appendChild(line);
    requestAnimationFrame(() => {
      line.style.transform = `rotate(${angle}deg)`;
    });
  }

  function removeStrikeLine() {
    const existing = boardWrapper.querySelector('.strike-line');
    if (existing) existing.remove();
  }

  function showStatus(message, type) {
    statusEl.textContent = message;
    statusEl.className = 'status';
    if (type) statusEl.classList.add(type);
  }

  function updateScoreboard() {
    scoreXEl.textContent = scores.X;
    scoreOEl.textContent = scores.O;
    scoreDrawEl.textContent = scores.Draw;
  }

  function showPlayAgain() {
    playAgainBtn.style.display = 'inline-block';
  }

  function playAgain() {
    playAgainBtn.style.display = 'none';
    removeStrikeLine();
    board = Array.from({ length: boardSize }, () => Array(boardSize).fill(null));
    currentPlayer = 'X';
    gameActive = true;
    moveCount = 0;
    renderBoard();
    showStatus(`Player X's Turn`);
  }
})();

const createGrid = (board) => {
  const grid = document.createElement('div');
  grid.classList.add('grid');
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      grid.appendChild(cell);
    }
  }
  return grid;
};

const fadeBoard = (isFirstPlayer) => {
  const player = document.querySelector('.player');
  const enemy = document.querySelector('.enemy');
  const gameSection = isFirstPlayer ? document.querySelector('.game .enemy') : document.querySelector('.game .player');
  player.classList.remove('inactive');
  enemy.classList.remove('inactive');
  gameSection.classList.add('inactive');
};

const render = (playerBoard, enemyBoard) => {
  const player = document.querySelector('.player .game-grid');
  const enemy = document.querySelector('.enemy .game-grid');

  const playerGrid = createGrid(playerBoard);
  const enemyGrid = createGrid(enemyBoard);
  playerGrid.classList.add('player-grid');
  enemyGrid.classList.add('enemy-grid');

  player.replaceChild(playerGrid, player.childNodes[0]);
  enemy.replaceChild(enemyGrid, enemy.childNodes[0]);
  fadeBoard(true);
};

const update = (board, isFirstPlayer) => {
  const grid = isFirstPlayer ? document.querySelector('.enemy-grid') : document.querySelector('.player-grid');
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] > 1) {
        if (board[i][j] === 3) {
          grid.children[i * 10 + j].classList.add('hit');
        } else {
          grid.children[i * 10 + j].classList.add('miss');
        }
      }
    }
  }
};

const endGame = (winner) => {
  let winnerText;
  const playerDisplay = document.querySelector('.player .game-display');
  const enemyDisplay = document.querySelector('.enemy .game-display');
  if (winner === false) {
    winnerText = 'Game Over! Player has won!';
  } else if (winner === true) {
    winnerText = 'Game Over! Enemy has won!';
  } else {
    winnerText = 'Game Over! Tie game!';
  }
  playerDisplay.textContent = winnerText;
  enemyDisplay.textContent = winnerText;
};

const nextTurn = (isFirstPlayer) => {
  const gameDisplay = isFirstPlayer ? document.querySelector('.player .game-display') : document.querySelector('.enemy .game-display');
  gameDisplay.textContent = isFirstPlayer ? 'Enemy turn' : 'Player turn';
  fadeBoard(isFirstPlayer);
};

const showShipCount = (shipCount, maxShips, isFirstPlayer) => {
  const gameDisplay = isFirstPlayer ? document.querySelector('.player .game-display') : document.querySelector('.enemy .game-display');
  gameDisplay.textContent = `${maxShips - shipCount} ship(s) remaining`;
};

const showPlayerShips = (board) => {
  const grid = document.querySelector('.player-grid');
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === 1) {
        grid.children[i * 10 + j].classList.add('preview-good');
      }
    }
  }
};

const showEnemyShips = (board) => {
  const grid = document.querySelector('.enemy-grid');
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === 1) {
        grid.children[i * 10 + j].classList.add('preview-good');
      }
    }
  }
};

const clearGrid = (board, isFirstPlayer) => {
  const grid = isFirstPlayer ? document.querySelector('.player-grid') : document.querySelector('.enemy-grid');
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      grid.children[i * 10 + j].classList.remove('preview-good');
    }
  }
};

const ready = (isFirstPlayer) => {
  const gameDisplay = isFirstPlayer ? document.querySelector('.player .game-display') : document.querySelector('.enemy .game-display');
  gameDisplay.textContent = 'Click ready to lock in';
};

const hidePlayerShips = (board) => {
  const grid = document.querySelector('.player-grid');
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === 1) {
        grid.children[i * 10 + j].classList.remove('preview-good');
      }
    }
  }
  fadeBoard(false);
};

const hideEnemyShips = (board) => {
  const grid = document.querySelector('.enemy-grid');
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === 1) {
        grid.children[i * 10 + j].classList.remove('preview-good');
      }
    }
  }
};

const showPlayersReady = () => {
  const playerDisplay = document.querySelector('.player .game-display');
  const enemyDisplay = document.querySelector('.enemy .game-display');
  playerDisplay.textContent = 'Press start game to begin';
  enemyDisplay.textContent = 'Press start game to begin';
  fadeBoard(false);
};

const gameStart = () => {
  const playerDisplay = document.querySelector('.player .game-display');
  const enemyDisplay = document.querySelector('.enemy .game-display');
  playerDisplay.textContent = 'Player turn';
  enemyDisplay.textContent = 'Player turn';
};

const showAttack = (isFirstPlayer, result) => {
  const gameDisplay = isFirstPlayer ? document.querySelector('.player .game-display') : document.querySelector('.enemy .game-display');
  if (result === 0) {
    gameDisplay.textContent = 'Miss!';
  } else if (result === 1) {
    gameDisplay.textContent = 'Hit!';
  } else {
    gameDisplay.textContent = `${result.name} has sunk!`;
  }
};

export {
  createGrid,
  render,
  update,
  endGame,
  nextTurn,
  showShipCount,
  showPlayerShips,
  showEnemyShips,
  clearGrid,
  ready,
  hidePlayerShips,
  hideEnemyShips,
  showPlayersReady,
  gameStart,
  showAttack,
};

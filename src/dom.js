const createGrid = (board) => {
  const grid = document.createElement('div');
  grid.classList.add('grid');
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cell.textContent = '-';
      grid.appendChild(cell);
    }
  }
  return grid;
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
};

const update = (board, isFirstPlayer) => {
  const grid = isFirstPlayer ? document.querySelector('.player-grid') : document.querySelector('.enemy-grid');
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

const endGame = () => {
  const gameDisplay = document.querySelector('.game-display');
  gameDisplay.textContent = 'Game Over';
};

const nextTurn = (turn) => {
  const gameDisplay = document.querySelector('.game-display');
  gameDisplay.textContent = turn ? 'Enemy turn' : 'Player turn';
};

const showShipCount = (shipCount, maxShips, isFirstPlayer) => {
  const gameDisplay = isFirstPlayer ? document.querySelector('.player .game-display') : document.querySelector('.enemy .game-display');
  gameDisplay.textContent = `${maxShips - shipCount} ships remaining`;
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
  gameDisplay.textContent = 'ready to start';
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
};

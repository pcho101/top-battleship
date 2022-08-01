const gameModeBtn = document.querySelector('#auto');
const randBtn = document.querySelector('.random');
const resetBtn = document.querySelector('.reset');
const rotateBtn = document.querySelector('.rotate');

const startBtn = document.querySelector('.start');
const playerReadyBtn = document.querySelector('.player-ready');
const enemyReadyBtn = document.querySelector('.enemy-ready');

const playerSection = document.querySelector('.player');
const enemySection = document.querySelector('.enemy');
const playerDisplay = document.querySelector('.player .game-display');
const enemyDisplay = document.querySelector('.enemy .game-display');

const defaultActiveBtns = document.querySelectorAll('.random, .reset, .rotate, input#auto');
const defaultInactiveBtns = document.querySelectorAll('.start, .player-ready, .enemy-ready');

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
  const gameSection = isFirstPlayer ? enemySection : playerSection;
  playerSection.classList.remove('inactive');
  enemySection.classList.remove('inactive');
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
  const gameDisplay = isFirstPlayer ? playerDisplay : enemyDisplay;
  gameDisplay.textContent = isFirstPlayer ? 'Enemy turn' : 'Player turn';
  fadeBoard(isFirstPlayer);
};

const showShipCount = (shipCount, maxShips, isFirstPlayer) => {
  const gameDisplay = isFirstPlayer ? playerDisplay : enemyDisplay;
  gameDisplay.textContent = `${maxShips - shipCount} ship(s) remaining`;
};

const showShips = (board, isFirstPlayer) => {
  const grid = isFirstPlayer ? document.querySelector('.player-grid') : document.querySelector('.enemy-grid');
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === 1) {
        grid.children[i * 10 + j].classList.add('preview-good');
      }
    }
  }
};

const hideShips = (board, isFirstPlayer) => {
  const grid = isFirstPlayer ? document.querySelector('.player-grid') : document.querySelector('.enemy-grid');
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === 1) {
        grid.children[i * 10 + j].classList.remove('preview-good');
      }
    }
  }
  if (isFirstPlayer) fadeBoard(false);
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
  const gameDisplay = isFirstPlayer ? playerDisplay : enemyDisplay;
  gameDisplay.textContent = 'Click ready to lock in';
};

const showPlayersReady = () => {
  playerDisplay.textContent = 'Press start game to begin';
  enemyDisplay.textContent = 'Press start game to begin';
  fadeBoard(false);
};

const gameStart = () => {
  playerDisplay.textContent = 'Player turn';
  enemyDisplay.textContent = 'Player turn';
};

const showAttack = (isFirstPlayer, result) => {
  const gameDisplay = isFirstPlayer ? playerDisplay : enemyDisplay;
  if (result === 0) {
    gameDisplay.textContent = 'Miss!';
  } else if (result === 1) {
    gameDisplay.textContent = 'Hit!';
  } else {
    gameDisplay.textContent = `${result.name} has sunk!`;
  }
};

const enableReady = (isFirstPlayer) => {
  if (isFirstPlayer) {
    playerReadyBtn.disabled = false;
  } else {
    enemyReadyBtn.disabled = false;
  }
};

const disableReady = (isFirstPlayer) => {
  if (isFirstPlayer) {
    playerReadyBtn.disabled = true;
  } else {
    enemyReadyBtn.disabled = true;
  }
};

const enableBtns = () => {
  defaultActiveBtns.forEach((btn) => {
    btn.disabled = false;
  });
  defaultInactiveBtns.forEach((btn) => {
    btn.disabled = true;
  });
};

const disableStartBtn = () => {
  startBtn.disabled = true;
};

const disableSelectBtns = () => {
  enemyReadyBtn.disabled = true;
  randBtn.disabled = true;
  resetBtn.disabled = true;
  rotateBtn.disabled = true;
  startBtn.disabled = false;
};

const getGameMode = () => (gameModeBtn.checked ? 1 : 0);

const disableGameMode = () => {
  gameModeBtn.disabled = true;
};

export {
  createGrid,
  render,
  update,
  endGame,
  nextTurn,
  showShipCount,
  showShips,
  hideShips,
  clearGrid,
  ready,
  showPlayersReady,
  gameStart,
  showAttack,
  enableReady,
  disableReady,
  enableBtns,
  disableStartBtn,
  disableSelectBtns,
  getGameMode,
  disableGameMode,
};

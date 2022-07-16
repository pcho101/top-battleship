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
  const body = document.querySelector('body');
  const playerTitle = document.createElement('div');
  const enemyTitle = document.createElement('div');
  const playerGrid = createGrid(playerBoard);
  const enemyGrid = createGrid(enemyBoard);
  playerTitle.textContent = 'Player';
  enemyTitle.textContent = 'Enemy';
  playerGrid.classList.add('player-grid');
  enemyGrid.classList.add('enemy-grid');
  body.appendChild(playerTitle);
  body.appendChild(playerGrid);
  body.appendChild(enemyTitle);
  body.appendChild(enemyGrid);
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

export {
  createGrid,
  render,
  update,
};

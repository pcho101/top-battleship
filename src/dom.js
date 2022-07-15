const dom = () => {
  const createGrid = (board) => {
    const grid = document.createElement('div');
    grid.classList.add('grid');
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[0].length; j++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.textContent = board[i][j];
        grid.appendChild(cell);
      }
    }
    return grid;
  };
  const render = (playerBoard, enemyBoard) => {
    const body = document.querySelector('body');
    const playerTitle = document.createElement('div');
    const enemyTitle = document.createElement('div');
    playerTitle.textContent = 'Player';
    enemyTitle.textContent = 'Enemy';
    body.appendChild(playerTitle);
    body.appendChild(createGrid(playerBoard));
    body.appendChild(enemyTitle);
    body.appendChild(createGrid(enemyBoard));
  };
  return {
    render,
  };
};

module.exports = dom;

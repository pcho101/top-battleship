const nextCoords = [];

const resetNextCoords = () => {
  nextCoords.length = [];
};

const setNextShots = (row, col) => {
  if (row - 1 >= 0) nextCoords.push([row - 1, col]);
  if (col - 1 >= 0) nextCoords.push([row, col - 1]);
  if (row + 1 <= 9) nextCoords.push([row + 1, col]);
  if (col + 1 <= 9) nextCoords.push([row, col + 1]);
};

const getCellCoords = (cell) => {
  const coords = {};
  coords.parent = cell.parentElement;
  coords.index = [...coords.parent.children].indexOf(cell);
  coords.row = Math.floor(coords.index / 10);
  coords.col = coords.index % 10;
  if (coords.parent.classList.contains('player-grid')) {
    coords.player = true;
  } else {
    coords.player = false;
  }
  return coords;
};

const rand = (n) => Math.floor(Math.random() * n);

const attackNearHit = (p1, p2) => {
  let shotData;
  for (let i = 0; i < nextCoords.length; i++) {
    shotData = p2.player.attack(p1.board, nextCoords[i][0], nextCoords[i][1]);
    if (shotData) {
      if (shotData[0] === 1) setNextShots(shotData[1], shotData[2]);
      break;
    }
  }
  if (!shotData) {
    shotData = p2.player.randAttack(p1.board);
    resetNextCoords();
    if (shotData[0] === 1) setNextShots(shotData[1], shotData[2]);
  }
  return shotData;
};

export {
  resetNextCoords,
  setNextShots,
  getCellCoords,
  rand,
  attackNearHit,
};

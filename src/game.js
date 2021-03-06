import * as dom from './dom';

const Ship = require('./functions/Ship');
const Player = require('./functions/Player');
const Gameboard = require('./functions/Gameboard');

const p1 = {};
const p2 = {};
let gameMode;
let direction;
let p1ShipCount;
let p2ShipCount;
let turn;
let gameOver;
let maxShips;
let shipPlacingPhase;
let lastHit;
const nextCoords = [];

const createPieces = () => {
  p1.player = Player();
  p1.board = Gameboard();
  p1.ships = {
    s1: Ship(5),
    s2: Ship(4),
    s3: Ship(3),
    s4: Ship(3),
    s5: Ship(2),
  };

  p2.player = Player();
  p2.board = Gameboard();
  p2.ships = {
    s1: Ship(5),
    s2: Ship(4),
    s3: Ship(3),
    s4: Ship(3),
    s5: Ship(2),
  };
};

const getGameMode = () => {
  const mode = document.querySelector('#auto');
  gameMode = mode.checked ? 1 : 0;
  return gameMode;
};

const initValues = () => {
  getGameMode();
  gameOver = false;
  turn = 0;
  direction = 0;
  p1ShipCount = 0;
  p2ShipCount = 0;
  shipPlacingPhase = true;
  maxShips = Object.keys(p1.ships).length;
  lastHit = false;
  nextCoords.length = 0;
};

const nextp1Ship = (x) => {
  switch (x) {
    case 0:
      return p1.ships.s1;
    case 1:
      return p1.ships.s2;
    case 2:
      return p1.ships.s3;
    case 3:
      return p1.ships.s4;
    case 4:
      return p1.ships.s5;
    default:
      break;
  }
};

const nextp2Ship = (x) => {
  switch (x) {
    case 0:
      return p2.ships.s1;
    case 1:
      return p2.ships.s2;
    case 2:
      return p2.ships.s3;
    case 3:
      return p2.ships.s4;
    case 4:
      return p2.ships.s5;
    default:
      break;
  }
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

const checkGameState = (board) => board.shipsAllSunk();

const switchTurns = () => {
  turn = turn ? 0 : 1;
};

const preview = (p, coords, len, state) => {
  const axis = direction ? coords.row : coords.col;
  const style = p.board.isValidPlace(coords.row, coords.col, len, direction) ? 'preview-good' : 'preview-bad';

  for (let i = 0; i < len && i + axis < 10; i++) {
    if (direction) {
      const cell = coords.parent.children[coords.index + 10 * i];
      state ? cell.classList.add(`${style}`) : cell.classList.remove(`${style}`);
    } else {
      const cell = coords.parent.children[coords.index + i];
      state ? cell.classList.add(`${style}`) : cell.classList.remove(`${style}`);
    }
  }
};

const addPreview = (e) => {
  const coords = getCellCoords(e.target);
  const nextShip = coords.player ? nextp1Ship(p1ShipCount) : nextp2Ship(p2ShipCount);
  const len = nextShip.length;
  const player = coords.player ? p1 : p2;
  preview(player, coords, len, true);
};

const removePreview = (e) => {
  const coords = getCellCoords(e.target);
  const nextShip = coords.player ? nextp1Ship(p1ShipCount) : nextp2Ship(p2ShipCount);
  const len = nextShip.length;
  const player = coords.player ? p1 : p2;
  preview(player, coords, len, false);
};

const addPreviewListeners = (player) => {
  let cells;
  if (player) {
    cells = document.querySelectorAll('.player-grid .cell');
  } else {
    cells = document.querySelectorAll('.enemy-grid .cell');
  }
  cells.forEach((cell) => {
    cell.addEventListener('mouseenter', addPreview);
    cell.addEventListener('mouseleave', removePreview);
  });
};

const removePreviewListeners = (player) => {
  let cells;
  if (player) {
    cells = document.querySelectorAll('.player-grid .cell');
  } else {
    cells = document.querySelectorAll('.enemy-grid .cell');
  }
  cells.forEach((cell) => {
    cell.removeEventListener('mouseenter', addPreview);
    cell.removeEventListener('mouseleave', removePreview);
  });
};

const rand = (n) => Math.floor(Math.random() * n);

const p2AutoPlace = () => {
  while (p2ShipCount < 5) {
    const nextShip = nextp2Ship(p2ShipCount);
    const x = rand(10);
    const y = rand(10);
    const dir = rand(2);
    if (p2.board.placeShip(y, x, nextShip, dir)) p2ShipCount++;
  }
  dom.showEnemyShips(p2.board.getBoard());
  dom.ready(false);
  removePreviewListeners(false);
};

const p1AutoPlace = () => {
  while (p1ShipCount < 5) {
    const nextShip = nextp1Ship(p1ShipCount);
    const x = rand(10);
    const y = rand(10);
    const dir = rand(2);
    if (p1.board.placeShip(y, x, nextShip, dir)) p1ShipCount++;
  }
  dom.showPlayerShips(p1.board.getBoard());
  dom.ready(true);
  removePreviewListeners(true);
};

const setp1Ship = (e) => {
  if (!shipPlacingPhase || p1ShipCount === maxShips) return;
  const coords = getCellCoords(e.target);
  const nextShip = nextp1Ship(p1ShipCount);

  if (p1.board.placeShip(coords.row, coords.col, nextShip, direction)) {
    p1ShipCount++;
    dom.showShipCount(p1ShipCount, maxShips, true);
  }
  if (p1ShipCount === maxShips) {
    removePreviewListeners(true);
    dom.ready(true);
  }
};
const setp2Ship = (e) => {
  if (gameMode || !shipPlacingPhase || p2ShipCount === maxShips) return;
  const coords = getCellCoords(e.target);
  const nextShip = nextp2Ship(p2ShipCount);

  if (p2.board.placeShip(coords.row, coords.col, nextShip, direction)) {
    p2ShipCount++;
    dom.showShipCount(p2ShipCount, maxShips, false);
  }
  if (p2ShipCount === maxShips) {
    removePreviewListeners(false);
    dom.ready(false);
  }
};

const addSetShipListener = () => {
  const p1cells = document.querySelectorAll('.player-grid .cell');
  p1cells.forEach((cell) => {
    cell.addEventListener('click', setp1Ship);
  });
  const p2cells = document.querySelectorAll('.enemy-grid .cell');
  p2cells.forEach((cell) => {
    cell.addEventListener('click', setp2Ship);
  });
};

const setNextShots = (row, col) => {
  if (row - 1 >= 0) nextCoords.push([row - 1, col]);
  if (col - 1 >= 0) nextCoords.push([row, col - 1]);
  if (row + 1 <= 9) nextCoords.push([row + 1, col]);
  if (col + 1 <= 9) nextCoords.push([row, col + 1]);
};

const attackNearHit = () => {
  let shotData;
  for (let i = 0; i < nextCoords.length; i++) {
    shotData = p2.player.attack(p1.board, nextCoords[i][0], nextCoords[i][1]);
    if (shotData) {
      if (shotData[0] === 'hit') setNextShots(shotData[1], shotData[2]);
      break;
    }
  }
  if (!shotData) {
    shotData = p2.player.randAttack(p1.board);
    nextCoords.length = [];
    if (shotData[0] === 'hit') setNextShots(shotData[1], shotData[2]);
  }
};

const sendAutoAttack = () => {
  if (lastHit) {
    attackNearHit();
  } else {
    const shotData = p2.player.randAttack(p1.board);
    if (shotData[0] === 'hit') {
      setNextShots(shotData[1], shotData[2]);
      lastHit = true;
    }
  }
  dom.update(p1.board.getBoard(), turn);
  if (checkGameState(p1.board)) {
    gameOver = true;
    dom.endGame();
  } else {
    switchTurns();
    dom.nextTurn(turn);
  }
};

const sendAttack = (e) => {
  if (gameOver || shipPlacingPhase) return;
  const coords = getCellCoords(e.target);

  if (coords.parent.classList.contains('player-grid')) {
    if (!turn) return;
    if (!p2.player.attack(p1.board, coords.row, coords.col)) return;
    dom.update(p1.board.getBoard(), turn);
    if (checkGameState(p1.board)) {
      gameOver = true;
      dom.endGame();
    } else {
      switchTurns();
      dom.nextTurn(turn);
    }
  } else {
    if (turn) return;
    if (!p1.player.attack(p2.board, coords.row, coords.col)) return;
    dom.update(p2.board.getBoard(), turn);
    if (checkGameState(p2.board)) {
      gameOver = true;
      dom.endGame();
    } else {
      switchTurns();
      dom.nextTurn(turn);
      if (gameMode) sendAutoAttack();
    }
  }
};
const addBoardListener = () => {
  const cells = document.querySelectorAll('.cell');
  cells.forEach((cell) => {
    cell.addEventListener('click', sendAttack);
  });
};

const enableBtns = () => {
  const buttons = document.querySelectorAll('button.random, button.reset, button.start, button.axis, input#auto');
  buttons.forEach((btn) => {
    btn.disabled = false;
  });
};

const disableBtns = () => {
  const buttons = document.querySelectorAll('button.random, button.reset, button.start, button.axis, input#auto');
  buttons.forEach((btn) => {
    btn.disabled = true;
  });
};

const startGame = () => {
  if (p1ShipCount !== maxShips) return;
  if (getGameMode()) p2AutoPlace();
  if (p2ShipCount !== maxShips) return;

  disableBtns();
  addBoardListener();
  shipPlacingPhase = false;
  dom.nextTurn(turn);
};

const newGame = () => {
  createPieces();
  initValues();

  dom.render(p1.board.getBoard(), p2.board.getBoard());
  dom.showShipCount(p1ShipCount, maxShips, true);
  dom.showShipCount(p2ShipCount, maxShips, false);

  addPreviewListeners(true);
  addPreviewListeners(false);
  addSetShipListener();
  enableBtns();
};

const addRandomPlace = () => {
  const randBtn = document.querySelector('.random');
  randBtn.addEventListener('click', p1AutoPlace);
};

const changeAxis = () => {
  direction = direction ? 0 : 1;
};
const addChangeAxis = () => {
  const axisBtn = document.querySelector('.axis');
  axisBtn.addEventListener('click', changeAxis);
};

const addRestart = () => {
  const restartBtn = document.querySelector('.restart');
  restartBtn.addEventListener('click', newGame);
};

const resetGrid = () => {
  p1ShipCount = 0;
  p1.board.resetBoard();
  dom.clearGrid(p1.board.getBoard(), 1);
  dom.showPlayerShips(p1.board.getBoard());
  addPreviewListeners(true);
  dom.showShipCount(p1ShipCount, maxShips, true);
};

const addResetGrid = () => {
  const resetBtn = document.querySelector('.reset');
  resetBtn.addEventListener('click', resetGrid);
};

const addStartBtn = () => {
  const startBtn = document.querySelector('.start');
  startBtn.addEventListener('click', startGame);
};

const addButtonListeners = () => {
  addRestart();
  addChangeAxis();
  addRandomPlace();
  addResetGrid();
  addStartBtn();
};

export {
  newGame,
  addButtonListeners,
};

import * as dom from './dom';

const Ship = require('./functions/Ship');
const Player = require('./functions/Player');
const Gameboard = require('./functions/Gameboard');

const p1 = {};
const p2 = {};
let direction;
let p1ShipCount;
let p2ShipCount;
let playerTurn;
let gameOver;
let maxShips;
let shipPlacingPhase;
let lastHit;
const nextCoords = [];
let bothPlayersReady;

const createPieces = () => {
  p1.player = Player();
  p1.board = Gameboard();
  p1.ships = {
    s1: Ship(5, 'Carrier'),
    s2: Ship(4, 'Battleship'),
    s3: Ship(3, 'Cruiser'),
    s4: Ship(3, 'Submarine'),
    s5: Ship(2, 'Destroyer'),
  };

  p2.player = Player();
  p2.board = Gameboard();
  p2.ships = {
    s1: Ship(5, 'Carrier'),
    s2: Ship(4, 'Battleship'),
    s3: Ship(3, 'Cruiser'),
    s4: Ship(3, 'Submarine'),
    s5: Ship(2, 'Destroyer'),
  };
};

const randBtn = document.querySelector('.random');
const resetBtn = document.querySelector('.reset');
const restartBtn = document.querySelector('.restart');
const startBtn = document.querySelector('.start');
const axisBtn = document.querySelector('.axis');
const playerReadyBtn = document.querySelector('.player-ready');
const enemyReadyBtn = document.querySelector('.enemy-ready');
const gameModeBtn = document.querySelector('#auto');

const modal = document.querySelector('.modal');

const getGameMode = () => (gameModeBtn.checked ? 1 : 0);

const initValues = () => {
  gameOver = false;
  playerTurn = 1;
  direction = 0;
  p1ShipCount = 0;
  p2ShipCount = 0;
  shipPlacingPhase = true;
  maxShips = Object.keys(p1.ships).length;
  lastHit = false;
  nextCoords.length = 0;
  bothPlayersReady = false;
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

const nextMove = () => {
  if (playerTurn === 1) {
    dom.showEnemyShips(p2.board.getBoard());
  } else {
    dom.showPlayerShips(p1.board.getBoard());
  }
  playerTurn = playerTurn ? 0 : 1;
};

const openModal = () => {
  modal.style.display = 'block';
};

const closeModal = () => {
  modal.style.display = 'none';
  nextMove();
};

modal.addEventListener('click', closeModal);

const switchTurns = () => {
  if (getGameMode() === 0) {
    if (playerTurn === 1) {
      dom.hidePlayerShips(p1.board.getBoard());
      openModal();
    } else {
      dom.hideEnemyShips(p2.board.getBoard());
      openModal();
    }
  } else {
    playerTurn = playerTurn ? 0 : 1;
  }
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
  if (getGameMode() === 0) dom.showEnemyShips(p2.board.getBoard());
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
  if (getGameMode() || !shipPlacingPhase || p2ShipCount === maxShips) return;
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

const p1SetShip = () => {
  const p1cells = document.querySelectorAll('.player-grid .cell');
  p1cells.forEach((cell) => {
    cell.addEventListener('click', setp1Ship);
  });
};

const p2SetShip = () => {
  const p2cells = document.querySelectorAll('.enemy-grid .cell');
  p2cells.forEach((cell) => {
    cell.addEventListener('click', setp2Ship);
  });
};

const addSetShipListener = (isFirstPlayer) => (isFirstPlayer ? p1SetShip() : p2SetShip());

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
      if (shotData[0] === 1) setNextShots(shotData[1], shotData[2]);
      break;
    }
  }
  if (!shotData) {
    shotData = p2.player.randAttack(p1.board);
    nextCoords.length = [];
    if (shotData[0] === 1) setNextShots(shotData[1], shotData[2]);
  }
  dom.showAttack(true, shotData[0]);
};

const sendAutoAttack = () => {
  if (lastHit) {
    attackNearHit();
  } else {
    const shotData = p2.player.randAttack(p1.board);
    if (shotData[0] === 1) {
      setNextShots(shotData[1], shotData[2]);
      lastHit = true;
    }
    dom.showAttack(true, shotData[0]);
  }
  dom.update(p1.board.getBoard(), playerTurn);
  if (checkGameState(p1.board)) {
    gameOver = true;
    dom.endGame();
  } else {
    switchTurns();
  }
};

const sendAttack = (e) => {
  if (gameOver || shipPlacingPhase) return;
  const coords = getCellCoords(e.target);

  if (coords.player) {
    if (playerTurn) return;
    const attack = p2.player.attack(p1.board, coords.row, coords.col);
    if (!attack) return;
    dom.update(p1.board.getBoard(), playerTurn);
    dom.showAttack(true, attack[0]);
    if (checkGameState(p1.board)) {
      gameOver = true;
      dom.endGame();
    } else {
      switchTurns();
      dom.nextTurn(playerTurn);
    }
  } else {
    if (!playerTurn) return;
    const attack = p1.player.attack(p2.board, coords.row, coords.col);
    if (!attack) return;
    dom.update(p2.board.getBoard(), playerTurn);
    dom.showAttack(false, attack[0]);
    if (checkGameState(p2.board)) {
      gameOver = true;
      dom.endGame();
    } else {
      switchTurns();
      if (getGameMode()) {
        sendAutoAttack();
        return;
      }
      dom.nextTurn(playerTurn);
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
  const buttons = document.querySelectorAll('button.random, button.reset, button.start, button.axis, input#auto, button.player-ready, button.enemy-ready');
  buttons.forEach((btn) => {
    btn.disabled = false;
  });
};

const disableBtns = () => {
  const buttons = document.querySelectorAll('button.random, button.reset, button.start, button.axis, input#auto, button.player-ready, button.enemy-ready');
  buttons.forEach((btn) => {
    btn.disabled = true;
  });
};

const disableSelectBtns = () => {
  enemyReadyBtn.disabled = true;
  randBtn.disabled = true;
  resetBtn.disabled = true;
  axisBtn.disabled = true;
};

const startGame = () => {
  if (!bothPlayersReady) return;
  disableBtns();
  addBoardListener();
  shipPlacingPhase = false;
  dom.hideEnemyShips(p2.board.getBoard());
  dom.gameStart();
};

const playerReady = () => {
  if (p1ShipCount !== maxShips) return;
  gameModeBtn.disabled = true;
  if (getGameMode()) {
    playerReadyBtn.disabled = true;
    disableSelectBtns();
    p2AutoPlace();
    bothPlayersReady = true;
    dom.showPlayersReady();
  } else {
    dom.hidePlayerShips(p1.board.getBoard());
    playerReadyBtn.disabled = true;
    addSetShipListener(false);
    addPreviewListeners(false);
    openModal();
  }
};

const enemyReady = () => {
  if (p2ShipCount !== maxShips) return;
  dom.hideEnemyShips(p2.board.getBoard());
  disableSelectBtns();
  openModal();
  bothPlayersReady = true;
  dom.showPlayersReady();
};

const newGame = () => {
  createPieces();
  initValues();

  dom.render(p1.board.getBoard(), p2.board.getBoard());
  dom.showShipCount(p1ShipCount, maxShips, true);
  dom.showShipCount(p2ShipCount, maxShips, false);

  addPreviewListeners(true);
  addSetShipListener(true);
  enableBtns();
};

const autoPlace = () => (playerTurn === 1 ? p1AutoPlace() : p2AutoPlace());

const changeAxis = () => {
  direction = direction ? 0 : 1;
};

const resetp1Grid = () => {
  p1ShipCount = 0;
  p1.board.resetBoard();
  dom.clearGrid(p1.board.getBoard(), true);
  dom.showPlayerShips(p1.board.getBoard());
  addPreviewListeners(true);
  dom.showShipCount(p1ShipCount, maxShips, true);
};

const resetp2Grid = () => {
  p2ShipCount = 0;
  p2.board.resetBoard();
  dom.clearGrid(p2.board.getBoard(), false);
  dom.showEnemyShips(p2.board.getBoard());
  addPreviewListeners(false);
  dom.showShipCount(p2ShipCount, maxShips, false);
};

const resetGrid = () => (playerTurn === 1 ? resetp1Grid() : resetp2Grid());

const addButtonListeners = () => {
  restartBtn.addEventListener('click', newGame);
  axisBtn.addEventListener('click', changeAxis);
  randBtn.addEventListener('click', autoPlace);
  resetBtn.addEventListener('click', resetGrid);
  startBtn.addEventListener('click', startGame);
  playerReadyBtn.addEventListener('click', playerReady);
  enemyReadyBtn.addEventListener('click', enemyReady);
};

export {
  newGame,
  addButtonListeners,
};

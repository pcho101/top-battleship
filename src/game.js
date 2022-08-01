import * as dom from './dom';
import * as prev from './preview';
import * as helper from './helper';
import * as build from './buildShip';

const Ship = require('./functions/Ship');
const Player = require('./functions/Player');
const Gameboard = require('./functions/Gameboard');

const modal = document.querySelector('.modal');
const p1 = {};
const p2 = {};
let playerTurn;
let gameOver;
let lastHit;

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

const initValues = () => {
  playerTurn = 1;
  gameOver = false;
  lastHit = false;
  helper.resetNextCoords();
  build.resetDirection();
  build.resetp1ShipCount();
  build.resetp2ShipCount();
  build.changeShipPhase(true);
};

const checkGameState = (board) => board.shipsAllSunk();

const nextMove = () => {
  if (playerTurn === 1) {
    dom.showShips(p2.board.getBoard(), false);
  } else {
    dom.showShips(p1.board.getBoard(), true);
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

const switchTurns = () => {
  if (dom.getGameMode() === 0) {
    if (playerTurn === 1) {
      dom.hideShips(p1.board.getBoard(), true);
      openModal();
    } else {
      dom.hideShips(p2.board.getBoard(), false);
      openModal();
    }
  } else {
    playerTurn = playerTurn ? 0 : 1;
  }
};

const checkWinner = () => {
  const playerLose = checkGameState(p1.board);
  const enemyLose = checkGameState(p2.board);
  if (playerLose && enemyLose) {
    gameOver = true;
    dom.endGame(2);
  } else if (playerLose || enemyLose) {
    gameOver = true;
    dom.endGame(playerLose);
  } else {
    switchTurns();
    if (dom.getGameMode() === 0) dom.nextTurn(playerTurn);
  }
};

const sendAutoAttack = () => {
  let shotData;
  if (lastHit) {
    shotData = helper.attackNearHit(p1, p2);
  } else {
    shotData = p2.player.randAttack(p1.board);
    if (shotData[0] === 1) {
      helper.setNextShots(shotData[1], shotData[2]);
      lastHit = true;
    }
  }
  dom.showAttack(true, shotData[0]);
  dom.update(p1.board.getBoard(), playerTurn);
  checkWinner();
};

const sendAttack = (e) => {
  if (gameOver || build.getShipPhase()) return;
  const coords = helper.getCellCoords(e.target);

  if (coords.player) {
    if (playerTurn) return;
    const attack = p2.player.attack(p1.board, coords.row, coords.col);
    if (!attack) return;
    dom.update(p1.board.getBoard(), playerTurn);
    dom.showAttack(true, attack[0]);
    checkWinner();
  } else {
    if (!playerTurn) return;
    const attack = p1.player.attack(p2.board, coords.row, coords.col);
    if (!attack) return;
    dom.update(p2.board.getBoard(), playerTurn);
    dom.showAttack(false, attack[0]);
    switchTurns();
    if (dom.getGameMode()) {
      sendAutoAttack();
      return;
    }
    dom.nextTurn(playerTurn);
  }
};
const addBoardListener = () => {
  const cells = document.querySelectorAll('.cell');
  cells.forEach((cell) => {
    cell.addEventListener('click', sendAttack);
  });
};

const startGame = () => {
  dom.disableStartBtn();
  addBoardListener();
  build.changeShipPhase(false);
  dom.hideShips(p2.board.getBoard(), false);
  dom.gameStart();
};

const playerReady = () => {
  dom.disableGameMode();
  dom.disableReady(true);
  if (dom.getGameMode()) {
    dom.disableSelectBtns();
    build.p2AutoPlace();
    dom.showPlayersReady();
  } else {
    dom.hideShips(p1.board.getBoard(), true);
    build.resetDirection();
    build.addSetShipListener(false);
    prev.addPreviewListeners(false);
    openModal();
  }
};

const enemyReady = () => {
  dom.hideShips(p2.board.getBoard(), false);
  dom.disableSelectBtns();
  openModal();
  dom.showPlayersReady();
};

const newGame = () => {
  createPieces();
  initValues();

  build.init(p1, p2);
  prev.init(p1, p2);
  dom.render(p1.board.getBoard(), p2.board.getBoard());
  dom.showShipCount(build.getp1ShipCount(), build.getMaxShips(), true);
  dom.showShipCount(build.getp2ShipCount(), build.getMaxShips(), false);

  prev.addPreviewListeners(true);
  build.addSetShipListener(true);
  dom.enableBtns();
};

const autoPlace = () => (playerTurn === 1 ? build.p1AutoPlace() : build.p2AutoPlace());

const resetGrid = () => (playerTurn === 1 ? build.resetp1Grid() : build.resetp2Grid());

export {
  closeModal,
  startGame,
  playerReady,
  enemyReady,
  newGame,
  autoPlace,
  resetGrid,
};

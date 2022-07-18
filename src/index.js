import './style.css';
import * as dom from './dom';

const Ship = require('./functions/Ship');
const Player = require('./functions/Player');
const Gameboard = require('./functions/Gameboard');

const game = () => {
  const player1 = Player();
  const playerboard = Gameboard();

  const player2 = Player();
  const enemyboard = Gameboard();

  let gameMode = 1;
  let direction = 0;
  let shipPlacingPhase;

  const playerShips = {
    p1: Ship(5),
    p2: Ship(4),
    p3: Ship(3),
    p4: Ship(3),
    p5: Ship(2),
  };

  const enemyShips = {
    e1: Ship(5),
    e2: Ship(4),
    e3: Ship(3),
    e4: Ship(3),
    e5: Ship(2),
  };

  let turn = 0;
  let gameOver = false;
  let playerShipCount = 0;
  let enemyShipCount = 0;
  const maxShips = Object.keys(playerShips).length;

  const switchTurns = () => {
    turn = turn ? 0 : 1;
  };

  dom.render(playerboard.getBoard(), enemyboard.getBoard());
  dom.showShipCount(playerShipCount, maxShips);

  shipPlacingPhase = true;

  const startGame = () => {
    shipPlacingPhase = false;
    dom.nextTurn(turn);
  };
  const getNextShip = (x) => {
    switch (x) {
      case 0:
        return playerShips.p1;
      case 1:
        return playerShips.p2;
      case 2:
        return playerShips.p3;
      case 3:
        return playerShips.p4;
      case 4:
        return playerShips.p5;
      default:
        break;
    }
  };
  const getNextEnemyShip = (x) => {
    switch (x) {
      case 0:
        return enemyShips.e1;
      case 1:
        return enemyShips.e2;
      case 2:
        return enemyShips.e3;
      case 3:
        return enemyShips.e4;
      case 4:
        return enemyShips.e5;
      default:
        break;
    }
  };
  const setShip = (e) => {
    if (!shipPlacingPhase) return;
    const cell = e.target;
    const parent = e.target.parentElement;
    const index = [...parent.children].indexOf(cell);
    const row = Math.floor(index / 10);
    const col = index % 10;

    const nextShip = getNextShip(playerShipCount);

    if (playerboard.placeShip(row, col, nextShip, direction) === 'Valid') {
      playerShipCount++;
      dom.showShipCount(playerShipCount, maxShips);
    }
    if (playerShipCount === maxShips) {
      startGame();
    }
  };
  const shipPlacingPhaseListener = () => {
    const cells = document.querySelectorAll('.player-grid .cell');
    cells.forEach((cell) => {
      cell.addEventListener('click', setShip);
    });
  };
  shipPlacingPhaseListener();

  while (enemyShipCount < 5) {
    const nextEnemyShip = getNextEnemyShip(enemyShipCount);
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);
    const dir = Math.floor(Math.random() * 2);
    if (enemyboard.placeShip(y, x, nextEnemyShip, dir) === 'Valid') enemyShipCount++;
  }

  const checkGameState = (board) => board.shipsAllSunk();

  const sendAutoAttack = () => {
    player2.randAttack(playerboard);
    dom.update(playerboard.getBoard(), turn);
    if (checkGameState(playerboard)) {
      gameOver = true;
      dom.endGame();
    } else {
      switchTurns();
      dom.nextTurn(turn);
    }
  };
  const sendAttack = (e) => {
    if (shipPlacingPhase) return;
    if (gameOver) return;
    const cell = e.target;
    const parent = e.target.parentElement;
    const index = [...parent.children].indexOf(cell);
    const row = Math.floor(index / 10);
    const col = index % 10;

    if (parent.classList.contains('player-grid')) {
      if (!turn) return;
      if (!player2.attack(playerboard, row, col)) return;
      dom.update(playerboard.getBoard(), turn);
      if (checkGameState(playerboard)) {
        gameOver = true;
        dom.endGame();
      } else {
        switchTurns();
        dom.nextTurn(turn);
      }
    } else {
      if (turn) return;
      if (!player1.attack(enemyboard, row, col)) return;
      dom.update(enemyboard.getBoard(), turn);
      if (checkGameState(enemyboard)) {
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
  addBoardListener();
};

game();

const restartGame = () => {
  game();
};
const addRestart = () => {
  const restartBtn = document.querySelector('.restart');
  restartBtn.addEventListener('click', restartGame);
};
addRestart();

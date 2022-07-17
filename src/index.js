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

  let turn = 0;
  let gameOver = false;

  const switchTurns = () => {
    turn = turn ? 0 : 1;
  };

  dom.render(playerboard.getBoard(), enemyboard.getBoard());
  dom.nextTurn(turn);

  const checkGameState = (board) => board.shipsAllSunk();

  const sendAttack = (e) => {
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

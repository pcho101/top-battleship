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

  dom.render(playerboard.getBoard(), enemyboard.getBoard());

  const sendAttack = (e) => {
    const cell = e.target;
    const parent = e.target.parentElement;
    const index = [...parent.children].indexOf(cell);
    const row = Math.floor(index / 10);
    const col = index % 10;

    if (parent.classList.contains('player-grid')) {
      player2.attack(playerboard, row, col);
      dom.update(playerboard.getBoard(), 1);
    } else {
      player1.attack(enemyboard, row, col);
      dom.update(enemyboard.getBoard(), 0);
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

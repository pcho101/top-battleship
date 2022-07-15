import './style.css';

const Ship = require('./functions/Ship');
const Player = require('./functions/Player');
const Gameboard = require('./functions/Gameboard');

const dom = require('./dom');

const game = (() => {
  const player1 = Player();
  const playerboard = Gameboard();

  const player2 = Player();
  const enemyboard = Gameboard();

  const display = dom();

  display.render(playerboard.getBoard(), enemyboard.getBoard());
})();

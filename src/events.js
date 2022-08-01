import * as game from './game';
import * as build from './buildShip';

const randBtn = document.querySelector('.random');
const resetBtn = document.querySelector('.reset');
const rotateBtn = document.querySelector('.rotate');
const restartBtn = document.querySelector('.restart');

const startBtn = document.querySelector('.start');
const playerReadyBtn = document.querySelector('.player-ready');
const enemyReadyBtn = document.querySelector('.enemy-ready');

const modal = document.querySelector('.modal');

const addListeners = () => {
  randBtn.addEventListener('click', game.autoPlace);
  resetBtn.addEventListener('click', game.resetGrid);
  rotateBtn.addEventListener('click', build.changeAxis);
  restartBtn.addEventListener('click', game.newGame);

  startBtn.addEventListener('click', game.startGame);
  playerReadyBtn.addEventListener('click', game.playerReady);
  enemyReadyBtn.addEventListener('click', game.enemyReady);

  modal.addEventListener('click', game.closeModal);
};

export {
  addListeners,
};

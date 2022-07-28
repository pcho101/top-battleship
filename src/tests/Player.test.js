const Player = require('../functions/Player');
const Gameboard = require('../functions/Gameboard');

let player;
let enemy;
let playerBoard;
let enemyBoard;

let testplayerBoard;
let testenemyBoard;

beforeEach(() => {
  player = Player();
  enemy = Player();
  playerBoard = Gameboard();
  enemyBoard = Gameboard();

  testplayerBoard = Array(10);
  testenemyBoard = Array(10);
  for (let i = 0; i < 10; i++) {
    testplayerBoard[i] = Array(10).fill(0);
    testenemyBoard[i] = Array(10).fill(0);
  }
});

test('player attacks enemy board', () => {
  expect(player.attack(enemyBoard, 0, 0)).toEqual([0, 0, 0]);
});

test('player attacks enemy board, enemy board shows shot', () => {
  player.attack(enemyBoard, 0, 0);
  testplayerBoard[0][0] = 2;
  expect(enemyBoard.getBoard()).toEqual(testplayerBoard);
});

test('player attacks enemy, enemy returns fire', () => {
  player.attack(enemyBoard, 0, 0);
  testplayerBoard[0][0] = 2;
  enemy.attack(playerBoard, 4, 3);
  testenemyBoard[4][3] = 2;
  expect(playerBoard.getBoard()).toEqual(testenemyBoard);
});

test('player attacks enemy board at same location twice', () => {
  player.attack(enemyBoard, 0, 0);
  expect(player.attack(enemyBoard, 0, 0)).toEqual(false);
});

test('run rand attack 100 times', () => {
  for (let i = 0; i < 100; i++) {
    player.randAttack(enemyBoard);
  }
  for (let i = 0; i < 10; i++) {
    testenemyBoard[i] = Array(10).fill(2);
  }
  expect(enemyBoard.getBoard()).toEqual(testenemyBoard);
});

test('run rand attack over 100 times', () => {
  for (let i = 0; i < 100; i++) {
    player.randAttack(enemyBoard);
  }
  expect(player.randAttack(enemyBoard)).toBe(false);
});

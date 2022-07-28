const Gameboard = require('../functions/Gameboard');
const Ship = require('../functions/Ship');

let newGameboard;
let testBoard;

beforeEach(() => {
  newGameboard = Gameboard();
  testBoard = Array(10);
  for (let i = 0; i < 10; i++) {
    testBoard[i] = Array(10).fill(0);
  }
});

test('sets up game board', () => {
  expect(newGameboard.getBoard()).toEqual(testBoard);
});

test('place 1 ship horizontal at 0, 0', () => {
  testBoard[0][0] = 1;
  testBoard[0][1] = 1;
  const newShip = Ship(2);

  newGameboard.placeShip(0, 0, newShip, 0);
  expect(newGameboard.getBoard()).toEqual(testBoard);
});

test('place 1 ship vertical at 0, 0', () => {
  testBoard[0][0] = 1;
  testBoard[1][0] = 1;
  const newShip = Ship(2);

  newGameboard.placeShip(0, 0, newShip, 1);
  expect(newGameboard.getBoard()).toEqual(testBoard);
});

test('place 1 ship out of bounds', () => {
  const newShip = Ship(2);
  newGameboard.placeShip(0, 9, newShip, 0);
  expect(newGameboard.getBoard()).toEqual(testBoard);
});

test('overlapping ships', () => {
  testBoard[0][0] = 1;
  testBoard[0][1] = 1;
  const ship1 = Ship(2);
  const ship2 = Ship(2);

  newGameboard.placeShip(0, 0, ship1, 0);
  newGameboard.placeShip(0, 1, ship2, 0);
  expect(newGameboard.getBoard()).toEqual(testBoard);
});

test('attack hits a ship', () => {
  const newShip = Ship(2);
  newGameboard.placeShip(0, 0, newShip, 0);
  expect(newGameboard.receiveAttack(0, 0)).toBe(1);
});

test('attack misses a ship', () => {
  const newShip = Ship(2);
  newGameboard.placeShip(0, 0, newShip, 0);
  expect(newGameboard.receiveAttack(0, 2)).toBe(0);
});

test('attack sinks a ship', () => {
  const newShip = Ship(2);
  newGameboard.placeShip(0, 0, newShip, 0);
  newGameboard.receiveAttack(0, 0);
  expect(newGameboard.receiveAttack(0, 1)).toBe(newShip);
});

test('1 ship, all of the ships are sunk', () => {
  const newShip = Ship(2);
  newGameboard.placeShip(0, 0, newShip, 0);
  newGameboard.receiveAttack(0, 0);
  newGameboard.receiveAttack(0, 1);
  expect(newGameboard.shipsAllSunk()).toBe(true);
});

test('2+ ships, all of the ships are sunk', () => {
  const newShip = Ship(2);
  const newShip2 = Ship(4);
  newGameboard.placeShip(0, 0, newShip, 0);
  newGameboard.placeShip(5, 0, newShip2, 0);
  newGameboard.receiveAttack(0, 0);
  newGameboard.receiveAttack(0, 1);
  newGameboard.receiveAttack(5, 0);
  newGameboard.receiveAttack(5, 1);
  newGameboard.receiveAttack(5, 2);
  newGameboard.receiveAttack(5, 3);
  expect(newGameboard.shipsAllSunk()).toBe(true);
});

test('resetting gameboard', () => {
  const ship1 = Ship(2);
  newGameboard.placeShip(0, 0, ship1, 0);
  newGameboard.resetBoard();
  expect(newGameboard.getBoard()).toEqual(testBoard);
});

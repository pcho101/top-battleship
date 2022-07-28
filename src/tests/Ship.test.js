const Ship = require('../functions/Ship');

let newShip;

beforeEach(() => {
  newShip = Ship(2, 'patrol boat');
});

test('ship with 2 lives and 1 hit is not sunk', () => {
  newShip.hit(0);
  expect(newShip.isSunk()).toBe(false);
});

test('ship with 2 lives and 2 hits is sunk', () => {
  newShip.hit(0);
  newShip.hit(1);
  expect(newShip.isSunk()).toBe(true);
});

test('ship with 2 lives and 0 hits is not sunk', () => {
  expect(newShip.isSunk()).toBe(false);
});

test('ship initialized with length 2', () => {
  expect(newShip.length).toBe(2);
});

test('ship initialized with name patrol boat', () => {
  expect(newShip.name).toBe('patrol boat');
});

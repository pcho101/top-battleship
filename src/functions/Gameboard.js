const Ship = require('../functions/Ship');

const Gameboard = () => {
  const board = Array(10);
  for (let i = 0; i < 10; i++) {
    board[i] = Array(10).fill(0);
  }
  const getBoard = () => board;
  const isInBounds = (row, col, len, dir) => {
    if (dir) {
      if (row + len - 1 > 9) return false;
    } else {
      if (col + len - 1 > 9) return false;
    }
    return true;
  };
  const isNoConflict = (row, col, len, dir) => {
    if (dir === 0) {
      for (let x = col; x < col + len && x < 10; x++) {
        if (board[row][x]) return false;
      }
    } else {
      for (let y = row; y < row + len && y < 10; y++) {
        if (board[y][col]) return false;
      }
    }
    return true;
  };
  const isValidPlace = (row, col, len, dir) => {
    const inBounds = isInBounds(row, col, len, dir);
    const noConflict = isNoConflict(row, col, len, dir);
    return inBounds && noConflict;
  };
  const placeShip = (row, col, ship, dir) => {
    const len = ship.length;
    if (!isValidPlace(row, col, len, dir)) return 'Invalid';
    if (dir === 0) {
      for (let x = col; x < col + len; x++) {
        board[row][x] = 1;
      }
    } else {
      for (let y = row; y < row + len; y++) {
        board[y][col] = 1;
      }
    }
  };
  const receiveAttack = (row, col) => {
    let attackMsg;
    if (board[row][col]) {
      attackMsg = 'hit';
    } else {
      attackMsg = 'miss';
    }
    board[row][col] += 2;
    return attackMsg;
  };
  return {
    getBoard, placeShip, receiveAttack,
  };
};

module.exports = Gameboard;

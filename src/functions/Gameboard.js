const Gameboard = () => {
  const board = Array(10);
  for (let i = 0; i < 10; i++) {
    board[i] = Array(10).fill(0);
  }
  const fleet = [];
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
  const storeShipCoords = (row, col, ship, dir) => {
    const coords = [];
    if (dir === 0) {
      for (let x = col; x < col + ship.length; x++) {
        coords.push([row, x]);
      }
    } else {
      for (let y = row; y < row + ship.length; y++) {
        coords.push([y, col]);
      }
    }
    fleet.push([ship, coords]);
  };
  const placeShip = (row, col, ship, dir) => {
    const len = ship.length;
    if (!isValidPlace(row, col, len, dir)) return false;
    storeShipCoords(row, col, ship, dir);
    if (dir === 0) {
      for (let x = col; x < col + len; x++) {
        board[row][x] = 1;
      }
    } else {
      for (let y = row; y < row + len; y++) {
        board[y][col] = 1;
      }
    }
    return true;
  };
  const getHitShip = (row, col) => {
    for (let i = 0; i < fleet.length; i++) {
      const coords = fleet[i][1];
      const ship = fleet[i][0];
      for (let j = 0; j < coords.length; j++) {
        if (row === coords[j][0] && col === coords[j][1]) {
          return ship;
        }
      }
    }
  };
  const getHitIndex = (row, col) => {
    for (let i = 0; i < fleet.length; i++) {
      const coords = fleet[i][1];
      for (let j = 0; j < coords.length; j++) {
        if (row === coords[j][0] && col === coords[j][1]) {
          return j;
        }
      }
    }
  };
  const receiveAttack = (row, col) => {
    board[row][col] += 2;
    if (board[row][col] === 3) {
      const hitShip = getHitShip(row, col);
      const hitIndex = getHitIndex(row, col);
      hitShip.hit(hitIndex);
      if (hitShip.isSunk()) {
        return hitShip;
      }
      return 1;
    }
    return 0;
  };
  const shipsAllSunk = () => {
    for (let i = 0; i < fleet.length; i++) {
      const ship = fleet[i][0];
      if (!ship.isSunk()) return false;
    }
    return true;
  };
  const resetBoard = () => {
    for (let i = 0; i < 10; i++) {
      board[i] = Array(10).fill(0);
    }
    fleet.length = 0;
  };

  return {
    getBoard,
    isValidPlace,
    placeShip,
    getHitShip,
    receiveAttack,
    shipsAllSunk,
    resetBoard,
  };
};

module.exports = Gameboard;

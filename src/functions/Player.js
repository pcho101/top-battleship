const Player = () => {
  const shots = Array.from(Array(100).keys());
  const convert2Dto1D = (row, col) => row * 10 + col;
  const convert1Dto2D = (val) => [Math.floor(val / 10), val % 10];
  const attack = (board, row, col) => {
    const val = convert2Dto1D(row, col);
    if (!shots.includes(val)) return false;
    const shot = board.receiveAttack(row, col);
    const index = shots.indexOf(val);
    shots.splice(index, 1);
    return [shot, row, col];
  };
  const randAttack = (board) => {
    if (shots.length === 0) return false;
    const randIndex = Math.floor(Math.random() * shots.length);
    const val = shots[randIndex];
    const convertedVal = convert1Dto2D(val);
    const row = convertedVal[0];
    const col = convertedVal[1];
    return attack(board, row, col);
  };
  return {
    attack, randAttack,
  };
};

module.exports = Player;

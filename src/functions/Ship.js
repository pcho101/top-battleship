const Ship = (length) => {
  const shipHits = Array(length).fill(false);
  const hit = (index) => {
    shipHits[index] = true;
  };
  const isSunk = () => shipHits.every((x) => x === true);

  return {
    hit, isSunk,
  };
};

module.exports = Ship;

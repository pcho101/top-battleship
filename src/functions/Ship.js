const Ship = (length, name) => {
  const shipHits = Array(length).fill(false);
  const hit = (index) => {
    shipHits[index] = true;
  };
  const isSunk = () => shipHits.every((x) => x === true);

  return {
    hit,
    isSunk,
    length,
    name,
  };
};

module.exports = Ship;

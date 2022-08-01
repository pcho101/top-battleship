import * as dom from './dom';
import * as prev from './preview';
import * as helper from './helper';

let shipPhase = true;
let direction = 0;
let p1ShipCount = 0;
let p2ShipCount = 0;
let p1;
let p2;
let maxShips;

const init = (a, b) => {
  p1 = a;
  p2 = b;
  maxShips = Object.keys(p1.ships).length;
};

const getMaxShips = () => (maxShips);

const getShipPhase = () => (shipPhase);

const changeShipPhase = (state) => {
  shipPhase = state;
};

const getp1ShipCount = () => (p1ShipCount);

const resetp1ShipCount = () => {
  p1ShipCount = 0;
};

const getp2ShipCount = () => (p2ShipCount);

const resetp2ShipCount = () => {
  p2ShipCount = 0;
};

const getDirection = () => (direction);

const resetDirection = () => {
  direction = 0;
};

const changeAxis = () => {
  direction = direction ? 0 : 1;
};

const nextp1Ship = (x) => {
  switch (x) {
    case 0:
      return p1.ships.s1;
    case 1:
      return p1.ships.s2;
    case 2:
      return p1.ships.s3;
    case 3:
      return p1.ships.s4;
    case 4:
      return p1.ships.s5;
    default:
      break;
  }
};

const nextp2Ship = (x) => {
  switch (x) {
    case 0:
      return p2.ships.s1;
    case 1:
      return p2.ships.s2;
    case 2:
      return p2.ships.s3;
    case 3:
      return p2.ships.s4;
    case 4:
      return p2.ships.s5;
    default:
      break;
  }
};

const p1AutoPlace = () => {
  while (p1ShipCount < maxShips) {
    const nextShip = nextp1Ship(p1ShipCount);
    const x = helper.rand(10);
    const y = helper.rand(10);
    const dir = helper.rand(2);
    if (p1.board.placeShip(y, x, nextShip, dir)) p1ShipCount++;
  }
  dom.showShips(p1.board.getBoard(), true);
  dom.ready(true);
  prev.removePreviewListeners(true);
  dom.enableReady(true);
};

const p2AutoPlace = () => {
  while (p2ShipCount < maxShips) {
    const nextShip = nextp2Ship(p2ShipCount);
    const x = helper.rand(10);
    const y = helper.rand(10);
    const dir = helper.rand(2);
    if (p2.board.placeShip(y, x, nextShip, dir)) p2ShipCount++;
  }
  if (dom.getGameMode() === 0) {
    dom.showShips(p2.board.getBoard(), false);
    dom.enableReady(false);
  }
  dom.ready(false);
  prev.removePreviewListeners(false);
};

const setp1Ship = (e) => {
  if (!shipPhase || p1ShipCount === maxShips) return;
  const coords = helper.getCellCoords(e.target);
  const nextShip = nextp1Ship(p1ShipCount);

  if (p1.board.placeShip(coords.row, coords.col, nextShip, direction)) {
    p1ShipCount++;
    dom.showShipCount(p1ShipCount, maxShips, true);
  }
  if (p1ShipCount === maxShips) {
    prev.removePreviewListeners(true);
    dom.ready(true);
    dom.enableReady(true);
  }
};

const setp2Ship = (e) => {
  if (dom.getGameMode() || !shipPhase || p2ShipCount === maxShips) return;
  const coords = helper.getCellCoords(e.target);
  const nextShip = nextp2Ship(p2ShipCount);

  if (p2.board.placeShip(coords.row, coords.col, nextShip, direction)) {
    p2ShipCount++;
    dom.showShipCount(p2ShipCount, maxShips, false);
  }
  if (p2ShipCount === maxShips) {
    prev.removePreviewListeners(false);
    dom.ready(false);
    dom.enableReady(false);
  }
};

const p1SetShip = () => {
  const p1cells = document.querySelectorAll('.player-grid .cell');
  p1cells.forEach((cell) => {
    cell.addEventListener('click', setp1Ship);
  });
};

const p2SetShip = () => {
  const p2cells = document.querySelectorAll('.enemy-grid .cell');
  p2cells.forEach((cell) => {
    cell.addEventListener('click', setp2Ship);
  });
};

const addSetShipListener = (isFirstPlayer) => (isFirstPlayer ? p1SetShip() : p2SetShip());

const resetp1Grid = () => {
  resetp1ShipCount();
  p1.board.resetBoard();
  dom.clearGrid(p1.board.getBoard(), true);
  dom.showShips(p1.board.getBoard(), true);
  prev.addPreviewListeners(true);
  dom.showShipCount(getp1ShipCount(), getMaxShips(), true);
  dom.disableReady(true);
};

const resetp2Grid = () => {
  resetp2ShipCount();
  p2.board.resetBoard();
  dom.clearGrid(p2.board.getBoard(), false);
  dom.showShips(p2.board.getBoard(), false);
  prev.addPreviewListeners(false);
  dom.showShipCount(getp2ShipCount(), getMaxShips(), false);
  dom.disableReady(false);
};

export {
  init,
  getMaxShips,
  getShipPhase,
  changeShipPhase,
  getp1ShipCount,
  resetp1ShipCount,
  getp2ShipCount,
  resetp2ShipCount,
  addSetShipListener,
  getDirection,
  resetDirection,
  changeAxis,
  nextp1Ship,
  nextp2Ship,
  p1AutoPlace,
  p2AutoPlace,
  resetp1Grid,
  resetp2Grid,
};

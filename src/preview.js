import * as helper from './helper';
import * as build from './buildShip';

let p1;
let p2;

const init = (a, b) => {
  p1 = a;
  p2 = b;
};

const preview = (p, coords, len, state) => {
  const direction = build.getDirection();
  const axis = direction ? coords.row : coords.col;
  const style = p.board.isValidPlace(coords.row, coords.col, len, direction) ? 'preview-good' : 'preview-bad';

  for (let i = 0; i < len && i + axis < 10; i++) {
    if (direction) {
      const cell = coords.parent.children[coords.index + 10 * i];
      state ? cell.classList.add(`${style}`) : cell.classList.remove(`${style}`);
    } else {
      const cell = coords.parent.children[coords.index + i];
      state ? cell.classList.add(`${style}`) : cell.classList.remove(`${style}`);
    }
  }
};

const addPreview = (e) => {
  const coords = helper.getCellCoords(e.target);
  const nextShip = coords.player ? build.nextp1Ship(build.getp1ShipCount()) : build.nextp2Ship(build.getp2ShipCount());
  const len = nextShip.length;
  const player = coords.player ? p1 : p2;
  preview(player, coords, len, true);
};

const removePreview = (e) => {
  const coords = helper.getCellCoords(e.target);
  const nextShip = coords.player ? build.nextp1Ship(build.getp1ShipCount()) : build.nextp2Ship(build.getp2ShipCount());
  const len = nextShip.length;
  const player = coords.player ? p1 : p2;
  preview(player, coords, len, false);
};

const addPreviewListeners = (player) => {
  let cells;
  if (player) {
    cells = document.querySelectorAll('.player-grid .cell');
  } else {
    cells = document.querySelectorAll('.enemy-grid .cell');
  }
  cells.forEach((cell) => {
    cell.addEventListener('mouseenter', addPreview);
    cell.addEventListener('mouseleave', removePreview);
  });
};

const removePreviewListeners = (player) => {
  let cells;
  if (player) {
    cells = document.querySelectorAll('.player-grid .cell');
  } else {
    cells = document.querySelectorAll('.enemy-grid .cell');
  }
  cells.forEach((cell) => {
    cell.removeEventListener('mouseenter', addPreview);
    cell.removeEventListener('mouseleave', removePreview);
  });
};

export {
  init,
  addPreviewListeners,
  removePreviewListeners,
};

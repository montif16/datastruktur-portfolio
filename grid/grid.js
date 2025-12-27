"use strict";

export default class Grid {
  constructor(rows, cols) {
    this._rows = rows;
    this._cols = cols;
    this._data = new Array(rows * cols);
  }

  rows() {
    return this._rows;
  }

  cols() {
    return this._cols;
  }

  size() {
    return this._data.length;
  }

  indexFor({ row, col }) {
  if (row < 0 || row >= this._rows) return undefined;
  if (col < 0 || col >= this._cols) return undefined;

  return row * this._cols + col;
}

rowColFor(index) {
  if (index < 0 || index >= this._data.length) return undefined;

  const row = Math.floor(index / this._cols);
  const col = index % this._cols;

  return { row, col };
}

set({ row, col }, value) {
  const index = this.indexFor({ row, col });
  if (index === undefined) return;

  this._data[index] = value;
}

get({ row, col }) {
  const index = this.indexFor({ row, col });
  if (index === undefined) return undefined;

  return this._data[index];
}

north({ row, col }) {
  return this.getCell({ row: row - 1, col });
}

getCell({ row, col }) {
  const index = this.indexFor({ row, col });
  if (index === undefined) return undefined;

  return {
    row,
    col,
    value: this._data[index]
  };
}

south(pos) {
  return this.getCell({ row: pos.row + 1, col: pos.col });
}

west(pos) {
  return this.getCell({ row: pos.row, col: pos.col - 1 });
}

east(pos) {
  return this.getCell({ row: pos.row, col: pos.col + 1 });
}

neighbours(pos) {
  return [
    this.north(pos),
    this.south(pos),
    this.west(pos),
    this.east(pos)
  ].filter(Boolean);
}

neighbourValues(pos) {
  return this.neighbours(pos).map(cell => cell.value);
}

nextInRow({ row, col }) {
  return this.getCell({ row, col: col + 1 });
}

nextInCol({ row, col }) {
  return this.getCell({ row: row + 1, col });
}

fill(value) {
  this._data.fill(value);
}


}

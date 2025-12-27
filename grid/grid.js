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




}

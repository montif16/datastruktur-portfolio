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
}

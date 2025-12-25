"use strict";

export default class StaticArray {
  constructor(length) {
    if (!Number.isInteger(length) || length < 0) {
      throw new RangeError("Length must be a non-negative integer");
    }
    this._length = length;
    this._store = Object.create(null);
  }

  length() {
    return this._length;
  }

  _checkIndex(index) {
    if (!Number.isInteger(index) || index < 0 || index >= this._length) {
      throw new RangeError("Index out of bounds");
    }
  }

  get(index) {
    this._checkIndex(index);
    return this._store[index]; 
  }

  set(index, value) {
    this._checkIndex(index);
    this._store[index] = value;
  }
}

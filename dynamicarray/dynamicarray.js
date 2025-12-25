"use strict";

import StaticArray from "./staticarray.js";

export default class DynamicArray {
  constructor(capacity = 10) {
    if (!Number.isInteger(capacity) || capacity < 1) {
      throw new RangeError("Capacity must be a positive integer");
    }

    this._data = new StaticArray(capacity); 
  }

  size() {
    return this._size;
  }

  capacity() {
    return this._data.length();
  }
}

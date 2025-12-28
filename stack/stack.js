"use strict";

export default class Stack {
  constructor() {
    this.head = null;
    this._size = 0;
  }

  size() {
    return this._size;
  }
}

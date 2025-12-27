"use strict";

export default class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this._size = 0;
  }

  size() {
    return this._size;
  }

  
}

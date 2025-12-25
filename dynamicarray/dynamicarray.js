"use strict";

import StaticArray from "./staticarray.js";

export default class DynamicArray {
  constructor(capacity = 10) {
    if (!Number.isInteger(capacity) || capacity < 1) {
      throw new RangeError("Capacity must be a positive integer");
    }
    this._data = new StaticArray(capacity);
    this._size = 0;
  }

  

  _isInt(n) {
    return Number.isInteger(n);
  }

  _throwRange() {
    throw new RangeError("Index out of bounds");
  }

  
  _checkAccessIndex(index) {
    if (!this._isInt(index) || index < 0) this._throwRange();
    if (index >= this.capacity()) this._throwRange(); 
    if (index >= this._size) this._throwRange();      
  }


  _checkInsertIndex(index) {
    if (!this._isInt(index) || index < 0) this._throwRange();


    if (index > this.capacity()) this._throwRange();
    if (index > this._size) this._throwRange();
  }

  // ----- required methods -----

  size() {
    return this._size;
  }

  capacity() {
    return this._data.length();
  }

  get(index) {
    this._checkAccessIndex(index);
    return this._data.get(index);
  }

  set(index, item) {
    this._checkAccessIndex(index);
    this._data.set(index, item);
  }

  add(item) {
    if (this._size >= this.capacity()) {
      this.grow();
    }
    this._data.set(this._size, item);
    this._size++;
  }

  grow() {
    const oldCap = this.capacity();
    const newCap = oldCap * 2; 

    const newData = new StaticArray(newCap);
    for (let i = 0; i < this._size; i++) {
      newData.set(i, this._data.get(i));
    }
    this._data = newData;
  }

  insert(index, item) {
    this._checkInsertIndex(index);

    if (this._size >= this.capacity()) {
      this.grow();
    }

    for (let i = this._size; i > index; i--) {
      this._data.set(i, this._data.get(i - 1));
    }

    this._data.set(index, item);
    this._size++;
  }

  remove(index) {
    this._checkAccessIndex(index);

    for (let i = index; i < this._size - 1; i++) {
      this._data.set(i, this._data.get(i + 1));
    }

    this._data.set(this._size - 1, undefined);
    this._size--;
  }

  clear() {

    this._size = 0;
  }
}

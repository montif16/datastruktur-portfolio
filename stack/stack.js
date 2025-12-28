"use strict";

export default class Stack {
  constructor() {
    this.head = null;
    this._size = 0;
  }

  size() {
    return this._size;
  }

push(data) {
  const newNode = { data, next: this.head };
  this.head = newNode;
  this._size++;
}

pop() {
  if (this.head === null) return null;

  const data = this.head.data;
  this.head = this.head.next;
  this._size--;
  return data;
}

peek() {
  return this.head ? this.head.data : null;
}

get(index) {
  if (!Number.isInteger(index) || index < 0 || index >= this._size) {
    throw new RangeError("Index out of bounds");
  }

  let current = this.head;
  for (let i = 0; i < index; i++) {
    current = current.next;
  }

  return current.data;
}


}

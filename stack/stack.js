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


}

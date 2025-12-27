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

  enqueue(data) {
  const newNode = { data, next: null };

  if (this.tail === null) {
    this.head = newNode;
    this.tail = newNode;
    this._size = 1;
    return;
  }

  this.tail.next = newNode;
  this.tail = newNode;
  this._size++;
}

dequeue() {
  if (this.head === null) return null;

  const data = this.head.data;
  this.head = this.head.next;
  this._size--;

  if (this.head === null) {
    this.tail = null;
  }

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
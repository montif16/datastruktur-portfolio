"use strict";

export default class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this._size = 0; 
  }

  printList() {
    let current = this.head;
    const forward = [];

    while (current !== null) {
      forward.push(current.data);
      current = current.next;
    }

    console.log("HEAD ->", forward.join(" <-> "), "<- TAIL");
  }

  size() {
    return this._size;
  }

  addLast(data) {
  const newNode = { data, prev: null, next: null };

  // empty list
  if (this.tail === null) {
    this.head = newNode;
    this.tail = newNode;
    this._size = 1;
    return;
  }

  // non-empty list
  newNode.prev = this.tail;
  this.tail.next = newNode;
  this.tail = newNode;
  this._size++;
}

addFirst(data) {
  const newNode = { data, prev: null, next: null };

  // empty list
  if (this.head === null) {
    this.head = newNode;
    this.tail = newNode;
    this._size = 1;
    return;
  }

  // non-empty list
  newNode.next = this.head;
  this.head.prev = newNode;
  this.head = newNode;
  this._size++;
}

removeFirst() {
  if (this.head === null) return null;

  const removed = this.head;

  // single element
  if (this.head === this.tail) {
    this.head = null;
    this.tail = null;
    this._size = 0;
    return removed.data;
  }

  // move head forward
  this.head = removed.next;
  this.head.prev = null;

  this._size--;
  return removed.data;
}

removeLast() {
  if (this.tail === null) return null;

  const removed = this.tail;

  // single element
  if (this.head === this.tail) {
    this.head = null;
    this.tail = null;
    this._size = 0;
    return removed.data;
  }

  // move tail backward
  this.tail = removed.prev;
  this.tail.next = null;

  this._size--;
  return removed.data;
}

}

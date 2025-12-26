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

_checkIndexAccess(index) {
  if (!Number.isInteger(index) || index < 0 || index >= this._size) {
    throw new RangeError("Index out of bounds");
  }
}

_checkIndexInsert(index) {
  if (!Number.isInteger(index) || index < 0 || index > this._size) {
    throw new RangeError("Index out of bounds");
  }
}


getNode(index) {
  this._checkIndexAccess(index);

  let current = this.head;
  for (let i = 0; i < index; i++) {
    current = current.next;
  }
  return current;
}

get(index) {
  return this.getNode(index).data;
}

insert(index, data) {

this._checkIndexInsert(index)

  if (index === 0) {
    this.addFirst(data);
    return;
  }

  if (index === this._size) {
    this.addLast(data);
    return;
  }

  const current = this.getNode(index);
  const prev = current.prev;

  const newNode = { data, prev: prev, next: current };

  prev.next = newNode;
  current.prev = newNode;

  this._size++;
}

remove(index) {
  this._checkIndexAccess(index);

  if (index === 0) return this.removeFirst();
  if (index === this._size - 1) return this.removeLast();

  const node = this.getNode(index);

  node.prev.next = node.next;
  node.next.prev = node.prev;

  this._size--;
  return node.data;
}

removeNode(node) {
  if (node === null || node === undefined) {
    throw new RangeError("Node must not be null");
  }

  // empty list
  if (this.head === null) return null;

  // node is head
  if (node === this.head) return this.removeFirst();

  // node is tail
  if (node === this.tail) return this.removeLast();

  // middle node
  node.prev.next = node.next;
  node.next.prev = node.prev;

  this._size--;
  return node.data;
}


set(index, data) {
  this._checkIndexAccess(index);
  this.getNode(index).data = data;
}

clear() {
  this.head = null;
  this.tail = null;
  this._size = 0;
}

//Passing tests
getFirstNode() {
  return this.head;
}

getLastNode() {
  return this.tail;
}

getFirst() {
  return this.head ? this.head.data : null;
}

getLast() {
  return this.tail ? this.tail.data : null;
}

getNextNode(node) {
  return node ? node.next : null;
}

getPreviousNode(node) {
  return node ? node.prev : null;
}

insertAfterNode(node, data) {
  if (node == null) throw new RangeError("Node must not be null");

  const newNode = { data, prev: null, next: null };

  // after tail
  if (node === this.tail) {
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this._size++;
    return;
  }

  const next = node.next;

  newNode.prev = node;
  newNode.next = next;

  node.next = newNode;
  next.prev = newNode;

  this._size++;
}


insertBeforeNode(node, data) {
  if (node == null) throw new RangeError("Node must not be null");

  const newNode = { data, prev: null, next: null };

  // before head
  if (node === this.head) {
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this._size++;
    return;
  }

  const prev = node.prev;

  newNode.prev = prev;
  newNode.next = node;

  prev.next = newNode;
  node.prev = newNode;

  this._size++;
}



}

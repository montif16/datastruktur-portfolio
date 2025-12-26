"use strict";

export default class SinglyLinkedList {
  constructor() {
    // required: starts empty
    this.head = null;

    // internal: keep size in O(1)
    this._size = 0;

    // learning toggle (tests ignore logs anyway, but this keeps it tidy)
    this._debug = false;
  }

  // ---------- tiny debug helpers ----------
  debugOn() { this._debug = true; }
  debugOff() { this._debug = false; }
  _log(...args) { if (this._debug) console.log(...args); }

  // Node factory: nodes are simple objects { data, next }
  _makeNode(data, next = null) {
    return { next, data };
  }

  // ---------- required "see it" method ----------
  printList() {
    let current = this.head;
    const parts = [];

    while (current !== null) {
      parts.push(String(current.data));
      current = current.next;
    }

    const out = parts.join(" -> ") + " -> null";
    console.log(out);
    return out; // returning doesn't hurt tests, but helps you in playground
  }

  // ---------- basic info ----------
  size() {
    return this._size;
  }

  // ---------- traversal helpers ----------
  _checkIndexAccess(index) {
    // valid for get/set/remove: 0..size-1
    if (!Number.isInteger(index) || index < 0 || index >= this._size) {
      throw new RangeError("Index out of bounds");
    }
  }

  _checkIndexInsert(index) {
    // valid for insert: 0..size (size allowed = append)
    if (!Number.isInteger(index) || index < 0 || index > this._size) {
      throw new RangeError("Index out of bounds");
    }
  }

  getFirstNode() {
    return this.head;
  }

  getLastNode() {
    if (this.head === null) return null;
    let current = this.head;
    while (current.next !== null) current = current.next;
    return current;
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

  getFirst() {
    if (this.head === null) return null;
    return this.head.data;
  }

  getLast() {
    const last = this.getLastNode();
    return last === null ? null : last.data;
  }

  getNextNode(node) {
    // tests only pass valid nodes they got from this list
    return node?.next ?? null;
  }

  getPreviousNode(node) {
    if (this.head === null) return null;
    if (node === this.head) return null;

    let prev = this.head;
    let current = this.head.next;

    while (current !== null) {
      if (current === node) return prev;
      prev = current;
      current = current.next;
    }
    // node not found in list -> return null (safe)
    return null;
  }

  // ---------- add ----------
  add(data) {
    this._log("add:", data);

    const newNode = this._makeNode(data);

    if (this.head === null) {
      this.head = newNode;
      this._size = 1;
      return;
    }

    const last = this.getLastNode();
    last.next = newNode;
    this._size++;
  }

  // ---------- insert by index ----------
  insert(index, data) {
    this._checkIndexInsert(index);
    this._log("insert:", { index, data });

    // inserting at 0 is special: new head
    if (index === 0) {
      const newNode = this._makeNode(data, this.head);
      this.head = newNode;
      this._size++;
      return;
    }

    // inserting at end is allowed (index === size)
    const prev = this.getNode(index - 1);
    const newNode = this._makeNode(data, prev.next);
    prev.next = newNode;
    this._size++;
  }

  // ---------- insert by node ----------
  insertAfter(node, data) {
    this._log("insertAfter:", { nodeData: node?.data, data });

    if (node === null) throw new RangeError("Node must not be null");

    const newNode = this._makeNode(data, node.next);
    node.next = newNode;
    this._size++;
  }

  insertBefore(node, data) {
    this._log("insertBefore:", { nodeData: node?.data, data });

    if (node === null) throw new RangeError("Node must not be null");

    // inserting before head = new head
    if (node === this.head) {
      const newNode = this._makeNode(data, this.head);
      this.head = newNode;
      this._size++;
      return;
    }

    const prev = this.getPreviousNode(node);
    if (prev === null) throw new RangeError("Node not in list");

    const newNode = this._makeNode(data, node);
    prev.next = newNode;
    this._size++;
  }

  // ---------- remove ----------
  removeFirst() {
    this._log("removeFirst");

    if (this.head === null) return null;

    const removed = this.head;
    this.head = this.head.next;
    this._size--;
    return removed.data;
  }

  removeLast() {
    this._log("removeLast");

    if (this.head === null) return null;

    if (this.head.next === null) {
      const data = this.head.data;
      this.head = null;
      this._size = 0;
      return data;
    }

    let prev = this.head;
    let current = this.head.next;

    while (current.next !== null) {
      prev = current;
      current = current.next;
    }

    // current is last
    prev.next = null;
    this._size--;
    return current.data;
  }

  remove(index) {
    this._checkIndexAccess(index);
    this._log("remove index:", index);

    if (index === 0) return this.removeFirst();

    const prev = this.getNode(index - 1);
    const removed = prev.next;
    prev.next = removed.next;
    this._size--;
    return removed.data;
  }

  removeNode(node) {
    this._log("removeNode:", node?.data);

    if (node === null) throw new RangeError("Node must not be null");
    if (this.head === null) return null;

    if (node === this.head) {
      return this.removeFirst();
    }

    const prev = this.getPreviousNode(node);
    if (prev === null) throw new RangeError("Node not in list");

    prev.next = node.next;
    this._size--;
    return node.data;
  }

  // ---------- set ----------
  set(index, data) {
    this._checkIndexAccess(index);
    this._log("set:", { index, data });

    const node = this.getNode(index);
    node.data = data;
  }

  // ---------- clear ----------
  clear() {
    this._log("clear");
    this.head = null;
    this._size = 0;
  }
}

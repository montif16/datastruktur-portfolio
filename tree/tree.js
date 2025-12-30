"use strict";

export class Node {
  constructor(value) {
    this.value = value;
    this.parent = null;
    this.childNodes = [];
  }
}

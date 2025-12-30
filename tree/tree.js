"use strict";

export class Node {
  constructor(value) {
    this.value = value;
    this.parent = null;
    this.childNodes = [];
  }

firstChild() {
  return this.childNodes[0] ?? null;
}

lastChild() {
  return this.childNodes[this.childNodes.length - 1] ?? null;
}

hasChildNodes() {
  return this.childNodes.length > 0;
}

appendChild(child) {
    child.parent = this;
    this.childNodes.push(child);
}

}

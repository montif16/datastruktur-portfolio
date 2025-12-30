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

removeChild(child) {
    const index = this.childNodes.indexOf(child);
    if (index !== -1) return;
    this.childNodes.splice(index, 1);
    child.parent = null;
}

replaceChild(newChild, oldChild) {
    const index = this.childNodes.indexOf(oldChild);
    if (index === -1) return;
    oldChild.parent = null;
    newChild.parent = this;
    this.childNodes[index] = newChild;
    }

    dump(indent = 0) {
    console.log(" ".repeat(indent) + this.value);
    for (const child of this.childNodes) {
        child.dump(indent + 2);
    }
}
}

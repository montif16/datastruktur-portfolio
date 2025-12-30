 "use strict";

import { Node } from "./node.js";

export class Tree {
  constructor(rootValue) {
    this.root = new Node(rootValue);
  }

  dump() {
    this.root.dump();
  }

  addValue(value) {
    const node = new Node(value);
    this.root.appendChild(node);
    return node;
  }

  findValue(value, node = this.root) {
    if (node.value === value) return node;

    for (const child of node.childNodes) {
      const found = this.findValue(value, child);
      if (found) return found;
    }

    return null;
  }

  removeValue(value) {
    const node = this.findValue(value);
    if (!node || !node.parent) return;

    node.parent.removeChild(node);
  }
}

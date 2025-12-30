import { Node } from "./tree.js";

const root = new Node("root");
const a = new Node("A");
const b = new Node("B");
const c = new Node("C");

root.appendChild(a);
root.appendChild(b);
a.appendChild(c);

console.log(root.value);                 // root
console.log(root.firstChild().value);    // A
console.log(root.lastChild().value);     // B
console.log(a.parent.value);             // root
console.log(c.parent.value);             // A

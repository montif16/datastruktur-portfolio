import { Node } from "./node.js";

const root = new Node("root");
const a = new Node("A");
const b = new Node("B");
const c = new Node("C");

root.appendChild(a);
root.appendChild(b);
a.appendChild(c);
/*
console.log(root.value);                 // root
console.log(root.firstChild().value);    // A
console.log(root.lastChild().value);     // B
console.log(a.parent.value);             // root
console.log(c.parent.value);             // A

root.removeChild(a);
console.log(a.parent);           // null
console.log(root.hasChildNodes()); // true (B still exists)
*/

const d = new Node("D");
root.replaceChild(d, b);

//console.log(root.lastChild().value); // D
//console.log(b.parent);               // null
//console.log(d.parent.value);         // root

root.dump();



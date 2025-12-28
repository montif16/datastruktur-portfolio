import Stack from "./stack.js";

const s = new Stack();

s.push("A");
s.push("B");
s.push("C");

console.log("size:", s.size());     // 3
console.log("top:", s.head.data);   // C

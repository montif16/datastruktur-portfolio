import Stack from "./stack.js";

/*
// Test push and size
const s = new Stack();

s.push("A");
s.push("B");
s.push("C");

console.log("size:", s.size());     // 3
console.log("top:", s.head.data);   // C
*/
// Test pop
const s = new Stack();

s.push("A");
s.push("B");
s.push("C");

console.log(s.pop()); // C
console.log(s.pop()); // B
console.log(s.pop()); // A
console.log(s.pop()); // null

console.log("size:", s.size()); // 0

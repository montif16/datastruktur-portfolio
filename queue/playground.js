import Queue from "./queue.js";
/*
const q = new Queue();

q.enqueue("A");
q.enqueue("B");
q.enqueue("C");

console.log("size:", q.size());     // 3
console.log("head:", q.head.data);  // A
console.log("tail:", q.tail.data);  // C
*/
/*
const q = new Queue();

q.enqueue("A");
q.enqueue("B");
q.enqueue("C");

console.log(q.dequeue()); // A
console.log(q.dequeue()); // B
console.log(q.dequeue()); // C
console.log(q.dequeue()); // null

console.log("size:", q.size()); // 0
*/

const q = new Queue();

q.enqueue("A");
q.enqueue("B");
q.enqueue("C");

console.log(q.peek());     // A
console.log(q.get(1));     // B
console.log(q.get(2));     // C
console.log("clear")
console.log(q.dequeue()); // A
console.log(q.peek());    // B
console.log(q.size());    // 2

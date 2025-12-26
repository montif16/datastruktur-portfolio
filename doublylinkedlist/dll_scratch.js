// dll_scratch.js

const A = { data: "A", prev: null, next: null };
const B = { data: "B", prev: null, next: null };
const C = { data: "C", prev: null, next: null };

// wire them manually
A.next = B;
B.prev = A;
B.next = C;
C.prev = B;

// define head / tail
let head = A;
let tail = C;

// inspect
console.log(head.data);           // A
console.log(head.next.data);      // B
console.log(head.next.next.data); // C
console.log(tail.data);           // C
console.log(tail.prev.data);      // B

const X = { data: "X", prev: null, next: null };

// insertion logic
X.prev = B;
X.next = C;
B.next = X;
C.prev = X;

// traverse forward
let cur = head;
while (cur) {
  console.log(cur.data);
  cur = cur.next;
}

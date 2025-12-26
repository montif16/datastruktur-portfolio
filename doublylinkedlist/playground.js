import DoublyLinkedList from "./DoublyLinkedList.js";

// AddLast
/*
const list = new DoublyLinkedList();

list.addLast("A");
list.printList();

list.addLast("B");
list.printList();

list.addLast("C");
list.printList();

console.log("tail.prev.data =", list.tail.prev.data);
*/
/*
//AddFirst
const list = new DoublyLinkedList();

list.addFirst("B");
list.printList();

list.addFirst("A");
list.printList();

list.addLast("C");
list.printList();

console.log("head.data =", list.head.data);
console.log("tail.data =", list.tail.data);
console.log("head.next.data =", list.head.next.data);
console.log("tail.prev.data =", list.tail.prev.data);
*/

//RemoveFirst
/*
const list = new DoublyLinkedList();
list.addLast("A");
list.addLast("B");
list.addLast("C");
list.printList();

console.log("removed:", list.removeFirst()); // A
list.printList();

console.log("removed:", list.removeFirst()); // B
list.printList();

console.log("removed:", list.removeFirst()); // C
list.printList();

console.log("removed:", list.removeFirst()); // null
*/

//remove last
/*
const list = new DoublyLinkedList();
list.addLast("A");
list.addLast("B");
list.addLast("C");
list.printList();

console.log("removed:", list.removeLast()); // C
list.printList();

console.log("removed:", list.removeLast()); // B
list.printList();

console.log("removed:", list.removeLast()); // A
list.printList();

console.log("removed:", list.removeLast()); // null
*/

//Walking the list
const list = new DoublyLinkedList();
list.addLast("A");
list.addLast("B");
list.addLast("C");

console.log(list.get(0)); // A
console.log(list.get(1)); // B
console.log(list.get(2)); // C

try {
  list.get(3);
} catch (e) {
  console.log("error:", e instanceof RangeError);
}


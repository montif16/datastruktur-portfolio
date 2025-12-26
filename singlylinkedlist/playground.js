import SinglyLinkedList from "./singlylinkedlist.js";

const list = new SinglyLinkedList();
list.debugOn();

console.log("Initially:");
list.printList();

console.log("\nAdd A, B, C:");
list.add("A");
list.add("B");
list.add("C");
list.printList();

console.log("\nInsert X at index 1:");
list.insert(1, "X");
list.printList();

console.log("\nRemove index 2:");
list.remove(2);
list.printList();

console.log("\nInsertBefore head (before A):");
list.insertBefore(list.getFirstNode(), "FIRST");
list.printList();

console.log("\nRemoveLast:");
list.removeLast();
list.printList();

console.log("\nSize:", list.size());

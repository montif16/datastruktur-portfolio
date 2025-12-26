import DoublyLinkedList from "./DoublyLinkedList.js";


const list = new DoublyLinkedList();

list.addLast("A");
list.printList();

list.addLast("B");
list.printList();

list.addLast("C");
list.printList();

console.log("tail.prev.data =", list.tail.prev.data);

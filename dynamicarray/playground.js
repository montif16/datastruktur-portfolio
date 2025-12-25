import DynamicArray from "./dynamicarray.js";

const arr = new DynamicArray(2);

arr.add("A");
arr.add("B");
arr.add("C"); // triggers grow

console.log("final size:", arr.size());
console.log("final capacity:", arr.capacity());

for (let i = 0; i < arr.size(); i++) {
  console.log(i, arr.get(i));
}

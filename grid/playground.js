/*
import Grid from "./grid.js";

const grid = new Grid(3, 4); // 3 rows, 4 columns

console.log("rows:", grid.rows()); // 3
console.log("cols:", grid.cols()); // 4
console.log("size:", grid.size()); // 12

let counter = 1;

for (let row = 0; row < grid.rows(); row++) {
  for (let col = 0; col < grid.cols(); col++) {
    grid.set({ row, col }, counter++);
  }
}

console.log(grid._data);

// print raw internal array (just for learning)
console.log("raw data:", grid._data);

grid.set({ row: 0, col: 0 }, "A");
grid.set({ row: 1, col: 2 }, "B");
grid.set({ row: 2, col: 3 }, "C");

console.log("get 0,0:", grid.get({ row: 0, col: 0 })); // A
console.log("get 1,2:", grid.get({ row: 1, col: 2 })); // B
console.log("get 2,3:", grid.get({ row: 2, col: 3 })); // C

console.log("raw data after set:", grid._data);

console.log("index of (0,0):", grid.indexFor({ row: 0, col: 0 })); // 0
console.log("index of (1,0):", grid.indexFor({ row: 1, col: 0 })); // 4
console.log("index of (1,2):", grid.indexFor({ row: 1, col: 2 })); // 6
console.log("index of (2,3):", grid.indexFor({ row: 2, col: 3 })); // 11

const pos = { row: 1, col: 2 };

console.log("cell:", grid.getCell(pos));

console.log("north:", grid.north(pos));
console.log("south:", grid.south(pos));
console.log("west:", grid.west(pos));
console.log("east:", grid.east(pos));

console.log("neighbours:", grid.neighbours(pos));
console.log("neighbour values:", grid.neighbourValues(pos));

const corner = { row: 0, col: 0 };

console.log("corner neighbours:", grid.neighbours(corner));
*/
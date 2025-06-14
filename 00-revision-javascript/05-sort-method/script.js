const x = [3, 7, 1, 9, 8];
const sliced = x.slice();
sliced; // cópia do array
const sorted = x.slice().sort((a, b) => a - b);

sorted;

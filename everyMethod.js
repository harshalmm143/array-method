const arr = [2, 4, 6, 8, 10, 12, 12];
// const arr = [2, 4, 6, 8, 10, 12, 11]; // false

const isEven = (num) => num % 2 === 0;
const result = arr.every(isEven);

console.log(result)
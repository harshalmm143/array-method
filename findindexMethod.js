const arr = [10, 20, 30, 40, 50, 60, 70, 80];

const greaterThan30 = (num) => num > 30;
const index = arr.findIndex(greaterThan30)

console.log(index)
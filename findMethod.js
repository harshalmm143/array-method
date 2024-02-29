const arr = [55, 34, 101, , 200, 201, 300, 301, 401, 501]

const greaterThan300 = (num) => num > 300;
const result = arr.find(greaterThan300)

console.log(result)
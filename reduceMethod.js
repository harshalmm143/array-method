const number = [10, 20, 30, 40, 50, 60];

const sum = number.reduce((accumulator, currentValue) => {
    return accumulator + currentValue
});
console.log(sum)
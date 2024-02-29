const number = [1, 4, 7, 1, 2, 9, 4];

const hasEvenNumber = number.some(number => number % 9 === 0);
console.log(`Has even number? ${hasEvenNumber}`); // true
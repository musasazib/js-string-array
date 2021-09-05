const numbers = [4, 9, 2, 7, 3, 5, 8, 13, 19, 17];
const numberSliced = numbers.slice(4, 8);
console.log(numberSliced);

// Splice to remove an element from an array
const numberSpliced = numbers.splice(4, 3);
console.log(numberSpliced);

// Splice to remove an element and added element an array
const numberSpliced2 = numbers.splice(4, 3, 99, 111, 444);
console.log(numberSpliced2);
console.log(numbers);
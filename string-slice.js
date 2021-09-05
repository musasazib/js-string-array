const anthem = 'Amar Sonar Bangla Ami Tomai Valobasi';

// Split
const words = anthem.split(' ');
console.log(words);

const withoutA = anthem.split('a');
console.log(withoutA);

// Slice
const smallSlice = anthem.slice(5, 13);
console.log(smallSlice);

// Substr
const anotherPart = anthem.substr(11, 7);
console.log(anotherPart);

// Substring 
const againAnotherPart = anthem.substring(11, 15);
console.log(againAnotherPart);

// Concat
const first = 'Tablet';
const secund = 'Shaown';
const fullString = first.concat(secund);
console.log(fullString);
const againFullString = first.concat(secund).concat('Naogaon');
console.log(againFullString);

// Join 
const joinWords = ['a', 'b', 'c', 'd'];
const allJoinWord = joinWords.join('');
const allJoinWords = joinWords.join(', ');
console.log(allJoinWord);
console.log(allJoinWords);
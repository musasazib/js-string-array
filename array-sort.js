// Sort
const numbers = [6, 1, 3, 9, 7, 5, 2, 8, 4];
const sortedNumber = numbers.sort();
console.log(sortedNumber);

const friends = ['Riyaz', 'Mizan', 'Somon', 'Aziz', 'Zobbar'];
// Sort
const sortedFriend = friends.sort();
console.log(sortedFriend);
// Reverse
const reversedFriends = friends.reverse();
console.log(reversedFriends);
// Sort and Reverse
const sortedReversedFriends = friends.sort().reverse();
console.log(sortedReversedFriends);

// Number Sorting fun
const bigNumbers = [58, 64, 35, 76, 37, 38, 93, 82, 8, 2, 9, 65, 43, 87];
const sortedBigNumbers = bigNumbers.sort(function (a, b) {
    return a - b;
});
console.log(sortedBigNumbers);
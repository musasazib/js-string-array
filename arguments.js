function addNumbers() {
    let result = 0;
    for (const num of arguments) {
        result = result + num;
    }
    return result;
}
const sum = addNumbers(23, 13, 100, 100);
console.log(sum);

function getFullName() {
    let fullName = ' ';
    for (const part of arguments) {
        fullName = fullName + part + ' ';
    }
    return fullName;
}
const name = getFullName('Abu', 'Saleh', 'Md.', 'Musa', 'Sazib');
console.log(name);
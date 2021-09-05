const products = [
    'Dell hardcore i29 200GB Laptop',
    'iPhone 1TB Camera Flashlight Phone',
    'yellow Laptop with Black Camera',
    '1X59 Lenovo commercial yoga Laptop',
    'LG supernova Laptop',
    'HTC low price phone',
    'Purple color Phone with Laptop'
];

const searching = 'Laptop';

// indexOf
const output = [];
for (const product of products) {
    if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
        output.push(product);
    }
}
console.log(output);

// includes
for (const product of products) {
    if (product.toLowerCase().includes(searching.toLowerCase())) {
        output.push(product);
    }
}
console.log(output);

// Starts with
for (const product of products) {
    if (product.toLowerCase().startsWith(searching.toLocaleLowerCase())) {
        output.push(product);
    }
}

console.log(output);
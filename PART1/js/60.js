// sort method
// ASCII TABLE
// char : ascii value

// '0'	: 48
// '1'	: 49
// '2'	: 50
// '3'	: 51
// '4'	: 52
// '5'	: 53
// '6'	: 54
// '7'	: 55
// '8'	: 56
// '9'	: 57

// ':'  : 58
// ';'  : 59
// '<'  : 60
// '='  : 61
// '>'  : 62
// '?'  : 63
// '@'  : 64

// sort

// 5, 9, 1200, 400, 3000
// 5, 9, 400, 1200, 3000 (expected)
// ["5", "9", "1200", "400", "3000"]
// [53, 57, 49, 52, 51] -> ASCII values of the first numbers in the strings

// const numbers = [5, 9, 1200, 400, 3000];

// numbers.sort(); // Instead of sorting the numbers this is sorting the strings
// // sort() modifies the existing array
// console.log(numbers);

// const userNames = ['harshit','abcd','mohit','nitish','aabc','ABC', 'Harshit'];
// userNames.sort();
// console.log(userNames);

// const numbers = [5, 9, 1200, 400, 3000];
// numbers.sort((a,b)=>{
//     return a-b; // positive for ascending order
//     // return a-b; // negative for descending order
// });

// numbers.sort((a,b)=>a-b);
// console.log(numbers);

// 1200, 410
// a-b ---> 790
// a-b ---> positive (greater than 0) ---> b, a
// 410, 1200

// a-b ---> negative ---> a,b
// 5, 9 ---> -4

// price lowToHigh HighToLow
const products = [
    {productId: 1, produceName: "p1", price: 300},
    {productId: 2, produceName: "p2", price: 3000},
    {productId: 3, produceName: "p3", price: 200},
    {productId: 4, produceName: "p4", price: 8000},
    {productId: 5, produceName: "p5", price: 500}
];

// lowToHigh
// products.sort((a,b)=>{
//     return a.price-b.price
// });

// lowToHigh
const lowToHigh = products.slice(0).sort((a,b)=>{ // Here products.slice(0) clones the array
    return a.price-b.price;
});

const highToLow = products.slice(0).sort((a,b)=>{ // Here products.slice(0) clones the array
    return b.price-a.price;
});

console.log(products);
console.log(lowToHigh);
console.log(highToLow);
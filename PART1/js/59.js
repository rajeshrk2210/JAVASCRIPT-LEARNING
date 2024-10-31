// reduce
const numbers = [1,2,3,4,5];

// aim : sum of all the numbers in the array

// const sum = numbers.reduce((accumulator, currentValue)=>{
//     return accumulator + currentValue;
// });

// const sum = numbers.reduce((accumulator, currentValue)=>{
//     return accumulator + currentValue;
// },100); // When we pass 100 the accumulator will become 100 and the currentValue becomes 1

// console.log(sum);

// accumulator, currentValue, return
// 1          , 2           , 3(1+2)
// 3(return)  , 3(next)     , 6(3+3)
// 6(return)  , 4(next)     , 10(6+4)
// 10(return) , 5(next)     , 15(10+5)

const userCart = [
    {productId: 1, productName: "mobile", price: 12000},
    {productId: 2, productName: "laptop", price: 22000},
    {productId: 3, productName: "tv", price: 15000}
];

const totalAmount = userCart.reduce((totalPrice, currentProduct)=>{
    return totalPrice + currentProduct.price; 
}, 0);

console.log(totalAmount);

//  totalPrice    currentProduct      return
//  0               {}                  12000
//  12000           22000               34000
//  34000           15000               49000

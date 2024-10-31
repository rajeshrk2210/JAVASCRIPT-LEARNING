// optional chaining

// const user = {
//     firstName: "harshit",
//     address: {houseNumber: '1234'}
// }

// console.log(user.firstName);
// console.log(user.address);
// console.log(user.address.houseNumber);

const user = {
    // firstName: "harshit",
    // address: {houseNumber: '1234'}
}

// console.log(user.address.houseNumber); // we get error when address property is commented

// console.log(user.firstName); // We get undefined when firstName is not present

console.log(user?.address?.houseNumber);
//If user is present then fine then goes for address else gives undefined
//Next if address is present fine then goes for houseNumber else gives undefined
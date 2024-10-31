let foo = "foo";
console.log(foo);
function getFullName(firstName, lastName){
    console.log(arguments); // arguments is an array like object
    let myVar = "var inside func";
    console.log(myVar);
    const fullName = firstName + " " + lastName;
    return fullName;
}

const personName = getFullName("harshit","sharma");
console.log(personName);

// Global Execution Context
// - Memory Creation Phase
// - Code Execution Phase
// Function Execution Context
// - Local Memory
// - Code Execution Phase
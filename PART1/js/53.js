// param destructuring

// object
// react

const person = {
    firstName: "harshit",
    gender: "male"
}

// function printDetails(obj){
//     console.log(obj.firstName);
//     console.log(obj.gender);
//     // console.log(obj.age); // Gives undefined
// }

function printDetails({firstName,gender,age}){
    console.log(firstName);
    console.log(gender);
    console.log(age); // We get undefined
}

printDetails(person);
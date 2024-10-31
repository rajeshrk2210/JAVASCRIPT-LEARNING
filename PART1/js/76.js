// const user1 = {
//     firstName: "harshit",
//     age: 8,
//     about: function(){
//         console.log(this);
//         console.log(this.firstName, this.age);
//     }
// }

// For function is not necessary to write key, value pair
// We call the function inside an object as method
const user1 = {
    firstName: "harshit",
    age: 8,
    about(){ // Valid
        console.log(this);
        console.log(this.firstName, this.age);
    }
}

user1.about();
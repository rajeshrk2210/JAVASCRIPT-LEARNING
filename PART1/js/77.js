// const user = {
//     firstName : "harshit",
//     lastName : "vashishtha",
//     email : "harshitvashisth@gmail.com",
//     age : 2,
//     address : "House Number, Colony, pincode, state",
//     about : function(){
//         return `${this.firstName} is ${this.age} years old`;
//     },
//     is18 : function(){
//         return this.age >= 18;
//     }
// }

// const aboutUser = user.about();

// console.log(aboutUser);

// function that creates an object
// add key value pair
// object ko return karega

function createUser(firstName, lastName, email, age, address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = function(){
        return `${this.firstName} is ${this.age} years old`;
    };
    user.is18 = function(){
        return this.age >= 18;
    };
    return user;
}

const user1 = createUser('hashit','vashisht','harshit@gmail.com', 3, 'myAddress');

console.log(user1);

const is18 = user1.is18();

console.log(is18);

const about = user1.about();

console.log(about);
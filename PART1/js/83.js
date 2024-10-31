// new keyword

// function createUser(firstName, age){
//     this.firstName = firstName;
//     this.age = age;
// }

// createUser.prototype.about = function(){
//     console.log(this.firstName, this.age);
// };

// const user1 = new createUser("harshit",6);

// new keyword
// 1.) empty object -> this = {}
// 2.) return this
// 3.) Performs Object.create(createUser.prototype); // done by new keyword


// __proto__
// official ecmascript document
// [[prototype]]

// console.log(user1);
// console.log(user1.about());


// const userMethods = {
//     about : function(){
//         return `${this.firstName} is ${this.age} years old`;
//     },
//     is18 : function(){
//         return this.age >= 18;
//     },
//     sing : function(){
//         return 'tu na na la la';
//     }
// }

// new keyword

// constructor functioC
function CreateUser(firstName, lastName, email, age, address){
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
    this.address = address;
}

console.log(CreateUser.prototype);

CreateUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old`;
};

CreateUser.prototype.is18 = function(){
    return this.age >= 18;
};

CreateUser.prototype.sing = function(){
    return 'tu na na la la';
};

const user1 = new CreateUser('harhit','vashisht','harshit@gmail.com', 3, 'myAddress');
const user2 = new CreateUser('harsh','vashisht','harshit@gmail.com', 3, 'myAddress');
const user3 = new CreateUser('mohit','vashisht','harshit@gmail.com', 3, 'myAddress');

console.log(user1);

const is18 = user1.is18();

console.log(is18);

const about = user1.about();

console.log(about);

// __proto__ and prototype both are different

for(let key in user1){
    // console.log(key);
    if(user1.hasOwnProperty(key)){ // Give true for one defined in the object and false for ones in the prototype
        console.log(key);
    };
}

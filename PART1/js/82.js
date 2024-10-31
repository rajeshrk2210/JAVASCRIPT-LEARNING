
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

function createUser(firstName, lastName, email, age, address){
    const user = Object.create(createUser.prototype);
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    return user;
}

console.log(createUser.prototype);

createUser.prototype.about = function(){
    return `${this.firstName} is ${this.age} years old`;
};

createUser.prototype.is18 = function(){
    return this.age >= 18;
};

createUser.prototype.sing = function(){
    return 'tu na na la la';
};

const user1 = createUser('harhit','vashisht','harshit@gmail.com', 3, 'myAddress');
const user2 = createUser('harsh','vashisht','harshit@gmail.com', 3, 'myAddress');
const user3 = createUser('mohit','vashisht','harshit@gmail.com', 3, 'myAddress');

console.log(user1);

const is18 = user1.is18();

console.log(is18);

const about = user1.about();

console.log(about);

// __proto__ and prototype both are different
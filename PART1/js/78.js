// function createUser(firstName, lastName, email, age, address){
//     const user = {};
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     user.about = function(){
//         return `${this.firstName} is ${this.age} years old`;
//     };
//     user.is18 = function(){
//         return this.age >= 18;
//     };
//     return user;
// }

const userMethods = {
    about : function(){
        return `${this.firstName} is ${this.age} years old`;
    },
    is18 : function(){
        return this.age >= 18;
    },
    sing : function(){
        return 'tu na na la la';
    }
}

function createUser(firstName, lastName, email, age, address){
    const user = {};
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.age = age;
    user.address = address;
    user.about = userMethods.about;
    user.is18 = userMethods.is18;
    user.sing = userMethods.sing;
    return user;
}

const user1 = createUser('harhit','vashisht','harshit@gmail.com', 3, 'myAddress');
const user2 = createUser('harsh','vashisht','harshit@gmail.com', 3, 'myAddress');
const user3 = createUser('mohit','vashisht','harshit@gmail.com', 3, 'myAddress');

console.log(user1);

const is18 = user1.is18();

console.log(is18);

const about = user1.about();

console.log(about);
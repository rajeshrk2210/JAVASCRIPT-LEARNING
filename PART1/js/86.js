// 2015 / es6
// class keyword
// class are fake

class createUser{
    constructor(firstName, lastName, email, age, address){
        console.log("constructor called");
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
        this.address = address;
    };

    about(){
        return `${this.firstName} is ${this.age} years old`;
    };
    is18(){
        return this.age >= 18;
    };    
    sing(){
        return 'tu na na la la';
    };
    func(a){
        console.log(a);
    }
}

const user1 = new createUser('harhit','vashisht','harshit@gmail.com', 3, 'myAddress');
const user2 = new createUser('harsh','vashisht','harshit@gmail.com', 3, 'myAddress');
const user3 = new createUser('mohit','vashisht','harshit@gmail.com', 3, 'myAddress');

console.log(user1.firstName);
console.log(user1.lastName);
console.log(user1.email);
console.log(user1.about());
console.log(user1.sing());
console.log(Object.getPrototypeOf(user1));
user1.func(12);
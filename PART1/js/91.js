// static methods and properties
class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    // static methods
    static classInfo(){
        return 'this is person class';
    }
    // static properties
    static desc = "static property";
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }    
    set fullName(fullName){
        // fullName.split(" ")
        // mohit vashistha -> ["mohit", "vashistha"]
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
    eat(){
        return `${this.firstName} is eating`;
    }

    isSuperCute(){
        return this.age <= 1;        
    }

    isCute(){
        return true;
    }
}

const person1 = new Person("harshit", "sharma", 8);
// console.log(person1.eat());
// person1.classInfo(); // gives error
const info = Person.classInfo(); // We can call static function using class directly
console.log(info);
console.log(Person.desc);
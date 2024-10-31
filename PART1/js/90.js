// getters and setters
class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    // setName(firstName, lastName){
    //     this.firstName = firstName;
    //     this.lastName = lastName;
    // }
    set fullName(fullName){
        // fullName.split(" ")
        // mohit vashistha -> ["mohit", "vashistha"]
        const [firstName, lastName] = fullName.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const person1 = new Person("harshit","sharma",5);
// console.log(person1);
// console.log(person1.firstName);
// console.log(person1.fullName());
// console.log(person1.fullName);

// console.log(person1.firstName);
// console.log(person1.lastName);

//  person1.setName("mohit","vashistha");
// person1.firstName = "mohit";
// person1.lastName = "vashistha";

// console.log(person1.firstName);
// console.log(person1.lastName);

person1.fullName = "mohit vashistha"; // setter
console.log(person1);
console.log(person1.fullName); // getter
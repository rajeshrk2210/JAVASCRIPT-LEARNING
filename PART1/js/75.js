// arrow functions

const user1 = {
    firstName: "harshit",
    age: 8,
    about: ()=>{
        // arrow function takes this from the surrounding
        console.log(this);
        console.log(this.firstName, this.age);
    }
}

user1.about();
user1.about.call(user1); // We cannot change this even with call. You get undefined as the object taken here is window

// arrow function takes from one level above

const user2 = {
    firstName: "harshit",
    age: 8,
    about: {
        firstName: "harshit",
        age: 8,
        about: ()=>{
            // arrow function takes this from the surrounding
            console.log(this);
            console.log(this.firstName, this.age);
        }
    }
}

user2.about.about(); // Still gives window oobject for this

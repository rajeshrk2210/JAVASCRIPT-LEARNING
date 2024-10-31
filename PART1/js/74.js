
const user1 = {
    firstName: "harshit",
    age: 8,
    about: function(){
        console.log(this);
        console.log(this.firstName, this.age);
    }
}

// don't do this mistake

// user1.about()
// const myFunc = user1.about;
// myFunc();// We get undefined for this.firstName and this.age
// because it is equivalent to
// const myFunc = function(){
//     console.log(this);
//     console.log(this.firstName, this.age);
// };
// So in case of myFunc() this refers to window

// instead we can use like this
const myFunc = user1.about.bind(user1);
myFunc();
// function hello(){
//     console.log("hello world");
// }

// hello.call(); // calls the hello function

// call apply bind

// const user1 = {
//     firstName : "harshit",
//     age: 8,
//     about: function(hobby, favMusician){
//         console.log(this.firstName, this.age, hobby, favMusician);
//     }
// }

// const user2 = {
//     firstName : "mohit",
//     age: 9
// }

// user1.about();
// user1.about.call(); // We get undefined for this
// user1.about.call(user2); // In this case the call uses user2 object in "this"
// user1.about.call(user2,"guitar","moazrt");

function about(hobby,favMusician){
    console.log(this.firstName, this.age,hobby,favMusician);
}

const user1 = {
    firstName : "harshit",
    age: 8
}

const user2 = {
    firstName : "mohit",
    age: 9
}

about.call(user1,"guitar","moazrt");
about.call(user2,"guitar","moazrt"); // In this user2 is taken for this

//apply
//apply works similar to call
// about.apply(user1,["guitar","bach"]);

// bind 
// Returns a function
const func = about.bind(user1,"guitar","bach");
func();
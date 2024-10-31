// how to iterate object
const person = {
    name: "harshit",
    age: 22,
    "person hobbies": ["guitar","sleeeping","listening"] // Here we have to use string for key
};

// Two ways to run the loop
// for in loop
// Object.keys

// for(let key in person){
//     // console.log(key,"->",person[key]); // dot notation like person.name will not work properly for "person hobbies"
//     // console.log(`${key} : ${person[key]}`); // Using template string
//     console.log(key,":",person[key]);
// }

console.log(Object.keys(person)); // Gives array of keys
console.log(typeof (Object.keys(person))); // Gives object
const val = Array.isArray((Object.keys(person))); // Gives true
console.log(val); // true

for(let key of Object.keys(person)){
    console.log(key,"->",person[key]);
}


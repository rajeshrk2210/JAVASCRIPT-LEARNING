// difference between dot and bracket notation

const person = {
    name: "harshit",
    age: 22,
    "person hobbies": ["guitar","sleeeping","listening"] // Here we have to use string for key
};

// console.log(person.person hobbies); // this will throw error in such case use bracket notation
// console.log(person["person hobbies"]);
const key = "email";
person.key = "harshitvashisth@gmail.com"; // This will make the "key" as key instead of "email"
console.log(person);
person[key] = "harshitvashisth@gmail.com"; // This will make the "email" as key

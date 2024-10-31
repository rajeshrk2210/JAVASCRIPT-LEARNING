// for in loop in array
const fruits = ["apple","mango","grapes","fruit4"];
const fruits2 = [];

for(let index in fruits){
    console.log(index);
    fruits2.push(fruits[index].toUpperCase());
}

console.log(fruits2);
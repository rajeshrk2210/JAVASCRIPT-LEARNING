// intro to for loop
// print 0 to 9

// for(let i = 0;i <=9; i++){  // i can be placed outside to make it accessible
//     console.log(i);    // i exists inside this loop only
// }

// console.log(i); //Throws error as i does not exist outside the for loop here

for(var j = 0;j <= 9; j++){
    console.log(j);    
}

console.log("value of j is", j); // Where as in case of var the variable j is accessible outside the loop
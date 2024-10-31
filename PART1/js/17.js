// nested if else

// winning number 19

// 19 your guess is right
// 17 too low
// 20 too high

let winningNumber = 19;
// let userGuess = prompt("Guess a number"); // prompt gets input in string format
// "12"
let userGuess = +prompt("Guess a number"); // + makes the string to number
console.log(typeof userGuess, userGuess);

// if(userGuess === winningNumber){
//     console.log("Your guess is right!!");
// }else{
//     console.log("Your guess is wrong!!!");
// }

if(userGuess === winningNumber){
    console.log("Your guess is right!!");
}else{
    if(userGuess < winningNumber){
        console.log("too Low!!!");
    }else{
        console.log("too High!!!");
    }
}
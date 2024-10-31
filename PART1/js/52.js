// rest parameters

// function myFunc(a,b,c,...d){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is ${c}`);
//     console.log(`d is ${d}`,typeof d);
// }

// myFunc(3,4,5,6,7,8,9);

// function addAll(...numbers){ // numbers will be an array
//     console.log(numbers);
//     console.log(Array.isArray(numbers));
// };

// addAll(1,2,3,4,5);

function addAll(...numbers){
    let total = 0;
    for(let number of numbers){
        total = total + number;
    }
    return total;
}

const ans = addAll(1,2,3,4,5);
console.log(ans);
// Program Structure
let ten = 10;
console.log(ten * ten);
// → 100

let mood = "light";
console.log(mood);
// → light
mood = "dark";
console.log(mood);
// → dark

let luigisDebt = 140;
luigisDebt = luigisDebt - 35;
console.log(luigisDebt);
// → 105

let one = 1,
    two = 2;
console.log(one + two);
// → 3

var name = "Ayda";
const greeting = "Hello ";
console.log(greeting + name);
// → Hello Ayda

console.log(Math.max(2, 4));
// → 4

console.log(Math.min(2, 4) + 100);
// → 102

let number = 0;
while (number <= 12) {
    console.log(number);
    number = number + 2;
}
// → 0
// → 2
//   … etcetera

// This is the code that computes 210 using for instead of while:

let result = 1;
for (let counter = 0; counter < 10; counter = counter + 1) {
    result = result * 2;
}
console.log(result);
// → 1024
// Here's how result evolves inside the loop:

// 1st iteration: result is 1 * 2 = 2
// 2nd iteration: result (which is now 2) * 2 = 4
// 3rd iteration: result (which is now 4) * 2 = 8
// 4th iteration: result (which is now 8) * 2 = 16
// 5th iteration: result (which is now 16) * 2 = 32
// 6th iteration: result (which is now 32) * 2 = 64
// 7th iteration: result (which is now 64) * 2 = 128
// 8th iteration: result (which is now 128) * 2 = 256
// 9th iteration: result (which is now 256) * 2 = 512
// 10th iteration: result (which is now 512) * 2 = 1024

// This program illustrates the break statement. It finds the first number that is both greater than or equal to 20 and divisible by 7.
for (let current = 20; ; current = current + 1) {
    if (current % 7 == 0) {
        console.log(current);
        break;
    }
}
// → 21

for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
        console.log("FizzBuzz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else {
        console.log(i);
    }
} //

function grid(size) {
    let board = "";
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if ((i + j) % 2 === 0) {
                board += " ";
            } else {
                board += "#";
            }
        }
        board += "\n";
    }
    return board;
}
console.log(grid(8));

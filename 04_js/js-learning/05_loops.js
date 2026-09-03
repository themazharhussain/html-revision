//Loops can execute a block of code a number of times.
//Loops are fundamental for tasks like performing an action multiple times.


/*
 
for (exp 1; exp 2; exp 3) {
  // code block to be executed
}


let count = 0
while (condition) {
    statement
    increment/decrement


 */




// console.log("1")
// console.log("2")
// console.log("3")
// console.log("4")
// console.log("5")
// console.log("6")
// console.log("7")
// console.log("8")
// console.log("9")
// console.log("10")


//For Loop


// i++ => i+1
for (let i = 1; i <= 10; i++) {
  //console.log(i)
}


// Break
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    //console.log(i)
    break; // It will break the loop and stop it when i becomes 5
  }

  // console.log(i)
}


for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    // console.log("I inside if", i)
    continue; // It will say loop please don't run the code for this value
  }

  //console.log(i)
}

// While Loop

let i = 1;
while (i <= 10) {
  // console.log(i);
  i++;
}


// Do while loop

// It will excecute statement atleast once
let j = 11

do {
  // console.log(j)
} while (j <= 10) {
  j++
}


for (let i = 1; i <= 50; i++) {
  if (i % 2 === 0) {
    console.log(i)
  }
}

// Js array example for future 

// const students = ["Faiqa", "Amber", "Hadiqa"]

// for (let i = 0; i <= 2; i++) {
//   console.log(students[i])
// }



// -------------------------------------------------------
// Exercise 1
// -------------------------------------------------------
// Use a for loop to print numbers from 1 to 20.

// Write your code here


// -------------------------------------------------------
// Exercise 2
// -------------------------------------------------------
// Use a for loop to print numbers from 20 down to 1.

// Write your code here


// -------------------------------------------------------
// Exercise 3
// -------------------------------------------------------
// Print the multiplication table of any number from 1 to 10 using a for loop and template literals.

// Write your code here


// -------------------------------------------------------
// Exercise 4
// -------------------------------------------------------
// Use a for loop to print all odd numbers from 1 to 50.

// Write your code here


// -------------------------------------------------------
// Exercise 5
// -------------------------------------------------------
// Use a for loop to calculate and print the sum of all numbers from 1 to 100.

// Write your code here


// -------------------------------------------------------
// Exercise 6
// -------------------------------------------------------
// Use a while loop to print a countdown from 10 to 1, then print "Blast off".

// Write your code here


// -------------------------------------------------------
// Exercise 7
// -------------------------------------------------------
// Use a while loop that starts at 1 and keeps doubling the number, printing each step, until it goes above 1000.

// Write your code here


// -------------------------------------------------------
// Exercise 8
// -------------------------------------------------------
// Use a loop with break. Print numbers starting from 1, but stop the loop as soon as you reach 7.

// Write your code here


// -------------------------------------------------------
// Exercise 9
// -------------------------------------------------------
// Use a loop with continue. Print numbers from 1 to 15 but skip every multiple of 3.

// Write your code here


// -------------------------------------------------------
// Exercise 10
// -------------------------------------------------------
// Write FizzBuzz. Print numbers 1 to 30. For multiples of 3 print Fizz, for multiples of 5 print Buzz, for multiples of both print FizzBuzz, otherwise print the number.

// Write your code here
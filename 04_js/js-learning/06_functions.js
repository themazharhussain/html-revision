// A function is a reusable block of code. You write it once and use it as many times as you want. Functions keep code organized and avoid repetition.

//https://www.w3schools.com/js/js_functions.asp



const price1 = 1000
const discount1 = price1 * 0.1
console.log(`Discount: Rs ${discount1}`)

const price2 = 5000
const discount2 = price2 * 0.1
console.log(`Discount: Rs ${discount2}`)

const price3 = 8000
const discount3 = price3 * 0.1
console.log(`Discount: Rs ${discount3}`)

const price4 = 10000
const discount4 = price4 * 0.1
console.log(`Discount: Rs ${discount4}`)


// The same calculation is written three times. If the discount rule changes, you fix three places. A function solves this.

function calculateDiscount(price) {
    const discount = price * 0.1
    return discount
}

calculateDiscount(1000)
console.log(calculateDiscount(1000))
console.log(calculateDiscount(5000))
console.log(calculateDiscount(8000))


/* 

function nameOfFunction(parameter1,parameter2) {
  statements

  return value
 }


 nameOfFunction(argument1,argument2)

*/
//call
console.log(showWelcomeMessage("Faiqa"))
//Define
function showWelcomeMessage(userName) {
    // const message = `Hey ${userName}, Welcome to my website`
    // return message

    return `Hey ${userName}, Welcome to my website`
}



const addition = function (x, y) {
    // const sum = x + y
    // return sum
    return x + y
}

console.log(addition(5, 6))




function getGrade(marks) {
    if (marks >= 90) {
        return "A"
    } else if (marks >= 80) {
        return "B"
    } else if (marks >= 70) {
        return "C"
    } else {
        return "Fail"
    }
}

console.log(getGrade(90))


// Arrow functions

const subtractNumber = (a, b) => {
    return a - b
}

console.log(subtractNumber(100, 200))

const multiplyNumber = (a, b) => a * b

console.log(multiplyNumber(10, 5))


//Curly brackets here are called scope
const divideNumber = (a, b) => {
    return a / b
}

console.log(divideNumber(50, 5))



function welcomeMessage() {
    return `Welcome back`
}


console.log(welcomeMessage())


// Exercise 1
// -------------------------------------------------------
// Write a function that takes a name and prints a greeting. Call it three times with different names.

// Write your code here


// -------------------------------------------------------
// Exercise 2
// -------------------------------------------------------
// Write a function that takes two numbers and returns their sum. Store the result in a variable and print it.

// Write your code here


// -------------------------------------------------------
// Exercise 3
// -------------------------------------------------------
// Write a function that returns the area of a rectangle given width and height. Test it with a few values.

// Write your code here


// -------------------------------------------------------
// Exercise 4
// -------------------------------------------------------
// Write a function that returns true if a number is even and false if odd. Test it with several numbers.

// Write your code here


// -------------------------------------------------------
// Exercise 5
// -------------------------------------------------------
// Write a function that returns the bigger of two numbers. Test it.

// Write your code here


// -------------------------------------------------------
// Exercise 6
// -------------------------------------------------------
// Write a function with a default parameter. It greets a user, and if no greeting is given, it uses "Hello" by default.

// Write your code here


// -------------------------------------------------------
// Exercise 7
// -------------------------------------------------------
// Rewrite the rectangle area function and the even number function as arrow functions.

// Write your code here


// -------------------------------------------------------
// Exercise 8
// -------------------------------------------------------
// Write a function that takes a number and returns the sum of all numbers from 1 to that number, using a loop inside.

// Write your code here


// -------------------------------------------------------
// Exercise 9
// -------------------------------------------------------
// Write a function that takes marks and returns a grade using if else inside. Test with several mark values.

// Write your code here


// -------------------------------------------------------
// Exercise 10
// -------------------------------------------------------
// Build a calculator. Write separate arrow functions for add, subtract, multiply, and divide. Then write one function called calculate that takes an operation name and two numbers and calls the right function. Handle divide by zero by returning a message.

// Write your code here

const add = (a, b) => {
    return a + b
}
const subtract = (a, b) => {
    return a - b
}
const multiply = (a, b) => {
    return a * b
}
const divide = (a, b) => {

    if (b === 0) return "Division by zero is not possible"
    return a / b
}

const calculate = (operation, x, y) => {

    if (operation === "addition") {
        return add(x, y)
    }
    if (operation === "subtraction") {
        return subtract(x, y)
    }
    if (operation === "multiplication") {
        return multiply(x, y)
    }
    if (operation === "division") {
        return divide(x, y)
    }
}

console.log(calculate("addition", 100, 50))
console.log(calculate("division", 100, 0))

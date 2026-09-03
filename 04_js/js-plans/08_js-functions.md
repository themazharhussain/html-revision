# Functions

A function is a reusable block of code. You write it once and use it as many times as you want. Functions keep code organized and avoid repetition.

---

## Why Functions Exist

Look at this repeated code.

```javascript
const price1 = 1000
const discount1 = price1 * 0.1
console.log(`Discount: Rs ${discount1}`)

const price2 = 5000
const discount2 = price2 * 0.1
console.log(`Discount: Rs ${discount2}`)

const price3 = 8000
const discount3 = price3 * 0.1
console.log(`Discount: Rs ${discount3}`)
```

The same calculation is written three times. If the discount rule changes, you fix three places. A function solves this.

```javascript
function calculateDiscount(price) {
    return price * 0.1
}

console.log(calculateDiscount(1000))
console.log(calculateDiscount(5000))
console.log(calculateDiscount(8000))
```

Write the logic once, use it everywhere. Change the rule in one place.

---

## Function Declaration

The most common way to write a function.

```javascript
function greet(name) {
    console.log(`Hello ${name}, welcome`)
}

greet("Ahmed")
greet("Sara")
greet("Ali")
```

The keyword function starts it. greet is the name. name inside the parentheses is a parameter, a placeholder for a value. The code in the braces runs when the function is called. greet("Ahmed") calls it and passes "Ahmed" as the argument.

A parameter is the name in the definition. An argument is the real value you pass in.

---

## return

return sends a value back so the rest of your program can use it.

```javascript
function addNumbers(a, b) {
    return a + b
}

const result = addNumbers(5, 3)
console.log(result)              // 8
console.log(addNumbers(100, 200)) // 300
```

There is an important difference between printing and returning.

```javascript
function addAndPrint(a, b) {
    console.log(a + b)     // only prints
}

function addAndReturn(a, b) {
    return a + b           // sends value back
}

const sum = addAndReturn(5, 3)
const doubled = sum * 2      // we can use the returned value
console.log(doubled)         // 16

const sum2 = addAndPrint(5, 3)  // prints 8 but returns nothing
console.log(sum2)               // undefined
```

A function without return gives undefined. If you want to use the result later, you must return it.

---

## Multiple Parameters

A function can take several inputs.

```javascript
function calculateBill(price, quantity, discountPercent) {
    const subtotal = price * quantity
    const discount = (subtotal * discountPercent) / 100
    const total = subtotal - discount
    return total
}

console.log(calculateBill(500, 3, 10))
```

---

## Default Parameters

You can give a parameter a default value used when no value is passed.

```javascript
function greetUser(name, greeting = "Hello") {
    console.log(`${greeting} ${name}`)
}

greetUser("Ahmed")             // Hello Ahmed
greetUser("Sara", "Welcome")   // Welcome Sara
```

---

## Arrow Functions

A shorter, modern way to write functions. First the same function both ways.

```javascript
// Regular
function multiply(a, b) {
    return a * b
}

// Arrow, same thing
const multiply = (a, b) => {
    return a * b
}
```

When the function is just one return line, you can remove the braces and the return word.

```javascript
const multiply = (a, b) => a * b
console.log(multiply(4, 5))   // 20
```

When there is only one parameter, the parentheses are optional.

```javascript
const double = number => number * 2
const square = n => n * n
const greet = name => `Hello ${name}`

console.log(double(5))     // 10
console.log(square(6))     // 36
console.log(greet("Ali"))  // Hello Ali
```

More examples.

```javascript
const isEven = n => n % 2 === 0
const addTax = price => price * 1.17

console.log(isEven(8))      // true
console.log(addTax(1000))   // 1170
```

Both regular and arrow functions do the same job. Arrow functions are shorter and used a lot in modern code. Recognize both.

---

## Functions With Loops and Conditionals

Functions can contain everything you have learned.

A function with a loop inside.

```javascript
function printTable(number) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`)
    }
}

printTable(7)
```

A function with conditionals inside.

```javascript
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

console.log(getGrade(95))   // A
console.log(getGrade(75))   // C
```

---

## Functions Calling Functions

Real programs are built by small functions using other functions.

```javascript
const calculateTax = (amount) => amount * 0.17
const calculateDiscount = (amount, percent) => (amount * percent) / 100

const finalBill = (price, quantity, discountPercent) => {
    const subtotal = price * quantity
    const discount = calculateDiscount(subtotal, discountPercent)
    const afterDiscount = subtotal - discount
    const tax = calculateTax(afterDiscount)
    return afterDiscount + tax
}

console.log(finalBill(1000, 3, 10))
```

Each small function does one job. Bigger functions combine them. This keeps code organized and easy to fix.

---

## Quick Reference

```javascript
// declaration
function greet(name) {
    return `Hello ${name}`
}

// arrow
const greet = (name) => `Hello ${name}`
const double = n => n * 2
const add = (a, b) => a + b

// return sends a value back
// without return you get undefined

// default parameter
function greet(name, greeting = "Hello") { }
```

console.log only prints. return sends the value back so you can use it. This is the most important idea about functions.

---

# Exercises

Copy the block below into a .js file and write your code under each exercise.

```javascript
// -------------------------------------------------------
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


```

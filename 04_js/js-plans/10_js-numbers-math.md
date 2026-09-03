# Numbers and Math

JavaScript has one number type for whole numbers and decimals. It also provides number methods and a Math object full of useful tools for rounding, powers, and random numbers.

---

## Number Basics

```javascript
const whole = 42
const decimal = 3.14
const negative = -10

console.log(whole + decimal)   // 45.14
console.log(typeof whole)      // "number"
```

There are a few special number values.

```javascript
console.log(10 / 0)     // Infinity
console.log(-10 / 0)    // -Infinity
console.log(0 / 0)      // NaN
console.log("abc" * 2)  // NaN
```

NaN means Not a Number. It appears when a math operation fails.

---

## toFixed for Decimal Places

toFixed rounds a number to a set number of decimal places. It is very useful for money. Note it returns a string.

```javascript
const price = 3.14159

console.log(price.toFixed(2))   // "3.14"
console.log(price.toFixed(0))   // "3"
console.log(price.toFixed(4))   // "3.1416"
```

---

## Checking Numbers

```javascript
console.log(Number.isInteger(42))     // true
console.log(Number.isInteger(3.14))   // false
console.log(Number.isNaN(NaN))        // true
console.log(Number.isNaN(42))         // false
```

---

## The Math Object

The Math object holds many useful tools. You do not create it, you just use it.

### Rounding

```javascript
console.log(Math.round(4.5))   // 5, nearest
console.log(Math.round(4.4))   // 4, nearest
console.log(Math.floor(4.9))   // 4, always down
console.log(Math.ceil(4.1))    // 5, always up
console.log(Math.trunc(4.9))   // 4, just removes the decimal
```

round goes to the nearest whole number. floor always goes down, like the floor of a room. ceil always goes up, like the ceiling.

### Other Useful Methods

```javascript
console.log(Math.abs(-5))       // 5, absolute value
console.log(Math.max(1, 5, 3))  // 5, biggest
console.log(Math.min(1, 5, 3))  // 1, smallest
console.log(Math.pow(2, 10))    // 1024, power
console.log(Math.sqrt(16))      // 4, square root
console.log(Math.PI)            // 3.14159...
```

---

## Random Numbers

Math.random gives a random decimal from 0 up to almost 1.

```javascript
console.log(Math.random())   // 0.3728... different every time
```

To get a whole number in a range, use this formula.

```javascript
// Random number between 1 and 10
const random = Math.floor(Math.random() * 10) + 1
console.log(random)
```

Step by step. Math.random gives 0 to almost 1. Times 10 gives 0 to almost 10. Math.floor removes the decimal, giving 0 to 9. Plus 1 shifts it to 1 to 10.

A reusable function for any range.

```javascript
function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

console.log(randomBetween(1, 100))   // 1 to 100
console.log(randomBetween(50, 60))   // 50 to 60
```

A dice roll.

```javascript
const dice = Math.floor(Math.random() * 6) + 1
console.log(`You rolled a ${dice}`)
```

This random formula is used in games, quizzes, and anywhere you need randomness.

---

## The Floating Point Problem

Some decimals cannot be stored perfectly by a computer.

```javascript
console.log(0.1 + 0.2)            // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3)   // false
```

This looks like a bug but it is not. It happens in most programming languages because computers store decimals in binary. For money and important decimals, use toFixed to fix it.

```javascript
const result = 0.1 + 0.2
console.log(result.toFixed(2))            // "0.30"
console.log(Number(result.toFixed(2)))    // 0.3 as a number
```

---

## Quick Reference

```javascript
// number methods
(3.14159).toFixed(2)   // "3.14"
Number.isInteger(42)   // true
Number.isNaN(NaN)      // true

// rounding
Math.round(4.5)   // 5, nearest
Math.floor(4.9)   // 4, down
Math.ceil(4.1)    // 5, up

// math tools
Math.abs(-5)        // 5
Math.max(1, 5, 3)   // 5
Math.min(1, 5, 3)   // 1
Math.pow(2, 10)     // 1024
Math.sqrt(16)       // 4

// random in a range
Math.floor(Math.random() * (max - min + 1)) + min

// floating point fix
(0.1 + 0.2).toFixed(2)   // "0.30"
```

---

# Exercises

Copy the block below into a .js file and write your code under each exercise.

```javascript
// -------------------------------------------------------
// Exercise 1
// -------------------------------------------------------
// Create a decimal number. Print it rounded to the nearest whole number, rounded up, and rounded down.

// Write your code here


// -------------------------------------------------------
// Exercise 2
// -------------------------------------------------------
// Take the number 3.14159 and print it with exactly two decimal places using toFixed.

// Write your code here


// -------------------------------------------------------
// Exercise 3
// -------------------------------------------------------
// Use Math.max and Math.min to find the biggest and smallest of these three numbers: 45, 82, 67.

// Write your code here


// -------------------------------------------------------
// Exercise 4
// -------------------------------------------------------
// Check whether the numbers 10, 3.5, and 100 are integers using Number.isInteger.

// Write your code here


// -------------------------------------------------------
// Exercise 5
// -------------------------------------------------------
// Print the absolute value of negative 25. Print 2 to the power of 8. Print the square root of 144.

// Write your code here


// -------------------------------------------------------
// Exercise 6
// -------------------------------------------------------
// Print a random decimal using Math.random. Run it a few times and notice it changes.

// Write your code here


// -------------------------------------------------------
// Exercise 7
// -------------------------------------------------------
// Write the formula to get a random whole number between 1 and 6, like a dice roll. Print a few rolls.

// Write your code here


// -------------------------------------------------------
// Exercise 8
// -------------------------------------------------------
// Write a function called randomBetween that takes a min and max and returns a random whole number in that range. Test it with 1 to 100 and 500 to 600.

// Write your code here


// -------------------------------------------------------
// Exercise 9
// -------------------------------------------------------
// Show the floating point problem by printing 0.1 plus 0.2. Then fix it using toFixed so it shows 0.30.

// Write your code here


// -------------------------------------------------------
// Exercise 10
// -------------------------------------------------------
// Build a simple dice game. Roll two dice for player one and print the total. Roll two dice for player two and print the total. Compare the totals and print who won or if it is a tie.

// Write your code here


```

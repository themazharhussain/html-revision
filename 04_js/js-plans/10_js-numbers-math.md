# JavaScript — Numbers and Math Object

**Duration:** 3 hours
**Roadmap position:** Day 7
**Today's goal:** Students work with numbers, use number methods, and use the Math object for rounding and random numbers.

---

# PART 1 — Your Preparation (Night Before)

**Practice this yourself:**

```javascript
console.log((3.14159).toFixed(2))    // "3.14"
console.log(Math.round(4.6))          // 5
console.log(Math.floor(4.9))          // 4
console.log(Math.random())            // random 0 to 1
console.log(Math.max(1, 5, 3))        // 5
```

**Things you must know clearly:**

Number methods: toFixed, Number.isInteger, Number.isNaN
Math methods: round, floor, ceil, abs, max, min, random, pow, sqrt
Random number formula:

```javascript
Math.floor(Math.random() * (max - min + 1)) + min
```

The floating point problem:

```javascript
0.1 + 0.2   // 0.30000000000000004 not exactly 0.3
```

**Questions students will ask — your answers:**

"Why is 0.1 plus 0.2 not exactly 0.3?"
Computers store decimals in binary and some decimals cannot be stored perfectly. This causes tiny errors. It is not a JavaScript bug, it happens in most languages. When you need exact decimals like money, use toFixed to round to 2 places.

"What is the difference between round, floor, and ceil?"
round goes to the nearest whole number. floor always goes down. ceil always goes up. Math.round(4.5) is 5, Math.floor(4.9) is 4, Math.ceil(4.1) is 5.

"How do I get a random number in a range?"
Math.random gives a decimal between 0 and 1. To get a range, multiply and use Math.floor. The formula is Math.floor(Math.random() times the size of the range) plus the minimum. We will practice this today.

---

# PART 2 — The Class

## Step 1 — Homework Check (10 minutes)

Check email-checker.js. String methods used correctly? Username and domain extracted? One good thing, one improve.

## Step 2 — Number Basics (15 minutes)

```javascript
const whole = 42
const decimal = 3.14
const negative = -10
const big = 1000000

console.log(whole + decimal)   // 45.14
console.log(typeof whole)      // "number"
```

Special values:

```javascript
console.log(10 / 0)     // Infinity
console.log(-10 / 0)    // -Infinity
console.log(0 / 0)      // NaN
console.log("abc" * 2)  // NaN
```

## Step 3 — Number Methods (25 minutes)

toFixed for decimal places:

```javascript
const price = 3.14159

console.log(price.toFixed(2))   // "3.14" returns a string
console.log(price.toFixed(0))   // "3"
console.log(price.toFixed(4))   // "3.1416"
```

Say: "toFixed is very useful for money. It rounds to the number of decimal places you want. Note it returns a string, so convert back to number if you need to do more math."

Checking numbers:

```javascript
console.log(Number.isInteger(42))     // true
console.log(Number.isInteger(3.14))   // false
console.log(Number.isNaN(NaN))        // true
console.log(Number.isNaN(42))         // false
```

## Step 4 — The Math Object (35 minutes)

Rounding:

```javascript
console.log(Math.round(4.5))   // 5 nearest
console.log(Math.round(4.4))   // 4 nearest
console.log(Math.floor(4.9))   // 4 always down
console.log(Math.ceil(4.1))    // 5 always up
console.log(Math.trunc(4.9))   // 4 just removes decimal
```

Say: "round goes to nearest. floor goes down. ceil goes up. Remember floor is the floor so it goes down, ceil is the ceiling so it goes up."

Other useful methods:

```javascript
console.log(Math.abs(-5))       // 5 absolute value
console.log(Math.max(1, 5, 3))  // 5 biggest
console.log(Math.min(1, 5, 3))  // 1 smallest
console.log(Math.pow(2, 10))    // 1024 power
console.log(Math.sqrt(16))      // 4 square root
console.log(Math.PI)            // 3.14159...
```

## BREAK (10 minutes)

## Step 5 — Random Numbers (30 minutes)

Math.random gives a decimal from 0 to almost 1:

```javascript
console.log(Math.random())   // 0.3728... different every time
```

To get a whole number in a range, use this formula:

```javascript
// Random number between 1 and 10
const random = Math.floor(Math.random() * 10) + 1
console.log(random)
```

Explain step by step:

Math.random() gives 0 to almost 1.
Times 10 gives 0 to almost 10.
Math.floor removes the decimal, giving 0 to 9.
Plus 1 shifts it to 1 to 10.

A reusable function:

```javascript
function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

console.log(randomBetween(1, 100))   // 1 to 100
console.log(randomBetween(50, 60))   // 50 to 60
```

Say: "This random formula is used in games, quizzes, and anywhere you need randomness. Save this formula. You will use it in the guessing game project."

Real example, a dice roll:

```javascript
// Random dice roll
const dice = Math.floor(Math.random() * 6) + 1
console.log(`You rolled a ${dice}`)
```

Preview note: later when you learn arrays, you will also use random to pick a random item from a list. For now, focus on random numbers.

## Step 6 — The Floating Point Problem (15 minutes)

```javascript
console.log(0.1 + 0.2)            // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3)   // false
```

Say: "This looks like a bug but it is not. Computers cannot store some decimals perfectly. It happens in most programming languages. For money and important decimals, use toFixed to fix it."

The fix:

```javascript
const result = 0.1 + 0.2
console.log(result.toFixed(2))            // "0.30"
console.log(Number(result.toFixed(2)))    // 0.3 as a number
```

## Step 7 — Student Exercises (25 minutes)

### Exercise 1 — Number Toolkit (15 minutes)

```javascript
const price = 149.99

// Print the price rounded to nearest whole number
// Print the price with exactly 1 decimal place
// Print the price rounded up
// Print the price rounded down
// Check if 149.99 is an integer

// Using Math.max and Math.min with three separate numbers:
// Find the biggest of these three: 45, 82, 67
// Find the smallest of these three: 45, 82, 67
console.log(Math.max(45, 82, 67))
console.log(Math.min(45, 82, 67))
```

### Exercise 2 — Random Generator (10 minutes)

```javascript
// Write a function randomBetween(min, max)
// Use it to:
// Roll a dice (1 to 6)
// Pick a random number from 1 to 100
// Pick a random lottery number from 1000 to 9999
// Pick a random item from an array of your favourite foods
```

## Step 8 — Review (10 minutes)

Check the number toolkit. Rounding correct? Random function working? One good thing, one improve.

## Step 9 — Quiz and Homework (10 minutes)

### Quiz

1. What does toFixed do?
2. Difference between Math.round, Math.floor, Math.ceil?
3. What does Math.random return?
4. Write the formula for a random number between min and max.
5. Why is 0.1 plus 0.2 not exactly 0.3?
6. How do you find the biggest number in a list?

### Homework

Create dice-game.js. Build a simple dice game:

Write the randomBetween function.
Roll two dice for player 1 and print both values and their total.
Roll two dice for player 2 and print both values and their total.
Compare the totals and print who won, or a tie.
Use Math for the random rolls.
Bonus: roll for 3 rounds and track the score.

---

# PART 3 — What We Learned Today

## Number Methods

```javascript
(3.14159).toFixed(2)      // "3.14"
Number.isInteger(42)      // true
Number.isNaN(NaN)         // true
```

## Math Rounding

```javascript
Math.round(4.5)   // 5 nearest
Math.floor(4.9)   // 4 down
Math.ceil(4.1)    // 5 up
```

## Math Methods

```javascript
Math.abs(-5)        // 5
Math.max(1, 5, 3)   // 5
Math.min(1, 5, 3)   // 1
Math.pow(2, 10)     // 1024
Math.sqrt(16)       // 4
```

## Random Number Formula

```javascript
Math.floor(Math.random() * (max - min + 1)) + min
```

## Floating Point Fix

```javascript
0.1 + 0.2              // 0.30000000000000004
(0.1 + 0.2).toFixed(2) // "0.30"
```

---

# PART 4 — After Class Notes

1. Did the random formula make sense?
2. Is round vs floor vs ceil clear?
3. Did the floating point issue confuse them?
4. Are they ready for the guessing game project soon?

# JavaScript — Functions

**Duration:** 3 hours
**Roadmap position:** After Loops, before String Methods
**Today's goal:** Students write reusable blocks of code using function declarations and arrow functions.

**Already taught:** variables, data types, operators, conditionals, loops, template literals
**Not yet taught:** arrays, objects. Do not use these in examples today.

---

# PART 1 — Your Preparation (Night Before)

**Practice this yourself:**

```javascript
function greet(name) {
    return `Hello ${name}`
}
console.log(greet("Ahmed"))

const add = (a, b) => a + b
console.log(add(5, 3))
```

**Things you must know clearly:**

Function declaration:

```javascript
function name(parameters) {
    return something
}
```

Arrow function:

```javascript
const name = (parameters) => something
```

return sends a value back. Without return, the function gives undefined.
Parameters are the names in the definition. Arguments are the real values passed in.

**Questions students will ask — your answers:**

"What is the difference between a parameter and an argument?"
A parameter is the name in the function definition like function greet(name). An argument is the real value you pass like greet("Ahmed"). name is the parameter, "Ahmed" is the argument.

"What is the difference between console.log and return?"
console.log just prints to the screen. return sends a value back so the rest of your program can use it. A function that only prints cannot be used in calculations. A function that returns can.

"When do I use regular vs arrow functions?"
Both work the same for now. Arrow functions are shorter and more modern. Most developers use arrow functions today. We use both so you recognize both.

---

# PART 2 — The Class

## Step 1 — Homework Check (10 minutes)

Check number-tasks.js. Loops working? Countdown correct? While doubling working? One good thing, one improve.

## Step 2 — Why Functions Exist (15 minutes)

Show the problem. Messy repeated code:

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

Say: "We wrote the same calculation three times. If the discount rule changes we fix three places. This is bad. Functions solve this."

The clean way:

```javascript
function calculateDiscount(price) {
    return price * 0.1
}

console.log(calculateDiscount(1000))
console.log(calculateDiscount(5000))
console.log(calculateDiscount(8000))
```

Say: "Write the logic once. Use it as many times as you want. Change the rule in one place. This is the power of functions. Write once, use everywhere."

## Step 3 — Function Declaration (30 minutes)

Most common way:

```javascript
function greet(name) {
    console.log(`Hello ${name}, welcome`)
}

greet("Ahmed")
greet("Sara")
greet("Ali")
```

Explain: function is the keyword, greet is the name, name is the parameter, the code in braces runs when called, greet("Ahmed") calls it and passes "Ahmed" as the argument.

return sends a value back:

```javascript
function addNumbers(a, b) {
    return a + b
}

const result = addNumbers(5, 3)
console.log(result)          // 8
console.log(addNumbers(100, 200))  // 300
```

The difference between console.log and return:

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

const sum2 = addAndPrint(5, 3)  // prints 8 but sum2 is undefined
console.log(sum2)               // undefined
```

Say: "A function without return gives undefined. If you want to use the result, you must return it. This is one of the most important ideas in functions."

Multiple parameters and using conditionals inside:

```javascript
function calculateBill(price, quantity, discountPercent) {
    const subtotal = price * quantity
    const discount = (subtotal * discountPercent) / 100
    const total = subtotal - discount
    return total
}

console.log(calculateBill(500, 3, 10))
```

Default parameters:

```javascript
function greetUser(name, greeting = "Hello") {
    console.log(`${greeting} ${name}`)
}

greetUser("Ahmed")             // Hello Ahmed
greetUser("Sara", "Welcome")   // Welcome Sara
```

## Step 4 — Arrow Functions (30 minutes)

Same function both ways:

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

Shorter when only one return line:

```javascript
const multiply = (a, b) => a * b
console.log(multiply(4, 5))   // 20
```

One parameter, parentheses optional:

```javascript
const double = number => number * 2
const square = n => n * n
const greet = name => `Hello ${name}`

console.log(double(5))     // 10
console.log(square(6))     // 36
console.log(greet("Ali"))  // Hello Ali
```

More examples using what they know:

```javascript
const isEven = n => n % 2 === 0
const addTax = price => price * 1.17

console.log(isEven(8))      // true
console.log(isEven(7))      // false
console.log(addTax(1000))   // 1170
```

Say: "Arrow functions are shorter and modern. Both do the same job. Recognize both because real code uses both."

## BREAK (10 minutes)

## Step 5 — Functions With Loops and Conditionals (25 minutes)

Now combine functions with loops and conditionals they already know.

A function with a loop inside:

```javascript
function printTable(number) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`)
    }
}

printTable(7)
printTable(9)
```

A function with conditionals inside:

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
console.log(getGrade(40))   // Fail
```

Functions calling functions:

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

Say: "See how functions use loops, conditionals, and other functions inside them. This is how real programs are built. Small functions each do one job. Bigger functions combine them."

## Step 6 — Student Exercises (25 minutes)

### Exercise 1 — Basic Functions (12 minutes)

```javascript
// Write and test these:

// Returns area of a rectangle
function rectangleArea(width, height) { }

// Returns true if even, false if odd
function isEven(number) { }

// Returns the bigger of two numbers
function findMax(a, b) { }

// Returns a greeting based on hour
// 5-11 Good Morning, 12-16 Good Afternoon, 17-20 Good Evening, else Good Night
function getGreeting(hour) { }

// Test all four
```

### Exercise 2 — Function With Loop (8 minutes)

```javascript
// Write a function sumUpTo(n) that returns the sum of all numbers from 1 to n
// Use a loop inside
// sumUpTo(5) should return 15 (1+2+3+4+5)
// Test with 10 and 100
```

### Exercise 3 — Convert to Arrow (5 minutes)

Rewrite rectangleArea and isEven as arrow functions.

## Step 7 — Review (10 minutes)

Check basic functions. Do they return, not just print? Arrow versions work? One good thing, one improve.

## Step 8 — Quiz and Homework (10 minutes)

### Quiz

1. Difference between a parameter and an argument?
2. What does return do? What happens without it?
3. Difference between console.log and return inside a function?
4. Write an arrow function that doubles a number.
5. What is a default parameter?
6. Can a function have a loop inside it?

### Homework

Create calculator.js. Write these as arrow functions:

```javascript
const add = (a, b) => 
const subtract = (a, b) => 
const multiply = (a, b) => 
const divide = (a, b) =>    // if b is 0 return "Cannot divide by zero"
const power = (base, exp) => 
const percentage = (value, percent) => 
```

Then a main function:

```javascript
const calculate = (operation, a, b) => {
    // use if else or switch to call the right function
}

console.log(calculate("add", 10, 5))       // 15
console.log(calculate("multiply", 4, 3))   // 12
console.log(calculate("divide", 20, 0))    // Cannot divide by zero
```

---

# PART 3 — What We Learned Today

## Function Declaration

```javascript
function greet(name) {
    return `Hello ${name}`
}
```

## Arrow Function

```javascript
const greet = (name) => `Hello ${name}`
const double = n => n * 2
const add = (a, b) => a + b
```

## return

```javascript
function add(a, b) {
    return a + b
}
const sum = add(5, 3)   // 8
```

Without return, the function gives undefined.

## console.log vs return

console.log only prints. return sends the value back to use.

## Default Parameters

```javascript
function greet(name, greeting = "Hello") {
    return `${greeting} ${name}`
}
```

## Functions With Loops and Conditionals

```javascript
function getGrade(marks) {
    if (marks >= 90) return "A"
    return "Fail"
}
```

Functions can contain loops, conditionals, and call other functions.

---

# PART 4 — After Class Notes

1. Do they understand return vs console.log? Most important concept today.
2. Comfortable with arrow functions?
3. Did functions with loops inside make sense?
4. Ready for string and number methods next, then the guessing game project?

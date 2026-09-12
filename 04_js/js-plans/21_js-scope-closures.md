# Scope, Hoisting, and Closures

Scope is about where your variables can be seen and used. Hoisting is about how JavaScript reads your code before running it. Closures are about functions remembering the variables around them. These three ideas explain a lot of JavaScript behavior.

---

## What Scope Means

Scope decides where a variable is available. A variable created in one place may not be reachable from another place.

There are three kinds of scope: global, function, and block.

---

## Global Scope

A variable created outside any function or block is global. It can be used anywhere.

```javascript
const siteName = "My Shop"

function showName() {
    console.log(siteName)   // can see it
}

showName()             // My Shop
console.log(siteName)  // My Shop, also visible here
```

Global variables are visible everywhere. Use them carefully, because too many globals make code hard to manage.

---

## Function Scope

A variable created inside a function only exists inside that function. Outside, it does not exist.

```javascript
function calculate() {
    const result = 100
    console.log(result)   // 100, works here
}

calculate()
// console.log(result)   error, result is not defined out here
```

result lives only inside calculate. Once the function finishes, it is gone. This is good. It keeps functions self contained.

---

## Block Scope

A block is any code inside curly braces, like an if or a loop. Variables made with let and const inside a block only exist in that block.

```javascript
if (true) {
    const message = "Hello"
    console.log(message)   // Hello
}

// console.log(message)   error, message only exists in the if block
```

```javascript
for (let i = 0; i < 3; i++) {
    console.log(i)   // works, i exists in the loop
}
// console.log(i)   error, i only exists in the loop
```

This is one reason we use let and const instead of var. var does not respect block scope, which causes bugs.

---

## Nested Scope

An inner function can see variables from the function around it, but not the other way round.

```javascript
function outer() {
    const outerValue = "I am outside"

    function inner() {
        const innerValue = "I am inside"
        console.log(outerValue)   // works, inner can see outer
        console.log(innerValue)   // works
    }

    inner()
    // console.log(innerValue)   error, outer cannot see inner
}

outer()
```

Inner functions look outward for variables. Outer functions cannot look inward. This is the foundation of closures below.

---

## Hoisting

Before running your code, JavaScript scans it and moves function declarations to the top. This is called hoisting. It means you can call a function declared with the function keyword before it appears in the code.

```javascript
sayHello()   // works, even though defined below

function sayHello() {
    console.log("Hello")
}
```

But this does not work with functions stored in const or let, or with arrow functions.

```javascript
// sayHi()   error, cannot use before it is defined

const sayHi = () => {
    console.log("Hi")
}

sayHi()   // works here
```

Variables made with let and const are also affected. You cannot use them before the line that creates them.

The simple rule to follow. Define things before you use them. Do not rely on hoisting. It exists, but clean code puts definitions first.

---

## Closures

A closure is a function that remembers the variables from where it was created, even after that outer function has finished. This sounds abstract, so here is the classic example.

```javascript
function makeCounter() {
    let count = 0

    return function() {
        count = count + 1
        return count
    }
}

const counter = makeCounter()

console.log(counter())   // 1
console.log(counter())   // 2
console.log(counter())   // 3
```

Here is what is happening. makeCounter creates a variable count and returns an inner function. Even after makeCounter has finished running, the inner function still remembers count. Each time you call counter, it uses and updates that same remembered count.

The inner function closed over the count variable. That is why it is called a closure.

---

## Why Closures Are Useful

Closures let you create private data that only certain functions can touch.

```javascript
function createBankAccount(startingBalance) {
    let balance = startingBalance

    return {
        deposit(amount) {
            balance = balance + amount
            return balance
        },
        withdraw(amount) {
            if (amount > balance) {
                return "Not enough funds"
            }
            balance = balance - amount
            return balance
        },
        getBalance() {
            return balance
        }
    }
}

const account = createBankAccount(1000)

console.log(account.deposit(500))    // 1500
console.log(account.withdraw(200))   // 1300
console.log(account.getBalance())    // 1300

// balance cannot be touched directly from outside
console.log(account.balance)   // undefined
```

The balance variable is hidden. The only way to change it is through the returned methods. This is a powerful pattern for protecting data.

---

## Another Closure Example

Making custom functions that remember a value.

```javascript
function multiplyBy(factor) {
    return function(number) {
        return number * factor
    }
}

const double = multiplyBy(2)
const triple = multiplyBy(3)

console.log(double(5))   // 10
console.log(triple(5))   // 15
```

double remembers that factor is 2. triple remembers that factor is 3. Each closure keeps its own copy of the remembered value.

---

## Quick Reference

```javascript
// scope: where a variable can be used
// global    outside everything, seen everywhere
// function  inside a function only
// block     inside curly braces only (let and const)

// inner functions can see outer variables
// outer functions cannot see inner variables

// hoisting: function declarations move to top
sayHello()               // works
function sayHello() { }

// arrow and const functions are NOT hoisted
// rule: define before you use

// closure: a function remembers outer variables
function makeCounter() {
    let count = 0
    return () => ++count
}
```

Scope controls visibility. Inner functions see outward. A closure is an inner function remembering variables from where it was made, even after the outer function ended.

---

# Exercises

Copy the block below into a .js file and write your code under each exercise.

```javascript
// -------------------------------------------------------
// Exercise 1
// -------------------------------------------------------
// Create a global variable and a function that prints it. Confirm the
// function can see the global variable.

// Write your code here


// -------------------------------------------------------
// Exercise 2
// -------------------------------------------------------
// Create a function with a variable inside it. Try to print that variable
// from outside the function. Observe the error and write a comment
// explaining it.

// Write your code here


// -------------------------------------------------------
// Exercise 3
// -------------------------------------------------------
// Create an if block with a const inside it. Try to use that variable
// outside the block. Note what happens.

// Write your code here


// -------------------------------------------------------
// Exercise 4
// -------------------------------------------------------
// Write an outer function with a variable, and an inner function that
// prints that variable. Call the inner function from inside the outer
// one.

// Write your code here


// -------------------------------------------------------
// Exercise 5
// -------------------------------------------------------
// Call a function declared with the function keyword before it is written
// in the file. Confirm hoisting lets this work.

// Write your code here


// -------------------------------------------------------
// Exercise 6
// -------------------------------------------------------
// Write the makeCounter closure. Create a counter from it and call it
// several times, printing the increasing numbers.

// Write your code here


// -------------------------------------------------------
// Exercise 7
// -------------------------------------------------------
// Create two separate counters from the same makeCounter function. Call
// each one and show they count independently.

// Write your code here


// -------------------------------------------------------
// Exercise 8
// -------------------------------------------------------
// Write the multiplyBy closure. Create a double and a triple function
// from it and test both.

// Write your code here


// -------------------------------------------------------
// Exercise 9
// -------------------------------------------------------
// Write a closure that creates a greeting function remembering a specific
// greeting word, like "Hello" or "Hi". Make two versions and test them.

// Write your code here


// -------------------------------------------------------
// Exercise 10
// -------------------------------------------------------
// Write the createBankAccount closure with deposit, withdraw, and
// getBalance. Create an account, make a few transactions, and confirm
// the balance cannot be read directly as a property.

// Write your code here


```

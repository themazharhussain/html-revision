# Operators and Type Conversion

Operators let you do calculations, compare values, and combine conditions. Type conversion lets you change a value from one type to another.

---

## Arithmetic Operators

These do math.

```javascript
const a = 20
const b = 6

console.log(a + b)    // 26   addition
console.log(a - b)    // 14   subtraction
console.log(a * b)    // 120  multiplication
console.log(a / b)    // 3.33 division
console.log(a % b)    // 2    remainder
console.log(a ** b)   // power, 20 to the power of 6
```

The remainder operator, written with a percent sign, gives what is left over after division. It is very useful for checking even or odd.

```javascript
console.log(10 % 2)   // 0, even numbers give 0
console.log(7 % 2)    // 1, odd numbers give 1
console.log(20 % 5)   // 0, divides evenly
console.log(23 % 5)   // 3, leftover
```

---

## Assignment Operators

Short ways to update a variable.

```javascript
let score = 100

score += 10   // same as score = score + 10, now 110
score -= 5    // same as score = score - 5, now 105
score *= 2    // same as score = score * 2, now 210
score /= 3    // same as score = score / 3, now 70
```

Increment adds one. Decrement subtracts one.

```javascript
let count = 5
count++   // now 6
count--   // now 5
```

---

## Comparison Operators

These always give a true or false answer.

```javascript
console.log(10 > 5)     // true
console.log(10 < 5)     // false
console.log(10 >= 10)   // true
console.log(10 <= 9)    // false
```

The most important comparison is equality. There are two versions and you should always use the strict one.

```javascript
console.log(5 === 5)      // true
console.log(5 === "5")    // false, different types
console.log("hi" === "hi") // true

console.log(5 == "5")     // true, ignores type, confusing
```

The three equals sign checks both the value and the type. The two equals sign only checks the value and ignores the type, which causes bugs.

```
Always use ===
Never use ==
Always use !==
Never use !=
```

```javascript
console.log(5 !== 3)      // true
console.log(5 !== "5")    // true, different types
```

---

## Logical Operators

These combine conditions.

```javascript
const age = 20
const hasID = true

// AND, both must be true
console.log(age >= 18 && hasID)     // true

// OR, at least one must be true
console.log(age < 18 || hasID)      // true

// NOT, flips the value
console.log(!hasID)                 // false
console.log(!true)                  // false
console.log(!false)                 // true
```

A real example.

```javascript
const cartTotal = 2500
const isMember = true

// Free delivery if total is high enough OR the user is a member
console.log(cartTotal >= 2000 || isMember)   // true
```

---

## Type Conversion

Sometimes you need to change a value from one type to another.

### String to Number

```javascript
const input = "42"
console.log(input + 8)          // "428", joined as text, wrong
console.log(Number(input) + 8)  // 50, converted first, correct
```

This matters a lot. Input from forms always comes as a string, even if it looks like a number. Convert it before doing math.

If conversion fails you get NaN, which means Not a Number.

```javascript
console.log(Number("hello"))   // NaN
console.log(Number("42"))      // 42
console.log(Number(""))        // 0
```

### Number to String

```javascript
console.log(String(500))         // "500"
console.log(typeof String(500))  // "string"
```

### To Boolean

```javascript
console.log(Boolean(1))          // true
console.log(Boolean(0))          // false
console.log(Boolean("hello"))    // true
console.log(Boolean(""))         // false
console.log(Boolean(null))       // false
```

The values that become false are called falsy. They are 0, empty string, null, undefined, NaN, and false. Everything else becomes true and is called truthy.

### parseInt and parseFloat

These read numbers out of text that has extra characters.

```javascript
console.log(parseInt("42px"))       // 42
console.log(parseFloat("3.14cm"))   // 3.14
console.log(parseInt("hello"))      // NaN
```

parseInt gives whole numbers. parseFloat keeps decimals. Useful when reading values like 42px from CSS.

---

## Quick Reference

```javascript
// Arithmetic
+ - * / % **
score += 10
count++

// Comparison
> < >= <=
===  always use
!==  always use

// Logical
&&  AND, both true
||  OR, one true
!   NOT, flips it

// Conversion
Number("42")       // 42
String(500)        // "500"
Boolean(0)         // false
parseInt("42px")   // 42
parseFloat("3.1x") // 3.1
```

Falsy values: 0, "", null, undefined, NaN, false. Everything else is truthy.

---

# Exercises

Copy the block below into a .js file and write your code under each exercise.

```javascript
// -------------------------------------------------------
// Exercise 1
// -------------------------------------------------------
// Create two number variables. Print their sum, difference, product, division, and remainder.

// Write your code here


// -------------------------------------------------------
// Exercise 2
// -------------------------------------------------------
// Use the remainder operator to check if the numbers 7, 12, 25, and 40 are even or odd. Print the result for each.

// Write your code here


// -------------------------------------------------------
// Exercise 3
// -------------------------------------------------------
// Create a score variable starting at 50. Using assignment operators, add 20, then multiply by 2, then subtract 10. Print the score after each step.

// Write your code here


// -------------------------------------------------------
// Exercise 4
// -------------------------------------------------------
// Predict the result of each before running: 5 === 5, 5 === "5", 5 == "5", 10 !== "10". Then check.

// Write your code here


// -------------------------------------------------------
// Exercise 5
// -------------------------------------------------------
// Create two boolean variables. Use AND, OR, and NOT with them and print all the results.

// Write your code here


// -------------------------------------------------------
// Exercise 6
// -------------------------------------------------------
// A person can enter an event if they are 18 or older AND have a ticket. Create age and hasTicket variables and print whether they can enter.

// Write your code here


// -------------------------------------------------------
// Exercise 7
// -------------------------------------------------------
// Take the string "100" and add 50 to it. Notice the wrong result. Then convert it to a number and add 50 again. Print both results.

// Write your code here


// -------------------------------------------------------
// Exercise 8
// -------------------------------------------------------
// Predict the result of each: Number("50"), Number("abc"), Number(""), Boolean(0), Boolean("hi"), Boolean(""). Then check.

// Write your code here


// -------------------------------------------------------
// Exercise 9
// -------------------------------------------------------
// Use parseInt and parseFloat on these strings and print the results: "25years", "3.5kg", "100px", "hello".

// Write your code here


// -------------------------------------------------------
// Exercise 10
// -------------------------------------------------------
// Build a small bill calculator. Create price, quantity, and discount percent. Calculate the subtotal, the discount amount, and the final total. Print each value clearly.

// Write your code here


```

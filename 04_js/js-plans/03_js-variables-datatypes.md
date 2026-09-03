# Variables and Data Types

A variable is a named container that stores a value. You give it a name, put a value inside, and use that name to access the value anywhere in your code.

---

## Why We Need Variables

Look at this calculation with no variables.

```javascript
console.log(500 * 3 - (500 * 3 * 10 / 100))
```

This works but nobody can read it. What is 500? What is 3? What is 10? With variables the code explains itself.

```javascript
const price = 500
const quantity = 3
const discountPercent = 10

const subtotal = price * quantity
const discount = subtotal * discountPercent / 100
const total = subtotal - discount

console.log(total)
```

Now anyone reading it understands. Variables store information and give it a meaningful name.

---

## const for Values That Never Change

Use const when a value will never change.

```javascript
const shopName = "Spice House"
const ownerName = "Ahmed Khan"
const city = "Lahore"

console.log(shopName)
```

If you try to change a const, you get an error.

```javascript
const shopName = "Spice House"
shopName = "New Name"   // TypeError: Assignment to constant variable
```

This error is a good thing. You said the value never changes, and JavaScript holds you to that. It protects you from accidental changes.

---

## let for Values That Change

Use let when a value needs to change over time.

```javascript
let tablesAvailable = 10
console.log(tablesAvailable)   // 10

tablesAvailable = 8
console.log(tablesAvailable)   // 8

tablesAvailable = tablesAvailable - 1
console.log(tablesAvailable)   // 7
```

A table count changes when people book. A score changes as you play. A cart total changes as you add items. Use let for anything that will be updated.

---

## The Rule

```
Value never changes  →  const
Value will change    →  let
Never use var
```

Start with const always. Only switch to let when you know the value must change. Most of your variables should be const. This is the professional habit.

---

## Naming Rules

```javascript
const firstName = "Ahmed"      // correct
const totalPrice = 500         // correct
const isLoggedIn = true        // correct

const first name = "Ahmed"     // wrong, no spaces
const first-name = "Ahmed"     // wrong, no dashes
const 2name = "Ahmed"          // wrong, cannot start with a number
const const = "Ahmed"          // wrong, const is a reserved word
```

The naming style is called camelCase. The first word is all lowercase. Every new word after that starts with a capital letter. Like firstName, totalPrice, isUserActive, currentScore.

Good names make code readable. When someone sees totalPrice they understand instantly. When they see x or a they understand nothing. Name your variables so another person can read your code.

---

## Data Types

Different information is stored as different types. JavaScript needs to know the type so it knows what it can do with the value.

### String for text

```javascript
const productName = "Samsung Galaxy"
const city = 'Lahore'
const message = `Welcome`

console.log(typeof productName)   // "string"
```

There are three ways to write strings: double quotes, single quotes, and backticks. All work. Backticks have special powers you learn later.

### Number for all numbers

```javascript
const age = 25
const price = 499.99
const temperature = -5

console.log(typeof age)   // "number"
```

JavaScript has one number type for whole numbers and decimals both. There is no separate type for decimals.

There is a common gotcha with numbers and text.

```javascript
console.log("5" + 3)   // "53"
```

When you add a string and a number, JavaScript joins them as text. The result is the text 53, not the number 8. This is a common beginner bug. When your math gives wrong answers, check if you accidentally have a string instead of a number.

### Boolean for yes or no

```javascript
const isShopOpen = true
const hasDiscount = false

console.log(typeof isShopOpen)   // "boolean"
```

Boolean has only two values, true or false. No quotes, no capital letters. Used for any yes or no situation, like is the user logged in, is the cart empty.

### Undefined for no value yet

```javascript
let userName
console.log(userName)          // undefined
console.log(typeof userName)   // "undefined"
```

You made the variable but did not put anything in it. JavaScript automatically set it to undefined. It is an empty box you have not filled.

### Null for intentionally empty

```javascript
const selectedProduct = null
console.log(selectedProduct)         // null
console.log(typeof selectedProduct)  // "object"
```

null is when you deliberately set something to empty. For example when a shop page first loads, no product is selected yet, so selectedProduct is null. When the user clicks a product, it gets a value.

The difference between the two empty types.

```
undefined  =  no value given yet, accidental empty
null       =  deliberately set to empty, intentional
```

The typeof null result of "object" is a famous bug from 1995 that was never fixed. Every developer knows it. Just remember it.

---

## typeof

The typeof operator tells you the type of a value.

```javascript
console.log(typeof "Ahmed")      // "string"
console.log(typeof 42)           // "number"
console.log(typeof 3.14)         // "number"
console.log(typeof true)         // "boolean"
console.log(typeof undefined)    // "undefined"
console.log(typeof null)         // "object"   the famous bug
```

---

## Quick Reference

```javascript
const name = "Ahmed"    // never changes
let score = 0           // will change

// Five basic data types
const text = "Ahmed"    // String
const num = 42          // Number
const yes = true        // Boolean
let empty               // Undefined
const nothing = null    // Null

// Check the type
typeof value
```

| Type | Example | typeof result |
|---|---|---|
| String | "Ahmed" | "string" |
| Number | 42 or 3.14 | "number" |
| Boolean | true or false | "boolean" |
| Undefined | let x with no value | "undefined" |
| Null | null | "object" (bug) |

---

# Exercises

Copy the block below into a .js file and write your code under each exercise.

```javascript
// -------------------------------------------------------
// Exercise 1
// -------------------------------------------------------
// Create three const variables: your name, your city, and your birth year. Print all three.

// Write your code here


// -------------------------------------------------------
// Exercise 2
// -------------------------------------------------------
// Create a let variable called score starting at 0. Add 10 to it. Then add 5 more. Print the score after each change.

// Write your code here


// -------------------------------------------------------
// Exercise 3
// -------------------------------------------------------
// Try to change a const variable after creating it. Observe the error. Write a comment explaining why it happened.

// Write your code here


// -------------------------------------------------------
// Exercise 4
// -------------------------------------------------------
// Create one variable of each type: a string, a number, a boolean, an undefined, and a null. Print the typeof of each one.

// Write your code here


// -------------------------------------------------------
// Exercise 5
// -------------------------------------------------------
// Predict the type of each of these before checking with typeof: "42", 42, true, "true", null, undefined. Then verify.

// Write your code here


// -------------------------------------------------------
// Exercise 6
// -------------------------------------------------------
// Create variables for a product: name, price, quantity in stock, and whether it is available. Use the correct type for each. Print them all with labels.

// Write your code here


// -------------------------------------------------------
// Exercise 7
// -------------------------------------------------------
// Write the result of "5" + 3 and explain in a comment why it is not 8.

// Write your code here


// -------------------------------------------------------
// Exercise 8
// -------------------------------------------------------
// Create a variable with no value assigned. Print it and its type. Then create a variable set to null. Print it and its type. Write a comment on the difference.

// Write your code here


// -------------------------------------------------------
// Exercise 9
// -------------------------------------------------------
// Take a list of variable names and mark which are valid and which break the naming rules: firstName, first name, 2ndPlace, total_price, isActive, my-variable. Fix the invalid ones.

// Write your code here


// -------------------------------------------------------
// Exercise 10
// -------------------------------------------------------
// Create a small profile of yourself using at least six variables with correct types and correct const or let choices. Print a summary of all of them.

// Write your code here


```

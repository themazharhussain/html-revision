# Truthy Falsy and Template Literals

Every value in JavaScript is either truthy or falsy when used in a condition. Template literals are the modern way to build strings with variables inside them.

---

## Falsy Values

There are exactly six falsy values. These are treated as false in a condition.

```javascript
false
0
""          // empty string
null
undefined
NaN
```

Memorize these six. They are the only falsy values. Everything else in JavaScript is truthy.

```javascript
if (0) console.log("A")           // does not run
if (1) console.log("B")           // runs
if ("") console.log("C")          // does not run
if ("hello") console.log("D")     // runs
if (null) console.log("E")        // does not run
if (undefined) console.log("F")   // does not run
```

---

## The Surprising Truthy Values

Some values look empty but are actually truthy.

```javascript
if ([]) console.log("empty array")    // runs, arrays are truthy
if ({}) console.log("empty object")   // runs, objects are truthy
if ("0") console.log("string zero")   // runs, non empty string is truthy
if (-5) console.log("negative")       // runs, only 0 is falsy
```

This surprises everyone. An empty array is truthy. The string zero is truthy because it is not empty. A negative number is truthy because only the actual number zero is falsy. Remember the six falsy values and you will never be confused.

---

## Using Truthy and Falsy

You can check if a value exists directly in a condition.

```javascript
const userName = ""

if (userName) {
    console.log(`Welcome ${userName}`)
} else {
    console.log("Please enter your name")   // this runs
}
```

Because an empty string is falsy, the else branch runs. This is a clean way to check if a user actually typed something.

You can check a number the same way.

```javascript
const itemCount = 0

if (itemCount) {
    console.log("You have items")
} else {
    console.log("No items yet")   // this runs, 0 is falsy
}
```

---

## Template Literals

Before template literals, joining text and variables was messy.

```javascript
const name = "Ahmed"
const age = 25
console.log("My name is " + name + " and I am " + age + " years old")
```

Template literals make this clean. Use backticks, the key above Tab, and put variables inside a dollar sign and curly braces.

```javascript
const name = "Ahmed"
const age = 25
console.log(`My name is ${name} and I am ${age} years old`)
```

---

## Calculations Inside Template Literals

You can put any calculation inside the curly braces.

```javascript
const price = 1000
const quantity = 3

console.log(`Total: Rs ${price * quantity}`)
console.log(`With tax: Rs ${price * quantity * 1.17}`)
console.log(`In 10 years I will be ${age + 10}`)
```

---

## Conditions Inside Template Literals

You can use a ternary condition inside a template literal. A ternary is a short if else written as condition ? valueIfTrue : valueIfFalse.

```javascript
const items = 1
console.log(`You have ${items} ${items === 1 ? "item" : "items"}`)
// You have 1 item

const items2 = 5
console.log(`You have ${items2} ${items2 === 1 ? "item" : "items"}`)
// You have 5 items
```

---

## Multi Line Strings

Template literals can span multiple lines. Normal quotes cannot do this.

```javascript
const message = `
Hello Ahmed,
Welcome to our store.
Your order is confirmed.
`
console.log(message)
```

---

## Combining Everything

A real example using truthy checks and template literals together.

```javascript
const userName = "Ahmed"
const cartItems = 3
const discount = 0

const greeting = userName ? `Welcome ${userName}` : "Welcome Guest"
const cartMessage = cartItems ? `You have ${cartItems} items` : "Cart is empty"
const discountMessage = discount ? `Discount: ${discount}%` : "No discount"

console.log(greeting)
console.log(cartMessage)
console.log(discountMessage)
```

If userName has a value it is truthy, so it shows the name. If discount is 0 it is falsy, so it shows no discount.

---

## Quick Reference

```javascript
// Six falsy values
false, 0, "", null, undefined, NaN

// Everything else is truthy, including [], {}, "0", negatives

// Truthy check
if (userName) { }     // runs if it has a value

// Template literals
`Hello ${name}, total is ${price * quantity}`

// Ternary inside
`You have ${count} ${count === 1 ? "item" : "items"}`
```

---

# Exercises

Copy the block below into a .js file and write your code under each exercise.

```javascript
// -------------------------------------------------------
// Exercise 1
// -------------------------------------------------------
// Test each of these six values in an if condition and note which ones do not run: false, 0, "", null, undefined, NaN.

// Write your code here


// -------------------------------------------------------
// Exercise 2
// -------------------------------------------------------
// Test these values in an if condition and note which ones run: [], {}, "0", -1, "false". Explain why in comments.

// Write your code here


// -------------------------------------------------------
// Exercise 3
// -------------------------------------------------------
// Create a variable for a user name. Write an if condition that greets the user if the name has a value, or asks them to enter a name if it is empty. Test with a real name and with an empty string.

// Write your code here


// -------------------------------------------------------
// Exercise 4
// -------------------------------------------------------
// Rewrite this using a template literal: "Hello " + name + ", you are " + age + " years old".

// Write your code here


// -------------------------------------------------------
// Exercise 5
// -------------------------------------------------------
// Create price and quantity variables. Use a template literal to print the total, including the calculation inside the braces.

// Write your code here


// -------------------------------------------------------
// Exercise 6
// -------------------------------------------------------
// Use a ternary inside a template literal to print how many messages a user has, choosing between "message" and "messages" based on the count.

// Write your code here


// -------------------------------------------------------
// Exercise 7
// -------------------------------------------------------
// Create a multi line template literal that prints a short welcome note with three lines: a greeting, a line about the user, and a closing line.

// Write your code here


// -------------------------------------------------------
// Exercise 8
// -------------------------------------------------------
// Create variables for a user name, a cart item count, and a discount. Use truthy checks and template literals to print a greeting, a cart message, and a discount message.

// Write your code here


// -------------------------------------------------------
// Exercise 9
// -------------------------------------------------------
// Build a small receipt using template literals. Include a shop name, three items with prices, and a total. Make it look clean with multiple lines.

// Write your code here


// -------------------------------------------------------
// Exercise 10
// -------------------------------------------------------
// Create a variable for a score. Use a ternary inside a template literal to print "You passed" if the score is 50 or more, otherwise "You failed", along with the actual score.

// Write your code here


```

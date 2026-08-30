# JavaScript — Truthy Falsy and Template Literals

**Duration:** 3 hours
**Roadmap position:** Day 5
**Today's goal:** Students master truthy and falsy values and build clean strings using template literals.

---

# PART 1 — Your Preparation (Night Before)

**Practice this yourself:**

```javascript
const name = "Ahmed"
const age = 25
console.log(`My name is ${name} and I am ${age}`)

if ("") console.log("runs")     // does not run, empty string is falsy
if ("hi") console.log("runs")   // runs, non empty is truthy
```

**Things you must know clearly:**

Falsy values, only six:

```javascript
false, 0, "", null, undefined, NaN
```

Everything else is truthy, including "0", [], {}, and negative numbers.

Template literals use backticks and ${ }:

```javascript
`Total is ${price * quantity}`
```

**Questions students will ask — your answers:**

"Is an empty array truthy or falsy?"
Truthy. This surprises people. Empty array [] and empty object {} are both truthy. Only the six specific falsy values are falsy. Everything else is truthy.

"Why do we care about truthy and falsy?"
Because conditions use them. When you write if something, JavaScript checks if that value is truthy or falsy. Understanding this lets you write shorter cleaner conditions.

"What is the difference between backticks and normal quotes?"
Normal quotes make plain strings. Backticks make template literals which let you insert variables and do calculations inside using ${ }. Backticks are more powerful.

---

# PART 2 — The Class

## Step 1 — Homework Check (10 minutes)

Check delivery.js. Premium discount working? Tested both cases? One good thing, one improve.

## Step 2 — Truthy and Falsy (35 minutes)

Every value in JavaScript is either truthy or falsy when used in a condition.

The six falsy values, write on paper:

```javascript
false
0
""          // empty string
null
undefined
NaN
```

Say: "Memorize these six. These are the only falsy values. Everything else in JavaScript is truthy."

Show it:

```javascript
if (0) console.log("A")           // does not run
if (1) console.log("B")           // runs
if ("") console.log("C")          // does not run
if ("hello") console.log("D")     // runs
if (null) console.log("E")        // does not run
if (undefined) console.log("F")   // does not run
```

The surprising ones:

```javascript
if ([]) console.log("empty array")    // runs! arrays are truthy
if ({}) console.log("empty object")   // runs! objects are truthy
if ("0") console.log("string zero")   // runs! non empty string is truthy
if (-5) console.log("negative")       // runs! only 0 is falsy
```

Say: "This surprises everyone. An empty array is truthy. The string zero is truthy because it is not empty. Only the actual number 0 is falsy. Remember the six falsy values and you will never be confused."

Practical use, checking if something has a value:

```javascript
const userName = ""

if (userName) {
    console.log(`Welcome ${userName}`)
} else {
    console.log("Please enter your name")   // this runs
}
```

Checking a number value:

```javascript
const itemCount = 0

if (itemCount) {
    console.log("You have items")
} else {
    console.log("No items yet")   // this runs, 0 is falsy
}
```

Say: "Because 0 is falsy, we can check a count directly. If the count is 0 it is falsy and the else runs. If the count is any other number it is truthy."

## Step 3 — Template Literals (35 minutes)

The old way, messy:

```javascript
const name = "Ahmed"
const age = 25
console.log("My name is " + name + " and I am " + age + " years old")
```

The new way, clean:

```javascript
console.log(`My name is ${name} and I am ${age} years old`)
```

Explain: use backticks, the key above Tab. Put variables inside ${ }.

Calculations inside:

```javascript
const price = 1000
const quantity = 3
console.log(`Total: Rs ${price * quantity}`)
console.log(`With tax: Rs ${price * quantity * 1.17}`)
```

Conditions inside using ternary:

```javascript
const items = 1
console.log(`You have ${items} ${items === 1 ? "item" : "items"}`)
```

Multi line strings:

```javascript
const message = `
Hello Ahmed,
Welcome to our store.
Your order is confirmed.
`
console.log(message)
```

Say: "Template literals are the modern standard. Always use them instead of joining with plus signs. Cleaner, easier, fewer mistakes."

## BREAK (10 minutes)

## Step 4 — Combining Both (20 minutes)

Real example using truthy falsy and template literals together:

```javascript
const userName = "Ahmed"
const cartItems = 3
const discount = 0

const greeting = userName ? `Welcome ${userName}` : "Welcome Guest"
const cartMessage = cartItems ? `You have ${cartItems} items` : "Cart is empty"
const discountMessage = discount ? `Discount: ${discount}%` : "No discount applied"

console.log(greeting)
console.log(cartMessage)
console.log(discountMessage)
```

Say: "See how truthy falsy checks combine with template literals. If userName has a value it is truthy, show the name. If discount is 0 it is falsy, show no discount. This is real code you will write constantly."

## Step 5 — Student Exercises (35 minutes)

### Exercise 1 — Falsy Detective (15 minutes)

Predict truthy or falsy for each, then check with if:

```javascript
0
""
"0"
" "        // space, careful
[]
{}
null
undefined
NaN
-1
"false"
false
```

### Exercise 2 — Profile Card (20 minutes)

```javascript
const name = "Ahmed Khan"
const age = 25
const city = "Lahore"
const job = "Web Developer"
const salary = 80000

// Build a profile card using template literals
// Print a multi line card showing all details
// Include a calculation like yearly salary
// Use a ternary to show "Adult" or "Minor" based on age
```

## Step 6 — Review (10 minutes)

Check profile card. Template literals used? Calculations correct? One good thing, one improve.

## Step 7 — Quiz and Homework (10 minutes)

### Quiz

1. Name the six falsy values.
2. Is an empty array truthy or falsy?
3. Is the string "0" truthy or falsy? Why?
4. What symbols do template literals use?
5. How do you put a calculation inside a template literal?

### Homework

Create receipt.js. Build a shopping receipt using template literals. Include shop name, date, at least 3 items with prices, subtotal, tax, total. Use a ternary to show "Free delivery" if total is above 2000, otherwise show the delivery fee. Make it look like a real receipt with multi line template literals.

---

# PART 3 — What We Learned Today

## Falsy Values

```javascript
false, 0, "", null, undefined, NaN
```

Everything else is truthy, including [], {}, "0", negative numbers.

## Truthy Falsy in Conditions

```javascript
if (userName) { }    // runs if userName has a value
if (itemCount) { }   // runs if itemCount is not 0
```

## Template Literals

```javascript
const name = "Ahmed"
console.log(`Hello ${name}, total is ${price * quantity}`)
```

Use backticks. Insert variables and calculations with ${ }.

## Ternary Inside Template Literals

```javascript
`You have ${count} ${count === 1 ? "item" : "items"}`
```

---

# PART 4 — After Class Notes

1. Did the six falsy values stick?
2. Did the empty array is truthy surprise them?
3. Are template literals natural now?
4. What to revise next?

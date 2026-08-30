# JavaScript — Day 3
## Variables and Data Types

**Duration:** 3 hours
**Today's goal:** Students store information in variables using const and let, and understand all the basic data types.

---

# PART 1 — Your Preparation (Night Before)

**Practice this yourself:**

```javascript
const name = "Ahmed"
let score = 0
score = score + 10

console.log(typeof name)
console.log(typeof 42)
console.log(typeof true)
```

**Things you must know clearly:**

const for values that never change. let for values that change. Never var.

The data types:

```javascript
const text = "Ahmed"       // String
const number = 42          // Number
const yes = true           // Boolean
let empty                  // Undefined
const nothing = null       // Null
```

typeof results:

```javascript
typeof "hi"      // "string"
typeof 42        // "number"
typeof true      // "boolean"
typeof undefined // "undefined"
typeof null      // "object"  ← the famous bug
```

**Questions students will ask — your answers:**

"Why can I not change a const?"
Because const means constant, meaning it never changes. You promised JavaScript this value stays the same. JavaScript protects you by not allowing changes. This prevents accidental bugs.

"What is the difference between null and undefined?"
undefined means you made a variable but did not give it a value. JavaScript set it to undefined for you. null means you deliberately set it to empty on purpose. undefined is accidental empty, null is intentional empty.

"Why does typeof null say object?"
It is a bug from when JavaScript was created in 1995. It was never fixed because too many websites depend on the old behavior now. Every developer just knows and remembers this.

---

# PART 2 — The Class

## Step 1 — Homework Check (10 minutes)

Students swap seats. Check day2 memory-practice.js.

Did their predictions match the results?
Did they understand why objects change together?
Did the spread copy work correctly?

One good thing, one thing to improve.

---

## Step 2 — Why We Need Variables (10 minutes)

Start with a real situation. Say:

"You are building a shopping website. A product costs 500 rupees. The customer buys 3. There is a 10 percent discount. You need to calculate the total. Where do you keep all these numbers so you can use them in your calculation? You store them in variables."

Show the idea without variables first, messy:

```javascript
console.log(500 * 3 - (500 * 3 * 10 / 100))
```

Say: "This works but it is unreadable. What is 500? What is 3? What is 10? Nobody knows. Now watch with variables."

```javascript
const price = 500
const quantity = 3
const discountPercent = 10

const subtotal = price * quantity
const discount = subtotal * discountPercent / 100
const total = subtotal - discount

console.log(total)
```

Say:

"Now the code explains itself. Anyone reading it understands. price, quantity, discount. This is why we use variables. They store information and give it a meaningful name."

---

## Step 3 — const and let (35 minutes)

Create day3.js.

### const for values that never change

```javascript
const shopName = "Spice House"
const ownerName = "Ahmed Khan"
const city = "Lahore"

console.log(shopName)
console.log(ownerName)
console.log(city)
```

Explain each part:

const is the keyword that creates the variable.
shopName is the name you choose.
The equals sign puts the value into the variable.
"Spice House" is the value.

Try to change a const:

```javascript
const shopName = "Spice House"
shopName = "New Name"
```

Show the error: Assignment to constant variable.

Say:

"This error is good. You said const, meaning it never changes. JavaScript is holding you to your promise. In real projects this saves you from accidentally changing something important."

### let for values that change

```javascript
let tablesAvailable = 10
console.log(tablesAvailable)

tablesAvailable = 8
console.log(tablesAvailable)

tablesAvailable = tablesAvailable - 1
console.log(tablesAvailable)
```

Show 10, 8, 7 in the console.

Say:

"let is for values that change. A table count changes when people book. A score changes as you play. A cart total changes as you add items. Use let for anything that will be updated."

### The rule

Write on paper and keep it visible:

```
Never changes  →  const
Will change    →  let
Never use var
```

Say: "Start with const always. Only switch to let when you know the value must change. Most of your variables should be const. This is the professional habit."

### Naming rules

```javascript
const firstName = "Ahmed"      // correct, camelCase
const totalPrice = 500         // correct
const isLoggedIn = true        // correct

const first name = "Ahmed"     // wrong, no spaces
const first-name = "Ahmed"     // wrong, no dashes
const 2name = "Ahmed"          // wrong, cannot start with number
const const = "Ahmed"          // wrong, reserved word
```

Explain camelCase: first word lowercase, every new word starts with a capital. firstName, totalPrice, isUserActive, currentScore.

Say:

"Good names make code readable. When someone sees totalPrice they understand instantly. When they see x or a they understand nothing. Name your variables so another person can read your code. Because they will."

---

## Step 4 — Data Types (40 minutes)

Say:

"Different information is different types. A name is text. An age is a number. Is the shop open is yes or no. JavaScript needs to know the type so it knows what it can do with the value."

### String for text

```javascript
const productName = "Samsung Galaxy"
const city = 'Lahore'
const message = `Welcome`

console.log(typeof productName)  // "string"
```

Three ways to write strings: double quotes, single quotes, backticks. All work. Backticks have special powers we learn later.

### Number for all numbers

```javascript
const age = 25
const price = 499.99
const temperature = -5

console.log(typeof age)  // "number"
```

JavaScript has one number type for whole numbers and decimals both.

Show the famous gotcha. Ask students to predict first:

```javascript
console.log("5" + 3)
```

They guess 8. Show the result: "53"

Say:

"When you add a string and a number, JavaScript joins them as text. The result is 53 as text, not 8. This is one of the most common beginner bugs. When your math gives wrong answers, check if you accidentally have a string instead of a number. Tomorrow we learn how to fix this."

### Boolean for yes or no

```javascript
const isShopOpen = true
const hasDiscount = false

console.log(typeof isShopOpen)  // "boolean"
```

Only two values, true or false. No quotes, no capitals.

Say: "Boolean is for any yes or no. Is the user logged in. Is the cart empty. Does the product have a discount. You will use boolean constantly."

### Undefined for no value yet

```javascript
let userName
console.log(userName)          // undefined
console.log(typeof userName)   // "undefined"
```

Say: "You made the variable but did not put anything in it. JavaScript automatically set it to undefined. It is an empty box you have not filled yet."

### Null for intentionally empty

```javascript
const selectedProduct = null
console.log(selectedProduct)         // null
console.log(typeof selectedProduct)  // "object"
```

Say:

"null is when you deliberately set something to empty. For example when a shop page first loads, no product is selected yet, so selectedProduct is null. When the user clicks a product, it gets a value. The difference: undefined is JavaScript saying nothing is here yet. null is you saying I put nothing here on purpose."

The typeof null bug:

"Notice typeof null says object. That is a mistake from 1995 that was never fixed. Every developer knows it. Just remember it."

---

## BREAK (10 minutes)

---

## Step 5 — typeof Practice (15 minutes)

Type all of these together and read the results:

```javascript
console.log(typeof "Ahmed Khan")
console.log(typeof 42)
console.log(typeof 3.14)
console.log(typeof true)
console.log(typeof false)
console.log(typeof undefined)
console.log(typeof null)
```

Students write the results on paper and keep it for the week:

```
"string"
"number"
"number"
"boolean"
"boolean"
"undefined"
"object"   ← the bug
```

---

## Step 6 — Student Exercises (35 minutes)

Tell students: "Read the console error before asking me. It usually tells you exactly what is wrong."

### Exercise 1 — Shop Profile (15 minutes)

Students create shop.js. Create variables for a shop:

A shop name that never changes, use const
An owner name, use const
The city, use const
The year it started, use const
The rating out of 5, use const
Whether it is open now, use const
How many products available, this changes, use let
The current discount percent, this changes, use let

Print all values with labels using console.log.

Then simulate two events:
One customer buys, so products reduce by 1.
A sale starts, so discount increases by 5.

Print the updated values.

Check: are all const and let used correctly? Are names camelCase?

### Exercise 2 — Type Detective (15 minutes)

Write on paper. Students write the type without using typeof, then check.

```
"Hello"        →
42             →
3.14           →
true           →
"true"         →
"42"           →
null           →
undefined      →
0              →
false          →
```

Tricky ones: "true" is a string not boolean. "42" is a string not number. If they get these, they understood.

### Exercise 3 — Bug Hunt (5 minutes)

Find and fix all the mistakes:

```javascript
const full name = "Sara"
Let age = 22
const isStudent = True
let const city = "Karachi"

console.log(Full name)
console.log(Age)
console.log(isstudent)
```

Bugs: space in full name, Let should be lowercase, True should be lowercase, cannot use let and const together, and the console.log names have wrong capitals.

---

## Step 7 — Review (10 minutes)

Students swap seats. Check shop.js.

Is every const truly unchanging? Is every let something that changes?
Are all names camelCase?
Do the simulations update correctly?

One good thing, one thing to improve.

---

## Step 8 — Quiz and Homework (10 minutes)

### Quiz

1. When do you use const and when let?
2. What is camelCase? Give an example.
3. Name the five basic data types.
4. What is the difference between null and undefined?
5. What does typeof null return and why is it strange?
6. What is the result of "5" + 3 and why?
7. What happens when you try to change a const?

### Homework

Create my-profile.js with at least 10 variables about yourself:

Full name, age, city, favourite subject, current score out of 100, whether you are a student true or false, monthly pocket money, savings goal, the course name, years of coding experience starting at 0.

Print all with labels like console.log("Name:", yourName).

Then update your score by adding 10 and print it.
Update your years of experience to 1 and print it.
Update your savings goal by adding 2000 and print it.

Use const for things that do not change and let for things you update.

---

# PART 3 — What We Learned Today

## Variables

```javascript
const shopName = "Spice House"   // never changes
let tablesAvailable = 10         // will change
```

Use const by default. Use let only when the value must change. Never var.

## camelCase Naming

```javascript
firstName        correct
totalPrice       correct
first name       wrong, no spaces
first-name       wrong, no dashes
2name            wrong, starts with number
```

## Five Data Types

| Type | Example | typeof |
|---|---|---|
| String | "Ahmed" | "string" |
| Number | 42 or 3.14 | "number" |
| Boolean | true or false | "boolean" |
| Undefined | let x with no value | "undefined" |
| Null | null | "object" (bug) |

## null vs undefined

undefined = no value given yet, accidental empty
null = deliberately set to empty, intentional

## The String Plus Number Gotcha

```javascript
"5" + 3   // "53" not 8
```

Adding a string and number joins them as text. Fix with conversion, learned tomorrow.

---

# PART 4 — After Class Notes

1. Did const vs let click for both students?
2. Are they naming variables in camelCase without reminders?
3. Did the "5" + 3 gotcha surprise them?
4. Who needs more practice with data types?
5. What to revise before Day 4?

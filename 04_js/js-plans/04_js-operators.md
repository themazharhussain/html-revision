# JavaScript — Operators and Type Conversion

**Duration:** 3 hours
**Roadmap position:** Day 4
**Today's goal:** Students do calculations, compare values, combine conditions, and convert between data types.

---

# PART 1 — Your Preparation (Night Before)

**Practice this yourself:**

```javascript
console.log(10 % 3)      // 1
console.log(5 === "5")   // false
console.log(5 == "5")    // true
console.log(Number("42")) // 42
```

**Things you must know clearly:**

Arithmetic: + - * / % **
Comparison: > < >= <= === !==
Logical: && || !
Conversion: Number() String() Boolean()

The == vs === difference:

```javascript
5 === "5"   // false, checks value AND type
5 == "5"    // true, only checks value, ignores type
```

Always use ===. Never use ==.

**Questions students will ask — your answers:**

"Why use === and not ==?"
== ignores the type so 5 == "5" is true which is confusing and causes bugs. === checks both value and type so 5 === "5" is false which is correct. Always use three equals.

"What is NaN?"
NaN means Not a Number. You get it when math fails, like Number("hello"). It means JavaScript tried to make a number but could not.

"Why is '5' + 3 equal to '53' but '5' - 3 equal to 2?"
Plus has two jobs. With text it joins strings. So "5" + 3 becomes "53". But minus only works with numbers, so JavaScript converts "5" to a number first, making "5" - 3 equal to 2.

---

# PART 2 — The Class

## Step 1 — Homework Check (10 minutes)

Students swap seats. Check my-profile.js from previous day. Correct const and let usage? camelCase names? Updates working? One good thing, one thing to improve.

## Step 2 — Quick Revision (5 minutes)

Ask: five data types? const vs let? What does "5" + 3 give?

## Step 3 — Arithmetic Operators (25 minutes)

```javascript
const a = 20
const b = 6

console.log(a + b)    // 26
console.log(a - b)    // 14
console.log(a * b)    // 120
console.log(a / b)    // 3.33
console.log(a % b)    // 2   remainder
console.log(a ** b)   // power
```

The remainder operator is very useful for even odd checks:

```javascript
console.log(10 % 2)   // 0, even
console.log(7 % 2)    // 1, odd
```

Assignment shortcuts:

```javascript
let score = 100
score += 10   // 110
score -= 5    // 105
score *= 2    // 210
score /= 3    // 70
```

Increment and decrement:

```javascript
let count = 5
count++   // 6
count--   // 5
```

## Step 4 — Comparison Operators (20 minutes)

```javascript
console.log(10 > 5)     // true
console.log(10 < 5)     // false
console.log(10 >= 10)   // true
console.log(10 <= 9)    // false
```

The important part, equality:

```javascript
console.log(5 === 5)      // true
console.log(5 === "5")    // false, different types
console.log(5 == "5")     // true, ignores type, dangerous
console.log(5 !== 3)      // true
console.log(5 !== "5")    // true
```

Write on paper:

```
Always use ===
Never use ==
Always use !==
Never use !=
```

## Step 5 — Logical Operators (20 minutes)

```javascript
const age = 20
const hasID = true

// AND, both must be true
console.log(age >= 18 && hasID)     // true

// OR, at least one true
console.log(age < 18 || hasID)      // true

// NOT, flips the value
console.log(!hasID)                 // false
```

Real example:

```javascript
const cartTotal = 2500
const isMember = true

console.log(cartTotal >= 2000 || isMember)  // true, free delivery
```

## BREAK (10 minutes)

## Step 6 — Type Conversion (30 minutes)

### String to Number

```javascript
const input = "42"
console.log(input + 8)         // "428" wrong
console.log(Number(input) + 8) // 50 correct
```

Say: "Input from forms always comes as a string. Convert to number before math."

Failed conversion gives NaN:

```javascript
console.log(Number("hello"))   // NaN
console.log(Number("42"))      // 42
console.log(Number(""))        // 0
```

### Number to String

```javascript
console.log(String(500))       // "500"
console.log(typeof String(500)) // "string"
```

### To Boolean

```javascript
console.log(Boolean(1))        // true
console.log(Boolean(0))        // false
console.log(Boolean("hi"))     // true
console.log(Boolean(""))       // false
console.log(Boolean(null))     // false
```

Falsy values: 0, "", null, undefined, NaN, false. Everything else is truthy.

### parseInt and parseFloat

```javascript
console.log(parseInt("42px"))     // 42
console.log(parseFloat("3.14cm")) // 3.14
console.log(parseInt("hello"))    // NaN
```

## Step 7 — Student Exercises (30 minutes)

### Exercise 1 — Bill Calculator (15 minutes)

```javascript
const price = 80000
const quantity = 2
const discountPercent = 15
const taxRate = 17

// Calculate subtotal, discount, after discount, tax, final total
// Print a full receipt with template literals
```

### Exercise 2 — Type Prediction (15 minutes)

Predict before running:

```javascript
"10" + 5
"10" - 5
"10" * "2"
5 === "5"
5 == "5"
Number("50")
Number("abc")
Boolean(0)
Boolean("hello")
10 % 3
```

## Step 8 — Review (10 minutes)

Check bill calculator. Correct math? Template literals used? One good thing, one improve.

## Step 9 — Quiz and Homework (10 minutes)

### Quiz

1. Why use === instead of ==?
2. What does 15 % 4 give?
3. What is "5" + 3 and why?
4. What does Number("hello") return?
5. Name three falsy values.

### Homework

Create delivery.js. A food order with restaurant name, item price, quantity, delivery fee 100, is premium member true or false. Premium members get 20 percent discount. Calculate the total. Test once as premium, once as normal.

---

# PART 3 — What We Learned Today

## Arithmetic

```javascript
+ - * / % **
score += 10
count++
```

## Comparison

```javascript
> < >= <=
===  always use
!==  always use
```

## Logical

```javascript
&&  AND
||  OR
!   NOT
```

## Conversion

```javascript
Number("42")      // 42
String(500)       // "500"
Boolean(0)        // false
parseInt("42px")  // 42
```

## Falsy Values

0, "", null, undefined, NaN, false. Everything else is truthy.

---

# PART 4 — After Class Notes

1. Is === vs == clear?
2. Did type conversion gotchas surprise them?
3. Who needs more operator practice?
4. What to revise next?

# JavaScript — Conditionals

**Duration:** 3 hours
**Roadmap position:** After Truthy and Template Literals, before Loops
**Today's goal:** Students write code that makes decisions using if else, ternary, and switch.

**Already taught:** variables, data types, operators, comparison, logical operators, truthy and falsy, template literals
**Not yet taught:** loops, functions, arrays. Do not use these in examples today.

---

# PART 1 — Your Preparation (Night Before)

**Practice this yourself:**

```javascript
const marks = 75

if (marks >= 90) {
    console.log("A")
} else if (marks >= 80) {
    console.log("B")
} else {
    console.log("Keep trying")
}
```

**Things you must know clearly:**

if else if else runs top to bottom. First true condition wins, rest are skipped.
Ternary is a short if else: condition ? valueIfTrue : valueIfFalse
switch checks one value against many exact options. Always needs break.

**Questions students will ask — your answers:**

"When do I use if else and when switch?"
Use if else for ranges and complex conditions like marks greater than 80. Use switch when checking one value against a fixed list of exact options like a day name.

"What happens if I forget break in switch?"
JavaScript keeps running into the next case even if it does not match. This is called fall through and causes bugs. Always write break.

"Can I use && and || inside if?"
Yes. You learned logical operators already. You can combine conditions like if age is over 18 AND has a license.

---

# PART 2 — The Class

## Step 1 — Homework Check (10 minutes)

Check previous homework. One good thing, one thing to improve.

## Step 2 — Quick Revision (5 minutes)

Ask: name the six falsy values. What does === check? What is a template literal?

## Step 3 — if and else (35 minutes)

Start with real life. Say: "If it is raining, take an umbrella. Otherwise leave it. JavaScript makes decisions the same way."

Create the file. Simplest form:

```javascript
const temperature = 35

if (temperature > 30) {
    console.log("It is very hot today")
}
```

Change temperature to 20, save, nothing prints. The condition is false.

Add else:

```javascript
const temperature = 20

if (temperature > 30) {
    console.log("Very hot")
} else {
    console.log("Weather is nice")
}
```

Add else if:

```javascript
const temperature = 15

if (temperature > 30) {
    console.log("Very hot")
} else if (temperature > 20) {
    console.log("Warm")
} else if (temperature > 10) {
    console.log("Cool")
} else {
    console.log("Cold")
}
```

Explain how it works: JavaScript checks top to bottom. First true condition runs and the rest are skipped. else runs only if all conditions were false.

Full example:

```javascript
const marks = 78

if (marks >= 90) {
    console.log("Grade A Excellent")
} else if (marks >= 80) {
    console.log("Grade B Very Good")
} else if (marks >= 70) {
    console.log("Grade C Good")
} else if (marks >= 60) {
    console.log("Grade D Average")
} else {
    console.log("Fail")
}
```

Students change the marks and predict the output.

## Step 4 — Conditions With Logical Operators (15 minutes)

Combine conditions using && and || which they learned in operators:

```javascript
const age = 25
const hasLicense = true

if (age >= 18 && hasLicense) {
    console.log("You can drive")
} else {
    console.log("You cannot drive")
}
```

```javascript
const day = "Sunday"

if (day === "Saturday" || day === "Sunday") {
    console.log("Weekend")
} else {
    console.log("Working day")
}
```

Using template literals inside:

```javascript
const cartTotal = 1500

if (cartTotal >= 2000) {
    console.log("Free delivery")
} else {
    const needed = 2000 - cartTotal
    console.log(`Add Rs ${needed} more for free delivery`)
}
```

## Step 5 — Ternary Operator (20 minutes)

Long way:

```javascript
const age = 20
let message

if (age >= 18) {
    message = "Adult"
} else {
    message = "Minor"
}
```

Short way with ternary:

```javascript
const age = 20
const message = age >= 18 ? "Adult" : "Minor"
console.log(message)
```

Pattern: condition ? value if true : value if false

More examples:

```javascript
const score = 45
const result = score >= 50 ? "Pass" : "Fail"

const hour = 14
const period = hour < 12 ? "AM" : "PM"
```

Inside template literals:

```javascript
const isLoggedIn = true
console.log(`${isLoggedIn ? "Welcome back" : "Please log in"}`)
```

Say: "Ternary is for simple two way choices. For many conditions, use if else which is easier to read."

## BREAK (10 minutes)

## Step 6 — switch Statement (25 minutes)

When checking one value against many exact options:

```javascript
const day = "Monday"

switch (day) {
    case "Monday":
        console.log("Start of the week")
        break
    case "Friday":
        console.log("Almost weekend")
        break
    case "Saturday":
    case "Sunday":
        console.log("Weekend")
        break
    default:
        console.log("A regular day")
}
```

Three rules:

First, always write break. Show what happens without it:

```javascript
const grade = "B"

switch (grade) {
    case "A":
        console.log("Excellent")
    case "B":
        console.log("Good")      // prints
    case "C":
        console.log("Average")   // also prints, no break!
    default:
        console.log("Done")      // also prints
}
```

Say: "Without break, once a case matches, everything below runs too. Always write break."

Second, default runs when nothing matches, like else.

Third, stack cases like Saturday and Sunday to share the same code.

Real example:

```javascript
const payment = "easypaisa"

switch (payment) {
    case "cash":
        console.log("Pay at delivery")
        break
    case "card":
        console.log("Card, 2 percent fee")
        break
    case "easypaisa":
    case "jazzcash":
        console.log("Mobile wallet")
        break
    default:
        console.log("Not available")
}
```

## Step 7 — Student Exercises (30 minutes)

### Exercise 1 — Grade Calculator (12 minutes)

```javascript
const studentName = "Ahmed"
const marks = 85

// Using if else if:
// 90+: A+, Excellent, scholarship
// 80-89: A, Very Good, scholarship
// 70-79: B, Good, no scholarship
// 60-69: C, Average, no scholarship
// 50-59: D, Pass, no scholarship
// Below 50: Fail
// Print name, marks, grade, comment, scholarship status with template literals
```

### Exercise 2 — Shop Checker (10 minutes)

```javascript
const hour = 14
const isHoliday = false

// If holiday: closed
// Otherwise open from 9 to 21
// Print if open or closed and why
```

### Exercise 3 — Traffic Light (8 minutes)

Use switch:

```javascript
const light = "red"
// red: Stop
// yellow: Slow down
// green: Go
// anything else: Invalid
```

## Step 8 — Review (10 minutes)

Check grade calculator. Correct grades for different marks? Tested several values? One good thing, one improve.

## Step 9 — Quiz and Homework (10 minutes)

### Quiz

1. How does else if work? What order are conditions checked?
2. Write a ternary for Pass if score is 50 or above, else Fail.
3. Why do we need break in switch?
4. What does default do?
5. When do you use switch over if else?
6. Can you use && inside an if condition?

### Homework

Create movie-ticket.js. A cinema pricing system.

Variables: customer age, is weekend true or false, is student true or false, show hour.

Base price Rs 800.
Under 12: half price.
Above 60: half price.
Student: Rs 200 off if not already discounted.
Weekend: add Rs 200.
Morning show before 12: Rs 150 off.

Calculate the final price using if else. Print a full ticket summary with all discounts and the final price using template literals.

---

# PART 3 — What We Learned Today

## if else if else

```javascript
if (condition) {
} else if (condition) {
} else {
}
```

Top to bottom. First true wins. Rest skipped.

## Conditions With Logical Operators

```javascript
if (age >= 18 && hasLicense) { }
if (day === "Sat" || day === "Sun") { }
```

## Ternary

```javascript
const result = condition ? valueIfTrue : valueIfFalse
```

Simple two way choices.

## switch

```javascript
switch (value) {
    case "a":
        break
    case "b":
    case "c":
        break
    default:
}
```

Always break. default for no match. Stack cases to share code.

---

# PART 4 — After Class Notes

1. Did else if order make sense?
2. Comfortable with ternary?
3. Did the switch without break bug help?
4. What to revise before Loops?

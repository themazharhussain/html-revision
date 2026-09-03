# Conditionals

Conditionals let your code make decisions. Based on whether something is true or false, different code runs.

---

## if

The simplest conditional. If the condition is true, the code inside runs.

```javascript
const temperature = 35

if (temperature > 30) {
    console.log("It is very hot today")
}
```

If the condition is false, nothing happens and the code inside is skipped.

```javascript
const temperature = 20

if (temperature > 30) {
    console.log("It is very hot today")
}
// nothing prints, the condition is false
```

---

## if else

else gives you code to run when the condition is false. One of the two always runs.

```javascript
const temperature = 20

if (temperature > 30) {
    console.log("Very hot")
} else {
    console.log("The weather is nice")
}
```

---

## else if

Use else if to check multiple conditions in order.

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

JavaScript checks from top to bottom. As soon as one condition is true, it runs that block and skips the rest. The else at the end runs only if none of the conditions were true.

A full example.

```javascript
const marks = 78

if (marks >= 90) {
    console.log("Grade A")
} else if (marks >= 80) {
    console.log("Grade B")
} else if (marks >= 70) {
    console.log("Grade C")
} else if (marks >= 60) {
    console.log("Grade D")
} else {
    console.log("Fail")
}
```

---

## Conditions With Logical Operators

You can combine conditions using AND and OR.

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

You can use template literals inside conditionals too.

```javascript
const cartTotal = 1500

if (cartTotal >= 2000) {
    console.log("Free delivery")
} else {
    const needed = 2000 - cartTotal
    console.log(`Add Rs ${needed} more for free delivery`)
}
```

---

## Ternary Operator

For a simple two way choice, the ternary is a short version of if else.

The long way.

```javascript
const age = 20
let message

if (age >= 18) {
    message = "Adult"
} else {
    message = "Minor"
}
```

The short way with a ternary.

```javascript
const age = 20
const message = age >= 18 ? "Adult" : "Minor"
console.log(message)
```

The pattern is condition ? value if true : value if false.

More examples.

```javascript
const score = 45
const result = score >= 50 ? "Pass" : "Fail"

const hour = 14
const period = hour < 12 ? "AM" : "PM"
```

Use ternary for simple choices. For many conditions, use if else which is easier to read.

---

## switch

When you check one value against many exact options, switch is cleaner than a long chain of else if.

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

Three important things about switch.

Always write break at the end of each case. Without it, JavaScript keeps running into the next case even if it does not match.

```javascript
const grade = "B"

switch (grade) {
    case "A":
        console.log("Excellent")
    case "B":
        console.log("Good")       // prints
    case "C":
        console.log("Average")    // also prints, no break
    default:
        console.log("Done")       // also prints
}
```

default runs when no case matches. It is like the else of a switch.

You can stack cases, like Saturday and Sunday above, so they share the same code.

A real example.

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

---

## Quick Reference

```javascript
// if else if else
if (condition) {
} else if (condition) {
} else {
}

// ternary
const result = condition ? valueIfTrue : valueIfFalse

// switch
switch (value) {
    case "a":
        break
    case "b":
    case "c":
        break
    default:
}
```

if else for ranges and complex conditions. ternary for simple two way choices. switch for one value against many exact options. Always break in switch.

---

# Exercises

Copy the block below into a .js file and write your code under each exercise.

```javascript
// -------------------------------------------------------
// Exercise 1
// -------------------------------------------------------
// Create an age variable. Write an if condition that prints "Adult" if the age is 18 or more.

// Write your code here


// -------------------------------------------------------
// Exercise 2
// -------------------------------------------------------
// Add an else to Exercise 1 so it prints "Minor" if the age is under 18. Test with different ages.

// Write your code here


// -------------------------------------------------------
// Exercise 3
// -------------------------------------------------------
// Create a marks variable. Using else if, print the grade: A for 90 and above, B for 80 to 89, C for 70 to 79, otherwise Fail.

// Write your code here


// -------------------------------------------------------
// Exercise 4
// -------------------------------------------------------
// A user can enter a club if they are 18 or older AND have a membership. Create age and hasMembership variables and print whether they can enter.

// Write your code here


// -------------------------------------------------------
// Exercise 5
// -------------------------------------------------------
// Check if a day is a weekend. Create a day variable and print "Weekend" if it is Saturday or Sunday, otherwise "Working day".

// Write your code here


// -------------------------------------------------------
// Exercise 6
// -------------------------------------------------------
// Rewrite this as a ternary: if score is 50 or more, message is "Pass", otherwise "Fail".

// Write your code here


// -------------------------------------------------------
// Exercise 7
// -------------------------------------------------------
// Create an hour variable from 0 to 23. Use a ternary to print AM if it is before 12, otherwise PM.

// Write your code here


// -------------------------------------------------------
// Exercise 8
// -------------------------------------------------------
// Use a switch statement for a traffic light. Create a light variable and print Stop for red, Slow for yellow, Go for green, and Invalid for anything else.

// Write your code here


// -------------------------------------------------------
// Exercise 9
// -------------------------------------------------------
// Build a simple grade system with switch. Take a grade letter A, B, C, or F and print a comment for each. Use default for an invalid grade.

// Write your code here


// -------------------------------------------------------
// Exercise 10
// -------------------------------------------------------
// Build a movie ticket price calculator. Base price is 800. Under 12 or over 60 get half price. Students get 200 off. Weekend adds 200. Use if else conditions to calculate and print the final price.

// Write your code here


```

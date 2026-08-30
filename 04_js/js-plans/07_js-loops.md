# JavaScript — Loops

**Duration:** 3 hours
**Roadmap position:** After Conditionals, before Functions
**Today's goal:** Students repeat code using for and while loops.

**Already taught:** variables, data types, operators, conditionals, template literals
**Not yet taught:** functions, arrays, objects. We touch arrays lightly today only to show for of, with a clear preview note.

---

# PART 1 — Your Preparation (Night Before)

**Practice this yourself:**

```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i)
}

let count = 0
while (count < 5) {
    console.log(count)
    count++
}
```

**Things you must know clearly:**

for loop has three parts: start, condition, update.
while loop just checks a condition.
break stops the loop. continue skips one round.

**Note on arrays:** for of loops over arrays. Arrays are taught fully later. Today, introduce a simple array in one line only as a preview so students can see for of. Tell them clearly that arrays get a full lesson soon.

**Questions students will ask — your answers:**

"When do I use for and when while?"
Use for when you know how many times to repeat, like 1 to 100. Use while when you do not know and just want to keep going until something happens.

"What is an infinite loop?"
A loop where the condition never becomes false, so it runs forever and freezes the browser. Always make sure the loop will eventually stop.

"What is that square bracket thing in for of?"
That is an array, a list of items. You will learn arrays fully in a few days. For now just know for of goes through each item in a list.

---

# PART 2 — The Class

## Step 1 — Homework Check (10 minutes)

Check movie-ticket.js. Discounts apply correctly? Tested different ages? One good thing, one improve.

## Step 2 — Why Loops Exist (10 minutes)

Ask: "I want to print 1 to 100. Will you write 100 console.log lines?"

Show the painful way:

```javascript
console.log(1)
console.log(2)
console.log(3)
// imagine 100 times
```

Then the solution:

```javascript
for (let i = 1; i <= 100; i++) {
    console.log(i)
}
```

Say: "Three lines instead of a hundred. Any time you repeat something, use a loop. This is one of the most powerful tools in programming."

## Step 3 — The for Loop (35 minutes)

Three parts inside the parentheses:

```javascript
for (let i = 1; i <= 5; i++) {
    console.log(`Round ${i}`)
}
```

Explain each part:

```
for (let i = 1;   i <= 5;   i++)
      START        CHECK     UPDATE
```

START: creates counter at 1, runs once.
CHECK: before every round, if true run the code, if false stop.
UPDATE: after each round, add 1.

Walk through it out loud step by step so they see the counter change.

Counting backwards:

```javascript
for (let i = 10; i >= 1; i--) {
    console.log(i)
}
console.log("Done")
```

Counting by 2:

```javascript
for (let i = 0; i <= 20; i += 2) {
    console.log(i)
}
```

Multiplication table using template literals:

```javascript
const number = 7

for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`)
}
```

## Step 4 — The while Loop (25 minutes)

Simpler, just checks a condition:

```javascript
let count = 1

while (count <= 5) {
    console.log(`Count ${count}`)
    count++
}
```

Say: "You must update the counter yourself inside the loop. If you forget count++, the condition stays true forever. That is an infinite loop and it freezes the browser."

Use while when you do not know how many times:

```javascript
let balance = 10000
let month = 1

while (balance > 0) {
    balance -= 2500
    console.log(`Month ${month}: Rs ${balance} left`)
    month++
}
console.log("Money finished")
```

Infinite loop warning:

```javascript
// NEVER do this
// let x = 1
// while (x > 0) {
//     x++    runs forever
// }
```

Say: "Always make sure your loop condition will eventually become false. If you make an infinite loop, close the tab quickly."

## Step 5 — break and continue (15 minutes)

break stops the whole loop:

```javascript
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break
    }
    console.log(i)
}
// prints 1 2 3 4 then stops
```

continue skips one round:

```javascript
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue
    }
    console.log(i)
}
// prints 1 2 3 4 6 7 8 9 10, skips 5
```

Say: "break stops everything. continue skips just this round and keeps going. Notice we used the if you learned yesterday inside the loop. Loops and conditionals work together all the time."

## BREAK (10 minutes)

## Step 6 — for of Loop (20 minutes)

Preview note first. Say:

"Now I will show you a special loop called for of. It goes through a list of items called an array. You will learn arrays fully in a few days. For today, just see how for of makes going through a list very easy. Do not worry about the array details yet."

```javascript
const cities = ["Lahore", "Karachi", "Islamabad"]

for (const city of cities) {
    console.log(`City: ${city}`)
}
```

Say: "for of automatically gives you each item one by one. No counter needed. Very clean. When we learn arrays properly, you will use for of constantly."

A simple example using template literals:

```javascript
const prices = [500, 1200, 800]

let total = 0
for (const price of prices) {
    total += price
}
console.log(`Total: Rs ${total}`)
```

## Step 7 — Student Exercises (30 minutes)

### Exercise 1 — Multiplication Table (10 minutes)

```javascript
// Print the full table of any number from 1 to 10
// Use a for loop and template literals
```

### Exercise 2 — Number Patterns (10 minutes)

```javascript
// Print all even numbers from 1 to 50 using a loop
// Print all numbers from 100 down to 1
// Print the sum of numbers from 1 to 100
```

### Exercise 3 — FizzBuzz (10 minutes)

A famous exercise:

```javascript
// Print numbers 1 to 30
// If divisible by 3, print "Fizz" instead
// If divisible by 5, print "Buzz" instead
// If divisible by both, print "FizzBuzz"
// Hint: use % which you learned, and if else
```

## Step 8 — Review (10 minutes)

Check FizzBuzz. Correct output? Loops and conditions working together? One good thing, one improve.

## Step 9 — Quiz and Homework (10 minutes)

### Quiz

1. What are the three parts of a for loop?
2. When do you use while instead of for?
3. What is an infinite loop and how do you avoid it?
4. What does break do? What does continue do?
5. How do you check if a number is divisible by 3?

### Homework

Create number-tasks.js. Using loops:

Print the times table of 8.
Print all odd numbers from 1 to 50.
Print numbers from 20 down to 1.
Calculate and print the sum of all numbers from 1 to 50.
Print a countdown from 10 to 1 then print "Blast off".
Use a while loop to keep doubling the number 1 until it goes above 1000, printing each step.

---

# PART 3 — What We Learned Today

## for Loop

```javascript
for (let i = 1; i <= 5; i++) {
    console.log(i)
}
```

Three parts: start, condition, update. Use when you know how many times.

## while Loop

```javascript
let count = 1
while (count <= 5) {
    console.log(count)
    count++
}
```

Use when you do not know how many times. Always update the counter.

## break and continue

```javascript
break      // stop the whole loop
continue   // skip this round, keep going
```

## for of (preview, arrays taught later)

```javascript
for (const item of list) {
    console.log(item)
}
```

Goes through each item in a list. Full array lesson comes soon.

## Divisibility Check

```javascript
if (number % 2 === 0) { }   // even
if (number % 3 === 0) { }   // divisible by 3
```

---

# PART 4 — After Class Notes

1. Did the for loop three parts make sense?
2. Did anyone create an infinite loop? Good lesson if so.
3. Was FizzBuzz solved by both?
4. Did they understand for of is a preview of arrays?
5. What to revise before Functions?

# Loops

A loop repeats code many times without writing it again and again. Loops are one of the most powerful tools in programming.

---

## Why Loops Exist

Imagine printing numbers 1 to 100 by hand.

```javascript
console.log(1)
console.log(2)
console.log(3)
// imagine writing this 100 times
```

A loop does it in three lines.

```javascript
for (let i = 1; i <= 100; i++) {
    console.log(i)
}
```

Any time you repeat something, use a loop.

---

## The for Loop

The for loop has three parts inside the parentheses.

```javascript
for (let i = 1; i <= 5; i++) {
    console.log(`Round ${i}`)
}
```

The three parts.

```
for (let i = 1;   i <= 5;   i++)
      start        check     update
```

The start creates a counter at 1 and runs once. The check runs before every round, and if it is true the code runs, if false the loop stops. The update runs after each round.

Step by step, the counter starts at 1. Is 1 less than or equal to 5? Yes, run the code, then add 1. Is 2 less than or equal to 5? Yes, continue. This repeats until the counter becomes 6, the check is false, and the loop stops.

Counting backwards.

```javascript
for (let i = 10; i >= 1; i--) {
    console.log(i)
}
console.log("Done")
```

Counting by 2.

```javascript
for (let i = 0; i <= 20; i += 2) {
    console.log(i)   // 0, 2, 4, 6 ... 20
}
```

A multiplication table.

```javascript
const number = 7

for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`)
}
```

---

## The while Loop

The while loop is simpler. It keeps going while a condition is true.

```javascript
let count = 1

while (count <= 5) {
    console.log(`Count ${count}`)
    count++
}
```

You must update the counter yourself inside the loop. If you forget count++, the condition stays true forever and the loop never stops. That is called an infinite loop and it freezes the browser.

Use while when you do not know how many times to repeat.

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

Here we do not know in advance how many months it takes for the money to run out. while is perfect for this.

Always make sure your loop condition will eventually become false. If you make an infinite loop, close the browser tab quickly.

---

## break and continue

break stops the whole loop immediately.

```javascript
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break
    }
    console.log(i)
}
// prints 1 2 3 4 then stops completely
```

continue skips the current round and moves to the next.

```javascript
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue
    }
    console.log(i)
}
// prints 1 2 3 4 6 7 8 9 10, skips only 5
```

break means stop everything. continue means skip just this one round and keep going. Notice loops and conditionals work together here.

---

## for of Loop

The for of loop goes through a list of items called an array. Arrays are covered in detail later, but here is how for of looks.

```javascript
const cities = ["Lahore", "Karachi", "Islamabad"]

for (const city of cities) {
    console.log(`City: ${city}`)
}
```

for of automatically gives you each item one by one. No counter needed. This is the cleanest way to go through a list.

A simple example that adds up numbers.

```javascript
const prices = [500, 1200, 800]

let total = 0
for (const price of prices) {
    total += price
}
console.log(`Total: Rs ${total}`)
```

---

## Checking Divisibility

The remainder operator is useful in loops for checking divisibility.

```javascript
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even`)
    }
}
```

A number is even if it divides by 2 with no remainder. It is divisible by any number if the remainder is 0.

---

## Quick Reference

```javascript
// for loop
for (let i = 1; i <= 5; i++) {
    console.log(i)
}

// while loop
let count = 1
while (count <= 5) {
    console.log(count)
    count++
}

// break stops the loop
// continue skips one round

// for of, goes through a list
for (const item of list) {
    console.log(item)
}

// divisibility
if (number % 2 === 0) { }   // even
```

for loop when you know how many times. while loop when you do not. Always make sure a while loop can end.

---

# Exercises

Copy the block below into a .js file and write your code under each exercise.

```javascript
// -------------------------------------------------------
// Exercise 1
// -------------------------------------------------------
// Use a for loop to print numbers from 1 to 20.

// Write your code here


// -------------------------------------------------------
// Exercise 2
// -------------------------------------------------------
// Use a for loop to print numbers from 20 down to 1.

// Write your code here


// -------------------------------------------------------
// Exercise 3
// -------------------------------------------------------
// Print the multiplication table of any number from 1 to 10 using a for loop and template literals.

// Write your code here


// -------------------------------------------------------
// Exercise 4
// -------------------------------------------------------
// Use a for loop to print all even numbers from 1 to 50.

// Write your code here


// -------------------------------------------------------
// Exercise 5
// -------------------------------------------------------
// Use a for loop to calculate and print the sum of all numbers from 1 to 100.

// Write your code here


// -------------------------------------------------------
// Exercise 6
// -------------------------------------------------------
// Use a while loop to print a countdown from 10 to 1, then print "Blast off".

// Write your code here


// -------------------------------------------------------
// Exercise 7
// -------------------------------------------------------
// Use a while loop that starts at 1 and keeps doubling the number, printing each step, until it goes above 1000.

// Write your code here


// -------------------------------------------------------
// Exercise 8
// -------------------------------------------------------
// Use a loop with break. Print numbers starting from 1, but stop the loop as soon as you reach 7.

// Write your code here


// -------------------------------------------------------
// Exercise 9
// -------------------------------------------------------
// Use a loop with continue. Print numbers from 1 to 15 but skip every multiple of 3.

// Write your code here


// -------------------------------------------------------
// Exercise 10
// -------------------------------------------------------
// Write FizzBuzz. Print numbers 1 to 30. For multiples of 3 print Fizz, for multiples of 5 print Buzz, for multiples of both print FizzBuzz, otherwise print the number.

// Write your code here


```

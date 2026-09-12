# Callbacks, Asynchronous Code, and Promises

So far your code has run in order, top to bottom. But some tasks take time, like waiting for a timer or loading data from the internet. JavaScript handles these without freezing by running them asynchronously. This lesson explains callbacks, the async idea, and promises, which are the modern way to handle waiting.

---

## Synchronous Versus Asynchronous

Synchronous code runs one line after another, each finishing before the next starts. That is what you have been writing.

Asynchronous code starts a task that takes time, then moves on without waiting, and comes back to it when it is done.

You saw a hint of this with setTimeout.

```javascript
console.log("First")

setTimeout(() => {
    console.log("Second")
}, 2000)

console.log("Third")

// Output order:
// First
// Third
// Second   (after 2 seconds)
```

The setTimeout did not block the code. JavaScript scheduled it, kept going, and ran it later. This not waiting is what asynchronous means.

---

## Callbacks

A callback is simply a function you give to another function, to be called later. You have used callbacks already, in forEach, in addEventListener, and in setTimeout.

```javascript
// the arrow function is a callback, called after 1 second
setTimeout(() => {
    console.log("Called back later")
}, 1000)
```

```javascript
// the arrow function is a callback, called for each item
[1, 2, 3].forEach((number) => {
    console.log(number)
})
```

A callback is a function passed to be run at the right time. That is the whole idea.

---

## The Problem With Callbacks

When you need several async steps in order, callbacks pile up inside each other and become hard to read.

```javascript
setTimeout(() => {
    console.log("Step 1")
    setTimeout(() => {
        console.log("Step 2")
        setTimeout(() => {
            console.log("Step 3")
        }, 1000)
    }, 1000)
}, 1000)
```

This deep nesting is called callback hell. It is hard to read and hard to fix. Promises were created to solve this.

---

## What a Promise Is

A promise represents a task that will finish in the future. It is like a receipt. You do not have the result yet, but you have a promise that you will get either a result or an error.

A promise is always in one of three states.

```
pending     the task is still running
fulfilled   the task finished successfully, you get a result
rejected    the task failed, you get an error
```

You usually consume promises made by other tools, like fetch which you meet next lesson. But here is how one looks when created.

```javascript
const myPromise = new Promise((resolve, reject) => {
    const success = true

    if (success) {
        resolve("It worked")   // fulfilled with a result
    } else {
        reject("It failed")    // rejected with an error
    }
})
```

resolve is called on success. reject is called on failure.

---

## Using a Promise With then and catch

You handle a promise's result with then, and its error with catch.

```javascript
myPromise
    .then((result) => {
        console.log(result)   // runs if resolved
    })
    .catch((error) => {
        console.log(error)    // runs if rejected
    })
```

then receives the resolved value. catch receives the error. This reads top to bottom, much cleaner than nested callbacks.

---

## A Realistic Promise Example

A function that returns a promise, simulating a task that takes time.

```javascript
function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id === 1) {
                resolve({ id: 1, name: "Ahmed" })
            } else {
                reject("User not found")
            }
        }, 1000)
    })
}

getUser(1)
    .then((user) => {
        console.log(`Found: ${user.name}`)
    })
    .catch((error) => {
        console.log(error)
    })
// after 1 second: Found: Ahmed
```

The task takes a second, then either resolves with a user or rejects with an error. then and catch handle each case.

---

## Chaining Promises

then can return a value, and the next then receives it. This lets you run steps in order without nesting.

```javascript
getUser(1)
    .then((user) => {
        console.log(user.name)
        return user.id           // pass to next then
    })
    .then((id) => {
        console.log(`ID is ${id}`)
    })
    .catch((error) => {
        console.log(error)
    })
```

Each then handles one step and passes to the next. One catch at the end handles any error along the way. This is the clean solution to callback hell.

---

## finally

finally runs at the end whether the promise succeeded or failed. Useful for cleanup, like hiding a loading spinner.

```javascript
getUser(1)
    .then((user) => console.log(user.name))
    .catch((error) => console.log(error))
    .finally(() => console.log("Done trying"))
```

---

## Quick Reference

```javascript
// synchronous: runs in order
// asynchronous: starts now, finishes later, does not block

// a callback is a function passed to run later
setTimeout(() => { }, 1000)
array.forEach((item) => { })

// a promise has three states
// pending, fulfilled, rejected

// creating a promise
const p = new Promise((resolve, reject) => {
    if (ok) resolve(value)
    else reject(error)
})

// using a promise
p.then((result) => { })     // on success
 .catch((error) => { })     // on failure
 .finally(() => { })        // always

// chaining
p.then((a) => { return b })
 .then((b) => { })
 .catch((e) => { })
```

Asynchronous code does not block. A callback runs later. A promise represents a future result, handled with then for success, catch for errors, and finally for cleanup.

---

# Exercises

Copy the block below into a .js file and write your code under each exercise.

```javascript
// -------------------------------------------------------
// Exercise 1
// -------------------------------------------------------
// Print three messages: one normally, one inside a setTimeout with a 2
// second delay, and one more normally. Observe the order they appear.

// Write your code here


// -------------------------------------------------------
// Exercise 2
// -------------------------------------------------------
// Write a function that takes a callback and calls it after a 1 second
// delay. Pass it a function that prints a message.

// Write your code here


// -------------------------------------------------------
// Exercise 3
// -------------------------------------------------------
// Create a simple promise that always resolves with a message. Use then
// to print the message.

// Write your code here


// -------------------------------------------------------
// Exercise 4
// -------------------------------------------------------
// Create a promise that rejects with an error message. Use catch to print
// the error.

// Write your code here


// -------------------------------------------------------
// Exercise 5
// -------------------------------------------------------
// Create a promise that resolves or rejects based on a boolean variable.
// Handle both cases with then and catch.

// Write your code here


// -------------------------------------------------------
// Exercise 6
// -------------------------------------------------------
// Write a function that returns a promise. Inside, use setTimeout to
// resolve after 1 second with a value. Use then to print the value.

// Write your code here


// -------------------------------------------------------
// Exercise 7
// -------------------------------------------------------
// Write a getUser function that returns a promise. It resolves with a user
// object if the id is 1, and rejects otherwise. Test both cases.

// Write your code here


// -------------------------------------------------------
// Exercise 8
// -------------------------------------------------------
// Chain two then calls, where the first returns a value that the second
// uses.

// Write your code here


// -------------------------------------------------------
// Exercise 9
// -------------------------------------------------------
// Add a finally to a promise chain that prints a message whether it
// succeeded or failed.

// Write your code here


// -------------------------------------------------------
// Exercise 10
// -------------------------------------------------------
// Show callback hell by nesting three setTimeouts, each printing a step.
// Then write a comment explaining why promises are better.

// Write your code here


```

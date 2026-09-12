# Error Handling

Things go wrong in real programs. A user types bad data, a network request fails, a value is missing. Error handling lets your program deal with problems gracefully instead of crashing. This lesson covers try, catch, throwing errors, and writing safe code.

---

## What Happens Without Error Handling

When an error happens and you do not handle it, your program stops. Everything after the error does not run.

```javascript
console.log("Before")

const data = JSON.parse("this is not valid json")   // throws an error

console.log("After")   // never runs, the program crashed
```

The bad JSON.parse throws an error, and the line after it never runs. Error handling lets you catch this and keep going.

---

## try and catch

Put risky code inside a try block. If anything in it throws an error, the catch block runs instead of crashing.

```javascript
console.log("Before")

try {
    const data = JSON.parse("not valid json")
    console.log(data)
} catch (error) {
    console.log("Could not parse the data")
}

console.log("After")   // now this runs
```

The program no longer crashes. The error is caught, a message is shown, and the code continues. The catch receives an error object with details.

---

## The Error Object

The catch block receives an error object. It has useful information.

```javascript
try {
    JSON.parse("bad")
} catch (error) {
    console.log(error.name)      // the type, like SyntaxError
    console.log(error.message)   // a description of what went wrong
}
```

error.message is the most useful. It tells you what happened.

---

## finally

finally runs after try and catch, whether or not there was an error. Use it for cleanup that must always happen.

```javascript
try {
    console.log("Trying")
} catch (error) {
    console.log("Caught an error")
} finally {
    console.log("This always runs")
}
```

---

## Throwing Your Own Errors

You can create your own errors with throw. This is useful for stopping when data is invalid. throw immediately jumps to the nearest catch.

```javascript
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero")
    }
    return a / b
}

try {
    console.log(divide(10, 2))   // 5
    console.log(divide(10, 0))   // throws
    console.log("This does not run")
} catch (error) {
    console.log(error.message)   // Cannot divide by zero
}
```

When b is zero, throw creates an error and the function stops. The catch handles it. Throwing lets you enforce rules and handle the failure cleanly.

---

## Validating With Thrown Errors

A common use is validating input and throwing a clear error when something is wrong.

```javascript
function createUser(name, age) {
    if (!name) {
        throw new Error("Name is required")
    }
    if (age < 0) {
        throw new Error("Age cannot be negative")
    }
    return { name, age }
}

try {
    const user = createUser("Ahmed", 25)
    console.log(user)              // works

    const bad = createUser("", 30) // throws
} catch (error) {
    console.log("Error:", error.message)
}
```

---

## Error Handling With async and await

You already saw this in the fetch lesson. try and catch is how you handle errors in async code.

```javascript
async function loadUser() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1")

        if (!response.ok) {
            throw new Error(`Server responded with ${response.status}`)
        }

        const user = await response.json()
        return user
    } catch (error) {
        console.log("Failed to load:", error.message)
        return null
    }
}
```

The try holds the risky fetch. If the network fails or you throw for a bad response, the catch handles it. Returning null lets the caller know it failed without crashing.

---

## Writing Safe Functions

Combine everything to write functions that never crash the program. Here is a safe way to read from localStorage.

```javascript
function loadFromStorage(key) {
    try {
        const saved = localStorage.getItem(key)
        if (!saved) {
            return null
        }
        return JSON.parse(saved)
    } catch (error) {
        console.log("Could not load", key)
        return null
    }
}

const data = loadFromStorage("user")
```

If the key is missing, or the saved data is broken, the function returns null instead of crashing. The rest of your program can check for null and carry on.

---

## When to Use Error Handling

Use try and catch around code that can fail for reasons outside your control.

```
Use it for:
- fetch and network requests
- JSON.parse on data you did not create
- reading from storage
- any operation that might fail

You usually do not need it for:
- simple math
- basic variable assignments
- code you fully control that cannot fail
```

Do not wrap every line in try and catch. Use it where real failure is possible.

---

## Quick Reference

```javascript
// basic try catch
try {
    // risky code
} catch (error) {
    console.log(error.message)
} finally {
    // always runs, optional
}

// the error object
error.name      // type of error
error.message   // description

// throw your own error
if (invalid) {
    throw new Error("Something is wrong")
}

// async error handling
async function getData() {
    try {
        const res = await fetch(url)
        if (!res.ok) throw new Error("Bad response")
        return await res.json()
    } catch (error) {
        console.log(error.message)
        return null
    }
}
```

try holds risky code, catch handles the error, finally always runs. throw creates your own errors. Use error handling for fetch, JSON.parse, storage, and anything that can fail.

---

# Exercises

Copy the block below into a .js file and write your code under each exercise.

```javascript
// -------------------------------------------------------
// Exercise 1
// -------------------------------------------------------
// Write code that tries to JSON.parse an invalid string inside a try
// block, and catches the error to print a friendly message. Confirm the
// program continues after.

// Write your code here


// -------------------------------------------------------
// Exercise 2
// -------------------------------------------------------
// In a catch block, print the error name and the error message separately.

// Write your code here


// -------------------------------------------------------
// Exercise 3
// -------------------------------------------------------
// Write a try, catch, and finally where the finally prints a message that
// always runs. Test it once with an error and once without.

// Write your code here


// -------------------------------------------------------
// Exercise 4
// -------------------------------------------------------
// Write a divide function that throws an error if the second number is
// zero. Call it inside try and catch, testing both a valid and an invalid
// division.

// Write your code here


// -------------------------------------------------------
// Exercise 5
// -------------------------------------------------------
// Write a function that validates a name and age, throwing a clear error
// for each problem. Test it with good and bad input inside try and catch.

// Write your code here


// -------------------------------------------------------
// Exercise 6
// -------------------------------------------------------
// Write a function that throws an error if a number is negative. Use it in
// a loop over several numbers, catching and reporting each bad one without
// stopping the loop.

// Write your code here


// -------------------------------------------------------
// Exercise 7
// -------------------------------------------------------
// Write an async function that fetches from a wrong url so it fails, and
// catch the error to print a message.

// Write your code here


// -------------------------------------------------------
// Exercise 8
// -------------------------------------------------------
// Write an async fetch that checks response.ok and throws an error if the
// response is not ok. Catch and report it.

// Write your code here


// -------------------------------------------------------
// Exercise 9
// -------------------------------------------------------
// Write a safe loadFromStorage function that returns parsed data from
// localStorage, or null if the key is missing or the data is broken. Test
// all three cases.

// Write your code here


// -------------------------------------------------------
// Exercise 10
// -------------------------------------------------------
// Write a safe function that takes a JSON string and returns the parsed
// object, or a default object if parsing fails. Test it with valid and
// invalid JSON.

// Write your code here


```

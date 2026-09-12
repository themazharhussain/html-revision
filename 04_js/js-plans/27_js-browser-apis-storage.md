# Browser APIs and localStorage

The browser gives JavaScript many built in tools called APIs. These let you do things like save data, get the user's location, set timers, and more. This lesson covers the most useful ones, with a focus on localStorage, which saves data that survives a page refresh.

---

## What a Browser API Is

An API is a set of ready made tools the browser provides. You have already used some without naming them. document is a browser API for the page. console is a browser API for logging. Here we cover a few more you will use often.

---

## Timers: setTimeout

setTimeout runs a function once after a delay. The delay is in milliseconds, so 1000 is one second.

```javascript
setTimeout(() => {
    console.log("This runs after 2 seconds")
}, 2000)

console.log("This runs first")
```

The message after 2 seconds waits, while the code below runs immediately. This is your first taste of asynchronous behavior, which you study fully in the next lessons.

You can cancel a timer before it runs.

```javascript
const timerId = setTimeout(() => {
    console.log("You will not see this")
}, 3000)

clearTimeout(timerId)   // cancels it
```

---

## Timers: setInterval

setInterval runs a function again and again, every set number of milliseconds.

```javascript
let count = 0

const intervalId = setInterval(() => {
    count = count + 1
    console.log(count)

    if (count === 5) {
        clearInterval(intervalId)   // stop after 5 times
        console.log("Done")
    }
}, 1000)
```

This prints a number every second and stops after five. clearInterval stops the repeating. Always have a way to stop an interval, or it runs forever.

---

## localStorage

localStorage saves data in the browser that stays even after the page is closed and reopened. It is perfect for remembering user preferences, saved items, or any data you want to persist.

localStorage only stores strings. To store objects or arrays, you convert them with JSON, which you already learned.

### Saving and reading a simple value

```javascript
// save
localStorage.setItem("username", "Ahmed")

// read
const name = localStorage.getItem("username")
console.log(name)   // Ahmed

// remove one item
localStorage.removeItem("username")

// clear everything
localStorage.clear()
```

setItem takes a key and a value. getItem takes the key and returns the value. If the key does not exist, getItem returns null.

---

## Storing Objects and Arrays

Since localStorage only holds strings, use JSON.stringify to save and JSON.parse to read.

```javascript
const user = {
    name: "Ahmed",
    age: 25,
    city: "Lahore"
}

// save an object
localStorage.setItem("user", JSON.stringify(user))

// read it back
const saved = JSON.parse(localStorage.getItem("user"))

console.log(saved.name)   // Ahmed
console.log(saved.age)    // 25
```

This is exactly why you learned JSON. Turn the object into a string to save it, turn the string back into an object to use it.

Saving an array works the same way.

```javascript
const todos = ["Buy milk", "Call Ali", "Finish project"]

localStorage.setItem("todos", JSON.stringify(todos))

const savedTodos = JSON.parse(localStorage.getItem("todos"))
console.log(savedTodos)   // ["Buy milk", "Call Ali", "Finish project"]
```

---

## A Persistent Counter

A counter that remembers its value even after you refresh the page.

```javascript
// read the saved count, or start at 0 if none
let count = Number(localStorage.getItem("count")) || 0

const button = document.querySelector("#button")
const display = document.querySelector("#display")

display.textContent = count

button.addEventListener("click", () => {
    count = count + 1
    display.textContent = count
    localStorage.setItem("count", count)   // save after each click
})
```

Now even if you close the tab and come back, the count is remembered. This is the power of localStorage.

---

## sessionStorage

sessionStorage works exactly like localStorage but the data is cleared when the tab is closed. Use it for temporary data that should not last beyond the session.

```javascript
sessionStorage.setItem("temp", "some value")
const value = sessionStorage.getItem("temp")
```

Same methods, shorter life.

---

## The Geolocation API

The browser can give you the user's location, with their permission.

```javascript
navigator.geolocation.getCurrentPosition((position) => {
    console.log(position.coords.latitude)
    console.log(position.coords.longitude)
})
```

The browser asks the user for permission first. This is used in maps, weather apps, and delivery apps.

---

## A Safe Way to Read Storage

Because getItem returns null when nothing is saved, and JSON.parse fails on null in some cases, a safe pattern checks first.

```javascript
function loadTodos() {
    const saved = localStorage.getItem("todos")
    if (saved) {
        return JSON.parse(saved)
    }
    return []   // return an empty array if nothing saved
}

const todos = loadTodos()
```

This returns the saved list, or an empty list if nothing was stored yet.

---

## Quick Reference

```javascript
// timers
setTimeout(() => { }, 2000)      // once after 2 seconds
setInterval(() => { }, 1000)     // every 1 second
clearTimeout(id)                 // cancel a timeout
clearInterval(id)                // stop an interval

// localStorage, survives refresh
localStorage.setItem("key", "value")
localStorage.getItem("key")        // value or null
localStorage.removeItem("key")
localStorage.clear()

// store objects and arrays with JSON
localStorage.setItem("user", JSON.stringify(user))
const user = JSON.parse(localStorage.getItem("user"))

// sessionStorage, cleared when tab closes
sessionStorage.setItem("key", "value")

// geolocation
navigator.geolocation.getCurrentPosition((pos) => {
    console.log(pos.coords.latitude, pos.coords.longitude)
})
```

localStorage saves strings that survive a refresh. Use JSON.stringify to save objects and JSON.parse to read them. getItem returns null when nothing is saved.

---

# Exercises

Create an HTML file with buttons and displays, then write your code in a linked JavaScript file.

```javascript
// -------------------------------------------------------
// Exercise 1
// -------------------------------------------------------
// Use setTimeout to print a message after 3 seconds. Print another
// message immediately and observe the order.

// Write your code here


// -------------------------------------------------------
// Exercise 2
// -------------------------------------------------------
// Use setInterval to print a counting number every second. Stop it after
// it reaches 5 using clearInterval.

// Write your code here


// -------------------------------------------------------
// Exercise 3
// -------------------------------------------------------
// Save your name to localStorage. Then read it back and print it.

// Write your code here


// -------------------------------------------------------
// Exercise 4
// -------------------------------------------------------
// Save a value, then remove it with removeItem, then try to read it and
// confirm it returns null.

// Write your code here


// -------------------------------------------------------
// Exercise 5
// -------------------------------------------------------
// Create an object with a few properties. Save it to localStorage using
// JSON.stringify. Read it back with JSON.parse and print one property.

// Write your code here


// -------------------------------------------------------
// Exercise 6
// -------------------------------------------------------
// Save an array of favourite foods to localStorage. Read it back and
// print how many items it has.

// Write your code here


// -------------------------------------------------------
// Exercise 7
// -------------------------------------------------------
// Build a button that increases a counter and saves it to localStorage.
// When the page loads, read the saved count and show it, so it survives
// a refresh.

// Write your code here


// -------------------------------------------------------
// Exercise 8
// -------------------------------------------------------
// Create a text input and a save button. When save is clicked, store the
// input text in localStorage. When the page loads, fill the input with the
// saved text if it exists.

// Write your code here


// -------------------------------------------------------
// Exercise 9
// -------------------------------------------------------
// Write a safe load function that returns a saved array from localStorage,
// or an empty array if nothing is saved. Test it before and after saving.

// Write your code here


// -------------------------------------------------------
// Exercise 10
// -------------------------------------------------------
// Use the geolocation API to get the user's latitude and longitude and
// print them. Handle the permission prompt.

// Write your code here


```

# async, await, the Event Loop, and fetch

Promises are good, but async and await make asynchronous code even cleaner, letting it read like normal top to bottom code. This lesson also explains the event loop, which is how JavaScript manages waiting tasks, and introduces fetch, the tool for getting real data from the internet.

---

## async and await

async and await are a nicer way to work with promises. Instead of then and catch, you write code that looks synchronous.

You put async before a function. Inside it, await pauses until a promise finishes and gives you the result directly.

Compare the two styles. First with then.

```javascript
function getUser() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Ahmed"), 1000)
    })
}

getUser().then((name) => {
    console.log(name)
})
```

Now with async and await.

```javascript
async function showUser() {
    const name = await getUser()
    console.log(name)
}

showUser()
```

The await line waits for the promise, then puts the result straight into name. No then needed. The code reads naturally, one line after another.

---

## The Rules of async and await

await only works inside an async function.

```javascript
async function run() {
    const result = await somePromise()
    console.log(result)
}
```

An async function always returns a promise itself. That is fine, you usually just call it.

await pauses only inside its own function. The rest of your program keeps running. It does not freeze the whole page.

---

## Handling Errors With try and catch

With then you used catch. With async and await you use try and catch, which you may recognize as a general error handling tool.

```javascript
async function getData() {
    try {
        const result = await somePromise()
        console.log(result)
    } catch (error) {
        console.log("Something went wrong:", error)
    }
}
```

The code you try runs normally. If any awaited promise rejects, the catch block handles the error. This is the standard pattern for async code.

---

## The Event Loop

Here is how JavaScript manages all this without freezing. JavaScript can only do one thing at a time, but it does not sit and wait for slow tasks. This is managed by the event loop.

The simple picture.

```
1. JavaScript runs your normal code on the call stack.
2. When it meets a slow task (timer, fetch), it hands it off
   to the browser to handle in the background.
3. JavaScript keeps running the rest of your code.
4. When the slow task finishes, its callback waits in a queue.
5. The event loop puts that callback back on the stack to run
   once the normal code is done.
```

This is why in earlier examples the setTimeout message came last. The timer was handed off, normal code finished first, then the timer's callback ran. The event loop is the manager that makes single threaded JavaScript feel like it can juggle many things.

You do not control the event loop directly. Understanding it explains why async code runs in the order it does.

---

## fetch: Getting Data From the Internet

fetch is a browser tool that gets data from a web address. It returns a promise, so you use it with await. This is how apps load real data from servers.

The basic pattern.

```javascript
async function getData() {
    const response = await fetch("https://api.example.com/data")
    const data = await response.json()
    console.log(data)
}
```

There are two awaits and this trips people up. The first await fetch gets a response object. The second await response.json() reads the actual data out of the response and turns it from JSON into a usable object. You need both.

---

## A Real fetch Example

Getting a random user from a free public API.

```javascript
async function getUser() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
        const user = await response.json()

        console.log(user.name)
        console.log(user.email)
    } catch (error) {
        console.log("Failed to load user:", error)
    }
}

getUser()
```

This fetches one user, reads the JSON, and prints their details. The try and catch handles any network problem.

---

## Checking if the Request Worked

fetch only rejects on a network failure. If the server responds with an error like not found, you must check response.ok yourself.

```javascript
async function getData() {
    try {
        const response = await fetch("https://api.example.com/data")

        if (!response.ok) {
            throw new Error(`Server error: ${response.status}`)
        }

        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error.message)
    }
}
```

response.ok is true for success. response.status is the number code, like 404 for not found. throw creates an error that the catch will handle.

---

## Showing Loading and Error States

In a real app, you show a loading message while waiting, and an error message if it fails. This uses the DOM skills you have.

```javascript
async function loadData() {
    const display = document.querySelector("#display")

    display.textContent = "Loading..."

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
        const user = await response.json()

        display.textContent = `Name: ${user.name}`
    } catch (error) {
        display.textContent = "Failed to load. Please try again."
    }
}

loadData()
```

Show loading before the fetch, show the result on success, show an error message on failure. This is the standard shape of loading data in real apps.

---

## Fetching a List and Displaying It

Combining fetch with building elements from earlier lessons.

```javascript
async function loadUsers() {
    const list = document.querySelector("#userList")

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const users = await response.json()   // an array of user objects

        users.forEach((user) => {
            const item = document.createElement("li")
            item.textContent = user.name
            list.appendChild(item)
        })
    } catch (error) {
        console.log("Error loading users")
    }
}

loadUsers()
```

fetch returns an array of objects. You loop through with forEach, create an element for each, and add it to the page. This is exactly how real websites show lists of data.

---

## Quick Reference

```javascript
// async function, allows await inside
async function getData() {
    // await pauses for a promise and gives the result
    const result = await somePromise()
    console.log(result)
}

// error handling with try catch
async function getData() {
    try {
        const result = await somePromise()
    } catch (error) {
        console.log(error)
    }
}

// fetch, two awaits
const response = await fetch(url)   // get the response
const data = await response.json()  // read the data

// check the response worked
if (!response.ok) {
    throw new Error(`Error: ${response.status}`)
}

// loading and error states
display.textContent = "Loading..."   // before
// ...fetch...
display.textContent = data           // on success
// catch: show error message
```

async lets you use await. await waits for a promise and gives the result. Use try and catch for errors. fetch needs two awaits: one for the response, one for the json.

---

# Exercises

Copy the block below into a .js file. For fetch exercises use the free API at https://jsonplaceholder.typicode.com

```javascript
// -------------------------------------------------------
// Exercise 1
// -------------------------------------------------------
// Write an async function that awaits a promise which resolves after 1
// second, then prints the result.

// Write your code here


// -------------------------------------------------------
// Exercise 2
// -------------------------------------------------------
// Rewrite a then and catch promise chain using async, await, try, and
// catch instead.

// Write your code here


// -------------------------------------------------------
// Exercise 3
// -------------------------------------------------------
// Write an async function that awaits a promise which rejects, and catch
// the error to print it.

// Write your code here


// -------------------------------------------------------
// Exercise 4
// -------------------------------------------------------
// Use fetch to get the user at
// https://jsonplaceholder.typicode.com/users/1
// Read the json and print the user's name and email.

// Write your code here


// -------------------------------------------------------
// Exercise 5
// -------------------------------------------------------
// Wrap the previous fetch in try and catch so that a network error is
// handled gracefully.

// Write your code here


// -------------------------------------------------------
// Exercise 6
// -------------------------------------------------------
// Fetch a post from https://jsonplaceholder.typicode.com/posts/1
// Check response.ok and throw an error if it is not ok. Print the post
// title.

// Write your code here


// -------------------------------------------------------
// Exercise 7
// -------------------------------------------------------
// Add a loading message to an element before a fetch, then replace it with
// the result when the data arrives.

// Write your code here


// -------------------------------------------------------
// Exercise 8
// -------------------------------------------------------
// Fetch the full list of users from
// https://jsonplaceholder.typicode.com/users
// It returns an array. Print how many users there are.

// Write your code here


// -------------------------------------------------------
// Exercise 9
// -------------------------------------------------------
// Fetch the list of users and display each user's name as a list item on
// the page, using createElement in a loop.

// Write your code here


// -------------------------------------------------------
// Exercise 10
// -------------------------------------------------------
// Build a small app: a button that when clicked fetches a random post from
// https://jsonplaceholder.typicode.com/posts/ followed by a number from 1
// to 100, and shows its title on the page, with loading and error states.

// Write your code here


```

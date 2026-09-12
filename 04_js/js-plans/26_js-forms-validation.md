# Forms and Validation

Forms are how users send information to your page: logging in, signing up, searching, placing an order. This lesson shows how to read form data with JavaScript, stop the default page reload, and check the data before accepting it.

---

## The Form Submit Event

When a user submits a form, the browser by default reloads the page. In a JavaScript app you almost always want to stop that and handle the data yourself. Listen for the submit event and call preventDefault.

```html
<form id="myForm">
    <input id="name" type="text">
    <button type="submit">Send</button>
</form>
```

```javascript
const form = document.querySelector("#myForm")

form.addEventListener("submit", (e) => {
    e.preventDefault()   // stop the page reload
    console.log("Form submitted")
})
```

Always call preventDefault first in a submit handler. Without it, the page reloads and your code never finishes.

---

## Reading Input Values

Read what the user typed using the value property of each input.

```html
<form id="signupForm">
    <input id="username" type="text">
    <input id="email" type="email">
    <input id="password" type="password">
    <button type="submit">Sign up</button>
</form>
```

```javascript
const form = document.querySelector("#signupForm")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const username = document.querySelector("#username").value
    const email = document.querySelector("#email").value
    const password = document.querySelector("#password").value

    console.log(username, email, password)
})
```

Always trim the values to remove accidental spaces at the ends.

```javascript
const username = document.querySelector("#username").value.trim()
```

---

## Basic Validation

Validation means checking the data is acceptable before using it. You collect any problems and only proceed if there are none.

```javascript
form.addEventListener("submit", (e) => {
    e.preventDefault()

    const username = document.querySelector("#username").value.trim()
    const email = document.querySelector("#email").value.trim()
    const password = document.querySelector("#password").value

    const errors = []

    if (username === "") {
        errors.push("Username is required")
    }
    if (username.length < 3) {
        errors.push("Username must be at least 3 characters")
    }
    if (!email.includes("@")) {
        errors.push("Email must contain an @ symbol")
    }
    if (password.length < 8) {
        errors.push("Password must be at least 8 characters")
    }

    if (errors.length > 0) {
        console.log("Problems found:")
        errors.forEach((error) => console.log(error))
        return
    }

    console.log("All good, form accepted")
})
```

The pattern is simple. Make an empty errors array. Check each rule and push a message if it fails. If there are any errors, show them and return early. If there are none, proceed.

---

## Showing Errors on the Page

Instead of logging errors, show them to the user by putting them in an element.

```html
<form id="signupForm">
    <input id="username" type="text">
    <p id="error" style="color: red;"></p>
    <button type="submit">Sign up</button>
</form>
```

```javascript
const form = document.querySelector("#signupForm")
const errorDisplay = document.querySelector("#error")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const username = document.querySelector("#username").value.trim()

    if (username.length < 3) {
        errorDisplay.textContent = "Username must be at least 3 characters"
        return
    }

    errorDisplay.textContent = ""   // clear any old error
    console.log("Accepted:", username)
})
```

You update the error element with a message when validation fails, and clear it when everything passes.

---

## Live Validation

You can validate as the user types, using the input event from the last lesson, instead of waiting for submit.

```javascript
const emailField = document.querySelector("#email")
const emailError = document.querySelector("#emailError")

emailField.addEventListener("input", () => {
    const value = emailField.value.trim()

    if (!value.includes("@")) {
        emailError.textContent = "Email needs an @ symbol"
    } else {
        emailError.textContent = ""
    }
})
```

This gives instant feedback while the user types, which feels smooth and helpful.

---

## Clearing a Form

After a successful submit, you often want to clear the fields. Set each value to an empty string, or use the form reset method.

```javascript
form.addEventListener("submit", (e) => {
    e.preventDefault()

    // ...read and validate...

    form.reset()   // clears all fields in the form
})
```

---

## A Complete Example

A small signup form that validates and shows the result.

```javascript
const form = document.querySelector("#signupForm")
const message = document.querySelector("#message")

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const name = document.querySelector("#name").value.trim()
    const email = document.querySelector("#email").value.trim()
    const age = Number(document.querySelector("#age").value)

    const errors = []

    if (name === "") errors.push("Name is required")
    if (!email.includes("@")) errors.push("Email is invalid")
    if (age < 18) errors.push("You must be at least 18")

    if (errors.length > 0) {
        message.style.color = "red"
        message.textContent = errors.join(". ")
        return
    }

    message.style.color = "green"
    message.textContent = `Welcome ${name}`
    form.reset()
})
```

This uses arrays, join, template literals, conditions, and DOM changes, all together. Notice age is converted with Number because input values are always strings.

---

## Quick Reference

```javascript
// handle submit
form.addEventListener("submit", (e) => {
    e.preventDefault()   // always first

    // read values, always trim text
    const name = document.querySelector("#name").value.trim()

    // numbers need conversion
    const age = Number(document.querySelector("#age").value)

    // validate
    const errors = []
    if (name === "") errors.push("Name required")
    if (errors.length > 0) {
        // show errors
        return
    }

    // proceed, then clear
    form.reset()
})

// live validation
input.addEventListener("input", () => {
    // check input.value as the user types
})
```

Always preventDefault on submit. Read values with value and trim them. Convert numbers with Number. Collect errors in an array and return early if any exist.

---

# Exercises

Create HTML forms for these, then write your code in a linked JavaScript file.

```javascript
// -------------------------------------------------------
// Exercise 1
// -------------------------------------------------------
// Create a form with one text input and a submit button. On submit, stop
// the page reload and print the input value.

// Write your code here


// -------------------------------------------------------
// Exercise 2
// -------------------------------------------------------
// Create a form with name and email fields. On submit, read and print
// both values, trimmed.

// Write your code here


// -------------------------------------------------------
// Exercise 3
// -------------------------------------------------------
// Add validation so that if the name field is empty, an error message
// appears on the page instead of accepting the form.

// Write your code here


// -------------------------------------------------------
// Exercise 4
// -------------------------------------------------------
// Validate an email field by checking it contains an @ symbol. Show an
// error on the page if it does not.

// Write your code here


// -------------------------------------------------------
// Exercise 5
// -------------------------------------------------------
// Create a password field. Validate that it is at least 8 characters.
// Show an error if it is too short.

// Write your code here


// -------------------------------------------------------
// Exercise 6
// -------------------------------------------------------
// Collect multiple validation errors into an array and display all of
// them at once if any exist.

// Write your code here


// -------------------------------------------------------
// Exercise 7
// -------------------------------------------------------
// Create an age field. Convert it to a number and validate that the age
// is 18 or more.

// Write your code here


// -------------------------------------------------------
// Exercise 8
// -------------------------------------------------------
// Add live validation to an email field using the input event, showing an
// error as the user types if there is no @ symbol.

// Write your code here


// -------------------------------------------------------
// Exercise 9
// -------------------------------------------------------
// After a successful submit, clear the form using reset and show a success
// message on the page.

// Write your code here


// -------------------------------------------------------
// Exercise 10
// -------------------------------------------------------
// Build a complete signup form with name, email, and age. Validate all
// three, show all errors if any, or show a welcome message and clear the
// form if everything is valid.

// Write your code here


```

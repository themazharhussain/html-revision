# Events and Event Delegation

An event is something that happens on the page: a click, a key press, a form submit, a mouse move. JavaScript can listen for events and run code in response. This is what makes a page respond to the user.

---

## Listening for a Click

The main tool is addEventListener. You call it on an element, tell it which event to listen for, and give it a function to run when the event happens.

```html
<button id="myButton">Click me</button>
```

```javascript
const button = document.querySelector("#myButton")

button.addEventListener("click", function() {
    console.log("Button was clicked")
})
```

Every time the button is clicked, the function runs. The function that runs on an event is called the handler.

You can use an arrow function too.

```javascript
button.addEventListener("click", () => {
    console.log("Clicked")
})
```

---

## A Real Click Example

Changing the page when a button is clicked.

```javascript
const button = document.querySelector("#myButton")
const title = document.querySelector("#title")

button.addEventListener("click", () => {
    title.textContent = "You clicked the button"
    title.style.color = "green"
})
```

Now clicking the button changes the heading. This combines events with the DOM changes from the last lesson.

---

## A Counter Example

Keeping a count across clicks.

```javascript
const button = document.querySelector("#countButton")
const display = document.querySelector("#display")

let count = 0

button.addEventListener("click", () => {
    count = count + 1
    display.textContent = `Clicked ${count} times`
})
```

The count variable lives outside the handler, so it keeps its value between clicks. Each click updates it and shows the new number.

---

## The Event Object

When an event happens, the browser passes information about it to your handler. Accept it as a parameter, usually named e or event.

```javascript
button.addEventListener("click", (e) => {
    console.log(e.type)     // "click"
    console.log(e.target)   // the element that was clicked
})
```

e.target is the element the event happened on. This is very useful, especially with delegation later.

---

## preventDefault

Some elements have default behavior. A form submits and reloads the page. A link navigates away. preventDefault stops that default so you can handle it yourself.

```javascript
const link = document.querySelector("#myLink")

link.addEventListener("click", (e) => {
    e.preventDefault()   // stop the link from navigating
    console.log("Link click handled, but did not navigate")
})
```

This is essential for forms, which you will see next.

---

## Common Event Types

There are many events. Here are the ones you use most.

```javascript
// mouse
element.addEventListener("click", handler)
element.addEventListener("dblclick", handler)
element.addEventListener("mouseover", handler)   // mouse enters
element.addEventListener("mouseout", handler)    // mouse leaves

// keyboard
element.addEventListener("keydown", handler)     // key pressed down
element.addEventListener("keyup", handler)       // key released

// form
element.addEventListener("submit", handler)
element.addEventListener("change", handler)
element.addEventListener("input", handler)       // fires on every keystroke
```

---

## Keyboard Events

Keyboard events tell you which key was pressed through e.key.

```javascript
document.addEventListener("keydown", (e) => {
    console.log(`You pressed ${e.key}`)

    if (e.key === "Enter") {
        console.log("Enter was pressed")
    }
    if (e.key === "Escape") {
        console.log("Escape was pressed")
    }
})
```

---

## input Event

The input event fires every time the user types in a field. Great for live feedback.

```html
<input id="nameField">
<p id="preview"></p>
```

```javascript
const field = document.querySelector("#nameField")
const preview = document.querySelector("#preview")

field.addEventListener("input", (e) => {
    preview.textContent = `You typed: ${e.target.value}`
})
```

As the user types, the preview updates instantly. e.target.value is the current text in the field.

---

## The Problem With Many Elements

Suppose you have a list and you want each item to respond to a click. You could add a listener to each one. But what about items you add later? They would have no listener. Adding listeners to many elements is also wasteful.

```javascript
// This only works for items that exist right now
const items = document.querySelectorAll(".item")
items.forEach((item) => {
    item.addEventListener("click", () => {
        console.log("clicked")
    })
})
```

---

## Event Delegation

Event delegation solves this. Instead of listening on each item, you listen on the parent. When a click happens inside the parent, you check e.target to see what was actually clicked. This works for current and future items with one listener.

```html
<ul id="list">
    <li class="item">Apple</li>
    <li class="item">Mango</li>
    <li class="item">Banana</li>
</ul>
```

```javascript
const list = document.querySelector("#list")

list.addEventListener("click", (e) => {
    if (e.target.classList.contains("item")) {
        console.log(`You clicked ${e.target.textContent}`)
    }
})
```

One listener on the list handles clicks on any item, even items added later. You check e.target to make sure the click was on an item and not somewhere else in the list.

A common use is a delete button on each item.

```javascript
const list = document.querySelector("#list")

list.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-btn")) {
        e.target.closest("li").remove()
    }
})
```

Here clicking a delete button finds its list item and removes it. closest finds the nearest parent matching the selector.

---

## Quick Reference

```javascript
// listen for an event
element.addEventListener("click", (e) => {
    // handler code
})

// the event object
e.target          // the element that triggered it
e.type            // the event name
e.key             // which key, for keyboard events
e.target.value    // input value, for form fields
e.preventDefault() // stop default behavior

// common events
"click", "dblclick", "mouseover", "mouseout"
"keydown", "keyup"
"submit", "change", "input"

// event delegation, listen on parent
parent.addEventListener("click", (e) => {
    if (e.target.classList.contains("item")) {
        // handle the item click
    }
})
```

addEventListener runs a function when an event happens. e.target is what was acted on. Delegation puts one listener on a parent to handle many children.

---

# Exercises

Create an HTML file with buttons, an input, and a list, then write your code in a linked JavaScript file.

```javascript
// -------------------------------------------------------
// Exercise 1
// -------------------------------------------------------
// Add a button. When it is clicked, print a message to the console.

// Write your code here


// -------------------------------------------------------
// Exercise 2
// -------------------------------------------------------
// Add a button and a heading. When the button is clicked, change the
// heading's text.

// Write your code here


// -------------------------------------------------------
// Exercise 3
// -------------------------------------------------------
// Add a button and a display element. Count how many times the button is
// clicked and show the count on the page.

// Write your code here


// -------------------------------------------------------
// Exercise 4
// -------------------------------------------------------
// Add a button. In the handler, use the event object to print the type of
// the event and the element that was clicked.

// Write your code here


// -------------------------------------------------------
// Exercise 5
// -------------------------------------------------------
// Add a link. Use preventDefault so clicking it does not navigate, and
// print a message instead.

// Write your code here


// -------------------------------------------------------
// Exercise 6
// -------------------------------------------------------
// Add an input field and a paragraph. As the user types, show the current
// text in the paragraph using the input event.

// Write your code here


// -------------------------------------------------------
// Exercise 7
// -------------------------------------------------------
// Listen for keydown on the whole document. Print which key was pressed.
// Print a special message when Enter is pressed.

// Write your code here


// -------------------------------------------------------
// Exercise 8
// -------------------------------------------------------
// Add a button that toggles a class called active on a box each time it
// is clicked, changing the box appearance.

// Write your code here


// -------------------------------------------------------
// Exercise 9
// -------------------------------------------------------
// Create a list with several items. Use event delegation on the list so
// that clicking any item prints its text.

// Write your code here


// -------------------------------------------------------
// Exercise 10
// -------------------------------------------------------
// Create a list where each item has a delete button. Use event delegation
// so clicking a delete button removes its item from the list.

// Write your code here


```

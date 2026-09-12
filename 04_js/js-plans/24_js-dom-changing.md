# Changing, Creating, and Removing Elements

In the last lesson you learned to find and read elements. Now you learn to change them. This is where the page truly becomes interactive: changing text, changing styles, adding new elements, and removing elements, all from JavaScript.

---

## Changing Text

Set textContent to change the words inside an element.

```html
<h1 id="title">Old Title</h1>
```

```javascript
const title = document.querySelector("#title")

title.textContent = "New Title"
// the page now shows New Title
```

Reading uses textContent. Writing uses textContent too. Read on the right of the equals sign, write on the left.

---

## Changing HTML

Set innerHTML to put HTML inside an element, including tags.

```javascript
const box = document.querySelector("#box")

box.innerHTML = "<strong>Bold</strong> and normal text"
```

Be careful with innerHTML when the content comes from a user, because it can run unwanted code. For plain text, prefer textContent. Use innerHTML when you deliberately need tags.

---

## Changing Styles

The style property lets you change CSS from JavaScript. CSS property names that have a dash become camelCase here. For example background-color becomes backgroundColor.

```javascript
const title = document.querySelector("#title")

title.style.color = "red"
title.style.fontSize = "40px"
title.style.backgroundColor = "yellow"
title.style.padding = "20px"
```

Each style is set as a string. Remember the camelCase: font-size becomes fontSize, background-color becomes backgroundColor.

---

## Changing Classes With classList

Changing individual styles is fine for a few, but usually it is cleaner to define a class in CSS and add or remove it with JavaScript. classList is the tool for this.

```css
.active {
    color: white;
    background-color: green;
}
```

```javascript
const box = document.querySelector("#box")

box.classList.add("active")       // add the class
box.classList.remove("active")    // remove the class
box.classList.toggle("active")    // add if missing, remove if present
box.classList.contains("active")  // true or false
```

toggle is especially useful. It turns a class on and off with one call, perfect for things like a dark mode switch or an open menu.

---

## Changing Attributes

Set attributes directly or with setAttribute.

```javascript
const link = document.querySelector("#link")
const image = document.querySelector("#photo")

link.href = "https://github.com"
image.src = "dog.jpg"
image.setAttribute("alt", "A dog")
```

---

## Creating New Elements

You can build brand new elements and add them to the page. This is done in three steps: create the element, set its content, then attach it to the page.

```javascript
// step 1: create the element
const newItem = document.createElement("li")

// step 2: set its content
newItem.textContent = "New list item"

// step 3: attach it to a parent already on the page
const list = document.querySelector("ul")
list.appendChild(newItem)
```

appendChild adds the new element as the last child of the parent. Now it appears on the page.

You can set more on the element before attaching it.

```javascript
const card = document.createElement("div")
card.textContent = "Product card"
card.classList.add("card")
card.style.padding = "20px"

document.body.appendChild(card)
```

---

## append and prepend

appendChild puts the element at the end. There are also newer methods.

```javascript
const list = document.querySelector("ul")
const item = document.createElement("li")
item.textContent = "Item"

list.append(item)    // add at the end
list.prepend(item)   // add at the start
```

---

## Removing Elements

Remove an element with the remove method.

```javascript
const box = document.querySelector("#box")

box.remove()   // the element is gone from the page
```

---

## Building a List From an Array

A very common real task. You have an array of data and you want to show it on the page. Loop through the array, create an element for each item, and append it.

```javascript
const fruits = ["Apple", "Mango", "Banana"]

const list = document.querySelector("ul")

fruits.forEach((fruit) => {
    const item = document.createElement("li")
    item.textContent = fruit
    list.appendChild(item)
})
```

This turns data into a visible list on the page. Everything you learned about arrays and forEach now creates real page content. This is the heart of showing data to users.

---

## A Complete Example

Creating product cards from an array of objects.

```javascript
const products = [
    { name: "Laptop", price: 80000 },
    { name: "Phone", price: 50000 }
]

const container = document.querySelector("#products")

products.forEach((product) => {
    const card = document.createElement("div")
    card.classList.add("card")
    card.innerHTML = `
        <h3>${product.name}</h3>
        <p>Rs ${product.price}</p>
    `
    container.appendChild(card)
})
```

Here you combine arrays of objects, template literals, and DOM creation. This pattern builds most of the content on real websites.

---

## Quick Reference

```javascript
// change content
element.textContent = "new text"
element.innerHTML = "<b>html</b>"

// change styles, camelCase names
element.style.color = "red"
element.style.backgroundColor = "yellow"

// change classes, preferred way
element.classList.add("active")
element.classList.remove("active")
element.classList.toggle("active")
element.classList.contains("active")

// change attributes
element.src = "photo.jpg"
element.setAttribute("alt", "text")

// create and add
const el = document.createElement("li")
el.textContent = "Item"
parent.appendChild(el)     // add at end
parent.prepend(el)         // add at start

// remove
element.remove()
```

Write to textContent to change text. Use classList to manage classes. Create with createElement, then appendChild to a parent. Loop an array to build a list.

---

# Exercises

Create an HTML file with a heading, a list, and an empty container, then write your code in a linked JavaScript file.

```javascript
// -------------------------------------------------------
// Exercise 1
// -------------------------------------------------------
// Select a heading and change its text content to something new.

// Write your code here


// -------------------------------------------------------
// Exercise 2
// -------------------------------------------------------
// Select an element and change three of its styles: color, font size, and
// background color.

// Write your code here


// -------------------------------------------------------
// Exercise 3
// -------------------------------------------------------
// Define an active class in your CSS. Use classList to add it to an
// element, then remove it, then toggle it.

// Write your code here


// -------------------------------------------------------
// Exercise 4
// -------------------------------------------------------
// Select an element and check if it contains a certain class using
// classList.contains. Print true or false.

// Write your code here


// -------------------------------------------------------
// Exercise 5
// -------------------------------------------------------
// Create a new paragraph element, set its text, and append it to the body.

// Write your code here


// -------------------------------------------------------
// Exercise 6
// -------------------------------------------------------
// Create a new list item, give it a class and some text, and append it to
// an existing list on the page.

// Write your code here


// -------------------------------------------------------
// Exercise 7
// -------------------------------------------------------
// Use prepend to add a new item at the start of a list, and append to add
// one at the end.

// Write your code here


// -------------------------------------------------------
// Exercise 8
// -------------------------------------------------------
// Select an element on the page and remove it completely.

// Write your code here


// -------------------------------------------------------
// Exercise 9
// -------------------------------------------------------
// Create an array of five names. Loop through it and create a list item
// on the page for each name.

// Write your code here


// -------------------------------------------------------
// Exercise 10
// -------------------------------------------------------
// Create an array of product objects with name and price. Loop through it
// and build a card on the page for each product using createElement and a
// template literal for the inside.

// Write your code here


```

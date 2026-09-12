# The DOM: Selecting and Reading Elements

Until now your JavaScript printed to the console. The DOM is how JavaScript connects to the actual web page, so you can read and change what the user sees. DOM stands for Document Object Model. It is the browser's representation of your HTML as objects that JavaScript can control.

---

## What the DOM Is

When a browser loads your HTML, it turns every tag into an object and arranges them in a tree. JavaScript can reach into this tree, find any element, read it, and change it. This is what makes pages interactive.

The starting point is a special object called document. It represents the whole page. Everything begins from document.

```javascript
console.log(document)          // the whole page
console.log(document.title)    // the page title
console.log(document.body)     // the body element
```

---

## Selecting a Single Element

To change an element, you first have to find it. The main tool is querySelector. You give it a CSS selector, the same kind you used in CSS, and it returns the first matching element.

Suppose the HTML has these.

```html
<h1 id="title">Welcome</h1>
<p class="intro">Hello there</p>
<button>Click me</button>
```

Selecting them.

```javascript
// by id, use # like in CSS
const title = document.querySelector("#title")

// by class, use . like in CSS
const intro = document.querySelector(".intro")

// by tag name
const button = document.querySelector("button")

console.log(title)
console.log(intro)
console.log(button)
```

querySelector uses exactly the CSS selector syntax you already know. Hash for id, dot for class, plain word for tag.

---

## getElementById

There is an older, direct way to select by id. It does not use the hash symbol.

```javascript
const title = document.getElementById("title")
```

This does the same as querySelector("#title"). Both are fine. querySelector is more flexible because it handles any selector, so many developers use it for everything.

---

## Selecting Multiple Elements

querySelectorAll returns all matching elements, as a list you can loop through.

```html
<li class="item">Apple</li>
<li class="item">Mango</li>
<li class="item">Banana</li>
```

```javascript
const items = document.querySelectorAll(".item")

console.log(items.length)   // 3

items.forEach((item) => {
    console.log(item.textContent)
})
// Apple
// Mango
// Banana
```

querySelector gives you one element, the first match. querySelectorAll gives you all matches, which you loop through with forEach.

---

## Reading Text Content

Once you have an element, textContent gives you the text inside it.

```html
<h1 id="title">Welcome to My Shop</h1>
```

```javascript
const title = document.querySelector("#title")

console.log(title.textContent)   // Welcome to My Shop
```

---

## Reading innerHTML

innerHTML gives you the HTML inside an element, including any tags.

```html
<div id="box">
    <strong>Important</strong> message
</div>
```

```javascript
const box = document.querySelector("#box")

console.log(box.textContent)   // Important message, just the text
console.log(box.innerHTML)     // <strong>Important</strong> message, with tags
```

Use textContent when you want just the words. Use innerHTML when you need the tags too.

---

## Reading Input Values

For form inputs, the value property gives what the user typed.

```html
<input id="username" value="Ahmed">
```

```javascript
const input = document.querySelector("#username")

console.log(input.value)   // Ahmed
```

This is how you read what a user enters into a form. You will use this constantly.

---

## Reading Attributes

You can read any attribute of an element.

```html
<a id="link" href="https://google.com">Google</a>
<img id="photo" src="cat.jpg" alt="A cat">
```

```javascript
const link = document.querySelector("#link")
const photo = document.querySelector("#photo")

console.log(link.href)              // https://google.com
console.log(photo.src)              // the image path
console.log(photo.getAttribute("alt"))   // A cat
```

Common attributes like href and src can be read directly. getAttribute reads any attribute by name.

---

## Putting It Together

A common real task. Find a heading and log its text, find all list items and count them.

```javascript
const heading = document.querySelector("h1")
console.log(`Heading says: ${heading.textContent}`)

const listItems = document.querySelectorAll("li")
console.log(`There are ${listItems.length} items`)

listItems.forEach((item, index) => {
    console.log(`${index + 1}: ${item.textContent}`)
})
```

Everything you know about loops, template literals, and forEach works here. The only new part is selecting elements from the page.

---

## Quick Reference

```javascript
// the whole page
document

// select one element, first match, CSS selector syntax
document.querySelector("#id")
document.querySelector(".class")
document.querySelector("tag")

// select by id, no hash
document.getElementById("id")

// select all matches, loop with forEach
document.querySelectorAll(".class")

// read content
element.textContent   // just the text
element.innerHTML     // text plus tags

// read input value
input.value

// read attributes
element.href
element.src
element.getAttribute("alt")
```

Start from document. Use querySelector with CSS selectors to find elements. Read textContent for words, value for inputs.

---

# Exercises

For these, first create a simple HTML file with some elements, then link a JavaScript file and write your code there.

```javascript
// -------------------------------------------------------
// Exercise 1
// -------------------------------------------------------
// Print the document title and the document body to the console.

// Write your code here


// -------------------------------------------------------
// Exercise 2
// -------------------------------------------------------
// Add an h1 with an id to your HTML. Select it with querySelector and
// print its text content.

// Write your code here


// -------------------------------------------------------
// Exercise 3
// -------------------------------------------------------
// Add a paragraph with a class. Select it by its class and print its text.

// Write your code here


// -------------------------------------------------------
// Exercise 4
// -------------------------------------------------------
// Select the same element two ways: once with getElementById and once
// with querySelector. Confirm both find it.

// Write your code here


// -------------------------------------------------------
// Exercise 5
// -------------------------------------------------------
// Add a list with several items to your HTML. Use querySelectorAll to
// select them all and print how many there are.

// Write your code here


// -------------------------------------------------------
// Exercise 6
// -------------------------------------------------------
// Loop through all the list items with forEach and print each one's text
// with its position number.

// Write your code here


// -------------------------------------------------------
// Exercise 7
// -------------------------------------------------------
// Add a div containing some text with a bold tag inside. Print both its
// textContent and its innerHTML and compare them.

// Write your code here


// -------------------------------------------------------
// Exercise 8
// -------------------------------------------------------
// Add an input with a value in your HTML. Select it and print the value.

// Write your code here


// -------------------------------------------------------
// Exercise 9
// -------------------------------------------------------
// Add a link with an href and an image with a src and alt. Select both
// and print the href, the src, and the alt.

// Write your code here


// -------------------------------------------------------
// Exercise 10
// -------------------------------------------------------
// Select a heading and print its text. Then select all items of a class,
// count them, and print each item's text using a loop. Combine everything
// from this lesson.

// Write your code here


```

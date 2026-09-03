# What is JavaScript

JavaScript is a programming language that makes websites interactive. It is the third core language of the web, working alongside HTML and CSS.

---

## The Three Languages of the Web

Every website is built with three languages, each with one job.

```
HTML       is the structure    walls, rooms, and doors of a house
CSS        is the style        paint, furniture, and decoration
JavaScript is the behavior     electricity and water that make things work
```

HTML builds the structure of a page. CSS makes it look good. But both are static. They cannot respond, calculate, or change on their own. JavaScript adds the action. It is what turns a page into a working application.

---

## What JavaScript Can Do

Everything interactive on a website is JavaScript. Some examples:

A button that shows a menu when clicked
A form that checks if your password is strong enough
A shopping cart that calculates the total
A search box that filters results as you type
A page that loads new posts when you scroll
A game you play in the browser

Without JavaScript, a website is like a house with no electricity. The structure is there but nothing works. JavaScript is the electricity that makes everything come alive.

---

## JavaScript is Not Java

This confuses many beginners. JavaScript and Java are completely different languages. They are not related. The name JavaScript was chosen for marketing reasons in the 1990s because Java was popular at the time. That is the only connection. Forget Java.

---

## A Little History

JavaScript was created in 1995 in just ten days by one person for the Netscape browser. It was meant to be small and simple. Nobody imagined it would become the most important language on the internet.

Because it was built so fast, it has some strange behaviors you will discover along the way. When you find something odd about JavaScript, remember it was made in ten days. Over the years it grew into a powerful, modern language, but some of the early quirks remain.

---

## Where JavaScript Runs

JavaScript runs in two main places.

In the browser. Every browser has a JavaScript engine built in. Chrome uses one called V8. This is how JavaScript powers websites.

Outside the browser using Node.js. This lets JavaScript run directly on a computer, which is how it is used to build backend servers and tools. You will use this later.

Same language, two homes. The browser for websites, and Node.js for servers.

---

## Three Ways to Run JavaScript

### Way 1: The Browser Console

The fastest way to try JavaScript. Open any website, press F12, and click the Console tab. You can type JavaScript directly and press Enter.

```javascript
console.log("Hello World")
2 + 2
"Ahmed" + " " + "Khan"
```

The console is a playground for testing small pieces of code instantly. No file needed.

### Way 2: Linked File in HTML

This is how JavaScript is used in real projects. A separate file linked to an HTML page.

The HTML file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>JavaScript</title>
</head>
<body>

    <h1>My Page</h1>

    <script src="script.js"></script>

</body>
</html>
```

The JavaScript file called script.js:

```javascript
console.log("This runs from a separate file")
```

Two important things about this.

The script tag connects the JavaScript file to the HTML. It works just like linking a CSS file. The src points to the file name.

The script tag goes at the bottom of the body, not the head. JavaScript runs line by line from top to bottom. The HTML must load fully before JavaScript uses it. If the script runs first, it will not find the page elements and you get errors. Putting the script at the bottom means all the HTML above is ready.

### Way 3: Node.js in the Terminal

JavaScript can run outside the browser using Node.js. In the terminal you type:

```
node script.js
```

The output appears in the terminal instead of the browser. This is how backend servers run. You will use this fully later.

---

## console.log

console.log is the most used tool in JavaScript. It prints values so you can see them.

```javascript
console.log("Hello students")
console.log(100)
console.log(25 * 4)
console.log("The answer is:", 42)
console.log("Name:", "Ahmed", "Age:", 25)
```

Users never see the console. It is only for you, the developer. When something is not working, the first thing you do is console.log the values to see what your code actually has. It is like a flashlight you shine into your code.

There are other console messages too.

```javascript
console.log("normal message")
console.warn("a yellow warning")
console.error("a red error")
```

console.log is the one you use most.

---

## Quick Reference

```javascript
// Three languages
// HTML = structure, CSS = style, JavaScript = behavior

// Three ways to run JavaScript
// 1. Browser console (F12)
// 2. Linked file in HTML (script tag at bottom of body)
// 3. Node.js in terminal (node file.js)

// The main tool
console.log("text")
console.log(42)
console.log("label:", value)
```

---

# Exercises

Copy the block below into a .js file and write your code under each exercise.

```javascript
// -------------------------------------------------------
// Exercise 1
// -------------------------------------------------------
// Open the browser console and use console.log to print your name, your age, and your city on three separate lines.

// Write your code here


// -------------------------------------------------------
// Exercise 2
// -------------------------------------------------------
// In the browser console, calculate and print how many hours are in a week. Do the math inside console.log.

// Write your code here


// -------------------------------------------------------
// Exercise 3
// -------------------------------------------------------
// Create an HTML file and a separate script.js file. Link them correctly. In the script file, print a welcome message. Confirm it appears in the console.

// Write your code here


// -------------------------------------------------------
// Exercise 4
// -------------------------------------------------------
// In your script file, use console.log to print the result of three different calculations: addition, multiplication, and division.

// Write your code here


// -------------------------------------------------------
// Exercise 5
// -------------------------------------------------------
// Use console.log with a label to print a result. For example print the words "Total is" followed by the number 500 in the same line.

// Write your code here


// -------------------------------------------------------
// Exercise 6
// -------------------------------------------------------
// Join two pieces of text together in a console.log. For example your first name and last name with a space between them.

// Write your code here


// -------------------------------------------------------
// Exercise 7
// -------------------------------------------------------
// Move your script tag from the bottom of the body to the head of the HTML. Refresh and observe. Then move it back to the bottom. Write a note about what you think happened.

// Write your code here


// -------------------------------------------------------
// Exercise 8
// -------------------------------------------------------
// Try console.log, console.warn, and console.error each with a different message. Notice how they look different in the console.

// Write your code here


```

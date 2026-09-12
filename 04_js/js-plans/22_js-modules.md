# Modules: import and export

As programs grow, keeping all your code in one file becomes messy. Modules let you split code across many files and share pieces between them. One file exports things, another file imports them. This keeps code organized and reusable.

---

## Why Modules Exist

Imagine a project with a thousand lines in one file. Finding anything is hard. Modules let you put related code in its own file. A file for calculations, a file for user data, a file for helpers. Each file shares only what it needs to.

---

## Setting Up Modules in the Browser

To use modules in the browser, add type equals module to your script tag.

```html
<script type="module" src="main.js"></script>
```

This tells the browser your JavaScript uses import and export. Without it, import and export will not work.

---

## Named Exports

You can export any number of things from a file by name. Put the export keyword before what you want to share.

A file called mathTools.js.

```javascript
// mathTools.js

export const PI = 3.14159

export function add(a, b) {
    return a + b
}

export function multiply(a, b) {
    return a * b
}
```

Now these three things can be used in other files.

---

## Named Imports

In another file, import the things you want by name, inside curly braces.

```javascript
// main.js

import { add, multiply, PI } from "./mathTools.js"

console.log(add(5, 3))        // 8
console.log(multiply(4, 2))   // 8
console.log(PI)               // 3.14159
```

The names in the curly braces must match the names that were exported. The path points to the file, starting with ./ for the same folder.

You can import only what you need. If you only want add, import only add.

```javascript
import { add } from "./mathTools.js"
```

---

## Renaming Imports

If you want a different name, use the word as.

```javascript
import { add as sum } from "./mathTools.js"

console.log(sum(5, 3))   // 8
```

---

## Export at the Bottom

Instead of writing export before each item, you can export them together at the end of the file.

```javascript
// mathTools.js

const PI = 3.14159

function add(a, b) {
    return a + b
}

function multiply(a, b) {
    return a * b
}

export { PI, add, multiply }
```

This does the same thing. Some people prefer keeping all exports in one place at the bottom.

---

## Default Export

A file can have one default export. This is used when a file mainly provides one thing. You do not use curly braces when importing a default.

A file called User.js.

```javascript
// User.js

export default class User {
    constructor(name) {
        this.name = name
    }
    greet() {
        console.log(`Hi, I am ${this.name}`)
    }
}
```

Importing a default. You choose the name yourself, no curly braces.

```javascript
// main.js

import User from "./User.js"

const user = new User("Ahmed")
user.greet()   // Hi, I am Ahmed
```

Because it is the default, you can call it anything when importing. It does not have to be User.

---

## Mixing Default and Named

A file can have one default export and several named exports together.

```javascript
// tools.js

export default function main() {
    console.log("Main function")
}

export const version = "1.0"
export function helper() {
    console.log("Helper")
}
```

Importing both. The default comes first, then named ones in curly braces.

```javascript
import main, { version, helper } from "./tools.js"

main()               // Main function
console.log(version) // 1.0
helper()             // Helper
```

---

## A Realistic Example

A helpers file with several utilities.

```javascript
// helpers.js

export function formatPrice(amount) {
    return `Rs ${amount}`
}

export function calculateTax(amount) {
    return amount * 0.17
}

export function total(amount) {
    return amount + calculateTax(amount)
}
```

Using them in the main file.

```javascript
// main.js

import { formatPrice, total } from "./helpers.js"

const price = 1000
console.log(formatPrice(price))         // Rs 1000
console.log(formatPrice(total(price)))  // Rs 1170
```

The helpers live in their own file, clean and reusable. The main file imports only what it needs.

---

## Why Modules Matter Later

Modules are everywhere in modern JavaScript. Node.js, React, and Next.js are all built on import and export. Every real project splits code into modules. The habit you build here carries through the rest of your learning.

---

## Quick Reference

```javascript
// in the HTML
// <script type="module" src="main.js"></script>

// named export
export const PI = 3.14
export function add(a, b) { return a + b }

// or export together at the bottom
export { PI, add }

// named import
import { PI, add } from "./file.js"

// rename import
import { add as sum } from "./file.js"

// default export, one per file
export default class User { }

// default import, choose any name, no braces
import User from "./User.js"

// mix default and named
import main, { helper } from "./file.js"
```

One file exports, another imports. Named exports use curly braces. A default export does not. Paths start with ./ for the same folder.

---

# Exercises

Copy the blocks below into files. You will need to create two files for most of these and link them with type module.

```javascript
// -------------------------------------------------------
// Exercise 1
// -------------------------------------------------------
// Create a file that exports a single function that adds two numbers.
// In a second file, import and use it.

// Write your code here


// -------------------------------------------------------
// Exercise 2
// -------------------------------------------------------
// Create a file that exports three math functions: add, subtract,
// multiply. Import all three into another file and test them.

// Write your code here


// -------------------------------------------------------
// Exercise 3
// -------------------------------------------------------
// From the file in exercise 2, import only one of the three functions and
// use it.

// Write your code here


// -------------------------------------------------------
// Exercise 4
// -------------------------------------------------------
// Export a constant value, like a tax rate, from one file and import it
// into another to use in a calculation.

// Write your code here


// -------------------------------------------------------
// Exercise 5
// -------------------------------------------------------
// Import a function but rename it using as. Use the renamed version.

// Write your code here


// -------------------------------------------------------
// Exercise 6
// -------------------------------------------------------
// Create a file that exports several functions all together at the bottom
// using one export statement. Import and use them.

// Write your code here


// -------------------------------------------------------
// Exercise 7
// -------------------------------------------------------
// Create a file with a default export that is a class. Import it in
// another file and create an object from it.

// Write your code here


// -------------------------------------------------------
// Exercise 8
// -------------------------------------------------------
// Create a file that has one default export and two named exports. Import
// all of them into another file.

// Write your code here


// -------------------------------------------------------
// Exercise 9
// -------------------------------------------------------
// Create a helpers file with formatPrice and calculateTax functions.
// Import both into a main file and use them together on a price.

// Write your code here


// -------------------------------------------------------
// Exercise 10
// -------------------------------------------------------
// Create a file that exports functions which use each other internally,
// like a total function that uses a tax function. Import only the total
// function and confirm it still works.

// Write your code here


```

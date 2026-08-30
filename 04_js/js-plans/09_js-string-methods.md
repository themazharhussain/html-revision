# JavaScript — String Methods

**Duration:** 3 hours
**Roadmap position:** Day 6
**Today's goal:** Students use string methods to search, change, split, and format text.

---

# PART 1 — Your Preparation (Night Before)

**Practice this yourself:**

```javascript
const str = "Hello World"
console.log(str.length)          // 11
console.log(str.toUpperCase())   // HELLO WORLD
console.log(str.slice(0, 5))     // Hello
console.log(str.split(" "))      // ["Hello", "World"]
```

**Things you must know clearly:**

Strings are immutable. Methods return a new string, they do not change the original.

Key methods: length, toUpperCase, toLowerCase, trim, slice, includes, indexOf, replace, split, charAt, padStart.

**Questions students will ask — your answers:**

"Do string methods change the original string?"
No. Strings cannot be changed. Every method returns a new string. The original stays the same. If you want to keep the result, store it in a variable.

"What is the difference between slice and substring?"
Both take a part of a string. slice is more common and can take negative numbers to count from the end. Use slice, it is more flexible.

"Why is the first character at index 0 not 1?"
Programming counts from 0, not 1. The first character is at position 0, the second at position 1, and so on. This is true for strings and arrays both. It feels strange at first but you get used to it.

---

# PART 2 — The Class

## Step 1 — Homework Check (10 minutes)

Check receipt.js. Template literals used? Ternary for delivery working? One good thing, one improve.

## Step 2 — String Basics (20 minutes)

```javascript
const name = "Ahmed Khan"

console.log(name.length)      // 10, counts all characters including space
console.log(name[0])          // A, first character
console.log(name[1])          // h, second character
console.log(name[name.length - 1])  // n, last character
```

Say: "length tells you how many characters. Square brackets with a number get one character. Counting starts at 0. The first character is at index 0. The last character is at length minus 1."

Strings are immutable:

```javascript
let word = "hello"
word[0] = "H"        // does nothing, cannot change
console.log(word)    // still "hello"

word = "Hello"       // this works, we replaced the whole string
console.log(word)    // "Hello"
```

## Step 3 — Changing Case and Trimming (20 minutes)

```javascript
const text = "  Ahmed Khan  "

console.log(text.toUpperCase())   // "  AHMED KHAN  "
console.log(text.toLowerCase())   // "  ahmed khan  "
console.log(text.trim())          // "Ahmed Khan" removes outer spaces
console.log(text.trimStart())     // removes start spaces
console.log(text.trimEnd())       // removes end spaces
```

Say: "trim is very useful. When users type in a form they often add extra spaces. trim removes spaces from the start and end. Always trim user input before saving it."

## Step 4 — Searching in Strings (25 minutes)

```javascript
const sentence = "JavaScript is awesome"

console.log(sentence.includes("awesome"))   // true
console.log(sentence.includes("boring"))    // false
console.log(sentence.startsWith("Java"))    // true
console.log(sentence.endsWith("awesome"))   // true
console.log(sentence.indexOf("is"))         // 11, position where it starts
console.log(sentence.indexOf("xyz"))        // -1, not found
```

Say: "includes checks if text contains something, returns true or false. startsWith and endsWith check the beginning and end. indexOf gives the position, or -1 if not found. These are used in search boxes and filters all the time."

## BREAK (10 minutes)

## Step 5 — Extracting Parts (25 minutes)

```javascript
const text = "Hello World"

console.log(text.slice(0, 5))    // "Hello" from index 0 to 5 not including 5
console.log(text.slice(6))       // "World" from index 6 to end
console.log(text.slice(-5))      // "World" last 5 characters
console.log(text.charAt(0))      // "H" character at position 0
```

Say: "slice takes a piece of the string. Give it a start and end position. Negative numbers count from the end. This is how you extract parts of text."

## Step 6 — Replacing and Splitting (25 minutes)

```javascript
const message = "I love cats and cats love me"

console.log(message.replace("cats", "dogs"))
// "I love dogs and cats love me" replaces first only

console.log(message.replaceAll("cats", "dogs"))
// "I love dogs and dogs love me" replaces all
```

Split turns a string into an array. Preview note first:

Say: "split gives you back a list of pieces. This list is called an array. You will learn arrays fully in a few days. For now just see that split breaks text into separate pieces and you can count them with length."

```javascript
const csv = "Ahmed,Sara,Ali,Hassan"
const names = csv.split(",")
console.log(names)   // ["Ahmed", "Sara", "Ali", "Hassan"]

const sentence = "Hello World Foo"
const words = sentence.split(" ")
console.log(words)   // ["Hello", "World", "Foo"]
console.log(words.length)  // 3, now we can count words
```

Say: "split is powerful. It breaks a string into pieces using a separator. Split by comma to read a list. Split by space to count words. The result is an array which we study soon. You will use this constantly."

## Step 7 — Formatting (10 minutes)

```javascript
const num = "5"
console.log(num.padStart(3, "0"))   // "005"
console.log(num.padEnd(3, "0"))     // "500"

const text = "ha"
console.log(text.repeat(3))         // "hahaha"
```

## Step 8 — Student Exercises (25 minutes)

### Exercise 1 — Text Analyzer (15 minutes)

```javascript
const text = "JavaScript is the best programming language"

// Find and print:
// The total length
// The text in uppercase
// The text in lowercase
// Does it include the word "best"?
// The number of words (hint: split by space, count length)
// The first word (hint: split then take index 0)
```

### Exercise 2 — Name Formatter (10 minutes)

```javascript
const fullName = "  ahmed khan  "

// Clean it up:
// Trim the spaces
// Make first letter uppercase (hint: slice and toUpperCase)
// Print "Ahmed khan"
// Bonus: split into first and last name and print separately
```

## Step 9 — Review (10 minutes)

Check text analyzer. Word count correct? Methods used properly? One good thing, one improve.

## Step 10 — Quiz and Homework (10 minutes)

### Quiz

1. Does a string method change the original string?
2. What index is the first character at?
3. What does trim do and why is it useful?
4. What does includes return?
5. What does split do?
6. How do you get the last character of a string?

### Homework

Create email-checker.js. Take an email string like "ahmed@gmail.com". Using string methods, check and print:

Does it include an @ symbol?
Does it end with .com?
What is the part before the @ (the username)?
What is the part after the @ (the domain)?
Is the whole thing lowercase? If not, make it lowercase.
The total length of the email.

Test with 3 different email strings.

---

# PART 3 — What We Learned Today

## String Basics

```javascript
str.length        // number of characters
str[0]            // first character
str[str.length-1] // last character
```

Strings are immutable. Methods return new strings.

## Case and Trim

```javascript
str.toUpperCase()
str.toLowerCase()
str.trim()          // remove outer spaces
```

## Searching

```javascript
str.includes("text")    // true or false
str.startsWith("text")
str.endsWith("text")
str.indexOf("text")     // position or -1
```

## Extracting

```javascript
str.slice(0, 5)    // from index 0 to 5
str.slice(6)       // from 6 to end
str.slice(-5)      // last 5 characters
```

## Replace and Split

```javascript
str.replace("old", "new")      // first match
str.replaceAll("old", "new")   // all matches
str.split(",")                 // string into array
```

## Format

```javascript
str.padStart(3, "0")   // "005"
str.repeat(3)          // repeat 3 times
```

---

# PART 4 — After Class Notes

1. Do they understand index starts at 0?
2. Is slice clear?
3. Did split into array make sense?
4. What to revise next?

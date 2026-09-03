# String Methods

Strings have many built in methods to search, change, split, and format text. A method is a function that belongs to a value. You call it with a dot after the string.

An important rule first. Strings are immutable, which means they cannot be changed. Every method returns a new string and leaves the original unchanged.

---

## Length and Index

The length property tells you how many characters are in a string.

```javascript
const name = "Ahmed Khan"

console.log(name.length)   // 10, counts every character including the space
```

You can access one character using square brackets with an index. Counting starts at 0.

```javascript
const name = "Ahmed Khan"

console.log(name[0])                // A, first character
console.log(name[1])                // h, second character
console.log(name[name.length - 1])  // n, last character
```

The first character is at index 0. The last is at length minus 1.

---

## Changing Case

```javascript
const text = "Ahmed Khan"

console.log(text.toUpperCase())   // AHMED KHAN
console.log(text.toLowerCase())   // ahmed khan
```

---

## Trimming Spaces

Users often type extra spaces. trim removes spaces from the start and end.

```javascript
const input = "   Ahmed Khan   "

console.log(input.trim())        // "Ahmed Khan"
console.log(input.trimStart())   // "Ahmed Khan   "
console.log(input.trimEnd())     // "   Ahmed Khan"
```

Always trim user input before saving it.

---

## Searching Inside a String

```javascript
const sentence = "JavaScript is awesome"

console.log(sentence.includes("awesome"))   // true
console.log(sentence.includes("boring"))    // false
console.log(sentence.startsWith("Java"))    // true
console.log(sentence.endsWith("awesome"))   // true
console.log(sentence.indexOf("is"))         // 11, position where it starts
console.log(sentence.indexOf("xyz"))        // -1, not found
```

includes checks if the text contains something and returns true or false. startsWith and endsWith check the beginning and end. indexOf gives the position, or -1 if not found.

---

## Extracting Parts

slice takes a piece of the string. Give it a start position and an optional end position.

```javascript
const text = "Hello World"

console.log(text.slice(0, 5))   // "Hello", from index 0 up to but not including 5
console.log(text.slice(6))      // "World", from index 6 to the end
console.log(text.slice(-5))     // "World", the last 5 characters
console.log(text.charAt(0))     // "H", character at position 0
```

Negative numbers count from the end.

---

## Replacing Text

```javascript
const message = "I love cats and cats love me"

console.log(message.replace("cats", "dogs"))
// "I love dogs and cats love me", replaces the first only

console.log(message.replaceAll("cats", "dogs"))
// "I love dogs and dogs love me", replaces all
```

---

## Splitting Into Pieces

split breaks a string into separate pieces. The result is a list called an array. Arrays are covered fully in a later lesson.

```javascript
const csv = "Ahmed,Sara,Ali,Hassan"
const names = csv.split(",")
console.log(names)   // ["Ahmed", "Sara", "Ali", "Hassan"]

const sentence = "Hello World Foo"
const words = sentence.split(" ")
console.log(words)         // ["Hello", "World", "Foo"]
console.log(words.length)  // 3, now we can count words
```

Split by comma to read a list. Split by space to count words.

---

## Formatting

```javascript
const num = "5"
console.log(num.padStart(3, "0"))   // "005"
console.log(num.padEnd(3, "0"))     // "500"

const text = "ha"
console.log(text.repeat(3))         // "hahaha"
```

padStart and padEnd add characters until the string reaches a certain length. repeat repeats the string.

---

## Combining Methods

You can chain methods and combine them with what you already know.

```javascript
const rawInput = "   AHMED khan   "

const cleaned = rawInput.trim().toLowerCase()
console.log(cleaned)   // "ahmed khan"

const firstLetter = cleaned.charAt(0).toUpperCase()
const rest = cleaned.slice(1)
const proper = firstLetter + rest
console.log(proper)   // "Ahmed khan"
```

---

## Quick Reference

```javascript
str.length            // number of characters
str[0]                // first character
str[str.length - 1]   // last character

str.toUpperCase()
str.toLowerCase()
str.trim()            // remove outer spaces

str.includes("text")  // true or false
str.startsWith("t")
str.endsWith("t")
str.indexOf("text")   // position or -1

str.slice(0, 5)       // from index 0 to 5
str.slice(6)          // from 6 to end
str.slice(-5)         // last 5 characters

str.replace("a", "b")     // first match
str.replaceAll("a", "b")  // all matches
str.split(",")            // into a list

str.padStart(3, "0")
str.repeat(3)
```

Strings are immutable. Methods return new strings and do not change the original.

---

# Exercises

Copy the block below into a .js file and write your code under each exercise.

```javascript
// -------------------------------------------------------
// Exercise 1
// -------------------------------------------------------
// Create a string with your full name. Print its length. Print the first and last character.

// Write your code here


// -------------------------------------------------------
// Exercise 2
// -------------------------------------------------------
// Take a string and print it in uppercase and in lowercase.

// Write your code here


// -------------------------------------------------------
// Exercise 3
// -------------------------------------------------------
// Take a string with extra spaces at the start and end. Use trim to clean it and print the result.

// Write your code here


// -------------------------------------------------------
// Exercise 4
// -------------------------------------------------------
// Take a sentence. Check if it includes a specific word. Check if it starts with a specific word. Print both results.

// Write your code here


// -------------------------------------------------------
// Exercise 5
// -------------------------------------------------------
// Take the string "Hello World". Use slice to print only "Hello". Then use slice to print only "World".

// Write your code here


// -------------------------------------------------------
// Exercise 6
// -------------------------------------------------------
// Take a sentence and replace one word with another. Then use replaceAll to replace a repeated word everywhere.

// Write your code here


// -------------------------------------------------------
// Exercise 7
// -------------------------------------------------------
// Take a comma separated string of five names. Split it into a list and print how many names there are.

// Write your code here


// -------------------------------------------------------
// Exercise 8
// -------------------------------------------------------
// Take a full sentence. Split it by spaces and print the number of words in it.

// Write your code here


// -------------------------------------------------------
// Exercise 9
// -------------------------------------------------------
// Take a number as a string like "7". Use padStart to turn it into "007".

// Write your code here


// -------------------------------------------------------
// Exercise 10
// -------------------------------------------------------
// Take a messy name like "   aHMED   ". Clean it so it prints as "Ahmed": trim the spaces, make it lowercase, then capitalize the first letter.

// Write your code here


```

# Array Methods: map, filter, find

Arrays have powerful built in methods that replace many of the loops you would otherwise write by hand. The three most important to start with are map, filter, and find. Each one takes a function and runs it on every item in the array.

Before this lesson you looped through arrays manually. These methods do the looping for you and make your code shorter and clearer.

---

## A Quick Reminder About Functions in Arguments

These methods take a function as their input. You usually write that function as an arrow function right inside the method call.

```javascript
const numbers = [1, 2, 3]

numbers.forEach((number) => {
    console.log(number)
})
```

Here forEach runs the arrow function once for each item, passing the item in as number. Keep this pattern in mind because map, filter, and find all work the same way.

---

## forEach

forEach runs a function once for every item in the array. It does not return anything. You use it when you just want to do something with each item, like printing.

```javascript
const fruits = ["apple", "mango", "banana"]

fruits.forEach((fruit) => {
    console.log(fruit)
})
// apple
// mango
// banana
```

You can also get the index as a second value.

```javascript
const fruits = ["apple", "mango", "banana"]

fruits.forEach((fruit, index) => {
    console.log(`${index + 1}. ${fruit}`)
})
// 1. apple
// 2. mango
// 3. banana
```

forEach is like a cleaner for of loop. But it cannot build a new array or stop early. For that you need the other methods.

---

## map

map creates a new array by transforming every item. Whatever the function returns becomes the new item. The new array is always the same length as the original.

```javascript
const numbers = [1, 2, 3, 4]

const doubled = numbers.map((number) => number * 2)

console.log(doubled)   // [2, 4, 6, 8]
console.log(numbers)   // [1, 2, 3, 4], original unchanged
```

Each item goes into the function, and the returned value takes its place in the new array.

Transforming strings.

```javascript
const names = ["ahmed", "sara", "ali"]

const upperNames = names.map((name) => name.toUpperCase())

console.log(upperNames)   // ["AHMED", "SARA", "ALI"]
```

Building new strings from numbers.

```javascript
const prices = [500, 1200, 800]

const labels = prices.map((price) => `Rs ${price}`)

console.log(labels)   // ["Rs 500", "Rs 1200", "Rs 800"]
```

The key idea. map means take every item and change it into something new, keeping the same number of items.

---

## filter

filter creates a new array containing only the items that pass a test. The function you give it must return true or false. Items that return true are kept. Items that return false are removed.

```javascript
const numbers = [1, 2, 3, 4, 5, 6]

const evens = numbers.filter((number) => number % 2 === 0)

console.log(evens)     // [2, 4, 6]
console.log(numbers)   // [1, 2, 3, 4, 5, 6], original unchanged
```

Keeping items above a value.

```javascript
const prices = [500, 1200, 800, 300, 1500]

const expensive = prices.filter((price) => price > 1000)

console.log(expensive)   // [1200, 1500]
```

Keeping words of a certain length.

```javascript
const words = ["hi", "hello", "hey", "welcome"]

const longWords = words.filter((word) => word.length > 3)

console.log(longWords)   // ["hello", "welcome"]
```

The key idea. filter means keep only the items that pass the test. The new array may be smaller than the original.

---

## find

find returns the first item that passes a test. Unlike filter, it returns a single item, not an array. If nothing matches, it returns undefined.

```javascript
const numbers = [5, 12, 8, 130, 44]

const firstBig = numbers.find((number) => number > 10)

console.log(firstBig)   // 12, the first one over 10
```

Finding in a list of names.

```javascript
const names = ["Ahmed", "Sara", "Ali"]

const found = names.find((name) => name === "Sara")

console.log(found)   // Sara

const missing = names.find((name) => name === "Zara")

console.log(missing)   // undefined
```

The key idea. find gives you the first matching item, or undefined if none match. Use it when you want one specific item.

---

## The Difference Between These Methods

This is the most important thing to understand.

```
forEach   does something with each item, returns nothing
map       transforms every item, returns a new array of the same length
filter    keeps items that pass a test, returns a new array, maybe smaller
find      returns the first item that passes a test, or undefined
```

A simple way to remember. map changes items. filter removes items. find locates one item.

---

## Chaining Methods

Because map and filter return new arrays, you can chain them together. Each method works on the result of the one before it.

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const result = numbers
    .filter((number) => number % 2 === 0)   // keep evens: [2,4,6,8,10]
    .map((number) => number * 10)           // multiply: [20,40,60,80,100]

console.log(result)   // [20, 40, 60, 80, 100]
```

First filter keeps the even numbers. Then map multiplies each by 10. Reading a chain from top to bottom tells the whole story.

---

## Comparing to a Manual Loop

Here is the same task done both ways so you can see how much shorter these methods are.

With a manual loop.

```javascript
const prices = [500, 1200, 800, 1500]

const expensive = []
for (const price of prices) {
    if (price > 1000) {
        expensive.push(price)
    }
}
console.log(expensive)   // [1200, 1500]
```

With filter.

```javascript
const prices = [500, 1200, 800, 1500]

const expensive = prices.filter((price) => price > 1000)
console.log(expensive)   // [1200, 1500]
```

Both give the same result. filter is shorter and clearer.

---

## Quick Reference

```javascript
const arr = [1, 2, 3, 4]

// forEach: do something with each, returns nothing
arr.forEach((item) => console.log(item))

// map: transform each, returns new array same length
arr.map((item) => item * 2)          // [2, 4, 6, 8]

// filter: keep items that pass test, returns new array
arr.filter((item) => item > 2)       // [3, 4]

// find: first item that passes test, or undefined
arr.find((item) => item > 2)         // 3

// chaining
arr.filter((n) => n % 2 === 0).map((n) => n * 10)
```

map changes items. filter removes items. find locates one item.

---

# Exercises

Copy the block below into a .js file and write your code under each exercise.

```javascript
// -------------------------------------------------------
// Exercise 1
// -------------------------------------------------------
// Create an array of five numbers. Use forEach to print each number
// on its own line.

// Write your code here


// -------------------------------------------------------
// Exercise 2
// -------------------------------------------------------
// Create an array of numbers. Use map to make a new array where every
// number is tripled. Print both arrays.

// Write your code here


// -------------------------------------------------------
// Exercise 3
// -------------------------------------------------------
// Create an array of names in lowercase. Use map to make a new array
// with all names in uppercase.

// Write your code here


// -------------------------------------------------------
// Exercise 4
// -------------------------------------------------------
// Create an array of prices. Use map to make a new array of strings
// like "Rs 500", "Rs 1200" and so on.

// Write your code here


// -------------------------------------------------------
// Exercise 5
// -------------------------------------------------------
// Create an array of numbers. Use filter to make a new array with only
// the odd numbers.

// Write your code here


// -------------------------------------------------------
// Exercise 6
// -------------------------------------------------------
// Create an array of prices. Use filter to keep only the prices below 1000.

// Write your code here


// -------------------------------------------------------
// Exercise 7
// -------------------------------------------------------
// Create an array of words. Use filter to keep only the words longer
// than four letters.

// Write your code here


// -------------------------------------------------------
// Exercise 8
// -------------------------------------------------------
// Create an array of numbers. Use find to get the first number that is
// greater than 50. Then try find with a value that does not exist and
// see that it returns undefined.

// Write your code here


// -------------------------------------------------------
// Exercise 9
// -------------------------------------------------------
// Create an array of numbers from 1 to 10. Chain filter and map: first
// keep only the even numbers, then multiply each by 100. Print the result.

// Write your code here


// -------------------------------------------------------
// Exercise 10
// -------------------------------------------------------
// Create an array of student names. Use filter to keep names that start
// with the letter A. Then use map to add the word "Student: " in front
// of each remaining name. Print the final result.

// Write your code here


```

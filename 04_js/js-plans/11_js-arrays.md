# Arrays

An array is a list of values stored in a single variable. Instead of making a separate variable for each value, you keep them all together in one place, in order.

---

## Why Arrays Exist

Imagine you want to store five student names. Without arrays you would write:

```javascript
const student1 = "Ahmed"
const student2 = "Sara"
const student3 = "Ali"
const student4 = "Hassan"
const student5 = "Fatima"
```

This is messy. What if you have 100 students? An array solves this. You store all the names in one variable:

```javascript
const students = ["Ahmed", "Sara", "Ali", "Hassan", "Fatima"]
```

One variable holds the whole list. Clean and simple.

---

## Creating an Array

You create an array using square brackets. Values are separated by commas.

```javascript
const fruits = ["apple", "mango", "banana"]
const numbers = [10, 20, 30, 40]
const mixed = ["Ahmed", 25, true]
const empty = []
```

An array can hold any type of value. Strings, numbers, booleans, even other arrays. It can also start empty and get filled later.

---

## Accessing Items by Index

Each item in an array has a position number called an index. Counting starts at 0, not 1.

```javascript
const fruits = ["apple", "mango", "banana"]

console.log(fruits[0])   // apple   first item
console.log(fruits[1])   // mango   second item
console.log(fruits[2])   // banana  third item
```

The first item is at index 0. The second is at index 1. This feels strange at first but you get used to it quickly.

If you ask for an index that does not exist, you get undefined:

```javascript
const fruits = ["apple", "mango", "banana"]

console.log(fruits[5])   // undefined, there is no item at index 5
```

---

## Array Length

The length property tells you how many items are in the array.

```javascript
const fruits = ["apple", "mango", "banana"]

console.log(fruits.length)   // 3
```

Length is very useful for getting the last item. Since counting starts at 0, the last item is always at length minus 1.

```javascript
const fruits = ["apple", "mango", "banana"]

console.log(fruits[fruits.length - 1])   // banana, the last item
```

---

## Changing Items

You can change an item by assigning a new value to its index.

```javascript
const fruits = ["apple", "mango", "banana"]

fruits[1] = "orange"
console.log(fruits)   // ["apple", "orange", "banana"]
```

Notice that even though the array is const, you can still change items inside it. const stops you from replacing the whole array, but the contents can still change. This connects to what you learned about reference types.

---

## Adding Items

### push adds to the end

```javascript
const fruits = ["apple", "mango"]

fruits.push("banana")
console.log(fruits)   // ["apple", "mango", "banana"]

fruits.push("orange", "grape")
console.log(fruits)   // ["apple", "mango", "banana", "orange", "grape"]
```

### unshift adds to the start

```javascript
const fruits = ["mango", "banana"]

fruits.unshift("apple")
console.log(fruits)   // ["apple", "mango", "banana"]
```

---

## Removing Items

### pop removes from the end

```javascript
const fruits = ["apple", "mango", "banana"]

const removed = fruits.pop()
console.log(removed)   // banana, pop returns the removed item
console.log(fruits)    // ["apple", "mango"]
```

### shift removes from the start

```javascript
const fruits = ["apple", "mango", "banana"]

const removed = fruits.shift()
console.log(removed)   // apple
console.log(fruits)    // ["mango", "banana"]
```

A simple way to remember these four:
push and pop work at the end.
shift and unshift work at the start.

---

## slice — Copy a Part

slice takes a piece of the array and returns it as a new array. The original array is not changed.

```javascript
const numbers = [10, 20, 30, 40, 50]

console.log(numbers.slice(1, 3))   // [20, 30] from index 1 up to but not including 3
console.log(numbers.slice(2))      // [30, 40, 50] from index 2 to the end
console.log(numbers.slice(-2))     // [40, 50] the last two items
console.log(numbers)               // [10, 20, 30, 40, 50] original unchanged
```

---

## splice — Remove or Insert

splice changes the original array. It can remove items and add items at any position.

```javascript
const fruits = ["apple", "mango", "banana", "orange"]

// Remove 2 items starting at index 1
fruits.splice(1, 2)
console.log(fruits)   // ["apple", "orange"]
```

```javascript
const fruits = ["apple", "orange"]

// At index 1, remove 0 items, and insert two new ones
fruits.splice(1, 0, "mango", "banana")
console.log(fruits)   // ["apple", "mango", "banana", "orange"]
```

The difference to remember:
slice copies and does not change the original.
splice cuts and changes the original.

---

## indexOf and includes — Searching

### indexOf gives the position

```javascript
const fruits = ["apple", "mango", "banana"]

console.log(fruits.indexOf("mango"))   // 1
console.log(fruits.indexOf("grape"))   // -1, not found
```

### includes gives true or false

```javascript
const fruits = ["apple", "mango", "banana"]

console.log(fruits.includes("mango"))   // true
console.log(fruits.includes("grape"))   // false
```

includes is cleaner when you only want to know if something exists.

```javascript
const fruits = ["apple", "mango", "banana"]

if (fruits.includes("mango")) {
    console.log("We have mango")
}
```

---

## join — Array to String

join turns an array into a single string, with a separator you choose.

```javascript
const fruits = ["apple", "mango", "banana"]

console.log(fruits.join(", "))    // "apple, mango, banana"
console.log(fruits.join(" - "))   // "apple - mango - banana"
console.log(fruits.join(""))      // "applemangobanana"
```

This is the opposite of split. Remember split turns a string into an array. join turns an array into a string.

```javascript
const sentence = "Hello World Foo"
const words = sentence.split(" ")   // ["Hello", "World", "Foo"]
const backToString = words.join(" ") // "Hello World Foo"
```

---

## Looping Through an Array

You already know loops. Here is how to use them with arrays.

### Using a for loop with index

```javascript
const fruits = ["apple", "mango", "banana"]

for (let i = 0; i < fruits.length; i++) {
    console.log(`${i + 1}. ${fruits[i]}`)
}
// 1. apple
// 2. mango
// 3. banana
```

### Using for of, the cleaner way

```javascript
const fruits = ["apple", "mango", "banana"]

for (const fruit of fruits) {
    console.log(fruit)
}
```

Use for of when you just need each item. Use a normal for loop when you also need the index number.

---

## Combining What You Know

Here is a realistic example using arrays with loops and conditionals together.

```javascript
const prices = [500, 1200, 800, 300, 1500]

let total = 0
let expensiveCount = 0

for (const price of prices) {
    total += price
    if (price > 1000) {
        expensiveCount++
    }
}

const average = total / prices.length

console.log(`Total: Rs ${total}`)
console.log(`Average: Rs ${average}`)
console.log(`Items above Rs 1000: ${expensiveCount}`)
```

Here is another using a function.

```javascript
function findHighest(numbers) {
    let highest = numbers[0]
    for (const number of numbers) {
        if (number > highest) {
            highest = number
        }
    }
    return highest
}

const scores = [45, 82, 91, 67, 78]
console.log(findHighest(scores))   // 91
```

---

## Nested Arrays

An array can hold other arrays. This is used for grids, tables, and rows of data.

```javascript
const grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

console.log(grid[0])       // [1, 2, 3]
console.log(grid[0][0])    // 1
console.log(grid[1][2])    // 6
```

To access an item in a nested array, use two indexes. The first picks the inner array, the second picks the item inside it.

---

## Quick Reference

```javascript
const arr = [10, 20, 30]

arr[0]              // 10, access by index
arr.length          // 3, number of items
arr[arr.length - 1] // 30, last item

arr.push(40)        // add to end
arr.pop()           // remove from end
arr.unshift(5)      // add to start
arr.shift()         // remove from start

arr.slice(1, 2)     // copy a part, original unchanged
arr.splice(1, 1)    // remove or insert, original changed

arr.indexOf(20)     // position or -1
arr.includes(20)    // true or false
arr.join(", ")      // array to string

for (const item of arr) { }   // loop through items
```

---

# Exercises

Copy the block below into a .js file and write your code under each exercise.

```javascript
// -------------------------------------------------------
// Exercise 1
// -------------------------------------------------------
// Create an array of your five favourite foods. Print the whole array. Then print the first and the last item separately.

// Write your code here


// -------------------------------------------------------
// Exercise 2
// -------------------------------------------------------
// Create an array of numbers: 10, 25, 30, 45, 50. Print how many items are in the array using length. Then print the item in the middle.

// Write your code here


// -------------------------------------------------------
// Exercise 3
// -------------------------------------------------------
// Start with an array of three colours. Add a new colour to the end. Add another to the start. Remove the last one. Print the array after each step.

// Write your code here


// -------------------------------------------------------
// Exercise 4
// -------------------------------------------------------
// Create an array of six numbers. Use slice to print only the first three. Then use slice to print only the last two. Show that the original array is unchanged.

// Write your code here


// -------------------------------------------------------
// Exercise 5
// -------------------------------------------------------
// Create an array of city names. Check if a specific city is in the array using includes. Print a message saying whether it was found or not. Then find the index of that city using indexOf.

// Write your code here


// -------------------------------------------------------
// Exercise 6
// -------------------------------------------------------
// Create an array of five prices. Using a loop, calculate and print the total of all prices and the average.

// Write your code here


// -------------------------------------------------------
// Exercise 7
// -------------------------------------------------------
// Create an array of numbers. Using a loop, find and print the largest number and the smallest number without using Math.max or Math.min.

// Write your code here


// -------------------------------------------------------
// Exercise 8
// -------------------------------------------------------
// Create an array of ten numbers. Using a loop, count how many are even and how many are odd. Print both counts.

// Write your code here


// -------------------------------------------------------
// Exercise 9
// -------------------------------------------------------
// Create an array of student names. Use join to print them as a single sentence separated by commas. Then take a full name string like "Ahmed Sara Ali" and use split to turn it into an array, then join it back with a dash between each name.

// Write your code here


// -------------------------------------------------------
// Exercise 10
// -------------------------------------------------------
// Create a nested array representing a small seating grid of 3 rows and 3 seats each, filled with numbers 1 to 9. Print the whole grid. Then print one specific seat using two indexes. Then loop through the grid and print every seat number one by one.

// Write your code here


```

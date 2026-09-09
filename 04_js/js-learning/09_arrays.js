// =======================================================
// ARRAYS
// =======================================================
// An array is a list of values stored in a single variable.
// Instead of making a separate variable for each value, you
// keep them all together in one place, in order.


// -------------------------------------------------------
// Why Arrays Exist
// -------------------------------------------------------
// Imagine you want to store five student names. Without arrays:

const student1 = "Ahmed"
const student2 = "Sara"
const student3 = "Ali"
const student4 = "Hassan"
const student5 = "Fatima"

// This is messy. What if you have 100 students? An array solves this.
// You store all the names in one variable:

const students = ["Ahmed", "Sara", "Ali", "Hassan", "Fatima"]
console.log(students)

// One variable holds the whole list. Clean and simple.


// -------------------------------------------------------
// Creating an Array
// -------------------------------------------------------
// Square brackets, values separated by commas.

const fruits1 = ["apple", "mango", "banana"]
const numbers1 = [10, 20, 30, 40]
const mixed = ["Ahmed", 25, true]
const empty = [{}, {}, {}]

// An array can hold any type of value. Strings, numbers, booleans,
// even other arrays. It can also start empty and get filled later.


// -------------------------------------------------------
// Accessing Items by Index
// -------------------------------------------------------
// Each item has a position number called an index.
// Counting starts at 0, not 1.

const fruits2 = ["apple", "mango", "banana"]

console.log(fruits2[0])   // apple   first item
console.log(fruits2[1])   // mango   second item
console.log(fruits2[2])   // banana  third item

// If you ask for an index that does not exist, you get undefined:
console.log(fruits2[5])   // undefined, there is no item at index 5


// -------------------------------------------------------
// Array Length
// -------------------------------------------------------
// The length property tells you how many items are in the array.

const fruits3 = ["apple", "mango", "banana"]
console.log(fruits3.length)   // 3

// Since counting starts at 0, the last item is always at length minus 1.
console.log(fruits3[fruits3.length - 1])   // banana, the last item


// -------------------------------------------------------
// Changing Items
// -------------------------------------------------------
// Assign a new value to an index.

const fruits4 = ["apple", "mango", "banana"]


fruits4[1] = "orange"
console.log(fruits4)   // ["apple", "orange", "banana"]

// Even though the array is const, you can still change items inside it.
// const stops you from replacing the whole array, but the contents can
// still change. This connects to what you learned about reference types.


// -------------------------------------------------------
// Adding Items
// -------------------------------------------------------

// push adds to the end
const fruits5 = ["apple", "mango"]

fruits5.push("banana")
console.log(fruits5)   // ["apple", "mango", "banana"]

fruits5.push("orange", "grape")
console.log(fruits5)   // ["apple", "mango", "banana", "orange", "grape"]

// unshift adds to the start
const fruits6 = ["mango", "banana"]

fruits6.unshift("apple")
console.log(fruits6)   // ["apple", "mango", "banana"]


// -------------------------------------------------------
// Removing Items
// -------------------------------------------------------

// pop removes from the end
const fruits7 = ["apple", "mango", "banana"]

const removed1 = fruits7.pop()
console.log(removed1)   // banana, pop returns the removed item
console.log(fruits7)    // ["apple", "mango"]

// shift removes from the start
const fruits8 = ["apple", "mango", "banana"]

const removed2 = fruits8.shift()
console.log(removed2)   // apple
console.log(fruits8)    // ["mango", "banana"]

// A simple way to remember these four:
//   push and pop work at the end.
//   shift and unshift work at the start.


// -------------------------------------------------------
// slice — Copy a Part
// -------------------------------------------------------
// slice takes a piece of the array and returns it as a new array.
// The original array is not changed.

const numbers2 = [10, 20, 30, 40, 50]

console.log(numbers2.slice(1, 3))   // [20, 30] from index 1 up to but not including 3
console.log(numbers2.slice(2))      // [30, 40, 50] from index 2 to the end
console.log(numbers2.slice(-2))     // [40, 50] the last two items
console.log(numbers2)               // [10, 20, 30, 40, 50] original unchanged


// -------------------------------------------------------
// splice — Remove or Insert
// -------------------------------------------------------
// splice changes the original array. It can remove items and add items
// at any position.

const fruits9 = ["apple", "mango", "banana", "orange"]

// Remove 2 items starting at index 1
fruits9.splice(1, 2)
console.log(fruits9)   // ["apple", "orange"]

const fruits10 = ["apple", "orange"]

// At index 1, remove 0 items, and insert two new ones
fruits10.splice(1, 0, "mango", "banana")
console.log(fruits10)   // ["apple", "mango", "banana", "orange"]

// The difference to remember:
//   slice copies and does not change the original.
//   splice cuts and changes the original.


// -------------------------------------------------------
// indexOf and includes — Searching
// -------------------------------------------------------

// indexOf gives the position
const fruits11 = ["apple", "mango", "banana"]

console.log(fruits11.indexOf("mango"))   // 1
console.log(fruits11.indexOf("grape"))   // -1, not found

// includes gives true or false
console.log(fruits11.includes("mango"))   // true
console.log(fruits11.includes("grape"))   // false

// includes is cleaner when you only want to know if something exists.
if (fruits11.includes("mango")) {
    console.log("We have mango")
}


// -------------------------------------------------------
// join — Array to String
// -------------------------------------------------------
// join turns an array into a single string, with a separator you choose.

const fruits12 = ["apple", "mango", "banana"]

console.log(fruits12.join(", "))    // "apple, mango, banana"
console.log(fruits12.join(" - "))   // "apple - mango - banana"
console.log(fruits12.join(""))      // "applemangobanana"

// This is the opposite of split. split turns a string into an array.
// join turns an array into a string.

const sentence = "Hello World Foo"
const words = sentence.split(" ")     // ["Hello", "World", "Foo"]
const backToString = words.join(" ")  // "Hello World Foo"
console.log(words)
console.log(backToString)


// -------------------------------------------------------
// Looping Through an Array
// -------------------------------------------------------

// Using a for loop with index
const fruits13 = ["apple", "mango", "banana"]

for (let i = 0; i < fruits13.length; i++) {
    console.log(`${i + 1}. ${fruits13[i]}`)
}
// 1. apple
// 2. mango
// 3. banana

// Using for of, the cleaner way and use to iterate array 
for (const fruit of fruits13) {
    console.log(fruit)
}

// Use for of when you just need each item.
// Use a normal for loop when you also need the index number.


// -------------------------------------------------------
// Combining What You Know
// -------------------------------------------------------
// Arrays with loops and conditionals together.

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

// Another example using a function.
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


// -------------------------------------------------------
// Nested Arrays
// -------------------------------------------------------
// An array can hold other arrays. Used for grids, tables, rows of data.

const grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

console.log(grid[0])       // [1, 2, 3]
console.log(grid[0][0])    // 1
console.log(grid[1][2])    // 6

// To access an item in a nested array, use two indexes. The first picks
// the inner array, the second picks the item inside it.


// -------------------------------------------------------
// Quick Reference
// -------------------------------------------------------
/*
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
*/


// =======================================================
// EXERCISES
// =======================================================
// Write your code under each exercise.

// -------------------------------------------------------
// Exercise 1
// -------------------------------------------------------
// Create an array of your five favourite foods. Print the whole array.
// Then print the first and the last item separately.

// Write your code here


// -------------------------------------------------------
// Exercise 2
// -------------------------------------------------------
// Create an array of numbers: 10, 25, 30, 45, 50. Print how many items
// are in the array using length. Then print the item in the middle.

// Write your code here


// -------------------------------------------------------
// Exercise 3
// -------------------------------------------------------
// Start with an array of three colours. Add a new colour to the end.
// Add another to the start. Remove the last one. Print the array after
// each step.

// Write your code here


// -------------------------------------------------------
// Exercise 4
// -------------------------------------------------------
// Create an array of six numbers. Use slice to print only the first
// three. Then use slice to print only the last two. Show that the
// original array is unchanged.

// Write your code here


// -------------------------------------------------------
// Exercise 5
// -------------------------------------------------------
// Create an array of city names. Check if a specific city is in the
// array using includes. Print a message saying whether it was found or
// not. Then find the index of that city using indexOf.

// Write your code here


// -------------------------------------------------------
// Exercise 6
// -------------------------------------------------------
// Create an array of five prices. Using a loop, calculate and print the
// total of all prices and the average.

// Write your code here


// -------------------------------------------------------
// Exercise 7
// -------------------------------------------------------
// Create an array of numbers. Using a loop, find and print the largest
// number and the smallest number without using Math.max or Math.min.

// Write your code here


// -------------------------------------------------------
// Exercise 8
// -------------------------------------------------------
// Create an array of ten numbers. Using a loop, count how many are even
// and how many are odd. Print both counts.

// Write your code here


// -------------------------------------------------------
// Exercise 9
// -------------------------------------------------------
// Create an array of student names. Use join to print them as a single
// sentence separated by commas. Then take a full name string like
// "Ahmed Sara Ali" and use split to turn it into an array, then join it
// back with a dash between each name.

// Write your code here


// -------------------------------------------------------
// Exercise 10
// -------------------------------------------------------
// Create a nested array representing a small seating grid of 3 rows and
// 3 seats each, filled with numbers 1 to 9. Print the whole grid. Then
// print one specific seat using two indexes. Then loop through the grid
// and print every seat number one by one.

// Write your code here




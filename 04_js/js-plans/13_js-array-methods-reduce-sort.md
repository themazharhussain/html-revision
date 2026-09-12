# Array Methods: reduce, sort, some, every

This lesson covers more array methods. reduce combines all items into a single value. sort arranges items in order. some and every check the whole array against a condition.

---

## reduce

reduce takes all the items in an array and combines them into one single value. It is the method beginners find hardest, so we go slowly.

The classic use is adding up all numbers.

```javascript
const numbers = [10, 20, 30, 40]

const total = numbers.reduce((sum, number) => sum + number, 0)

console.log(total)   // 100
```

There are two parts to understand.

The function takes two things: a running total called sum here, and the current item called number.

The 0 at the end is the starting value of the running total.

Here is what happens step by step.

```
Start: sum = 0
Item 10: sum = 0 + 10 = 10
Item 20: sum = 10 + 20 = 30
Item 30: sum = 30 + 30 = 60
Item 40: sum = 60 + 40 = 100
Final: 100
```

The running total carries forward through each item until the end.

You can name the two parts anything. A common style uses acc, short for accumulator, meaning the value that builds up.

```javascript
const prices = [500, 1200, 800]

const total = prices.reduce((acc, price) => acc + price, 0)

console.log(total)   // 2500
```

Finding the largest value with reduce.

```javascript
const numbers = [5, 82, 91, 67, 78]

const highest = numbers.reduce((max, number) => {
    if (number > max) {
        return number
    }
    return max
}, 0)

console.log(highest)   // 91
```

The key idea. reduce turns a whole array into one value, by carrying a running result through every item.

---

## sort

sort arranges the items of an array in order. Important: sort changes the original array, it does not make a copy.

### Sorting strings

By default, sort arranges strings alphabetically.

```javascript
const names = ["Sara", "Ahmed", "Ali", "Hassan"]

names.sort()

console.log(names)   // ["Ahmed", "Ali", "Hassan", "Sara"]
```

### Sorting numbers needs a compare function

This surprises people. By default sort treats items as text, which gives wrong results for numbers.

```javascript
const numbers = [10, 5, 40, 25, 100]

numbers.sort()
console.log(numbers)   // [10, 100, 25, 40, 5]  wrong!
```

To sort numbers correctly, give sort a compare function.

```javascript
const numbers = [10, 5, 40, 25, 100]

numbers.sort((a, b) => a - b)   // ascending, small to big
console.log(numbers)   // [5, 10, 25, 40, 100]

numbers.sort((a, b) => b - a)   // descending, big to small
console.log(numbers)   // [100, 40, 25, 10, 5]
```

The rule to remember. For numbers small to big, use a minus b. For big to small, use b minus a.

### Protecting the original

Since sort changes the original, make a copy first if you want to keep the original order. Use the spread operator.

```javascript
const numbers = [10, 5, 40, 25]

const sorted = [...numbers].sort((a, b) => a - b)

console.log(sorted)    // [5, 10, 25, 40]
console.log(numbers)   // [10, 5, 40, 25], original safe
```

---

## reverse

reverse flips the order of an array. Like sort, it changes the original.

```javascript
const numbers = [1, 2, 3, 4]

numbers.reverse()
console.log(numbers)   // [4, 3, 2, 1]
```

---

## some

some checks if at least one item passes a test. It returns true or false.

```javascript
const numbers = [1, 2, 3, 4, 5]

const hasEven = numbers.some((number) => number % 2 === 0)
console.log(hasEven)   // true, at least one even number exists

const hasBig = numbers.some((number) => number > 100)
console.log(hasBig)    // false, none are over 100
```

The key idea. some asks: does any item match? Yes or no.

---

## every

every checks if all items pass a test. It returns true only if every single item matches.

```javascript
const numbers = [2, 4, 6, 8]

const allEven = numbers.every((number) => number % 2 === 0)
console.log(allEven)   // true, they are all even

const allBig = numbers.every((number) => number > 5)
console.log(allBig)    // false, not all are over 5
```

The key idea. every asks: do all items match? Yes only if every one does.

---

## Combining Methods

These methods combine beautifully with map and filter from the previous lesson.

Total of all prices above 1000.

```javascript
const prices = [500, 1200, 800, 1500, 300]

const total = prices
    .filter((price) => price > 1000)   // [1200, 1500]
    .reduce((sum, price) => sum + price, 0)

console.log(total)   // 2700
```

Sort then take the top three.

```javascript
const scores = [45, 82, 91, 67, 78, 55]

const topThree = [...scores]
    .sort((a, b) => b - a)   // big to small
    .slice(0, 3)             // first three

console.log(topThree)   // [91, 82, 78]
```

---

## Quick Reference

```javascript
const arr = [10, 20, 30]

// reduce: combine all into one value
arr.reduce((sum, item) => sum + item, 0)   // 60

// sort strings, alphabetical
["b", "a", "c"].sort()

// sort numbers, needs compare function
arr.sort((a, b) => a - b)   // small to big
arr.sort((a, b) => b - a)   // big to small

// protect original with a copy
[...arr].sort((a, b) => a - b)

// reverse the order
arr.reverse()

// some: does any item match?
arr.some((item) => item > 20)    // true

// every: do all items match?
arr.every((item) => item > 5)    // true
```

reduce combines into one value. sort orders items but changes the original. some checks if any match. every checks if all match.

---

# Exercises

Copy the block below into a .js file and write your code under each exercise.

```javascript
// -------------------------------------------------------
// Exercise 1
// -------------------------------------------------------
// Create an array of five numbers. Use reduce to add them all together
// and print the total.

// Write your code here


// -------------------------------------------------------
// Exercise 2
// -------------------------------------------------------
// Create an array of prices. Use reduce to find the total cost of all
// items.

// Write your code here


// -------------------------------------------------------
// Exercise 3
// -------------------------------------------------------
// Create an array of numbers. Use reduce to find the largest number in
// the array.

// Write your code here


// -------------------------------------------------------
// Exercise 4
// -------------------------------------------------------
// Create an array of names. Use sort to arrange them alphabetically and
// print the result.

// Write your code here


// -------------------------------------------------------
// Exercise 5
// -------------------------------------------------------
// Create an array of numbers in random order. Sort them from smallest
// to largest using a compare function.

// Write your code here


// -------------------------------------------------------
// Exercise 6
// -------------------------------------------------------
// Take the same numbers and sort them from largest to smallest.

// Write your code here


// -------------------------------------------------------
// Exercise 7
// -------------------------------------------------------
// Create an array of numbers. Make a sorted copy using the spread
// operator, so the original array stays unchanged. Print both.

// Write your code here


// -------------------------------------------------------
// Exercise 8
// -------------------------------------------------------
// Create an array of ages. Use some to check if anyone is under 18.
// Use every to check if everyone is over 12. Print both results.

// Write your code here


// -------------------------------------------------------
// Exercise 9
// -------------------------------------------------------
// Create an array of prices. Filter to keep only prices above 500, then
// use reduce to find the total of those. Print the total.

// Write your code here


// -------------------------------------------------------
// Exercise 10
// -------------------------------------------------------
// Create an array of test scores. Sort them from highest to lowest, then
// use slice to get the top three scores. Print the top three.

// Write your code here


```

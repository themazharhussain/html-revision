# Spread and Rest

Spread and rest both use the same three dots, but they do opposite things. Spread takes the items out of an array or object and spreads them apart. Rest collects many items together into one. They are among the most used features in modern JavaScript.

---

## Spread With Arrays

The spread operator, three dots, takes all the items out of an array.

### Copying an array

You saw earlier that copying an array by assignment does not really copy it, both names point to the same array. Spread makes a real copy.

```javascript
const original = [1, 2, 3]
const copy = [...original]

copy.push(4)

console.log(original)   // [1, 2, 3], unchanged
console.log(copy)       // [1, 2, 3, 4]
```

### Combining arrays

```javascript
const first = [1, 2, 3]
const second = [4, 5, 6]

const combined = [...first, ...second]

console.log(combined)   // [1, 2, 3, 4, 5, 6]
```

The items from both arrays are spread out into a new array.

### Adding items while copying

```javascript
const numbers = [2, 3, 4]

const more = [1, ...numbers, 5]

console.log(more)   // [1, 2, 3, 4, 5]
```

You can place spread anywhere and add extra items around it.

---

## Spread With Objects

Spread works the same way for objects, copying all the key value pairs.

### Copying an object

```javascript
const original = { name: "Ahmed", age: 25 }
const copy = { ...original }

copy.age = 26

console.log(original)   // { name: "Ahmed", age: 25 }, unchanged
console.log(copy)       // { name: "Ahmed", age: 26 }
```

### Combining objects

```javascript
const basic = { name: "Ahmed", age: 25 }
const extra = { city: "Lahore", job: "Developer" }

const full = { ...basic, ...extra }

console.log(full)
// { name: "Ahmed", age: 25, city: "Lahore", job: "Developer" }
```

### Updating a property while copying

This is a very common pattern. Copy an object but change one property.

```javascript
const person = { name: "Ahmed", age: 25, city: "Lahore" }

const updated = { ...person, age: 26 }

console.log(updated)
// { name: "Ahmed", age: 26, city: "Lahore" }
```

The spread copies everything, and then age: 26 overrides the old age. The property written later wins. This pattern is used constantly in React to update data without changing the original.

---

## Spread in Function Calls

You can spread an array into the arguments of a function.

```javascript
const numbers = [5, 2, 8, 1, 9]

console.log(Math.max(...numbers))   // 9
console.log(Math.min(...numbers))   // 1
```

Math.max expects separate numbers, not an array. Spread turns the array into separate values.

---

## Rest

Rest uses the same three dots but does the opposite. It collects many separate items into one array. You see the difference by where it is used. Spread is used where values go out. Rest is used where values come in, like in function parameters.

### Rest in function parameters

A function can accept any number of arguments and collect them into an array.

```javascript
function sumAll(...numbers) {
    return numbers.reduce((sum, number) => sum + number, 0)
}

console.log(sumAll(1, 2, 3))          // 6
console.log(sumAll(10, 20, 30, 40))   // 100
console.log(sumAll(5))                // 5
```

Here numbers collects all the arguments into a single array, no matter how many are passed. Then you can use array methods on it.

### Rest with some named parameters

You can name the first few parameters and collect the rest.

```javascript
function introduce(first, second, ...others) {
    console.log(`First: ${first}`)
    console.log(`Second: ${second}`)
    console.log(`Others: ${others}`)
}

introduce("Ahmed", "Sara", "Ali", "Hassan", "Fatima")
// First: Ahmed
// Second: Sara
// Others: Ali,Hassan,Fatima
```

first and second take the first two arguments. others collects everything left over into an array.

---

## Rest in Destructuring

Rest also works when destructuring, to collect the leftover items.

With arrays.

```javascript
const numbers = [1, 2, 3, 4, 5]

const [first, second, ...rest] = numbers

console.log(first)   // 1
console.log(second)  // 2
console.log(rest)    // [3, 4, 5]
```

With objects.

```javascript
const person = { name: "Ahmed", age: 25, city: "Lahore", job: "Dev" }

const { name, ...details } = person

console.log(name)      // Ahmed
console.log(details)   // { age: 25, city: "Lahore", job: "Dev" }
```

---

## Spread Versus Rest

They look the same but do opposite jobs.

```
Spread   takes items OUT of an array or object, spreads them apart
         used in: array literals, object literals, function calls

Rest     collects many items INTO one array
         used in: function parameters, destructuring
```

A simple way to tell them apart. If the three dots are where values are being created or passed, it is spread. If the three dots are where values are being received or collected, it is rest.

---

## Quick Reference

```javascript
// SPREAD, takes items out

// copy an array
const copy = [...arr]

// combine arrays
const both = [...arr1, ...arr2]

// copy an object
const objCopy = { ...obj }

// update while copying
const updated = { ...obj, age: 26 }

// spread into function call
Math.max(...numbers)


// REST, collects items in

// collect all arguments
function sum(...numbers) { }

// collect leftover in array destructuring
const [first, ...rest] = arr

// collect leftover in object destructuring
const { name, ...others } = obj
```

Spread spreads out. Rest gathers in. Same three dots, opposite direction.

---

# Exercises

Copy the block below into a .js file and write your code under each exercise.

```javascript
// -------------------------------------------------------
// Exercise 1
// -------------------------------------------------------
// Create an array of numbers. Use spread to make a real copy. Add an item
// to the copy and show the original did not change.

// Write your code here


// -------------------------------------------------------
// Exercise 2
// -------------------------------------------------------
// Create two arrays. Use spread to combine them into one new array.

// Write your code here


// -------------------------------------------------------
// Exercise 3
// -------------------------------------------------------
// Create an array of numbers. Make a new array that has a 0 at the start,
// then all the original numbers, then a 100 at the end, using spread.

// Write your code here


// -------------------------------------------------------
// Exercise 4
// -------------------------------------------------------
// Create an object for a person. Use spread to make a copy and change one
// property in the copy. Show the original stayed the same.

// Write your code here


// -------------------------------------------------------
// Exercise 5
// -------------------------------------------------------
// Create two objects and combine them into one using spread.

// Write your code here


// -------------------------------------------------------
// Exercise 6
// -------------------------------------------------------
// Create an array of numbers. Use spread with Math.max and Math.min to
// find the biggest and smallest.

// Write your code here


// -------------------------------------------------------
// Exercise 7
// -------------------------------------------------------
// Write a function that uses rest to accept any number of arguments and
// returns their total.

// Write your code here


// -------------------------------------------------------
// Exercise 8
// -------------------------------------------------------
// Write a function that takes a first name, then uses rest to collect any
// number of hobbies into an array, and prints them.

// Write your code here


// -------------------------------------------------------
// Exercise 9
// -------------------------------------------------------
// Create an array of five numbers. Use destructuring with rest to grab
// the first number and collect the rest into a separate array.

// Write your code here


// -------------------------------------------------------
// Exercise 10
// -------------------------------------------------------
// Create an object with several properties. Use destructuring with rest
// to pull out one property and collect the remaining ones into a separate
// object.

// Write your code here


```

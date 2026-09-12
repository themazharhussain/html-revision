# Destructuring

Destructuring is a short way to pull values out of arrays and objects into separate variables. It saves you from writing the same object or array name over and over. It is used constantly in modern JavaScript and especially in React later.

---

## The Problem Destructuring Solves

Without destructuring, pulling values out of an object looks like this.

```javascript
const person = {
    name: "Ahmed",
    age: 25,
    city: "Lahore"
}

const name = person.name
const age = person.age
const city = person.city

console.log(name, age, city)
```

You repeat person three times. Destructuring does the same thing in one line.

---

## Object Destructuring

Put the keys you want inside curly braces on the left of the equals sign.

```javascript
const person = {
    name: "Ahmed",
    age: 25,
    city: "Lahore"
}

const { name, age, city } = person

console.log(name)   // Ahmed
console.log(age)    // 25
console.log(city)   // Lahore
```

The variable names must match the keys in the object. JavaScript matches them by name, not by order. You can pull out only the ones you want.

```javascript
const person = { name: "Ahmed", age: 25, city: "Lahore" }

const { name } = person   // only take name

console.log(name)   // Ahmed
```

---

## Renaming While Destructuring

Sometimes you want a different variable name. Use a colon to rename.

```javascript
const person = {
    name: "Ahmed",
    age: 25
}

const { name: fullName, age: years } = person

console.log(fullName)   // Ahmed
console.log(years)      // 25
```

Here name goes into a variable called fullName, and age goes into years.

---

## Default Values

If a key might not exist, you can give a default value.

```javascript
const person = {
    name: "Ahmed"
}

const { name, city = "Unknown" } = person

console.log(name)   // Ahmed
console.log(city)   // Unknown, because person has no city
```

If the object has the key, its value is used. If not, the default is used.

---

## Destructuring Nested Objects

You can reach into nested objects too.

```javascript
const person = {
    name: "Ahmed",
    address: {
        city: "Lahore",
        country: "Pakistan"
    }
}

const { name, address: { city, country } } = person

console.log(name)      // Ahmed
console.log(city)      // Lahore
console.log(country)   // Pakistan
```

---

## Destructuring in Function Parameters

This is one of the most useful uses. When a function takes an object, you can destructure it right in the parameter list.

Without destructuring.

```javascript
function printUser(user) {
    console.log(`${user.name} is ${user.age} years old`)
}
```

With destructuring in the parameter.

```javascript
function printUser({ name, age }) {
    console.log(`${name} is ${age} years old`)
}

const user = { name: "Ahmed", age: 25 }
printUser(user)   // Ahmed is 25 years old
```

The function pulls name and age directly out of the object it receives. This is extremely common in real code and in React.

---

## Array Destructuring

Arrays work by position, not by name. The first variable gets the first item, and so on.

```javascript
const colors = ["red", "green", "blue"]

const [first, second, third] = colors

console.log(first)    // red
console.log(second)   // green
console.log(third)    // blue
```

You can skip items by leaving a gap with a comma.

```javascript
const colors = ["red", "green", "blue"]

const [, , third] = colors   // skip first two

console.log(third)   // blue
```

Default values work here too.

```javascript
const colors = ["red"]

const [first, second = "black"] = colors

console.log(first)    // red
console.log(second)   // black, because there is no second item
```

---

## A Common Real Use

Destructuring makes working with arrays of objects cleaner.

```javascript
const products = [
    { name: "Laptop", price: 80000 },
    { name: "Phone", price: 50000 }
]

products.forEach(({ name, price }) => {
    console.log(`${name} costs Rs ${price}`)
})
// Laptop costs Rs 80000
// Phone costs Rs 50000
```

Here each object is destructured right inside the forEach function, pulling out name and price directly.

---

## Quick Reference

```javascript
// object destructuring
const { name, age } = person

// rename
const { name: fullName } = person

// default value
const { city = "Unknown" } = person

// nested
const { address: { city } } = person

// in function parameters
function show({ name, age }) { }

// array destructuring, by position
const [first, second] = array

// skip items
const [, , third] = array

// default in array
const [a, b = 10] = array
```

Objects destructure by name inside curly braces. Arrays destructure by position inside square brackets.

---

# Exercises

Copy the block below into a .js file and write your code under each exercise.

```javascript
// -------------------------------------------------------
// Exercise 1
// -------------------------------------------------------
// Create an object for a person with name, age, and city. Use
// destructuring to pull all three into separate variables and print them.

// Write your code here


// -------------------------------------------------------
// Exercise 2
// -------------------------------------------------------
// Create an object with several properties. Use destructuring to pull
// out only two of them.

// Write your code here


// -------------------------------------------------------
// Exercise 3
// -------------------------------------------------------
// Destructure an object but rename one of the properties to a different
// variable name using a colon.

// Write your code here


// -------------------------------------------------------
// Exercise 4
// -------------------------------------------------------
// Destructure an object where one property might be missing. Give that
// property a default value and print it.

// Write your code here


// -------------------------------------------------------
// Exercise 5
// -------------------------------------------------------
// Create an object that has a nested object inside it. Use destructuring
// to pull a value out of the nested object.

// Write your code here


// -------------------------------------------------------
// Exercise 6
// -------------------------------------------------------
// Write a function that takes an object as its parameter and destructures
// name and age directly in the parameter list. Call it with an object.

// Write your code here


// -------------------------------------------------------
// Exercise 7
// -------------------------------------------------------
// Create an array of three colors. Use array destructuring to put them
// into three variables.

// Write your code here


// -------------------------------------------------------
// Exercise 8
// -------------------------------------------------------
// Create an array of five numbers. Use destructuring to grab only the
// first and the third, skipping the second.

// Write your code here


// -------------------------------------------------------
// Exercise 9
// -------------------------------------------------------
// Create an array with one item. Destructure two variables from it, giving
// the second a default value.

// Write your code here


// -------------------------------------------------------
// Exercise 10
// -------------------------------------------------------
// Create an array of product objects with name and price. Use forEach and
// destructure name and price inside the function to print each product
// nicely.

// Write your code here


```

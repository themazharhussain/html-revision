# Object Methods and Looping

This lesson covers the built in tools for working with objects: getting all the keys, all the values, all the pairs, and looping through an object. It also covers arrays of objects, which is the shape of almost all real data you will work with.

---

## Looping Through an Object With for in

The for in loop goes through every key in an object.

```javascript
const person = {
    name: "Ahmed",
    age: 25,
    city: "Lahore"
}

for (const key in person) {
    console.log(key)
}
// name
// age
// city
```

To get the value as well, use the key with bracket notation.

```javascript
const person = {
    name: "Ahmed",
    age: 25,
    city: "Lahore"
}

for (const key in person) {
    console.log(`${key}: ${person[key]}`)
}
// name: Ahmed
// age: 25
// city: Lahore
```

Notice we must use bracket notation here, person[key], because the key is stored in a variable. Dot notation would not work.

---

## Object.keys

Object.keys gives you an array of all the keys in an object.

```javascript
const person = {
    name: "Ahmed",
    age: 25,
    city: "Lahore"
}

const keys = Object.keys(person)
console.log(keys)         // ["name", "age", "city"]
console.log(keys.length)  // 3, count of properties
```

Because it returns an array, you can use all the array methods you already know on it.

```javascript
const person = { name: "Ahmed", age: 25, city: "Lahore" }

Object.keys(person).forEach((key) => {
    console.log(key)
})
```

---

## Object.values

Object.values gives you an array of all the values.

```javascript
const person = {
    name: "Ahmed",
    age: 25,
    city: "Lahore"
}

const values = Object.values(person)
console.log(values)   // ["Ahmed", 25, "Lahore"]
```

This is useful for calculations. Suppose you have marks in an object.

```javascript
const marks = {
    math: 85,
    science: 90,
    english: 78
}

const values = Object.values(marks)
const total = values.reduce((sum, mark) => sum + mark, 0)
const average = total / values.length

console.log(`Total: ${total}`)      // Total: 253
console.log(`Average: ${average}`)  // Average: 84.33...
```

Here Object.values turned the object into an array of numbers, then reduce added them up. This is a very common pattern.

---

## Object.entries

Object.entries gives you an array where each item is a small array of key and value together.

```javascript
const person = {
    name: "Ahmed",
    age: 25
}

const entries = Object.entries(person)
console.log(entries)
// [["name", "Ahmed"], ["age", 25]]
```

You can loop through entries and pull out both parts at once.

```javascript
const person = { name: "Ahmed", age: 25, city: "Lahore" }

Object.entries(person).forEach((entry) => {
    const key = entry[0]
    const value = entry[1]
    console.log(`${key}: ${value}`)
})
```

---

## Arrays of Objects

This is the most important part of the lesson. Almost all real data is an array of objects. A list of users, a list of products, a list of orders. Each item is an object, and they sit together in an array.

```javascript
const products = [
    { id: 1, name: "Laptop", price: 80000, inStock: true },
    { id: 2, name: "Phone", price: 50000, inStock: false },
    { id: 3, name: "Tablet", price: 60000, inStock: true }
]
```

Now you combine everything you know. The array methods from earlier lessons work perfectly on arrays of objects, because each item is an object you can read with dot notation.

### Getting one property from each

```javascript
const names = products.map((product) => product.name)
console.log(names)   // ["Laptop", "Phone", "Tablet"]
```

### Filtering by a property

```javascript
const inStock = products.filter((product) => product.inStock)
console.log(inStock)   // the Laptop and Tablet objects

const affordable = products.filter((product) => product.price < 70000)
console.log(affordable)   // the Phone and Tablet objects
```

### Finding one object

```javascript
const laptop = products.find((product) => product.name === "Laptop")
console.log(laptop)        // the whole Laptop object
console.log(laptop.price)  // 80000

const byId = products.find((product) => product.id === 2)
console.log(byId.name)     // Phone
```

### Totalling a property

```javascript
const totalValue = products.reduce((sum, product) => sum + product.price, 0)
console.log(totalValue)   // 190000
```

### Sorting by a property

```javascript
const byPrice = [...products].sort((a, b) => a.price - b.price)
console.log(byPrice)   // sorted from cheapest to most expensive
```

---

## Combining It All

A realistic example. Find the total price of only the products that are in stock.

```javascript
const products = [
    { name: "Laptop", price: 80000, inStock: true },
    { name: "Phone", price: 50000, inStock: false },
    { name: "Tablet", price: 60000, inStock: true }
]

const total = products
    .filter((product) => product.inStock)          // keep in stock
    .reduce((sum, product) => sum + product.price, 0)  // add prices

console.log(total)   // 140000
```

This pattern, filter then reduce, appears constantly in real code. Keep the items you want, then combine them into a result.

---

## Quick Reference

```javascript
const obj = { name: "Ahmed", age: 25 }

// loop through keys
for (const key in obj) {
    console.log(key, obj[key])
}

// get arrays from an object
Object.keys(obj)     // ["name", "age"]
Object.values(obj)   // ["Ahmed", 25]
Object.entries(obj)  // [["name", "Ahmed"], ["age", 25]]

// arrays of objects, the real data shape
const items = [
    { name: "A", price: 100 },
    { name: "B", price: 200 }
]

items.map((item) => item.name)                    // get one property
items.filter((item) => item.price > 150)          // filter by property
items.find((item) => item.name === "A")           // find one
items.reduce((sum, item) => sum + item.price, 0)  // total a property
[...items].sort((a, b) => a.price - b.price)       // sort by property
```

Arrays of objects are the shape of real data. All your array methods work on them using dot notation inside the function.

---

# Exercises

Copy the block below into a .js file and write your code under each exercise.

```javascript
// -------------------------------------------------------
// Exercise 1
// -------------------------------------------------------
// Create an object for a person with three properties. Use a for in loop
// to print each key and its value.

// Write your code here


// -------------------------------------------------------
// Exercise 2
// -------------------------------------------------------
// Create an object and use Object.keys to print all its keys and how
// many keys it has.

// Write your code here


// -------------------------------------------------------
// Exercise 3
// -------------------------------------------------------
// Create an object of marks for four subjects. Use Object.values with
// reduce to calculate the total and average marks.

// Write your code here


// -------------------------------------------------------
// Exercise 4
// -------------------------------------------------------
// Create an object and use Object.entries with forEach to print each
// key and value in the format "key: value".

// Write your code here


// -------------------------------------------------------
// Exercise 5
// -------------------------------------------------------
// Create an array of three product objects, each with name and price.
// Use map to get an array of just the product names.

// Write your code here


// -------------------------------------------------------
// Exercise 6
// -------------------------------------------------------
// Using the same products, use filter to keep only the products that
// cost more than a certain amount.

// Write your code here


// -------------------------------------------------------
// Exercise 7
// -------------------------------------------------------
// Using the products array, use find to get the product with a specific
// name. Print its price.

// Write your code here


// -------------------------------------------------------
// Exercise 8
// -------------------------------------------------------
// Using the products array, use reduce to calculate the total price of
// all products.

// Write your code here


// -------------------------------------------------------
// Exercise 9
// -------------------------------------------------------
// Create an array of student objects, each with a name and a marks
// property. Sort the students from highest marks to lowest and print
// the sorted list.

// Write your code here


// -------------------------------------------------------
// Exercise 10
// -------------------------------------------------------
// Create an array of product objects, each with name, price, and inStock
// (true or false). Find the total price of only the products that are in
// stock, using filter then reduce.

// Write your code here


```

# JSON

JSON stands for JavaScript Object Notation. It is a text format for storing and sending data. When your app talks to a server or saves data in the browser, the data travels as JSON. Learning JSON now prepares you for working with APIs and storage later.

---

## What JSON Looks Like

JSON looks almost exactly like a JavaScript object, but it is text, a string. Here is a JavaScript object.

```javascript
const person = {
    name: "Ahmed",
    age: 25,
    isStudent: true
}
```

And here is the same data as JSON.

```javascript
const json = '{"name":"Ahmed","age":25,"isStudent":true}'
```

Notice the whole thing is wrapped in quotes, making it a string. Also every key is in double quotes. JSON has strict rules.

---

## The Rules of JSON

JSON is stricter than a JavaScript object.

Keys must be in double quotes. Not single quotes, not no quotes.
Strings must use double quotes, never single.
No trailing comma after the last item.
No functions allowed, only data.
No comments allowed.

```
Valid JSON:
{"name": "Ahmed", "age": 25}

Invalid JSON:
{name: "Ahmed", age: 25}          keys not quoted
{'name': 'Ahmed'}                 single quotes
{"name": "Ahmed",}                trailing comma
```

You rarely write JSON by hand. JavaScript converts to and from it for you with two functions.

---

## JSON.stringify

JSON.stringify turns a JavaScript object or array into a JSON string. You use this when saving data or sending it to a server.

```javascript
const person = {
    name: "Ahmed",
    age: 25,
    city: "Lahore"
}

const json = JSON.stringify(person)

console.log(json)
// {"name":"Ahmed","age":25,"city":"Lahore"}
console.log(typeof json)   // string
```

The object became a string. Notice the keys are now in double quotes and everything is on one line.

### Pretty printing

You can make the output readable by adding two extra arguments. Pass null and a number for how many spaces to indent.

```javascript
const person = { name: "Ahmed", age: 25 }

console.log(JSON.stringify(person, null, 2))
// {
//   "name": "Ahmed",
//   "age": 25
// }
```

This is useful for reading data while developing.

### Stringify works on arrays too

```javascript
const numbers = [1, 2, 3, 4]
console.log(JSON.stringify(numbers))   // [1,2,3,4]

const products = [
    { name: "Laptop", price: 80000 },
    { name: "Phone", price: 50000 }
]
console.log(JSON.stringify(products))
// [{"name":"Laptop","price":80000},{"name":"Phone","price":50000}]
```

---

## JSON.parse

JSON.parse does the opposite. It turns a JSON string back into a real JavaScript object or array. You use this when reading saved data or receiving data from a server.

```javascript
const json = '{"name":"Ahmed","age":25,"city":"Lahore"}'

const person = JSON.parse(json)

console.log(person)        // { name: "Ahmed", age: 25, city: "Lahore" }
console.log(person.name)   // Ahmed
console.log(typeof person) // object
```

The string became a real object again, so now you can use dot notation and everything else you know.

Parsing an array.

```javascript
const json = '[{"name":"Laptop","price":80000},{"name":"Phone","price":50000}]'

const products = JSON.parse(json)

console.log(products[0].name)   // Laptop
console.log(products.length)    // 2
```

---

## The Round Trip

The two functions are opposites. stringify goes object to string. parse goes string to object.

```javascript
const original = { name: "Ahmed", age: 25 }

// object to string
const json = JSON.stringify(original)

// string back to object
const back = JSON.parse(json)

console.log(back.name)   // Ahmed
```

You will do this round trip all the time. Save data as a string, then read it back as an object.

---

## A Real Use: Deep Copy

Remember that copying objects and arrays by reference does not really copy them. Spread makes a copy but only one level deep. For a deep copy of a nested object, one simple method is to stringify then parse.

```javascript
const person = {
    name: "Ahmed",
    address: {
        city: "Lahore"
    }
}

const deepCopy = JSON.parse(JSON.stringify(person))

deepCopy.address.city = "Karachi"

console.log(person.address.city)     // Lahore, unchanged
console.log(deepCopy.address.city)   // Karachi
```

This turns the whole object into a string and back, creating a completely separate copy including nested parts. It has some limits with functions and dates, but for plain data it works well.

---

## Handling Bad JSON

If you try to parse a string that is not valid JSON, it throws an error. Later you will learn to handle this with try and catch. For now, just know that parse only works on valid JSON.

```javascript
// This would cause an error
// JSON.parse("hello")   not valid JSON
```

---

## Quick Reference

```javascript
// object or array to JSON string
JSON.stringify(data)

// pretty printed with indentation
JSON.stringify(data, null, 2)

// JSON string back to object or array
JSON.parse(jsonString)

// deep copy trick
const copy = JSON.parse(JSON.stringify(original))
```

stringify turns data into a string for saving or sending. parse turns a string back into usable data. JSON keys and strings always use double quotes.

---

# Exercises

Copy the block below into a .js file and write your code under each exercise.

```javascript
// -------------------------------------------------------
// Exercise 1
// -------------------------------------------------------
// Create an object for a person. Use JSON.stringify to turn it into a
// JSON string and print it. Check its type with typeof.

// Write your code here


// -------------------------------------------------------
// Exercise 2
// -------------------------------------------------------
// Take the JSON string from the last exercise and use JSON.parse to turn
// it back into an object. Print one of its properties.

// Write your code here


// -------------------------------------------------------
// Exercise 3
// -------------------------------------------------------
// Create an object and print it as pretty JSON using JSON.stringify with
// null and 2 as extra arguments.

// Write your code here


// -------------------------------------------------------
// Exercise 4
// -------------------------------------------------------
// Create an array of numbers. Turn it into a JSON string and print it.

// Write your code here


// -------------------------------------------------------
// Exercise 5
// -------------------------------------------------------
// Create an array of two product objects. Stringify the whole array and
// print the JSON.

// Write your code here


// -------------------------------------------------------
// Exercise 6
// -------------------------------------------------------
// Take a JSON string of an array of objects and parse it. Print the name
// of the first object.

// Write your code here


// -------------------------------------------------------
// Exercise 7
// -------------------------------------------------------
// Do a full round trip. Start with an object, stringify it, then parse it
// back, and confirm you can read a property from the result.

// Write your code here


// -------------------------------------------------------
// Exercise 8
// -------------------------------------------------------
// Create an object that has a nested object inside it. Make a deep copy
// using JSON.parse and JSON.stringify. Change a nested value in the copy
// and show the original stayed the same.

// Write your code here


// -------------------------------------------------------
// Exercise 9
// -------------------------------------------------------
// Create a student object with name and an array of marks. Stringify it,
// then parse it back, then calculate the total of the marks from the
// parsed object.

// Write your code here


// -------------------------------------------------------
// Exercise 10
// -------------------------------------------------------
// Write a function that takes any object, stringifies it with pretty
// printing, and prints the result. Test it with a few different objects.

// Write your code here


```

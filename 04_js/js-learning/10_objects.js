// =======================================================
// Objects
// =======================================================
//
// An object stores related information together as pairs of keys and
// values. While an array is a list of items in order, an object is a
// collection of named properties. Objects are how we represent real
// things in code, like a user, a product, or a car.
//
// Each section below is wrapped in { } so the examples can reuse the
// same variable names without clashing. Run this file with: node objects.js


// -------------------------------------------------------
// Why Objects Exist
// -------------------------------------------------------
// Imagine storing details about a person using separate variables.


const personName = "Ahmed"
const personAge = 25
const personCity = "Lahore"
const personIsStudent = true

// These belong together but are scattered. An object groups them
// into one place.


const car = {
    name: "suzuki",
    model: 2000,
    price: 300000,
    color: "red"
}
const person = {
    name: "Ahmed",
    age: 25,
    city: "Lahore",
    isStudent: true
}

// Now all the information about the person is in one variable,
// neatly organized.
console.log(person)



// -------------------------------------------------------
// Creating an Object
// -------------------------------------------------------
// You create an object with curly braces. Inside, you write pairs of
// key and value, separated by a colon. Each pair is separated by a comma.


const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2022,
    isElectric: false
}

console.log(car)

// The key is the name of the property. The value is the information.
// A value can be any type: string, number, boolean, even another
// object or an array.



// -------------------------------------------------------
// Accessing Properties
// -------------------------------------------------------
// There are two ways to read a value from an object.

// Dot notation
// The most common way. Write the object name, a dot, then the key.


const person = {
    name: "Ahmed",
    age: 25,
    city: "Lahore"
}

console.log(person.name)   // Ahmed
console.log(person.age)    // 25
console.log(person.city)   // Lahore


// Bracket notation
// Write the key as a string inside square brackets. This is useful when
// the key is stored in a variable.


const person = {
    name: "Ahmed",
    age: 25
}

console.log(person["name"])   // Ahmed


console.log(person["age"])      // 25


// Use dot notation most of the time. Use bracket notation when the key
// comes from a variable.


// -------------------------------------------------------
// Adding and Changing Properties
// -------------------------------------------------------
// You can add a new property or change an existing one by assigning a
// value.


const person = {
    name: "Ahmed",
    age: 25
}

// Change an existing property
person.age = 26
console.log(person.age)   // 26

// Add a new property
person.city = "Lahore"
console.log(person.city)  // Lahore

console.log(person)   // { name: "Ahmed", age: 26, city: "Lahore" }


// Notice that even though the object is const, you can still change its
// properties. const stops you from replacing the whole object, but the
// contents can change. This is the same reference behavior you saw with
// arrays.


// -------------------------------------------------------
// Deleting Properties
// -------------------------------------------------------
// Use the delete keyword to remove a property.


const person = {
    name: "Ahmed",
    age: 25,
    city: "Lahore"
}

delete person.city
delete person["age"]

console.log(person)   // { name: "Ahmed", age: 25 }



// -------------------------------------------------------
// Checking if a Property Exists
// -------------------------------------------------------


const person = {
    name: "Ahmed",
    age: 25
}

if ("name" in person) {
    console.log("Name exists")
}
console.log("name" in person)   // true
console.log("city" in person)   // false

// You can also check by accessing it. A missing property gives
// undefined.
console.log(person.city)   // undefined



// -------------------------------------------------------
// Nested Objects
// -------------------------------------------------------
// An object can contain another object. This is common for grouping
// related details.


const person = {
    name: "Ahmed",
    age: 25,
    address: {
        city: "Lahore",
        country: "Pakistan",
        postalCode: "54000"
    }
}

console.log(person.address.city)        // Lahore
console.log(person.address.country)     // Pakistan


// To reach a nested value, use dots to go deeper step by step. First
// person, then address, then city.


// -------------------------------------------------------
// Objects With Methods
// -------------------------------------------------------
// A value in an object can be a function. A function inside an object is
// called a method.


const person = {
    name: "Ahmed",
    age: 25,
    greet: function () {
        console.log("Hello, I am here")
    }
}

person.greet()   // Hello, I am here


// There is a shorter way to write methods.


const person = {
    name: "Ahmed",
    greet() {
        console.log("Hello")
    }
}

person.greet()   // Hello



// -------------------------------------------------------
// The this Keyword
// -------------------------------------------------------
// Inside a method, the word this refers to the object the method belongs
// to. It lets a method use the object's own properties.


const person = {
    name: "Ahmed",
    age: 25,
    introduce() {
        console.log(`Hi, I am ${this.name} and I am ${this.age} years old`)
    }
}

person.introduce()   // Hi, I am Ahmed and I am 25 years old


// Here this.name means the name property of this object. Without this,
// the method would not know which name to use. You will learn more about
// this later, but for now remember: inside a method, this refers to the
// object itself.


// -------------------------------------------------------
// Objects and Arrays Together
// -------------------------------------------------------
// Real data often mixes both. An object can hold an array.


const student = {
    name: "Ahmed",
    subjects: ["Math", "Science", "English"],
    marks: [85, 90, 78]
}

console.log(student.subjects[0])   // Math
console.log(student.marks[1])      // 90



// -------------------------------------------------------
// Quick Reference
// -------------------------------------------------------


// create
const person = {
    name: "Ahmed",
    age: 25
}

// access
person.name        // dot notation
person["name"]     // bracket notation

// add or change
person.city = "Lahore"
person.age = 26

// delete
delete person.city

// check exists
"name" in person   // true

// nested
// person.address.city

// method using this
const obj = {
    name: "Ahmed",
    greet() {
        console.log(`Hi ${this.name}`)
    }
}

obj.greet()   // Hi Ahmed


// Objects group related information as key and value pairs. Use dot
// notation to access. Methods are functions inside objects, and this
// refers to the object.


// =======================================================
// Exercises
// =======================================================
// Write your code under each exercise.


// -------------------------------------------------------
// Exercise 1
// -------------------------------------------------------
// Create an object for a book with title, author, and year. Print each
// property using dot notation.

// Write your code here


// -------------------------------------------------------
// Exercise 2
// -------------------------------------------------------
// Create an object for a phone with brand, model, and price. Change the
// price to a new value and add a new property called color. Print the
// object.

// Write your code here


// -------------------------------------------------------
// Exercise 3
// -------------------------------------------------------
// Create an object for a person. Delete one property from it. Then check
// if that property still exists using the in keyword.

// Write your code here


// -------------------------------------------------------
// Exercise 4
// -------------------------------------------------------
// Create an object using bracket notation to read a property, where the
// key name is stored in a separate variable.

// Write your code here


// -------------------------------------------------------
// Exercise 5
// -------------------------------------------------------
// Create an object for a student that has a nested address object with
// city and country. Print the city and country.

// Write your code here


// -------------------------------------------------------
// Exercise 6
// -------------------------------------------------------
// Create an object for a car with a method called start that prints
// "Engine started". Call the method.

// Write your code here


// -------------------------------------------------------
// Exercise 7
// -------------------------------------------------------
// Create an object for a person with name and age. Add a method called
// introduce that uses this to print a sentence with the name and age.

// Write your code here


// -------------------------------------------------------
// Exercise 8
// -------------------------------------------------------
// Create an object for a student with a name and an array of three
// subjects. Print the second subject.

// Write your code here


// -------------------------------------------------------
// Exercise 9
// -------------------------------------------------------
// Create an object for a bank account with a balance property and two
// methods: deposit which adds to the balance, and withdraw which
// subtracts from it. Use this inside the methods. Test both.

// Write your code here


// -------------------------------------------------------
// Exercise 10
// -------------------------------------------------------
// Create an object for a product with name, price, and a method that
// returns the price with 17 percent tax added, using this. Print the
// result of calling that method.

// Write your code here

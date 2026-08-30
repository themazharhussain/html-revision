//Variable= A container store to values
//Declarations= var,let,const

// const means constant, meaning it never changes. You promised JavaScript this value stays the same. JavaScript protects you by not allowing changes. This prevents accidental bugs.

// const firstName = "Ahmed"      // correct, camelCase
// const cartTotalPrice = 500         // correct
// const isLoggedIn = true        // correct
// age = 10;

// const first name = "Ahmed"     // wrong, no spaces
// const first-name = "Ahmed"     // wrong, no dashes
// const 2name = "Ahmed"          // wrong, cannot start with number
// const const = "Ahmed"          // wrong, reserved word

// Create variables for a shop
//name,owner name, category,

const shopeName = "Shireen Mahal"
const shopeOwner = "Aslam"
const shopCat = "Sweets"
// var = old method to start variable
// let = values can be changed
// const = value will never be changed


// declaration-keyword name-of-variable = value 
// = equal is called assignment operator and used to assign value to variable. It is not like math equal operator.

/*
let age;
age = 30
let age = 30;



const age = 30;
age = 35;
/*
/*
let age;
let firstName;
let user_name;
let $price;
let _value;
*/

/*
let 1name;     // ❌
let first-name; // ❌
let first name; // ❌
*/


// JavaScript is dynamically typed.That means you don't have to specify the type


//JavaScript Data Types
//A data type tells JavaScript what kind of value a piece of data is and therefore how that value can be used.


/*
1. String
2. Number
3. BigInt
4. Boolean
5. Undefined
6. Null
7. Symbol

8. Object
*/

//strings=A String is a data type used to represent textual data, such as words, sentences, names, or characters

let name = "Faiqa";
let message = 'Helo';

// String literal helps us to inject variables dynamically
let text = `Hello ${name}`;
let studentName = `Faiqa `

console.log(text)
console.log(message)

// Number=A Number is a data type used to represent numeric values, including integers and decimal numbers.
// let age = 38;
let price = 99.99;
let negative = -10;
//BigInt=BigInt is a data type used to represent integers larger than the safe range of JavaScript's Number type
let big = 123456789012345678901234567890n;


//Boolean=A Boolean is a data type that represents one of two logical values: true or false.
let isLoggedIn = true;
let isAdmin = false;


//Undefined=undefined is a data type whose single value indicates that a variable has been declared but has not been given a value

let age;

console.log(age);



// Null=null is a data type/value used to represent an intentional absence of a value.
// let user = null;

let selectedUser = null;

console.log(selectedUser)
// Later...
selectedUser = {
    name: "Maz"
};

//SYmbol=A Symbol is a data type used to create unique values

const a = Symbol("123");
const b = Symbol("123");

console.log(a === b);
// false

//Objects store collections of values/properties
const user = {
    name: "Maz",
    age: 38
};


// let myAge;
// myAge = 30;

// console.log(myAge)




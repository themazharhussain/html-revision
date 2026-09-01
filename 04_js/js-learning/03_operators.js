// Operators 
// Operator simply takes value as operand, perform some actions on operands and finally give final output
// Operators may be unary or binary
// Unary operators only takes one operand while binary takes two operand

// Arithmetic ==> + - * / % ** (Mostly used in maths)

// Assignment ==>  = += -= *= /=  a++ a-- (These are used to assign values to variables)

// Comparison    >  >=  <  <=  !== !=    (These are used to compare values)

// Logical  &&(and)  ||(or) !(not) (These are used to compare two or more conditions)

// Type conversion (We can convert one datatype to another datatype in js)

// String to number  Number()
// Number to string String() 
// parseInt and parsFloat   parseInt() parseFloat()

// == vs === (double equal only compare values not type while triple equal compare values as well as types too)

// Falsy values===>   false, 0, "", null, undefined, NaN,

// Arithmetic operator
let a = 10;
let b = 2;

//console.log(a + b)
//console.log(a - b)
//console.log(a * b)
//console.log(a / b)
//This is called modulus operator. It always give us remainder as output
//console.log(a % b)
// Exponential operator
//console.log(a ** b)


// Assignment operator

a += 10  // a = a + 10
a -= 10  // a = a - 10
a *= 10  // a = a * 10
a /= 10  // a = a / 10

//console.log(a)

// Increment and decrement operators

let x = 10;
x++; // x = x + 1
x--; // x = x - 1

//console.log(x)

//Comparison operators

//console.log(10 > 20)
//console.log(10 >= 10)
//console.log(10 != 20)  // Do not check type
//console.log(10 !== 20) // Check type too


//Logic operators


// and &&  T && T = T
//console.log(10 > 20 && 10 == 10)

// or ||  T || T
//console.log(10 > 20 || 10 == 10)

// Not ! this is unary operator

//console.log(!(10 > 20))

// Datatypes ==> string, number, boolean, symbol, undefined ,null, bigint

// String to number    Number()


// typeof operator is used to check datatype of variable
const stringNumber = "hello"
const numberAfterConv = Number(stringNumber)
const randomeNumber = 10
const randomeNumberToString = String(randomeNumber)
//console.log(typeof stringNumber)
//console.log(numberAfterConv) // It will print NaN   not a number
//console.log(typeof randomeNumberToString)

const textNumber = "10px"
const textFloatNumber = "10.5pxafadfaf"

//console.log(parseInt(textNumber)) //It will extract the number part from he string
//console.log(typeof (parseInt(textNumber)))

//console.log(parseInt(textFloatNumber))
//console.log(parseFloat(textFloatNumber)) 


//It will check only value. Return boolean
console.log(10 == "10")

// IT will check value and type. Return boolean
console.log(10 === "10")

console.log(10 === Number("10"))

// Falsy values===>   false, 0, "", null, undefined, NaN,

console.log("")

// Strings have many built in methods to search, change, split, and format text. A method is a function that belongs to a value. You call it with a dot after the string.

// An important rule first. Strings are immutable, which means they cannot be changed. Every method returns a new string and leaves the original unchanged.

// https://www.w3schools.com/JS/js_strings.asp

const str = "Faiqa azhar"

//console.log(str.length)            // number of characters

//console.log(str[0])                // first character
str[12]
str[str.length - 1]   // last character

//console.log(str.toUpperCase())
str.toLowerCase()

str.trimStart()
str.trimEnd()
//console.log(str.trim())            // remove outer spaces

//console.log(str.includes("Faiq"))  // true or false


//console.log(str.startsWith("F"));

//console.log(str.endsWith("r"));

//console.log(str.indexOf("t")); 

// position or -1

//console.log(str.slice(0, 8));
// from index 0 to 5

//console.log(str.slice(8));
// from 8 to end

str.slice(-5)         // last 5 characters




//console.log(str.replace("a", "b"))     // first match

str.replaceAll("a", "b")  // all matches


//console.log(str.split(""))            // into a array

const numberString = "6"
//console.log(numberString.padStart(4, "0"))  // 0006
//console.log(numberString.padEnd(2, "a"))

//console.log(str.repeat(3))

//console.log(str.charAt(0))

//console.log(str.concat(numberString));


//console.log(str)

// -------------------------------------------------------
// Exercise 1
// -------------------------------------------------------
// Create a string with your full name. Print its length. Print the first and last character.

// Write your code here


// -------------------------------------------------------
// Exercise 2
// -------------------------------------------------------
// Take a string and print it in uppercase and in lowercase.

// Write your code here


// -------------------------------------------------------
// Exercise 3
// -------------------------------------------------------
// Take a string with extra spaces at the start and end. Use trim to clean it and print the result.

// Write your code here


// -------------------------------------------------------
// Exercise 4
// -------------------------------------------------------
// Take a sentence. Check if it includes a specific word. Check if it starts with a specific word. Print both results.

// Write your code here


// -------------------------------------------------------
// Exercise 5
// -------------------------------------------------------
// Take the string "Hello World". Use slice to print only "Hello". Then use slice to print only "World".

// Write your code here


// -------------------------------------------------------
// Exercise 6
// -------------------------------------------------------
// Take a sentence and replace one word with another. Then use replaceAll to replace a repeated word everywhere.

// Write your code here


// -------------------------------------------------------
// Exercise 7
// -------------------------------------------------------
// Take a comma separated string of five names. Split it into a list and print how many names there are.

// Write your code here


// -------------------------------------------------------
// Exercise 8
// -------------------------------------------------------
// Take a full sentence. Split it by spaces and print the number of words in it.

// Write your code here


// -------------------------------------------------------
// Exercise 9
// -------------------------------------------------------
// Take a number as a string like "7". Use padStart to turn it into "007".

// Write your code here


// -------------------------------------------------------
// Exercise 10
// -------------------------------------------------------
// Take a messy name like "   aHMED   ". Clean it so it prints as "Ahmed": trim the spaces, make it lowercase, then capitalize the first letter.

// Write your code here


// -------------------------------------------------------
// Exercise 11
// -------------------------------------------------------
// Use for loop to print all character of string

// Write your code here

// -------------------------------------------------------
// Exercise 12
// -------------------------------------------------------
// Create 6 character OTP using string methods. OTP consists only on small and capital letters

// Write your code here


// -------------------------------------------------------
// Exercise 13
// -------------------------------------------------------
// Create 6 digits OTP using string methods. OTP consists only on numbers

// Write your code here


// -------------------------------------------------------
// Exercise 14
// -------------------------------------------------------
// Create 6 character OTP using string methods. OTP consists only on numbers and letters

// Write your code here


// const intro = "My name is maz"


// for (let i = 0; i <= intro.length - 1; i++) {

//     console.log(intro[i])

// }


// Print 6 digits otp

const numString = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let otp = ""

for (let i = 0; i < 6; i++) {
    const randomFloatNumber = Math.random() * numString.length
    const randomIntNumber = Math.floor(randomFloatNumber)
    const randomCharacter = numString.charAt(randomIntNumber)
    otp = otp + randomCharacter
}

console.log(otp)
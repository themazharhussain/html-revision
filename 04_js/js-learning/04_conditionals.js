// Conditional Statements allow us to perform different actions for different conditions.
// Conditional statements run different code depending on true or false conditions.
// We can control the flow of code based on condition
/*

if (condition){
// code to execute if the condition is true
}

*/


/*

if (condition) {
  // code to execute if the condition is true
} else {
  // code to execute if the condition is false
}

*/


/*

if (condition1) {
  // code to execute if condition1 is true
} else if (condition2) {
  // code to execute if the condition1 is false and condition2 is true
} else {
  // code to execute if the condition1 is false and condition2 is false
}

*/


/*

//Nesting condition inside condition block
if(condition){

 if (condition) {
  //code to execute if the condition
}
 
 }
}
*/


/*

//switch is often used as a more readable alternative to many if...else if...else statements, especially when dealing with multiple possible values.

switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}

*/

// Ternary Operator


/*
condition ? expression1 : expression2

*/




// const marks = 90 //database

// if (marks >= 90) {
//     console.log("Grade A Excellent")
// } else if (marks >= 80) {
//     console.log("Grade B Very Good")
// } else if (marks >= 70) {
//     console.log("Grade C Good")
// } else if (marks >= 60) {
//     console.log("Grade D Average")
// } else {
//     console.log("Fail")
// }

// const age = 25
// const hasLicense = true

// if (age >= 18 && hasLicense) {
//     console.log("You can drive")
// } else {
//     console.log("You cannot drive")
// }


// const day = "Tuesday"

// if (day === "Saturday" || day === "Sunday") {
//     console.log("Weekend")
// } else {
//     console.log("Working day")
// }



// Ternary Operator
const markss = 70
// if (markss >= 60) {
//     console.log("Passed")
// } else {
//     console.log("Failed")
// }

// const messageString = markss >= 60 ? "Passed" : "Failed"

// console.log(messageString)

// condition ? //statement : //statement
// const age = 20
// const message = age >= 18 ? "Adult" : "Minor"
// console.log(message)


// const day = "Tuesday"

// switch (day) {
//     case "Monday":
//         console.log("Start of the week")
//         break
//     case "Friday":
//         console.log("Almost weekend")
//         break
//     case "Saturday":
//     case "Sunday":
//         console.log("Weekend")
//         break
//     default:
//         console.log("A regular day")
// }




// Revise falsy values here
// "", false, 0, undefined, null, NaN

if (!NaN) {
    console.log("Empty string has falsy value")
} else {
    console.log("Not a falsy value")
}


// const studentName = "Ahmed"
// const marks = 85

// Using if else if:
// 90+: A+, Excellent, scholarship
// 80-89: A, Very Good, scholarship
// 70-79: B, Good, no scholarship
// 60-69: C, Average, no scholarship
// 50-59: D, Pass, no scholarship
// Below 50: Fail
// Print name, marks, grade, comment, scholarship status with template literals


// const message = `The name of student is ${}. His marks are ${}. The grade of student is ${}. The perform excellent. He is eligible for schorlarship`
// console.log(message)


const hour = 14
const isHoliday = false

// If holiday: closed
// Otherwise open from 9 to 21
// Print if open or closed and why






const light = "red"
// red: Stop
// yellow: Slow down
// green: Go
// anything else: Invalid
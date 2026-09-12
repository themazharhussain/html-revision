# Dates and Time

JavaScript has a built in Date object for working with dates and times. You use it to get the current date, read parts of a date like the year or month, calculate differences between dates, and display dates in a readable way.

---

## Creating a Date

To get the current date and time, create a new Date with no value inside.

```javascript
const now = new Date()
console.log(now)
// shows the current date and time, something like
// Mon Sep 07 2026 14:30:00
```

The word new is required. It creates a fresh date object.

You can also create a date for a specific day by passing a date string.

```javascript
const birthday = new Date("2000-05-15")
console.log(birthday)
// May 15 2000
```

Or pass the parts separately. Note that months start at 0, so January is 0 and December is 11. This is a common surprise.

```javascript
// year, month (0 to 11), day
const date = new Date(2026, 0, 15)   // January 15, 2026
console.log(date)

const date2 = new Date(2026, 11, 25) // December 25, 2026
console.log(date2)
```

Remember the month rule. 0 is January. 11 is December. Everything else in the date is normal.

---

## Getting Parts of a Date

Once you have a date, you can pull out individual pieces.

```javascript
const now = new Date()

console.log(now.getFullYear())   // the year, like 2026
console.log(now.getMonth())      // month 0 to 11, so 8 means September
console.log(now.getDate())       // day of the month, 1 to 31
console.log(now.getDay())        // day of the week, 0 to 6, 0 is Sunday
console.log(now.getHours())      // hour, 0 to 23
console.log(now.getMinutes())    // minutes, 0 to 59
console.log(now.getSeconds())    // seconds, 0 to 59
```

Two things to remember. getMonth starts at 0, so add 1 to get the normal month number. getDay gives the weekday where 0 is Sunday, not the date.

```javascript
const now = new Date()

const realMonth = now.getMonth() + 1
console.log(`Month number: ${realMonth}`)
```

---

## Turning Numbers Into Names

The month and weekday come as numbers. To show names, make an array and use the number as the index.

```javascript
const now = new Date()

const months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"]

const days = ["Sunday", "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday"]

const monthName = months[now.getMonth()]
const dayName = days[now.getDay()]

console.log(`Today is ${dayName}`)
console.log(`The month is ${monthName}`)
```

Here you use everything you know. The date gives a number, and the array turns that number into a name using it as an index.

---

## Building a Readable Date

Combine the parts with a template literal.

```javascript
const now = new Date()

const day = now.getDate()
const month = now.getMonth() + 1
const year = now.getFullYear()

console.log(`${day}/${month}/${year}`)   // like 7/9/2026
```

---

## Built In Formatting

JavaScript can format dates for you in a local readable style.

```javascript
const now = new Date()

console.log(now.toLocaleDateString())   // like 9/7/2026
console.log(now.toLocaleTimeString())   // like 2:30:00 PM
console.log(now.toLocaleString())       // both date and time
console.log(now.toDateString())         // like Mon Sep 07 2026
```

These are the easiest way to show a date to a user.

---

## Timestamps

Every date has a timestamp, which is the number of milliseconds since January 1, 1970. This sounds strange but it is very useful for comparing and calculating dates.

```javascript
const now = new Date()

console.log(now.getTime())   // a big number of milliseconds

// Date.now() is a shortcut for the current timestamp
console.log(Date.now())
```

---

## Calculating the Difference Between Dates

Because timestamps are numbers, you can subtract them to find the time between two dates.

```javascript
const start = new Date("2026-01-01")
const end = new Date("2026-12-31")

const differenceMs = end.getTime() - start.getTime()

// convert milliseconds to days
const millisecondsInADay = 1000 * 60 * 60 * 24
const days = differenceMs / millisecondsInADay

console.log(`Days between: ${Math.round(days)}`)   // 364
```

Step by step. Subtract the two timestamps to get milliseconds. Then divide by the number of milliseconds in one day to get days. This is how you calculate someone's age, days until an event, or how long ago something happened.

Age example.

```javascript
const birthday = new Date("2000-05-15")
const today = new Date()

const ageMs = today.getTime() - birthday.getTime()
const millisecondsInAYear = 1000 * 60 * 60 * 24 * 365
const age = Math.floor(ageMs / millisecondsInAYear)

console.log(`Age: ${age} years`)
```

---

## Quick Reference

```javascript
// create
const now = new Date()                    // current date and time
const specific = new Date("2026-01-15")   // a specific date
const parts = new Date(2026, 0, 15)       // year, month (0 to 11), day

// get parts
now.getFullYear()   // year
now.getMonth()      // 0 to 11, add 1 for real month
now.getDate()       // day of month 1 to 31
now.getDay()        // weekday 0 to 6, 0 is Sunday
now.getHours()      // 0 to 23
now.getMinutes()    // 0 to 59

// format
now.toLocaleDateString()   // readable date
now.toLocaleTimeString()   // readable time
now.toDateString()         // full readable date

// timestamp
now.getTime()   // milliseconds since 1970
Date.now()      // current timestamp shortcut

// difference in days
(date2.getTime() - date1.getTime()) / (1000 * 60 * 60 * 24)
```

Months start at 0. getDay gives the weekday, getDate gives the day number. Timestamps let you subtract dates to find differences.

---

# Exercises

Copy the block below into a .js file and write your code under each exercise.

```javascript
// -------------------------------------------------------
// Exercise 1
// -------------------------------------------------------
// Create a date for right now. Print it to the console.

// Write your code here


// -------------------------------------------------------
// Exercise 2
// -------------------------------------------------------
// Get and print the current year, the current day of the month, and the
// current hour separately.

// Write your code here


// -------------------------------------------------------
// Exercise 3
// -------------------------------------------------------
// Get the current month number. Remember to add 1 because months start
// at 0. Print the real month number.

// Write your code here


// -------------------------------------------------------
// Exercise 4
// -------------------------------------------------------
// Create an array of month names. Use getMonth as an index to print the
// name of the current month.

// Write your code here


// -------------------------------------------------------
// Exercise 5
// -------------------------------------------------------
// Create an array of weekday names. Use getDay to print the name of
// today's weekday.

// Write your code here


// -------------------------------------------------------
// Exercise 6
// -------------------------------------------------------
// Build a readable date string in the format day/month/year using the
// date parts and a template literal.

// Write your code here


// -------------------------------------------------------
// Exercise 7
// -------------------------------------------------------
// Print the current date and time using toLocaleDateString and
// toLocaleTimeString.

// Write your code here


// -------------------------------------------------------
// Exercise 8
// -------------------------------------------------------
// Create a date for a specific event in the future, like a birthday.
// Print how many days are left until that date from today.

// Write your code here


// -------------------------------------------------------
// Exercise 9
// -------------------------------------------------------
// Create a date for your birth year. Calculate and print your
// approximate age in years.

// Write your code here


// -------------------------------------------------------
// Exercise 10
// -------------------------------------------------------
// Write a function that takes a birth date and returns a greeting like
// "You are X years old". Test it with a few different birth dates.

// Write your code here


```

# How JavaScript Runs, Call Stack and Heap

To write good JavaScript, it helps to understand how it runs behind the scenes. This lesson covers how JavaScript executes code, how it tracks function calls, and how it stores data in memory.

---

## JavaScript is Single Threaded

JavaScript runs one thing at a time, from top to bottom. It has one worker doing one task at a time. It finishes one line before moving to the next.

```javascript
console.log("First")
console.log("Second")
console.log("Third")
// Output is always First, Second, Third in that exact order
```

This is called single threaded. One worker, one task at a time. It never skips ahead and never does two lines at once.

You can feel this with a slow task.

```javascript
console.log("Start")

let total = 0
for (let i = 0; i < 1000000; i++) {
    total = total + i
}

console.log("Finished counting")
console.log("End")
```

End only prints after the counting is fully done. JavaScript waited. It does one thing at a time. This single worker idea matters a lot later when we handle slow tasks like loading data from the internet.

---

## The Call Stack

The call stack is how JavaScript keeps track of which function is running right now.

Think of it like a stack of plates. The last plate you put on top is the first one you take off. When a function is called, it goes on top of the stack. When it finishes, it comes off the top.

```javascript
function greet() {
    console.log("Hello")
}

function welcome() {
    greet()
    console.log("Welcome")
}

welcome()
```

Here is what happens step by step.

JavaScript calls welcome. welcome goes on the stack.
Inside welcome, it calls greet. greet goes on top of the stack.
greet runs and prints Hello. Then greet finishes and comes off the stack.
Back in welcome, it prints Welcome. Then welcome finishes and comes off.
The stack is now empty.

JavaScript always works on whatever is on top of the stack. This is how it remembers where it is in your code.

---

## Stack Overflow

If a function keeps calling itself forever, the stack keeps growing until it runs out of space. This is called a stack overflow.

```javascript
function callForever() {
    callForever()
}
// callForever()   do not run this, it crashes the tab
```

The famous website Stack Overflow is named after this error. You do not need to run this. Just know what the term means.

---

## The Heap

The heap is a large area of memory where JavaScript stores objects and arrays.

Simple values like numbers, strings, and booleans are small, so JavaScript keeps them directly. But objects and arrays can be big and can grow, so they are stored in the heap. The variable holds a reference, like an address, pointing to where the object lives in the heap.

```
STACK                    HEAP
simple values            objects and arrays
age = 25                 { name: "Ahmed", age: 25 }
user  ----------------→  points to the object above
```

---

## Copy by Value

Simple values are copied by value. When you copy them, you get a real separate copy.

```javascript
let a = 5
let b = a

b = 10

console.log(a)   // 5
console.log(b)   // 10
```

a is 5. b becomes a copy of a, so b is 5. Then we change b to 10. But a stays 5 because b was a completely separate copy. Changing one does not affect the other.

Numbers, strings, and booleans all copy by value.

---

## Copy by Reference

Objects and arrays work differently. They are shared by reference.

```javascript
let person1 = { name: "Ahmed" }
let person2 = person1

person2.name = "Sara"

console.log(person1.name)   // Sara
console.log(person2.name)   // Sara
```

Here person2 = person1 does not make a copy. Both names point to the same object in the heap. So changing person2 also changes person1, because they are the same object. There is only one object with two names pointing to it.

The same happens with arrays.

```javascript
let list1 = [1, 2, 3]
let list2 = list1

list2.push(4)

console.log(list1)   // [1, 2, 3, 4]
console.log(list2)   // [1, 2, 3, 4]
```

list2 = list1 does not copy the array. Both point to the same array. Add to one, both show it.

---

## Making a Real Copy

To make a real separate copy of an array or object, use the spread operator, which is three dots.

```javascript
let original = [1, 2, 3]
let realCopy = [...original]

realCopy.push(4)

console.log(original)   // [1, 2, 3]     unchanged
console.log(realCopy)   // [1, 2, 3, 4]
```

```javascript
let user = { name: "Ahmed", age: 25 }
let userCopy = { ...user }

userCopy.name = "Sara"

console.log(user.name)      // Ahmed   unchanged
console.log(userCopy.name)  // Sara
```

The spread operator creates a brand new object or array with the same values. Now changing the copy does not affect the original. You will learn spread in more detail later, but remember this trick when you need a real copy.

---

## Quick Reference

```javascript
// Single threaded: one task at a time, top to bottom

// Call stack: tracks running functions, last in first out

// Heap: stores objects and arrays in memory

// Copy by value (primitives): real separate copy
let b = a

// Copy by reference (objects, arrays): same thing, two names
let obj2 = obj1

// Real copy: use spread
let copy = [...arr]
let copy = { ...obj }
```

---

# Exercises

Copy the block below into a .js file and write your code under each exercise.

```javascript
// -------------------------------------------------------
// Exercise 1
// -------------------------------------------------------
// Write three console.log lines. Predict the exact order they will print before running. Confirm JavaScript runs top to bottom.

// Write your code here


// -------------------------------------------------------
// Exercise 2
// -------------------------------------------------------
// Create a number variable. Copy it to a second variable. Change the second variable. Print both. Confirm the first one did not change.

// Write your code here


// -------------------------------------------------------
// Exercise 3
// -------------------------------------------------------
// Create an object with a name property. Copy it to a second variable. Change the name on the second variable. Print both. Notice they both changed and explain why in a comment.

// Write your code here


// -------------------------------------------------------
// Exercise 4
// -------------------------------------------------------
// Create an array of three numbers. Copy it to a second variable. Add a number to the second variable using push. Print both arrays. Notice they both changed.

// Write your code here


// -------------------------------------------------------
// Exercise 5
// -------------------------------------------------------
// Take the object from Exercise 3. This time make a real copy using the spread operator. Change the copy. Print both and confirm the original stayed the same.

// Write your code here


// -------------------------------------------------------
// Exercise 6
// -------------------------------------------------------
// Take the array from Exercise 4. Make a real copy using spread. Add a number to the copy. Print both and confirm the original stayed the same.

// Write your code here


// -------------------------------------------------------
// Exercise 7
// -------------------------------------------------------
// Write two functions where one calls the other. Add a console.log inside each. Predict the order the messages will print based on how the call stack works. Then run and check.

// Write your code here


// -------------------------------------------------------
// Exercise 8
// -------------------------------------------------------
// Write in your own words, as comments in a file, the difference between copy by value and copy by reference. Give one example of each.

// Write your code here


```

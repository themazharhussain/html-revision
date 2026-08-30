# JavaScript — Day 2
## How JavaScript Runs, Call Stack and Heap

**Duration:** 3 hours
**Today's goal:** Students understand how JavaScript actually runs code behind the scenes, what the call stack is, and where data is stored in memory.

---

# PART 1 — Your Preparation (Night Before)

**Things you must know clearly:**

JavaScript runs one thing at a time, top to bottom. This is called single threaded. It has one worker doing one task at a time.

The call stack tracks which function is running. When a function is called, it goes on the stack. When it finishes, it comes off.

The heap is where objects and larger data are stored in memory.

Primitive values like numbers and strings are copied by value. Objects and arrays are shared by reference.

**The key idea for today:**

```javascript
// Copy by value - primitives
let a = 5
let b = a
b = 10
console.log(a)  // still 5, b is a separate copy

// Copy by reference - objects
let obj1 = { name: "Ahmed" }
let obj2 = obj1
obj2.name = "Sara"
console.log(obj1.name)  // "Sara" - both point to same object
```

**Questions students will ask — your answers:**

"What does single threaded mean?"
JavaScript does one thing at a time. It has one worker. It finishes one task before starting the next. This is different from some languages that do many things at once. Later we will see how JavaScript still handles waiting tasks without blocking, but the basic rule is one task at a time.

"What is the difference between the stack and the heap?"
The stack is where JavaScript keeps track of which functions are running right now. It is fast and organized. The heap is a bigger storage area where objects and arrays live. Think of the stack as a to do list of current tasks, and the heap as a warehouse where the actual big items are stored.

"Why does changing one object change the other?"
Because objects are shared by reference. When you do obj2 = obj1, you do not make a copy. Both names point to the same object in the heap. Change one, both see the change. This surprises everyone at first. We will practice it today.

---

# PART 2 — The Class

## Step 1 — Homework Check (10 minutes)

Students swap seats. Check day1 homework.

Is the file linked correctly?
Do all console.log messages appear?
Are the calculations correct?

One good thing, one thing to improve.

---

## Step 2 — JavaScript Runs Top to Bottom (20 minutes)

Create day2.js. Show how JavaScript reads code.

```javascript
console.log("First")
console.log("Second")
console.log("Third")
```

Run it. The output is First, Second, Third in that exact order.

Say:

"JavaScript reads your code from top to bottom, one line at a time. Line 1 first. Then line 2. Then line 3. It never skips ahead. It never does two lines at the same time. This is called single threaded. It means JavaScript has one worker doing one job at a time. Finish this line, then move to the next."

Show it with a small delay idea:

```javascript
console.log("Start")

// imagine this takes time
let total = 0
for (let i = 0; i < 1000000; i++) {
    total = total + i
}

console.log("Finished counting")
console.log("End")
```

Say:

"See how End only prints after the counting is done? JavaScript waited. It does one thing at a time. The counting had to finish before the next line ran. This single worker idea is very important to remember. Later we will learn how JavaScript handles slow tasks like loading data from the internet without freezing, but the basic rule stays. One task at a time."

---

## Step 3 — The Call Stack (35 minutes)

The call stack is how JavaScript keeps track of which function is running.

Draw this on paper first:

```
     CALL STACK
   ┌─────────────┐
   │  function C │   ← running now (top)
   ├─────────────┤
   │  function B │   ← waiting for C
   ├─────────────┤
   │  function A │   ← waiting for B
   └─────────────┘
```

Explain with a simple example. Type this:

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

Walk through it slowly out loud:

JavaScript calls welcome. welcome goes on the stack.
Inside welcome, it calls greet. greet goes on top of the stack.
greet runs console.log Hello. Then greet finishes and comes off the stack.
Back in welcome, it runs console.log Welcome. Then welcome finishes and comes off the stack.
The stack is now empty.

Say:

"The call stack is like a stack of plates. The last plate you put on is the first one you take off. When a function is called, it goes on top. When it finishes, it comes off the top. JavaScript always works on whatever is on top of the stack. This is how it keeps track of where it is in your code."

Show a stack overflow to make it memorable:

```javascript
function callForever() {
    callForever()
}
// callForever()  // do not run this, it crashes
```

Say:

"If a function keeps calling itself forever, the stack keeps growing until it runs out of space. This is called a stack overflow. That famous website Stack Overflow is named after this error. Do not run this code, it will freeze the tab. But now you know what stack overflow means."

---

## Step 4 — The Heap and Memory (25 minutes)

The heap is where JavaScript stores objects and arrays.

Draw this:

```
   STACK                    HEAP
 (simple values)        (objects, arrays)
 ┌──────────┐          ┌──────────────────┐
 │ age = 25 │          │  { name: Ahmed,  │
 │ x = 10   │          │    age: 25 }     │
 │ user ────┼─────────→│                  │
 └──────────┘          └──────────────────┘
```

Say:

"Simple values like numbers, strings, and booleans are small. JavaScript keeps them directly. But objects and arrays can be big and can grow. So JavaScript stores them in a separate large area called the heap. The variable name holds a reference, like an address, that points to where the object lives in the heap."

This leads to the most important concept of today.

---

## BREAK (10 minutes)

---

## Step 5 — Copy by Value vs Copy by Reference (35 minutes)

This is the key lesson of today. It confuses every beginner. Take your time.

### Primitives copy by value

```javascript
let a = 5
let b = a

b = 10

console.log(a)  // 5
console.log(b)  // 10
```

Say:

"When you copy a simple value like a number, you get a real separate copy. a is 5. b becomes a copy of a, so b is 5. Then we change b to 10. But a is still 5 because b was a completely separate copy. Changing one does not affect the other. This is copy by value."

Draw it:

```
a = 5      (its own box)
b = 5      (a separate box, copied)
then b = 10
a is still 5
```

### Objects copy by reference

```javascript
let person1 = { name: "Ahmed" }
let person2 = person1

person2.name = "Sara"

console.log(person1.name)  // "Sara"
console.log(person2.name)  // "Sara"
```

Say:

"Now watch this. With objects it is different. person2 = person1 does not make a copy. Both names point to the same object in the heap. So when we change person2 name to Sara, person1 also shows Sara, because they are the same object. There is only one object. Two names pointing to it."

Draw it:

```
person1 ──┐
          ├──→  { name: "Ahmed" then "Sara" }
person2 ──┘

Both point to the SAME object
```

This surprises students. Let them sit with it. Show it again with an array:

```javascript
let list1 = [1, 2, 3]
let list2 = list1

list2.push(4)

console.log(list1)  // [1, 2, 3, 4]
console.log(list2)  // [1, 2, 3, 4]
```

Say:

"Same thing with arrays. list2 = list1 does not copy the array. Both point to the same array. Add to one, both show it."

### How to make a real copy

```javascript
// Real copy of an array
let original = [1, 2, 3]
let realCopy = [...original]

realCopy.push(4)

console.log(original)  // [1, 2, 3]  unchanged
console.log(realCopy)  // [1, 2, 3, 4]

// Real copy of an object
let user = { name: "Ahmed", age: 25 }
let userCopy = { ...user }

userCopy.name = "Sara"

console.log(user.name)      // "Ahmed"  unchanged
console.log(userCopy.name)  // "Sara"
```

Say:

"To make a real separate copy, use the spread operator, the three dots. This creates a brand new object or array with the same values. Now changing the copy does not affect the original. We will learn spread fully later, but remember this trick when you need a real copy."

---

## Step 6 — Student Exercises (25 minutes)

### Exercise 1 — Predict the Output (15 minutes)

Write these on paper. Students predict the output before running, then check.

```javascript
// Set 1
let x = 10
let y = x
y = 20
console.log(x)   // predict
console.log(y)   // predict

// Set 2
let a = { score: 100 }
let b = a
b.score = 50
console.log(a.score)   // predict
console.log(b.score)   // predict

// Set 3
let arr1 = ["a", "b"]
let arr2 = arr1
arr2.push("c")
console.log(arr1)   // predict
console.log(arr2)   // predict

// Set 4
let original = { value: 1 }
let copy = { ...original }
copy.value = 999
console.log(original.value)   // predict
console.log(copy.value)       // predict
```

The object and array ones surprise them. This is the whole point. If they understand why Set 2 and Set 3 both change, they got it.

### Exercise 2 — Call Stack Order (10 minutes)

```javascript
function first() {
    console.log("first")
}

function second() {
    first()
    console.log("second")
}

function third() {
    second()
    console.log("third")
}

third()
```

Students must write down the exact order of the output before running. Then check. They should explain which function goes on the stack and when.

---

## Step 7 — Review (10 minutes)

Students swap seats. Discuss the predict the output exercise.

Did they understand why objects change together?
Can they explain copy by value vs copy by reference?
Do they know how to make a real copy?

One good thing, one thing to improve.

---

## Step 8 — Quiz and Homework (10 minutes)

### Quiz

1. What does single threaded mean?
2. What is the call stack?
3. What is a stack overflow?
4. What is stored in the heap?
5. What is the difference between copy by value and copy by reference?
6. If two variables point to the same object and you change one, what happens to the other?
7. How do you make a real copy of an array or object?

### Homework

Create memory-practice.js and write these scenarios with predictions in comments:

Create a number variable, copy it to another, change the copy, print both.
Create an object, copy it to another variable, change the copy, print both.
Create an array, copy it to another variable, add an item to the copy, print both.
Then use the spread operator to make a real copy of an object, change the copy, and show the original stays the same.

Write a comment above each console.log predicting what it will print. Then run it and check if you were right.

---

# PART 3 — What We Learned Today

## JavaScript is Single Threaded

Runs one thing at a time, top to bottom. One worker, one task at a time.

## The Call Stack

Tracks which function is running. Last in, first out, like a stack of plates.

```javascript
function a() { b() }
function b() { console.log("hi") }
a()
// a goes on stack, then b, b finishes and pops, then a finishes and pops
```

Stack overflow happens when the stack gets too full, usually from a function calling itself forever.

## The Heap

Where objects and arrays are stored in memory. Variables hold a reference pointing to them.

## Copy by Value (Primitives)

```javascript
let a = 5
let b = a    // real separate copy
b = 10
// a is still 5
```

Numbers, strings, booleans copy by value.

## Copy by Reference (Objects and Arrays)

```javascript
let obj1 = { x: 1 }
let obj2 = obj1   // same object, not a copy
obj2.x = 99
// obj1.x is also 99
```

Objects and arrays share by reference.

## Making a Real Copy

```javascript
let copy = [...originalArray]
let copy = { ...originalObject }
```

Use spread to make a real separate copy.

---

# PART 4 — After Class Notes

1. Did copy by value vs reference click? This is the hardest idea today.
2. Did the call stack make sense?
3. Did students correctly predict the object and array outputs?
4. Who needs more practice with references?
5. What to revise before Day 3?

# JavaScript — Day 1
## What is JavaScript and How to Run It

**Duration:** 3 hours
**Students already know:** HTML, CSS, Git and GitHub
**Today's goal:** Students understand what JavaScript is, why it exists, and can run JavaScript in three different ways.

---

# PART 1 — Your Preparation (Night Before)

**Practice this yourself:**

Open the browser console and type some JavaScript directly. Then run a JavaScript file linked to HTML. Then if you have Node.js, run a file in the terminal. Do all three so you can show them tomorrow smoothly.

**Things you must know clearly:**

JavaScript has three jobs on a website. HTML is structure. CSS is style. JavaScript is behavior. It makes things happen. Buttons that respond, forms that check input, content that changes without reloading, data that loads from the internet.

The three ways to run JavaScript:

```javascript
// Way 1 - directly in browser console
// Way 2 - linked file in HTML using script tag
// Way 3 - in terminal using Node.js
```

console.log is how you print things to see them:

```javascript
console.log("Hello")
console.log(42)
console.log(2 + 2)
```

**Questions students will ask — your answers:**

"Is JavaScript the same as Java?"
No. They are completely different languages. The names are similar for marketing reasons from the 1990s but they have nothing to do with each other. JavaScript is for the web. Java is a different language for other things.

"Where does JavaScript run?"
In the browser mainly. Every browser has a JavaScript engine built in. Chrome has one called V8. JavaScript can also run outside the browser using Node.js, which we will use later for backend.

"Why do we need JavaScript if we have HTML and CSS?"
HTML and CSS cannot do anything active. They cannot respond to clicks, check a password, calculate a total, or load new data. JavaScript adds all the action and logic. Without JavaScript a website is just a poster. With JavaScript it becomes an app.

---

# PART 2 — The Class

## Step 1 — What is JavaScript (25 minutes)

No code yet. Just talk and show.

Start with this. Open a real website like YouTube or a shopping site. Click around. Then say:

"Watch what happens when I click this button. The page changes without reloading. When I type in this search box, suggestions appear instantly. When I add something to cart, the cart number goes up. None of this is HTML or CSS. HTML built the structure. CSS made it look good. But all this action, all this response to what I do, that is JavaScript."

Explain the three languages with a simple comparison:

```
HTML   =  the structure    (walls, rooms, doors of a house)
CSS    =  the style        (paint, furniture, decoration)
JavaScript = the behavior  (electricity, water, things that work)
```

Say:

"You have already learned HTML and CSS. You can build a beautiful house. But right now the house has no electricity. Nothing works. The lights do not turn on. The doors do not open by themselves. JavaScript is the electricity. It makes everything work. This is the language that turns a static page into a real working application."

Give real examples of what JavaScript does:

A button that shows a menu when clicked
A form that checks if your password is strong enough
A shopping cart that calculates the total
A search box that filters results as you type
A page that loads new posts when you scroll
A game you play in the browser

Say:

"Everything interactive you have ever used on a website is JavaScript. It is the most used programming language in the world. And once you learn it well, you can also build backends, mobile apps, and more. This is the biggest and most important language in your whole course."

---

## Step 2 — A Little History (10 minutes)

Keep this short but it helps students understand.

Say:

"JavaScript was created in 1995 in just 10 days by one person for the Netscape browser. It was meant to be a small simple language. Nobody imagined it would become the most important language on the internet. Because it was made so fast, it has some strange behaviors we will see along the way. When you find something odd about JavaScript, remember it was built in 10 days. But do not worry, it grew into a powerful, modern language over the years."

One important clarification:

"JavaScript is not Java. This confuses many beginners. They are totally different languages. The name JavaScript was chosen for marketing because Java was popular at the time. That is the only connection. Forget Java. We are learning JavaScript."

---

## Step 3 — Way 1: The Browser Console (25 minutes)

The fastest way to try JavaScript is right in the browser.

Open any website. Press F12. Click the Console tab.

Type directly in the console:

```javascript
console.log("Hello World")
```

Press Enter. The message appears.

Try more:

```javascript
2 + 2
10 * 5
"Ahmed" + " " + "Khan"
console.log("JavaScript is fun")
```

Say:

"The console is a place to test JavaScript instantly. You do not need any file. Just type and press Enter. Developers use the console all the time to quickly test small pieces of code and to check for errors. Every browser has it. This is your playground."

Let students play for 5 minutes. Have them try:

Simple math
Joining words with the plus sign
console.log with different messages

---

## Step 4 — Way 2: Linked File in HTML (35 minutes)

This is how JavaScript is used in real projects. A separate file linked to HTML.

Create the folder and files together:

```
js-course/
    day1/
        index.html
        script.js
```

Type index.html:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Day 1</title>
</head>
<body>

    <h1>My First JavaScript</h1>

    <script src="script.js"></script>

</body>
</html>
```

Type script.js:

```javascript
console.log("This message comes from a separate file!")
```

Open index.html in the browser. Open the console with F12. Show the message.

Explain the two important things:

First, the script tag connects the JavaScript file to the HTML. It works just like linking a CSS file. src points to the file name.

Second, the script tag is at the bottom of the body, not in the head. Say:

"JavaScript runs line by line from top to bottom. The HTML must be fully loaded before JavaScript tries to use it. If the script runs first, before the HTML exists, it will not find the page elements and you get errors. Putting the script at the bottom of the body means all the HTML above it is ready before JavaScript runs. Always put your script tag at the bottom of the body."

Now show the type save see loop. Change the message:

```javascript
console.log("Hello from Ahmed")
```

Save. Refresh the browser. New message. Say:

"This is your work loop for the whole course. Write code. Save. Refresh browser. Check the console. Write more. This loop is what you will do thousands of times."

Try a few more lines together:

```javascript
console.log("Learning JavaScript")
console.log(5 + 3)
console.log("Today is day 1")
```

---

## BREAK (10 minutes)

---

## Step 5 — Way 3: Node.js in Terminal (20 minutes)

Show this so students know it exists. They will use it fully in backend month.

Check if Node.js is installed. In the terminal type:

```bash
node --version
```

If it shows a version number, it is installed. If not, download from nodejs.org.

Run JavaScript in the terminal:

```bash
node script.js
```

The console.log messages appear in the terminal instead of the browser.

Say:

"Node.js lets JavaScript run outside the browser, directly on your computer. This is how we will build the backend server later. For now just know that JavaScript can run in two places. In the browser for websites, and in Node.js for servers and tools. Same language, two homes. For the next few weeks we will mostly use the browser way."

---

## Step 6 — console.log In Detail (20 minutes)

console.log is the most used tool in JavaScript development. Master it now.

```javascript
// Print text
console.log("Hello students")

// Print numbers
console.log(100)

// Print a calculation
console.log(25 * 4)

// Print multiple things with a label
console.log("The answer is:", 42)

// Print several values together
console.log("Name:", "Ahmed", "Age:", 25)
```

Say:

"console.log shows you what is happening in your code. Users never see the console. It is only for you, the developer. When something is not working, the first thing you do is console.log the values to see what your code actually has. It is like a flashlight you shine into your code to see what is going on. You will use it every single day of your career."

Show the other console messages too:

```javascript
console.log("normal message")
console.warn("this is a warning")
console.error("this is an error")
```

Say: "console.log is the normal one you use most. console.warn shows a yellow warning. console.error shows a red error. All three help you see different things while building."

---

## Step 7 — Student Exercises (25 minutes)

Tell students: "When something does not work, read the console. It usually tells you exactly what is wrong. Read the error before asking me."

### Exercise 1 — Console Playground (10 minutes)

In the browser console directly, students try:

Calculate how many hours are in a week using math
Join their first name and last name with a space
Print a sentence about themselves using console.log
Calculate their age in months

### Exercise 2 — First JavaScript File (15 minutes)

Students create their own folder with index.html and script.js.

In script.js they must:

Print a welcome message
Print the result of at least 3 different calculations
Print a sentence joining at least 2 pieces of text
Use console.log with a label at least once like console.log("Result:", 50)

Check: is the script tag at the bottom of the body? Is it linked correctly? Do the messages appear in the console?

---

## Step 8 — Review (10 minutes)

Students swap seats. Check each other's first JavaScript file.

Is the script.js file linked correctly to the HTML?
Is the script tag at the bottom of the body?
Do all the console.log messages appear?
Any errors in the console?

One good thing, one thing to improve.

---

## Step 9 — Quiz and Homework (10 minutes)

### Quiz

1. What are the three languages of the web and what does each one do?
2. Is JavaScript the same as Java?
3. What does JavaScript add to a website that HTML and CSS cannot do?
4. Name the three ways to run JavaScript.
5. Why do we put the script tag at the bottom of the body?
6. What does console.log do and who can see it?
7. What is Node.js used for?

### Homework

Create a folder called day1-homework with index.html and script.js.

In script.js, write console.log statements that print:

A greeting with your name
Your favourite subject
How many days are in 3 years (use a calculation)
How many minutes are in a full day (use a calculation)
A sentence joining your city and country with text
The result of 1000 divided by 7
A final message saying you finished day 1

Make sure the file is linked correctly and everything shows in the console with no errors.

---

# PART 3 — What We Learned Today

## The Three Languages

```
HTML       = structure
CSS        = style
JavaScript = behavior and logic
```

## What JavaScript Does

Makes websites interactive. Responds to clicks, checks forms, calculates values, loads data, changes content without reloading.

## Three Ways to Run JavaScript

```
1. Browser console (F12, Console tab) - quick testing
2. Linked file in HTML (script tag) - real projects
3. Node.js in terminal (node file.js) - servers and tools
```

## Script Tag Placement

```html
<body>
    <!-- all HTML here -->
    <script src="script.js"></script>
</body>
```

Always at the bottom of body. HTML loads first, then JavaScript runs.

## console.log

```javascript
console.log("text")
console.log(42)
console.log("label:", value)
```

Prints to the console. Only developers see it. Your main tool for checking code.

---

# PART 4 — After Class Notes

1. Did students understand what JavaScript is for?
2. Did everyone link their script file correctly?
3. Is the type save refresh loop clear to them?
4. Did anyone struggle with opening the console?
5. What to revise before Day 2?

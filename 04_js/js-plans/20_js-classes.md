# Classes

A class is a blueprint for creating objects. When you need to make many objects of the same kind, all with the same properties and methods, a class lets you define the shape once and create as many objects as you want from it.

You already know objects. A class is a factory that produces objects.

---

## The Problem Classes Solve

Suppose you need three users, each with a name, an age, and a greet method. Writing each one by hand repeats the same structure.

```javascript
const user1 = {
    name: "Ahmed",
    age: 25,
    greet() {
        console.log(`Hi, I am ${this.name}`)
    }
}

const user2 = {
    name: "Sara",
    age: 30,
    greet() {
        console.log(`Hi, I am ${this.name}`)
    }
}
```

The greet method is copied every time. A class defines this once and stamps out as many users as you need.

---

## Creating a Class

Use the class keyword, then a name that starts with a capital letter by convention. Inside, the constructor is a special method that runs when a new object is created. It sets up the properties.

```javascript
class User {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}
```

The constructor takes values and assigns them to the new object using this. Here this refers to the new object being created.

---

## Creating Objects From a Class

Use the new keyword to create an object from a class. This is called an instance.

```javascript
class User {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

const user1 = new User("Ahmed", 25)
const user2 = new User("Sara", 30)

console.log(user1.name)   // Ahmed
console.log(user2.name)   // Sara
console.log(user1.age)    // 25
```

Each call to new User creates a separate object with its own values. One blueprint, many objects.

---

## Adding Methods

Methods go inside the class, after the constructor. They can use this to access the object's own properties.

```javascript
class User {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    greet() {
        console.log(`Hi, I am ${this.name} and I am ${this.age} years old`)
    }

    haveBirthday() {
        this.age = this.age + 1
        console.log(`Happy birthday! Now ${this.age}`)
    }
}

const user = new User("Ahmed", 25)

user.greet()          // Hi, I am Ahmed and I am 25 years old
user.haveBirthday()   // Happy birthday! Now 26
user.greet()          // Hi, I am Ahmed and I am 26 years old
```

The method is defined once in the class but every object created from it can use it. Methods can also change the object's properties, like haveBirthday increasing the age.

---

## A Complete Example

Here is a bank account class showing properties and several methods working together.

```javascript
class BankAccount {
    constructor(owner, balance) {
        this.owner = owner
        this.balance = balance
    }

    deposit(amount) {
        this.balance = this.balance + amount
        console.log(`Deposited ${amount}. Balance: ${this.balance}`)
    }

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Not enough balance")
            return
        }
        this.balance = this.balance - amount
        console.log(`Withdrew ${amount}. Balance: ${this.balance}`)
    }

    checkBalance() {
        console.log(`${this.owner} has ${this.balance}`)
    }
}

const account = new BankAccount("Ahmed", 1000)

account.deposit(500)      // Deposited 500. Balance: 1500
account.withdraw(200)     // Withdrew 200. Balance: 1300
account.withdraw(5000)    // Not enough balance
account.checkBalance()    // Ahmed has 1300
```

Notice the methods use conditionals and everything else you already know. A class simply organizes related data and behavior together.

---

## Inheritance

One class can build on another using the extends keyword. The new class gets all the properties and methods of the original, and can add its own. This avoids repeating shared code.

```javascript
class Animal {
    constructor(name) {
        this.name = name
    }

    eat() {
        console.log(`${this.name} is eating`)
    }
}

class Dog extends Animal {
    bark() {
        console.log(`${this.name} says woof`)
    }
}

const dog = new Dog("Rex")

dog.eat()    // Rex is eating,  inherited from Animal
dog.bark()   // Rex says woof,  its own method
```

Dog extends Animal, so a Dog object can use eat from Animal and bark from Dog.

---

## The super Keyword

When a child class has its own constructor, it must call super first. super runs the parent class constructor so the inherited properties get set up.

```javascript
class Animal {
    constructor(name) {
        this.name = name
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name)        // run the Animal constructor to set name
        this.breed = breed // then add the Dog specific property
    }

    describe() {
        console.log(`${this.name} is a ${this.breed}`)
    }
}

const dog = new Dog("Rex", "Labrador")
dog.describe()   // Rex is a Labrador
```

super(name) passes name up to the parent class, which sets this.name. Then the child adds this.breed. Without calling super, the child cannot use this.

---

## Why Classes Matter Later

Classes appear in many places you will meet soon. React once used class components heavily. Many libraries and backend tools use classes. The this keyword and the new keyword you learned here appear across all of JavaScript. Understanding classes now makes those later topics easier.

---

## Quick Reference

```javascript
// define a class
class User {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    greet() {
        console.log(`Hi ${this.name}`)
    }
}

// create objects from it
const user = new User("Ahmed", 25)
user.greet()

// inheritance
class Admin extends User {
    constructor(name, age, level) {
        super(name, age)   // call parent constructor
        this.level = level
    }
}
```

A class is a blueprint. The constructor sets up properties with this. new creates an object. extends inherits from another class. super calls the parent constructor.

---

# Exercises

Copy the block below into a .js file and write your code under each exercise.

```javascript
// -------------------------------------------------------
// Exercise 1
// -------------------------------------------------------
// Create a class called Person with a constructor that takes a name and
// an age. Create two people from it and print their names.

// Write your code here


// -------------------------------------------------------
// Exercise 2
// -------------------------------------------------------
// Add a greet method to the Person class that prints a hello message
// using this.name. Call it on your objects.

// Write your code here


// -------------------------------------------------------
// Exercise 3
// -------------------------------------------------------
// Create a class called Rectangle with width and height. Add a method
// called area that returns width times height. Test it.

// Write your code here


// -------------------------------------------------------
// Exercise 4
// -------------------------------------------------------
// Create a class called Counter with a count that starts at 0. Add
// methods increment and decrement that change the count, and a method
// that prints the current count.

// Write your code here


// -------------------------------------------------------
// Exercise 5
// -------------------------------------------------------
// Create a class called Student with a name and an array of marks. Add a
// method that returns the average of the marks.

// Write your code here


// -------------------------------------------------------
// Exercise 6
// -------------------------------------------------------
// Create a class called BankAccount with an owner and balance. Add
// deposit and withdraw methods. Make withdraw refuse if the amount is
// more than the balance.

// Write your code here


// -------------------------------------------------------
// Exercise 7
// -------------------------------------------------------
// Create a class called Car with a brand and a speed that starts at 0.
// Add accelerate and brake methods that change the speed.

// Write your code here


// -------------------------------------------------------
// Exercise 8
// -------------------------------------------------------
// Create a class called Animal with a name and an eat method. Create a
// class called Cat that extends Animal and adds a meow method. Test both
// methods on a Cat object.

// Write your code here


// -------------------------------------------------------
// Exercise 9
// -------------------------------------------------------
// Create a class called Shape with a color. Create a class called Circle
// that extends Shape, uses super to set the color, and adds a radius.
// Add a method that returns the area of the circle.

// Write your code here


// -------------------------------------------------------
// Exercise 10
// -------------------------------------------------------
// Create a class called Product with name and price. Create a class
// called DiscountedProduct that extends it, adds a discount percentage,
// and has a method returning the final price after discount.

// Write your code here


```

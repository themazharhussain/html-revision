// const fruits13 = ["apple", "mango", "banana"]

// const students = ["Ahmed", "Sara", "Ali", "Hassan", "Fatima"]


// const prices = [500, 1200, 800, 300, 1500, 500, 1200, 800, 300, 1500, 500, 1200, 800, 300, 1500, 500, 1200, 800, 300, 1500, 500, 1200, 800, 300, 1500, 500, 1200, 800, 300, 1500, 500, 1200, 800, 300, 1500, 500, 1200, 800, 300, 1500, 500, 1200, 800, 300, 1500,]

// let total = 0;
// // Expensive count means total values >1000 in array
// let expensiveCount = 0;

// for (const price of prices) {
//     // total = total + price
//     total += price
//     console.log(price, total)
//     if (price > 1000) {
//         expensiveCount = expensiveCount + 1
//     }
// }

// console.log("Final total:", total)
// console.log("Total expensive count:", expensiveCount)





// function findHighest(priceArray) {
//     let highest = priceArray[0]

//     for (const price of priceArray) {
//         if (price > highest) {
//             highest = price
//         }
//     }

//     return highest

// }

// const prices2 = [500, 1200, 800, 300, 1500]

// console.log(findHighest(prices2))




// const car = {
//     brand: "Toyota",
//     model: "Corolla",
//     year: 2022,
//     isElectric: false
// }

// const car2 = car

// car2.brand = "Suzuki"

// console.log(car)
// console.log(car2)


// console.log(car.brand)
// console.log(car["brand"])

// console.log(car)

// car.brand = "Suzuki"

// console.log(car)

// const name = "Aslam"
// let name2 = name
// name2 = "Akram"

// console.log(name)
// console.log(name2)

const car = {
    brand: "Toyota",
    model: "Corolla",
    speed: 0,
    isLocked: true,
    unlock: function () {
        this.isLocked = false
        return "Car is unlocked"
    },
    locked() {
        this.isLocked = true;
        return "Car is locked"
    },

    changeModel() {
        this.model = "Toyota"
        return "Model has been changed"
    }


}

// console.log(car.locked()) // Here locked is called method instead of functions
// console.log(car.unlock())
// console.log(car.changeModel())
// console.log(car)

// const vehicle = {
//     brand: "Toyota",
//     model: "Corolla",
//     speed: 0,
//     isLocked: true,
//     unlock() {
//         this.isLocked = false;
//         console.log("Car unlocked");
//     },

//     lock() {
//         this.isLocked = true;
//         console.log("Car locked");
//     },

//     start() {
//         console.log("Engine started");
//     },

//     accelerate(amount) {
//         this.speed += amount;
//         console.log(`Car is now going ${this.speed} km/h`);
//     },

//     brake(amount) {
//         this.speed -= amount;

//         if (this.speed < 0) {
//             this.speed = 0;
//         }

//         console.log(`Car slowed to ${this.speed} km/h`);
//     },

//     stop() {
//         this.speed = 0;
//         console.log("Car stopped");
//     }
// }

// const string = {
//     toUpperCase: function () { },
//     toLowerCase: function () { }
// }

// const Math = {

// }


//Higher order functions
// These are the functions which take function as argument
// In this example greet is a higher order function
// function welcome() {
//     return "Welcome to my website"
// }
// function greet(fn) {
//     return fn()
// }

// console.log(greet(welcome))



// function greet(fn) {
//     return fn()
// }

// greet(function () {
//     return "Welcome to my website"
// })

// function greet(fn) {
//     return fn()
// }

// greet(() => {
//     return "Welcome to my website"
// })

// const numbers = [1, 2, 3]

// const newArray = numbers.forEach((item, index) => {
//     console.log(item * 2)
//     console.log(index)
// })

// console.log(newArray)




// const numbers = [1, 2, 3]

// numbers.forEach(item => console.log(item))

// const newArray = numbers.map((item, index) => {
//     return item * 2
// })

// console.log(newArray)

// const numbers = [1, 2, 3, 5, 0]

// const filterArray = numbers.filter((item) => item >= 2)

// console.log(filterArray)

const numbers = [1, 2, 3, 5, 0, 8]

// const biggestNumber = numbers.find((item) => {
//     return item > 3
// })
// const biggestNumber = numbers.find((item) => item > 3)

const biggestNumber = numbers.find(item => item > 3)

// const biggestNumber = numbers.find(function (item) {
//     return item > 3
// })


console.log(biggestNumber)
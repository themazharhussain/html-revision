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

// const numbers = [1, 2, 3, 5, 0, 8]

// // const biggestNumber = numbers.find((item) => {
// //     return item > 3
// // })
// // const biggestNumber = numbers.find((item) => item > 3)

// const biggestNumber = numbers.find(item => item > 3)

// // const biggestNumber = numbers.find(function (item) {
// //     return item > 3
// // })


// //console.log(biggestNumber)

// const numbers = [1, 2, 3]

// const sum = numbers.reduce((acc, number) => {
//     console.log("acc", acc)
//     console.log("number", number)
//     return acc + number
// }, 0)

// console.log(sum)

// array of object
// const cart = [
//     {
//         id: 1,
//         name: "school bag",
//         pricePerUnit: 500,
//         quantity: 2,
//     },
//     {
//         id: 2,
//         name: "Water bottle",
//         pricePerUnit: 600,
//         quantity: 1,
//     }
// ]

// const cartTotalPrice = cart.reduce((acc, item) => {
//     const total = acc + item.pricePerUnit * item.quantity
//     return total
// }, 0)

// function increment(item) {
//     return ++item.quantity
// }

// function decrement(item) {
//     if (item.quantity === 1) return
//     return --item.quantity
// }

// increment({
//     id: 1,
//     name: "school bag",
//     pricePerUnit: 500,
//     quantity: 2,
// })

// console.log(cartTotalPrice)

// [
//     {
//         "id": "everyday-68dab7fd2d72fc85e6172773-12",
//         "type": "everyday",
//         "planKey": "unlimited",
//         "planLabel": "Unlimited",
//         "contractKey": "12",
//         "contractLabel": "12 months",
//         "pricePerUnit": 21.5,
//         "quantity": 1,
//         "destination": "United Kingdom",
//         "destinationFlag": "gb",
//         "isRecurring": true,
//         "tariffId": "68dab7fd2d72fc85e6172773",
//         "contractMonths": 12
//     },
//     {
//         "id": "travel-ES-1gb-7d",
//         "type": "travel",
//         "planLabel": "1GB",
//         "pricePerUnit": 2.96,
//         "quantity": 2,
//         "destination": "Spain",
//         "destinationFlag": "🇪🇸",
//         "durationLabel": "7 days",
//         "isRecurring": false,
//         "travelMeta": {
//             "esimfx_product_id": "f6d95c2a-88e7-4e52-950d-f4b90cb3bf13",
//             "country_code": "ES",
//             "country_name": "Spain",
//             "duration_days": 7,
//             "data_amount_gb": 1,
//             "is_unlimited": false,
//             "price_gbp": 2.96
//         }
//     }
// ]

// const studentNames = ["Mishal", "Amber", "Faiqa", "Hadeeqa"]

// const sortedNameAc = studentNames.sort()
// console.log(sortedNameAc)
// const sortedNameDec = sortedNameAc.reverse()
// console.log(sortedNameDec)

// console.log(studentNames)



// const numbers = [10, 2, 5]

// //const sortedNumbers = numbers.sort((a, b) => a - b) // ascending order
// const sortedNumbers = numbers.sort((a, b) => b - a) // descending order

// console.log(sortedNumbers)

// const numbers = [10, 2, 5]

// console.log(numbers.some(number => number === 3))

const numbers8 = [1, 4, 6, 8]

const isTestPassed = numbers8.every(item => item % 2 === 0)

console.log(isTestPassed)
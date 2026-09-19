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

// const numbers8 = [1, 4, 6, 8]

// const isTestPassed = numbers8.every(item => item % 2 === 0)

// console.log(isTestPassed)

const person = {
    first_name: "Ahmed",
    second_name: "Ali",
    age: 25,
    city: "Lahore"
}

//const keys = []
const values = []

// console.log(person.name)
// console.log(person["name"])

for (const key in person) {
    // keys.push(key)
    values.push(person[key])
    // console.log(`${key}: ${person[key]}`)
}

//console.log(keys)
//console.log(values)
// name
// age
// city
// let fullName = ""
// const valuess = Object.keys(person).filter(item => item === "first_name" || item === "second_name")

// const firstName = valuess.map(item => {
//     console.log(item)
//     return `person[item]`
// })

// console.log(firstName)

const marks = {
    math: 85,
    science: 90,
    english: 78
}

// let total = 0;

// for (const sub in marks) {
//     total += marks[sub]
// }

// console.log(total)

// const totalMarks = Object.values(marks).reduce((total, item) => {
//     return total + item
// }, 0)

function getAverage(marks) {
    const totalMarks = Object.values(marks).reduce((total, item) => {
        return total + item
    }, 0)

    return totalMarks / Object.values(marks).length


}
// console.log(getAverage(marks))

const person2 = {
    first_name: "Ahmed",
    second_name: "Ali",
    age: 25,
    city: "Lahore"
}

Object.entries(person).forEach((entry) => {
    //console.log(entry)
    const entryKey = entry[0]
    const entryValue = entry[1]
    //console.log(`${entryKey}: ${entryValue}`)
})

const products = [
    { id: 1, name: "Laptop", price: 80000, inStock: true },
    { id: 2, name: "Phone", price: 50000, inStock: false },
    { id: 3, name: "Tablet", price: 60000, inStock: true }
]

const productNames = products.map(item => item.name)
const totalPrice = products.reduce((total, item) => total + item.price, 0)
const inStockProducts = products.filter(item => item.inStock === true)
//console.log(inStockProducts)

const person3 = { ...person2 }
person3.first_name = "Aslam"

// console.log(person2)
// console.log(person3)

const names = ["ALi", "Akram"]
const names2 = [...names]
names2[0] = "Aslam"
// console.log(names)
// console.log(names2)

const now = new Date();

// console.log(now);
// console.log(now.toString());
// console.log(now.toISOString());

const birthday = new Date("2000-05-15")
//console.log(birthday.toString())

const now2 = new Date();
//console.log(now2.getFullYear())
//console.log(now2.getDate())
//console.log(now2.getMonth() + 1)
// console.log(now2.getHours() + 1)
// console.log(now2.getDay())
// 0 sunday
// 1 monday
// 2 tuesday
// 3 wednesday
// console.log(now2.toLocaleDateString())
// console.log(now2.toLocaleTimeString())

// console.log(now2.toLocaleString()) 

const now3 = new Date()
//January 1, 1970
//console.log(now3.getTime())
// if (now3.getTime() === Date.now()) {
//     console.log("we are in if condition")
// }

const start = new Date("2026-09-10")
const end = new Date("2026-09-18")
const millisecondsToDay = 1000 * 60 * 60 * 24
const differenceInMilliseconds = end.getTime() - start.getTime()
const differenceInDays = differenceInMilliseconds / millisecondsToDay
//console.log(differenceInDays)

const birthDate = new Date("2008-10-23")

//console.log(birthDate.toDateString())


const person4 = {
    first_name: "Ahmed",
    second_name: "Ali",
    age: 25,
}

//const firstName = person3.first_name

// const { first_name: firstName, second_name, age } = person4
// console.log(firstName)


// const { first_name: firstName, second_name, age, city = "Lahore" } = person4

// console.log(city)

function printObject({ first_name = "", age }) {

    // console.log(first_name)
}

//printObject(person4)

const person5 = {
    first_name: "Ahmed",
    second_name: "Ali",
    age: 25,
}

const { first_name: name } = person5
//console.log(first_name)// Now it throw errors since we have rename the first_name

const products1 = [
    { name: "Laptop", price: 80000 },
    { name: "Phone", price: 50000 }
]

//products1.forEach(({ name, price }) => console.log(name, price))

const original1 = [1, 2, 3]
const original2 = [4, 10, 8]

const copy = [...original1, ...original2]
//console.log(copy)

const copy2 = [10, ...original1, 4]
//console.log(copy2)


const person6 = {
    first_name: "Ahmed",
    second_name: "Ali",
    age: 25,
}

const person7 = {
    city: "Lahore"
}

const copy4 = { ...person6, ...person7 }

const copy3 = { ...person6, city: "Lahore" }

const { first_name, city } = copy3

//console.log(first_name, city)

//console.log(copy4)

const numbers2 = [5, 2, 8, 1, 9]

// console.log(Math.max(...numbers2))   // 9
// console.log(Math.min(...numbers2))   // 1

function checkMaxNumber(number1, number2) {
    console.log(values)
}
const numbers3 = [5, 2]

checkMaxNumber(...numbers3)
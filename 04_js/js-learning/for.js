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




const car = {
    brand: "Toyota",
    model: "Corolla",
    year: 2022,
    isElectric: false
}

const car2 = car

car2.brand = "Suzuki"

console.log(car)
console.log(car2)


// console.log(car.brand)
// console.log(car["brand"])

// console.log(car)

// car.brand = "Suzuki"

// console.log(car)

const name = "Aslam"
let name2 = name
name2 = "Akram"

console.log(name)
console.log(name2)

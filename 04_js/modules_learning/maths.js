// export function add(a, b) {
//     return a + b
// }

// export const subtractNumbers = (a, b) => {
//     return a - b
// }

// export default function multiply(a, b) {
//     return a * b
// }

// export function divide(a, b) {
//     return a / b
// }

// export function add(a, b) {
//     return a + b
// }


function add(a, b) {
    return a + b
}

const subtractNumbers = (a, b) => {
    return a - b
}

export default function multiply(a, b) {
    return a * b
}

function divide(a, b) {
    return a / b
}

function toUpperCase(sentence = "") {
    return sentence.toUpperCase()
}

function convertDate(dateObject) {
    return `${dateObject.getDate()}/${dateObject.getMonth() + 1}/${dateObject.getFullYear()}`
}

export { add, subtractNumbers, divide, toUpperCase, convertDate }
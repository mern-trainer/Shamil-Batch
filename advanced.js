// synchronous -> line by line execution of code -> One task at a time
// asynchronous -> multiple tasks at a time -> non blocking

console.log("Hi");

// function sum(a, b) {
//     console.log(a + b);
// }

// sum(10, 20);
console.log("Bye"); 

// callback function -> function which is passed as an argument to another function.

// function sum(a, b) {
//     return a + b
// }

// shorthand of function -> arrow function -> single line function

const sumOfTwo = (a, b) => a + b


// console.log(sum(10, 20))
// console.log(sumOfTwo(10, 20))

// const display = () => {
//     console.log("Display Invoked")
// }

// const handleCall = (callback) => {
//     callback()
// }

// handleCall(display)

const displayResult = (result) => {
    console.log(result);
}

const sum = (firstNumber, secondNumber, callbackFunc) => {
    const result = firstNumber + secondNumber
    callbackFunc(result)
}

sum(10, 100, displayResult)

// const handleLoop = (value) => {
//     console.log(value);
// }

// const arrayLooping = () => {
//     for (let i = 0; i < 10; i++) {
//         handleLoop(i)
//     }
// }

// arrayLooping()


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const arrayLooping = (cb) => {
//     for (let i = 0; i < arr.length; i++) {
//         cb(arr[i], i, arr)
//     }
// }

// arrayLooping((element, index, array) => {
//     console.log(element, index, array);
// })

// array method -> Map -> Array manipulation

// length of array == length of result array

const res = arr.map((element, index, array) => {
    if (element % 2 == 0) {
        return element * 10     
    }
    return element
})

console.log(res);

const users = [
    { name: "Shamil", age: 21 },
    { name: "John", age: 22 },
    { name: "Mark", age: 23 },
    { name: "Jane", age: 24 },
    { name: "Bob", age: 25 }
]

const res2 = users.map((user) => {
    if (user.name == "John") {
        user.age = 50
    }
    return user
})

console.log(res2);
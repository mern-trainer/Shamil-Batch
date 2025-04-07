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

sum(10,100,displayResult)
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

// callback -> Function which is passed as an argument to another function.

// array map -> Array Manipulation -> to update an existing array elements


// async -> non blocking -> same time multiple tasks

// sync -> blocking -> line by line execution ->

// promise, async await

// promise -> to handle asynchronous operations

console.log("Hi");
// setTimeout(() => {
//     console.log("Display after 5 seconds");
// }, 5000) // 5000ms == 5s
console.log("Hello");

// promise states -> pending -> fulfilled -> rejected -> settled promise

const promiseFunc = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Display after 5 seconds")
    }, 5000);
}) // constructor function -> Memory allocation

// promiseFunc().then((response) => { // success
//     console.log("success:",response);
// }).catch((error) => { // failure
//     console.log("failure:",error);
// })

// async await -> to handle asynchronous operations

// async function handle() {
    
// }

const handlePromise = async () => {
    try {
        const response = await promiseFunc()
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

handlePromise()

// application

// API -> Application Programming Interface

// api -> server to server , client to server

// json -> Javascript Object Notation

// object -> collection of key value pairs

'{"name": "Shamil", "age": 21}'
// XMLDocument, json, text, html 

const fetchData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos")
        const res = await response.json()
        for (let i = 0; i<res.length; i++) {
            const todo = res[i]
            const list = document.getElementById("list")
            list.innerHTML = list.innerHTML + "<div>"+todo.title+" - "+todo.id+"</div>"
        }
    } catch (error) {
        console.log(error);   
    }
}

fetchData()

// Set, Map, Memoization, recursion, closure, curring

// Array -> Collection of elements.

// Set -> Collection of unique elements. -> Set Constructor

const set = new Set()

set.add(20)
set.add(20)
set.add(30)
set.add(40)

const is_exist = set.has(300)

const len = set.size

set.delete(20)

console.log(len);

console.log(is_exist);

// set.clear()

console.log(set);

console.log(Array.from(set));

// Map -> Collection of key value pairs. -> Map Constructor

const map = new Map()

map.set("name", "Shamil")
map.set("age", 21)

const length = map.size

const exist = map.has("name")

map.delete("name")

const a = map.get("age")

console.log(a);

map.clear()
console.log(length);

console.log(exist);

console.log(map);

// Memoization -> Optimization technique -> to store the result of a function for future use.
const m = new Map()

const sumOfNumbers = (a, b) => {
    const key = a + "," + b
    if (m.has(key)) {
        console.log("Fetching from cache...");
        return m.get(key)
    }
    console.log("Calculating...");
    const s = a + b
    m.set(key, s)
    return s
}

console.log(sumOfNumbers(102,0));
console.log(sumOfNumbers(10,20));
console.log(sumOfNumbers(10,20));
console.log(sumOfNumbers(10,20));
console.log(sumOfNumbers(10, 20));

// application

const cache = new Map()

const getUserInfo = async (user_id) => {
    try {
        if (cache.has(user_id)) {
            return cache.get(user_id)
        }
        console.log("Fetching data from url");
        const response = await fetch(`https://dummyjson.com/users/${user_id}`)
        const res = await response.json()
        cache.set(user_id, res)
        return res
    } catch (error) {
        console.log(error);   
    }
}

const handleApi = async () => {
    let user = await getUserInfo(2)
    console.log(user);
    user = await getUserInfo(2)
    console.log(user);
    user = await getUserInfo(2)
    console.log(user);
    user = await getUserInfo(2)
    console.log(user);
    user = await getUserInfo(2)
    console.log(user);
    user = await getUserInfo(2)
    console.log(user);
    user = await getUserInfo(2)
    console.log(user);
    user = await getUserInfo(2)
    console.log(user);
    user = await getUserInfo(2)
    console.log(user);
    user = await getUserInfo(2)
    console.log(user);
    user = await getUserInfo(2)
    console.log(user);
    user = await getUserInfo(2)
    console.log(user);
    user = await getUserInfo(2)
    console.log(user);
    user = await getUserInfo(2)
    console.log(user);
    user = await getUserInfo(2)
    console.log(user);
    user = await getUserInfo(2)
    console.log(user);
    user = await getUserInfo(2)
    console.log(user);
    user = await getUserInfo(2)
    console.log(user);
    user = await getUserInfo(2)
    console.log(user);
    console.log("Completed");
}

handleApi()
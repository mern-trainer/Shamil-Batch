// oops -> Object Oriented Programming System

// object -> Collections of key value pairs

// const obj = {
//     name: "Shamil",
//     age: 21,
//     place: "Kozhikode"
// }

// obj.age = 23
// obj.place = "Kannur"

// delete obj.place

// console.log(obj);

// class -> Template or blueprint of an object.
// object -> Instance of a class

// constructor function -> invoke while creating an object
// attributes -> same as variables
// methods -> function
// this -> rep. current object

// PascalCase -> 
class Person{

    #name;

    constructor(name) {
        this.#name = name
    }

    display(number) {
        console.log("Display invoked " + number);
    }

    displayName() {
        console.log(this.#name);
    }
}

class Shamil extends Person{

}

// child class -> Shamil
// parent class -> Person

const person = new Shamil("Shamil")

person.display(10)

person.displayName()

console.log(person);

// 4 pillers

// Encapsulation -> Binding of properties and methods into a single unit.,
//                  access modifiers -> public, private, protected, default
// in js -> public, private
// Abstraction -> Hinding implementation
// Inheritance -> extends methods and properties from one class to another.
// Polymorphism -> Many forms ->
// overloading -> Same method and diff. parameters
// overriding -> Same method and same parameters

class Calculator{
    constructor() {
        console.log("Instance created");
    }

    sum(a, b) {
        const s = a + b
        return s
    }

}

class Add extends Calculator{
    sum(a, b, c) { // overloading
        const s = a + b + c
        return s
    }

    // @overriding
    sum(s1, s2) {
        const s = s1 + " " + s2
        return s
    }

    callParent(a, b) {
        return super.sum(a, b)
    }
}

const add = new Add()

console.log(add.sum(10, 20, 40));

console.log(add.callParent(10,100));
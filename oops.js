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

const person = new Person("Shamil")

person.display(10)

person.displayName()

console.log(person);

// 4 pillers

// Encapsulation -> Binding of properties and methods into a single unit.,
//                  access modifiers -> public, private, protected, default
// in js -> public, private
// Inheritance ->
// Abstraction -> 
// Polymorphism -> 
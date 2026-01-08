// function reduce(arr, fn, init) {

//     let acc = init;
//     let start_index = 0;

//     if (acc === undefined) {
//         acc = arr[0];
//         start_index = 1;
//     }
//     for (let i = start_index; i < arr.length; i++) {

//         acc = fn(acc, arr[i]);
//     }
//     return acc;
// }

// const arr = [1, 2, 3, 4];

//  function sum(acc, value) {

//     return acc + value;
// }

// let result_fn = reduce(arr, sum, )

// console.log(result_fn);

// "use strict";

// const person = {
//     name: "james",
//     age: 20,

//     sleep() {
//         console.log("sleeping");

//     }
// }

// console.log(Object.getOwnPropertyDescriptors(person));

//  Object.seal(person);

// console.log(Object.getOwnPropertyDescriptors(person));
// Object.preventExtensions(person);

// delete person.age;

// Object.defineProperty(person, 'name', {
//   writable: true,
//   enumerable: true,
//   configurable: false,
// });

// Object.seal(person);
// console.log(Object.isSealed(person));
// console.log(Object.isExtensible(person));

// Object.freeze(person);

// console.log(Object.getOwnPropertyDescriptors(person));

// const person = { name: 'Bob', age: 23 };

// Object.defineProperty(person, 'name', {
//     get: function () {
//         console.log("barev");
//     },
//     set: function(val) {
//         if(!val){throw new Error("no no")};
//         console.log("val");

//     }
// });

// person.name;

// const obj = {};

// console.log(Object.getOwnPropertyNames(obj.__proto__));


// console.log(Object.getOwnPropertyDescriptors(obj.__proto__));
// const o = new Object();

// Object.prototype = {};


// console.log(Object.getOwnPropertyNames(o.__proto__));

// Object.prototype = {};
// Object.__proto__ = {};

// const a = {};
// console.log(Object.getOwnPropertyNames(a.__proto__));

// console.log(Object.__proto__ === Function.prototype);
// console.log(Object.prototype.__proto__ === null);
// console.log(Object.prototype === Function.__proto__.__proto__);

//verifying...
// const a = { x: 1 };
// const b = { y: 2 };
// const c = { z: 3 };

// Object.setPrototypeOf(b, a);
// Object.setPrototypeOf(c, b);

// console.log(c.x);
// console.log(c.y);
// console.log(c.z);

// console.log(Object.getPrototypeOf(a) === Object.prototype);
// console.log(Object.getPrototypeOf(b) === a);
// console.log(Object.getPrototypeOf(c) === b);

//my object.create implementation...

// function myObjectCreate(proto) {
//     function Foo() { };

//     Foo.prototype = proto;

//     return new Foo;
// }
// const b = {
//     x: 20,
// }

// const obj = myObjectCreate(b);

// console.log(obj.x);  

// console.log(Object.getPrototypeOf(obj));

//non enumerable property exploration

// const obj = new Object();

// obj.x = 20;
// Object.defineProperty(obj, "name", {
//     value: "james",
//     writable: true,
//     configurable: true,
//     enumerable: false,
// });

// console.log(obj.x);
// console.log(obj.name);

// console.log(Object.keys(obj));

// // console.log(Object.getOwnPropertyNames(obj));

// function Animal(name) {
//     this.name = name;
// };

// Animal.prototype.eat = function () {
//     console.log(`${this.name} eating`);
// };

// // Animal.sayhi = function () { console.log("barev") };

// function Dog(name, breed) {
//     Animal.call(this, name);
//     this.breed = breed;

// }
// Object.setPrototypeOf(Dog.prototype, Animal.prototype);

// Dog.prototype.bark = function () {
//     console.log(`${this.name} barking`);
// }

// const zevs = new Dog('zevs', 'shepherd');

// zevs.bark();
// // zevs.sayhi();
// zevs.eat();


// console.log(Dog.prototype.constructor === Dog);
// console.log(Animal.prototype.constructor === Animal);
// console.log(Dog.__proto__ === Animal);             // false? why?
// console.log(Object.getPrototypeOf(Dog));

// console.log(Object.getOwnPropertyNames(Dog));


// new custom implementation.

// function myNew(Constructor, ...args) {
//     const obj = {};

//     Object.setPrototypeOf(obj, Constructor.prototype);

//     const res = Constructor.apply(obj, args);

//     return (typeof res === 'object' && res !== null) ? res : obj;
//     // return obj;
// }

// function Dog(name, type) {
//     this.name = name;
//     this.type = type;
// };

// Dog.prototype.barks = function () {

//     console.log(`${this.name} barks`);
// }
// Dog.prototype.say = function () {
//     console.log(`his type is ${this.type}`);

// }

// const a = myNew(Dog, 'zevs', 'husky');

// a.barks();
// a.say();

// console.log(
//     typeof null === 'object'

// )

// class Car {
//     static age = 10;
//     constructor(name) {
//         this.name = name;
//     }
//     drive() { }
// }
// console.log(Car.prototype);
// console.log(Object.getOwnPropertyNames(Car));

// const n = new Car("aper");




// this.name = 'gagik';
// const obj = {

//     name: 'gag',

//     method() {
//         console.log(this.name);
//     },

//     arrow: () => {
//         console.log(this.name);
//     }
// };

// obj.method();
// obj.arrow();

// let o = {
//     x: 42,
// }
// function foo(){
//         console.log(this.x);
//     }

// o.func = foo;

// function Person (name,age){
//     if(new.target){
//         return 42;
//     }
//     this.name= name;
//     this.age = age;
// }

// const p1 = new Person("tigran", 55);
// console.log(p1);

// const arr = [];

// const p = Object.getPrototypeOf(arr);

// console.log(p == Array.prototype);


// 'use strict';
// function foo() {
//     console.log(this);
// }
// var a 
// = 10;
// foo();


// "use strict";
// var a = 20;
// function test() {
// console.log(this.a);
// }
// test();


// const obj = {
// a: 5,
// show() {
// console.log(this.a);
// }
// };
// obj.show();



// const user = {
// name: "John",
// show() {
// console.log(this);
// }
// };
// const fn = user.show;
// fn();

// let obj = {
// x: 100,
// inner: {
// x: 200,
// print() {
// console.log(this.x);
// }
// }
// };
// const p = obj.inner.print();
// console.log(p);

// function foo() {
// console.log(this.x);
// }
// const a = { x: 1 };
// const b = { x: 2 };
// foo.call(a);
// foo.call(b);
// foo();


// function sum() {
// return this.a + this.b;
// }
// const obj = { a: 10, b: 20 };
// const f = sum.bind(obj);
// console.log(f());
// console.log(sum());


// function foo() {
// console.log(this.v);
// }
// const a = foo.bind({ v: 1 });
// const b = a.bind({ v: 2 });
// b();


// const obj = {
// x: 10,
// show: () => {
// console.log(this.x);
// }
// };
// obj.show();


// const obj = {
//     x: 10,
//     show() {
//         const inner = () => console.log(this.x);
//         inner();
//     }
// };
// obj.show();


// function Person() {
// this.age = 20;
// setTimeout(() => {
// console.log(this.age);
// }, 0);
// }
// new Person();


// var x = 100;
// const obj = { x: 200 };
// const foo = () => console.log(this.x);
// foo.call(obj);


// function User() {
//     this.name = "Alice";

// }
// const u = User();
// console.log(u);
// console.log(name);


// class A {
// constructor() {
// this.x = 10;
// }
// show() {
// console.log(this.x);
// }
// }
// const f = new A().show;
// f();


// class Test {
// x = 10;
// static x = 20;
// show() {
// console.log(this.x);
// }
// static show() {
// console.log(this.x);
// }
// }
// const t = new Test();
// t.show();
// Test.show();


// const obj = {
// count: 0,
// inc() {
// setTimeout(function () {
// console.log(this.count);
// }, 0);
// }
// };
// obj.inc();

// const obj = {
//     count: 0,
//     inc() {
//         setTimeout(function () {
//             console.log(++this.count);
//         }.bind(this), 0);
//         console.log(this);
//     }
// };
// obj.inc();




// const obj = {
//     arr: [1, 2, 3],
//     sum() {
//         return this.arr.map(function (v) {


//             return v ;
//         }, { inc: 5 });
//     }
// };
// console.log(obj.sum());


// function A() {
//     this.v = 10;
// }
// A.prototype.show = function () {
//     console.log(this.v);
// };
// const a = new A();
// const method = a.show;
// method();


// function B() {
//     this.v = 77;

//     B.prototype.show = () => {
//         console.log(this.v);
//     }
// };
// new B().show();

// var a = 1;

// const obj = {
//     a: 2,
//     f: function () {
//         // console.log(this);

//         return function () {
//             console.log(this.a);
//             // console.log(this);

//         };
//     }
// };
// const fn = obj.f();
// fn();

// var a = 1;
// const obj = {
//     a: 2,
//     f: function () {
//         return () => {
//             console.log(this.a);
//         };
//     }
// };
// const fn = obj.f();
// fn();


// var length = 4;
// function fn() {
//     console.log(this);
// }
// const o = {
//     length: 5,
//     method(...args) {
//         args[0]();
//     }
// };
// o.method(fn, 1, 2);


// function* foo() {
//     yield 1;
//     yield* foo2();
//     console.log('final');
// }

// function* foo2() {
//     yield 'hello';
//     yield 'bye';
// }

// const f = foo();

// console.log(f.next());
// console.log(f.next());
// console.log(f.next());
// f.next();


// function* foo() {
//     let a = yield "ban";
//     let b = yield "ban chi";
//     console.log(a + b);
// }

// let gen = foo();


// console.log(gen.next(5).value);
// console.log(gen.next(5).value);
// // console.log(gen.next(5).value);

// console.log('start');

// setTimeout(() => {
//     console.log('lalalala');

//     setTimeout(() => {
//         console.log('Nested Timeout 1');

//         Promise.resolve().then(() =>
//             console.log('Promise in Nested Timeout')
//         );
//     }, 0);

//     queueMicrotask(() => {
//         console.log('queueMicrotask in Timeout 1');
//         setTimeout(() =>
//             console.log('Timeout in queueMicrotask'), 0
//         );
//     });
// }, 0);

// Promise.resolve().then(() => {
//     console.log('Promise 1');
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log('Promise with setTimeout');
//             resolve();
//         }, 0);
//     });
// }).then(() => {
//     console.log('Promise 2');
//     queueMicrotask(() =>
//         console.log('queueMicrotask in Promise chain')
//     );
// });

// setTimeout(() => {
//     console.log('Timeout 2');
// }, 0);

// console.log('End');


// console.log('Start');

// setTimeout(() => {
//     console.log('Timeout 1');
//     setTimeout(() => {
//         console.log('Nested Timeout 1');
//         Promise.resolve().then(() => console.log('Promise in Nested Timeout 1'));
//     }, 0);

//     queueMicrotask(() => {
//         console.log('queueMicrotask in Timeout 1');
//         setTimeout(() => console.log('Timeout in queueMicrotask'), 0);
//     });
// }, 0);

// Promise.resolve().then(() => {
//     console.log('Promise 1');
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log('Promise with setTimeout');
//             resolve();
//         }, 0);
//     });
// }).then(() => {
//     console.log('Promise 2');
//     queueMicrotask(() => console.log('queueMicrotask in Promise chain'));
// });

// setTimeout(() => {
//     console.log('Timeout 2');
// }, 0);

// console.log('End');


// function* gen() {
//     try {
//         console.log("start");
//         yield 1;
//         console.log("between");
//         yield 2;
//         console.log("end");
//     } finally {
//         console.log("cleanup");
//     }
// }

// for (const x of gen()) {
//     console.log("got", x);

//     break;
// }


// let arr = [1, 2, 3, 4, 5];

// function myMap(arr, callback) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         result.push(callback(arr[i], i, arr));
//     }
//     return result;
// }

// let res = myMap(arr, function (element, index, arr) {
//     return element * 2;
// });

// console.log(res);


// function myMap(arr, callback, thisArg) {
//     let result = [];

//     for (let i = 0; i < arr.length; i++) {
        
//         result.push(callback.call(thisArg, arr[i], i, arr));
//     }

//     return result;
// }
// function scrambleWord (word) {  
//     if (word === "") return "";  
//     return scrambleWord (word.substr(1)) + word[0];  
// }  
// console.log(scrambleWord("abc"));  
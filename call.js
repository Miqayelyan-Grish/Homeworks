//call


// Function.prototype.customCall = function (context, ...args) {

//     context = context ?? globalThis; // ete null lini poxancac veragri globalThis y;

//     const smth = Symbol(); //stexcum enq uniq ev jamanakavor property vorpeszy hankarc chkrknvi mer object(context) i mej; 

//     context[smth] = this; // hxum enq ayd object y this i vra;

//     const res = context[smth](...args); //kanchum enq function y, pahum res i mej;

//     delete context[smth]; // jnjum enq jamankavor properyn;

//     return res;
// };



//apply


// Function.prototype.customApply = function (context, args) {

//     context = context ?? globalThis;

//     const smth = Symbol();

//     context[smth] = this;

//     const res = Array.isArray(args) ? context[smth](...args) : context[smth](args);// stugum enq ardyoq zangvac e ete ayo bacum enq ete voch uxxaki toxnum enq nuyny ;

//     delete context[smth];

//     return res;
// }




//bind


// Function.prototype.myBind = function (context, ...args1) {

//     const fn = this; //pahum enq this ;

//     return function (...args2) {
//         return fn.apply(context, [...args1, ...args2]); //vorepszi misht bind y nuuyny lini     
//     };

// }


// const obj = {
//     name: "james",
// }

// function foo() {
//     console.log(this.name);
// }

// const a = foo.myBind(obj, 1, 2);
// a(4, 5, 6);


// const promise = new Promise(function (resolve, reject) {
//     setTimeout(() => { resolve('esiminch') }, 1000);
//     setTimeout(() => { reject("merjvar aper"), 1000 })
// });

// promise.catch(value => { console.log(value); })


// function checkNumber(num) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (num > 10) {
//         resolve("Big number");
//       } else {
//         reject("Small number");
//       }
//     }, 1000);
//   });
// }

// checkNumber(10).then(res => console.log("exav")).catch(err => console.log("chexav")).finally(() => console.log("verjapes exav sax, kam el chexav "));


// let obj = {};
// Object.defineProperty(obj, "x", {
//     writable: true,
//     enumerable: false,
//     configurable: true
// });


// Object.defineProperty(obj, "x", {
//     get: function () { return 0 }
// });

// console.log(obj.x);


// let obj = {
//     p1: 21,
//     p2: 'text',
//     p3: NaN,
//     p4: Infinity
// };
// let des = JSON.parse(JSON.stringify(obj));
// console.log(des.p3);


// function Range(from, to) {
//     console.log(new.target);
//     this.from = from;
//     this.to = to;

// }

// new Range(3, 5);


// const f = function () {};
// const a = f.prototype;
// const b = a.constructor;

// console.log(b === f);

// class test {
//     size = 12;
//     bar() {
//         return size;
//     }
// }
// const esim = new test();

// console.log(esim.bar());

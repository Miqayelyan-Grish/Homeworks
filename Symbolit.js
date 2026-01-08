//Symbol.iterator implementation

// class Range {
//     constructor(start, end) {
//         this.start = start;
//         this.end = end;
//     }

//     [Symbol.iterator]() {

//         let start = this.start;
//         const end = this.end;

//         return {
//             next() {

//                 if (start <= end) {
//                     return {
//                         value: start++,
//                         done: false
//                     }
//                 }
//                 else {
//                     return {
//                         done: true,
//                     }
//                 }

//             }

//         }
//     }
// }
// const range = new Range(3, 7);

// for (const n of range) console.log(n);
// // 3 4 5 6 7

// console.log([...range]);        // [3,4,5,6,7]
// console.log(Array.from(range)); // [3,4,5,6,7]





//Hiding Internal State by Symbol


// const symPassword = Symbol("password");

// class User {

//     constructor(name, password) {
//         this.name = name;
//         this[symPassword] = password;
//     }
//     checkPassword(input) {
//         if (input === this[symPassword]) {
//             return this[symPassword] === input;
//         } else return false
//     }
//     changePassword(newPassword) {

//         this[symPassword] = newPassword;
//     }

// }
// const user = new User('John', 'exxxx');

// user.changePassword("exxxx");
// console.log(user.checkPassword('exxxx')); // true
// console.log(user.checkPassword('123'));    // false

// console.log(Object.keys(user)); // ['name']




//Custom Object Behavior in Type Coercion 

// class Money {
//     constructor(amount) {
//         this.amount = amount;
//     }

//     [Symbol.toPrimitive](hint) {
//         if (hint === "number") {
//             return this.amount;
//         }
//         else if (hint === "string") {
//             return `${this.amount}$`
//         }
//         else return this.amount;
//     }

// }

// const money = new Money(100);

// console.log(+money);        // 100
// console.log(money + 10);   // 110
// console.log(`${money}`);   // "100 USD"
// console.log(String(money));// "100 USD"

// let x = {}
// console.log(x.valueOf());





// Custom instanceof Logic 


// class EvenNumber {
//     static [Symbol.hasInstance](target) {
//         if (typeof target === "number" && target % 2 === 0) {
//             return true;
//         }
//         else return false;
//     }
// }

// console.log(4 instanceof EvenNumber);   // true
// console.log(7 instanceof EvenNumber);   // false
// console.log('4' instanceof EvenNumber); // false





// Custom Object Branding (Symbol.toStringTag)


// class Collection {
//     [Symbol.toStringTag] = "aperik";
// }

// let obj = new Collection();

// console.log(Object.prototype.toString.call(obj))



//Generator-Based Range Implementation


// class genRange {
//     constructor(from, to) {
//         this.from = from;
//         this.to = to;
//     }

//     *[Symbol.iterator]() {

//         let start = this.from;
//         const end = this.to;

//         for (let i = start; i <= end; ++i) {
//             yield i;
//         }

//     }
// }

// const range = new genRange(1, 10);
// console.log([...range]); // [1,2,3,4]



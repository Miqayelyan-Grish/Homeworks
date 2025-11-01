// 1*
// class Rectangles {

//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }
//     area() {
//         return this.width * this.height;
//     }
//     perimeter() {
//         return 2 * (this.width + this.height);
//     }
// }

// const rectangles = new Rectangles(10, 20);

// console.log(rectangles);




// 2*
// class BankAccount {

//     constructor(owner, balance = 0) {
//         this.owner = owner;
//         this.balance = balance;
//     }
//     deposit(amount) {
//         return this.balance + amount;
//     }
//     withdraw(amount) {
//         if (this.balance < amount) {
//             console.log('insufficient funds');
//         }
//         else {
//             return this.balance - amount;
//         }
//     }
// }
// const bankaccount = new BankAccount('Gag',2000);

// console.log(bankaccount.withdraw(3000));




// 3*
// class StudentClass{
//     #grades;

//     constructor(name){
//         this.name = name;
//         this.#grades = new Array();
//     }
//     addGrade(grade){
//         this.#grades.push(grade);
//         // return this.#grades;
//     }
//     avarage(){
//         if(this.#grades.length === 0)
//             return 0;

//         let sum = 0;
//         for(let i = 0; i < this.#grades.length; ++i){
//             sum += this.#grades[i];
//         }

//         return sum / this.#grades.length;
//     }
// }

// const studentclass = new StudentClass('aram');
// studentclass.addGrade(20);
// studentclass.addGrade(30);
// console.log(studentclass.avarage());



// 4*
// class ClassHelper {

//     static square(n){
//         return n * n;
//     };

// }

// console.log(ClassHelper.square(5));




// 5*
// class Animal {

//     constructor(name) {
//         this.name = name;
//     }
//     speak() {
//         console.log(`${this.name} makes a sound`);
//     }
// }

// class Dog extends Animal {

//     constructor(name) {
//         super(name);
//     }
//     speak() {
//         console.log(`${this.name} barks`);
//     }
// }

// const dog = new Dog('Zeus');
// dog.speak();
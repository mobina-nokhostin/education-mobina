//todo ========= destructuring ============

//?============= obj & arr ================
//Objects allow us to create a single entity that stores data items by key.
// Arrays allow us to gather data items into an ordered list.

//!============== Array ====================

// let numbers = [1, 2, 3, 4, 5];
// let [firstNumber] = numbers;
// console.log(firstNumber); // returns 1

//?============ Multiple elements ============

// let numbers = [1, 2, 3, 4, 5];
// let [firstNumber, secondNumber, thirdNumber] = numbers;
// console.log(firstNumber, secondNumber, thirdNumber); // returns 1 2 3

//?=========== Nested arrays =================

// const arrValue = ['one', ['two', 'three']];

// const [x, [y, z]] = arrValue;

// console.log(x); // one
// console.log(y); // two
// console.log(z); // three


//?========== Swapping variables =================
// let a = 1;
// let b = 3;

// [a, b] = [b, a];
// console.log(a); // 3
// console.log(b); // 1

//?============ Ignore elements using commas ===============

// let [first , ,third] = [1, 2, 3, 4, 5];
// console.log(first);
// console.log(third);

//!============== Object ====================

// let car = { brand: "Honda", color: "red"};
// let { brand } = car;
// console.log(brand); // returns "Honda"

//?============== Multiple properties ===============

// const car = {
//   brand: 'Ford',
//   year: 2015,
//   color: 'blue',
// }
// let { brand, year } = car;
// console.log( brand, year ); // returns "Ford" and "2015"

//?========== Assigning to new variable names ==============

// const job = {
//   role: "Software Engineer",
//   salary: 200000,
//   applicationLink: "meta.com/careers/SWE-role/apply"
// };
// let { role: jobTitle, salary, isRemote = false } = job;
// console.log(jobTitle);

//?============= Nested objects ==================

// const person = {
//   name: 'Jack',
//   age: 26,
//   hobbies: {
//       read: true,
//       playGame: true
//   }
// }

// const {name, hobbies: {read, playGame}} = person;

// console.log(name); // Jack
// console.log(read); // true
// console.log(playGame); // true

//!explain
//!1
// const {name , hobbies} = person
//!2
// const {read , playGame}= hobbies


//?============= Default values =================

// const job = {
//   role: "Software Engineer",
//   salary: 200000,
//   applicationLink: "meta.com/careers/SWE-role/apply"
// };
// let { role, salary, isRemote = false } = job;
// console.log(isRemote);


//! =============== Mixed destructuring===================
// const props = [
//   { id: 1, name: "Fizz" },
//   { id: 2, name: "Buzz" },
//   { id: 3, name: "FizzBuzz" },
// ];

// const [, , { name }] = props;

// console.log(name); // "FizzBuzz"

//===================================

// const user = {
//   name: "William Benson",
//   age: 20,
//   address: {
//     city: "Maryland",
//     state: "Lagos"
//   },
//   hobbies: ["Swimming", "Golf", "Writing"]
// };

// const { name, age, address: { city, state }, hobbies: [firstHobby] } = user;


/*
 1. Create an object called "person" with the following properties: name, age, and gender.
 2. Use destructuring to extract the "name" property from the "person" object and store it in a variable called "personName."
 3. Create a method inside the "person" object called "greet" that logs a greeting message including the person's name.
 4. Use the "this" keyword inside the "greet" method to access the person's name property.
 5. Create an arrow function called "calculateAgeInMonths" that takes in a person's age and returns their age in months (assuming 1 year = 12 months).
 6. Call the "greet" method from the "person" object to log a greeting message.
 7. Call the "calculateAgeInMonths" function with a sample age and log the result.
*/

//1 & 3 & 4 & 5
const person = {
    name: 'jasem',
    age:'120',
    gender: 'male',
    greet () {
        console.log(`hello ${this.name}`);
    },
    calculateAgeInMonths() {
        console.log(`${this.age *12}`);
    }

}

//2
 const {name: personName}= person
 console.log(personName);

 //6
 person.greet()
 //7
 person.calculateAgeInMonths()

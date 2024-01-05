//!========= some ways for iterating ============

//todo ========= some array methods =========

// ? ========= map ========
//iterate and return an array with first array lenth

//? ========= filter =======
//iterate and return an array with the length < first array length

//? ======== forEach ==========
//itarate

//todo ====== loops =======

//?====== for ======
// It is used when the number of iterations is known

//?========= while ==========
// It is used when the number of iterations is not known.

//?===== for of ==========
// iterates over values

//?======= for in ==========
// iterates over the keys




// Given the following array of objects, write a function that returns a new array of objects that only contain the name and age properties, and where the age is greater than 18. Use the array filter method, array map method and destructuring

const people = [
  { name: 'Alice', age: 25, occupation: 'teacher' },
  { name: 'Bob', age: 17, hobby: 'gaming' },
  { name: 'Charlie', age: 21, sport: 'soccer' },
];

// console.log(filterPeople(people));
// Output: [{name: "Alice", age: 25}, {name: "Charlie", age: 21}]


// const filterPeople = (people) => people.filter(({ age }) => age > 18).map(({ name , age }) => ({ name , age }));

// console.log(filterPeople(people));

//todo ===========lets see what happend==============
//!1
// let first = people.filter(({ age }) => age > 18)
// console.log(first);
//!2
// let second = first.map(({ name , age }) => ({name , age}));
// console.log(second);

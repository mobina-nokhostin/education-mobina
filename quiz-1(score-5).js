
//todo ================= function ==================

//? ======== regular function ======== 

//!1
// function greetig(str) {
//     return `hello ${str}`
// }

// console.log(greetig('sara'));

const names = ['amin','asma','morteza','ghazal', 'mahdis' , 'dina', 'solmaz','zahra','aghil','vajihe','zana','hossein','mahsa','ladan','razieh','faran','benyamin']
//? ببخشید اگه کسی رو جا انداختم❤️


//!2
// function greetigNewb(arr) {
//     const final = []
//     for (let i = 0; i < arr.length; i++) {
//         final.push(`hello ${arr[i]}`)
        
//     }
//     return final.join('\n\n')
// }

// console.log(greetigNewb(names));

//!3
// function greetigPro(arr) {
//     const final = []
//     arr.forEach(name => final.push(`hello ${name}`));
//     return final.join('\n\n')
// }

// console.log(greetigPro(names));

//!4
// function greetigProMax(arr) {
//     return arr.map(name => `hello ${name}`).join('\n\n')
// }

// console.log(greetigProMax(names));
//? ======== arrow function =========
//!5
// const greetigProMaxPlusPlus = (arr) => arr.map(name => `hello ${name}`).join('\n\n')

// console.log(greetigProMaxPlusPlus(names));

//?======= lets make joinFunc ========

// function joinFunc(arr , seprator) {
//     let result = '';
//     for (let i = 0; i < arr.length; i++) {
//         result += arr[i] + seprator
        
//     }
//     return result
// }

// console.log(joinFunc(names , '\n\n'));

//? ======== function defined based on a condition =========

// let text = 'yechizi baghlava pashmak'
// let hossein;
// if (text.includes('baghlava')) {
//     hossein = function () {
//         return 'hello'
//     }
// }

// console.log(hossein());

//?========== diference between function & method ===========
//A method is a function that is a property of an object.

//?========== scoops & function ==============
//ScoopeDefine > ScoopeCall

//! global call > block define
// console.log(test());

// {
//     function test() {
//         return 'correct'
//     }
// }

//! global define > block call
// function test() {
//     return 'correct'
// }

// {
//     console.log(test());
// }

//?=========== function hoisting ============= 

//!===true

// console.log(square(5));

// function square(num) {
//     return num * num
// }
 
//!====false
// console.log(square(5));
// const square = (n)=> n * n
// const square = function (n) {
//     return n*n
// }
// console.log(square(5));

//todo ============ reduce ============

//? =========== sum ===============

// const numbers = [1,2,3,4,5];
// console.log(numbers.reduce((a,b)=> a+b , 0));

//?=========== avarege =============

// const numbers = [1,2,3,4,5];
// console.log(numbers.reduce((a,b)=> a+b/numbers.length , 0));

//?=========== Map and Filter =============
//map * 2
//filter num<5
// const numbers = [1,2,3,4,5];
// const doubled = numbers.reduce((nums , num) =>{
//     if(num < 5) {
//         nums.push(num * 2)
//     }
//     return nums
// },[])
 
// console.log(doubled);

//?=========== identify unique values ========= 

// const haramsara = ['ghazal','leyla','benyamin','benyamin','leyla','benyamin','benyamin', 'ghazal','leyla','ghazal','benyamin' , 'ghazal'];

// const persons = haramsara.reduce((persons , person)=>{
//     if (persons.indexOf(person) === -1) {
//         persons.push(person)
//     }
//     return persons
// }, [])

// console.log(persons);
 //! 1
 //persons = [] , person = ghazal ========  push ====== persons =[gazal]
 //!2
 // persons =[gazal] , person = leyla ======= push ====== persons = [ghazal , leyla]
//! 3
// persons = [ghazal , leyla] ,person = benyamin ======push ======= persons = [ghazal , leyla , benyamin]
//!4
// persons = [ghazal , leyla , benyamin] , person = leyla ==== if(false)===== ignore

//?========== tally ============ 

// const haramsara = ['ghazal','leyla','benyamin','benyamin','leyla','benyamin','benyamin', 'ghazal','leyla','ghazal','benyamin' , 'ghazal'];

// const count = haramsara.reduce((tally , zan)=>{
//     if (!tally[zan]) {
//         tally[zan] = 1
//     }else{
//         tally[zan] = tally[zan] +1
//     }
//     return tally
// }, {})

// console.log(count);
//!explain
// const obj = {}
// obj['hi'] = 1
// console.log(obj);
//!1
// tally = {} , zan = ghazal ======== true ======== tally = {gahzal:1}
//!2
// tally = {gahzal: 1} , zan = leyla ========== true ======= tally = {ghazal: 1 , leyla: 1}
//!3
// tally = {ghazal: 1 , leyla: 1}, zan = benyamin ===== true ===== tally = {ghazal: 1 , leyla: 1 , benyamin: 1}
//!4
// tally = {ghazal: 1 , leyla: 1 , benyamin: 1} , zan = benyamin ====false ====tally = {ghazal: 1 , leyla: 1 , benyamin: 2}
//?========== Flattening an array of arrays ==============
// const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];//output [1,2,3,4,5,6,7,8,9]

// const flat = arr.reduce((total , arr)=> total.concat(arr),[])

// console.log(flat);
// //!1
// console.log([].concat([1,2,3]));
// //!2
// console.log([1,2,3].concat([4,5,6]));
// //!3
// console.log([1,2,3,4,5,6].concat([7,8,9]));

//?========= all the value of a proprty in object ===========
// const data = [
//    {a: 'happy', b: 'robin', c: ['blue','green']}, 
//    {a: 'tired', b: 'panther', c: ['green','black','orange','blue']}, 
//    {a: 'sad', b: 'goldfish', c: ['green','red']}
//  ];

//  const colors = data.reduce((total , obj)=>{
//     obj.c.forEach(color =>{
//         total.push(color)
//     })
//     return total
//  }, [])
//  console.log(colors);


//?============= piping ==============
// const increment = (input)=>input +1
// const double = (input)=>input *2
// const decrement = (input)=>input -1
// let pipeline = [increment, double, decrement];

// const result = pipeline.reduce((total , func)=> func(total),1)
// console.log(result);



//Write a function `calculateProduct` that takes an array of numbers as input and
//returns sum of all products using the `reduce` method.

// const product = [1, 2, 3, 4, 5];

// const calculateProduct= (arr)=> arr.reduce( (a, b)=>a+b,0)
// console.log(calculateProduct(product));


/*
 you have to create a counter program that:
 1. The counter must begin at 0.
 2. The increment button must increase the count it by 1.
 3. The decrement button must decrease the count by 1.
 4. The reset button must reset the count back to 0.
 5. The decrement button must NOT decrement the count if it's at 0. In other words, negative counts shouldn't be there in the counter.
*/

//!================================ 1 ==========================================

// const incrementBtn = document.querySelector('#increment')
// const decrementBtn = document.querySelector('#decrement')
// const resetBtn = document.querySelector('#reset')
// const display = document.querySelector('#display')


// const counter ={
//     count: 0 ,
//     increment(){
//         this.count++
//     },
//     decrement(){
//         if (this.count>0) {
//             this.count--
//         }
       
//     },
//     reset(){
//         this.count = 0
//     }
// }

// const updateDisplay =()=> display.textContent = counter.count

// incrementBtn.addEventListener('click',()=>{
//     counter.increment()
//     updateDisplay()
// })

// decrementBtn.addEventListener('click',()=>{
//     counter.decrement()
//     updateDisplay()
// })

// resetBtn.addEventListener('click',()=>{
//     counter.reset()
//     updateDisplay()
// })

//!================================ 2 =====================================

// const allBtn = document.querySelectorAll('button')
// const display = document.querySelector('#display')

// allBtn.forEach( (button) =>{
//     button.addEventListener('click',()=>{
//         if (button.id === 'increment') {
//             display.textContent = parseInt(display.textContent) + 1
//         }else if (button.id === 'decrement') {
//             if (parseInt(display.textContent) > 0) {
//                 display.textContent = parseInt(display.textContent) - 1
//             }
//         }else{
//             display.textContent = 0
//         }
//     })

// })
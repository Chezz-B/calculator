"use strict";

const display = document.getElementById("display");
let sum = 0;
console.log(typeof sum);
let current = 0;


const clearBtn = document.getElementById("clearBtn");
clearBtn.addEventListener("click", function(){
  display.textContent = 0;
  sum = 0;
});



const numbers = Array.from(document.querySelectorAll(".number"));

numbers.forEach(function(number){
  number.addEventListener("click", function(){
    if(sum == 0){
      current = Number(number.value);
      // console.log(current);
      sum = String(current);
      // console.log(sum);
      display.textContent = sum;
    } else {
      current = Number(number.value);
      // console.log(current);
      sum += current;
      // console.log(sum);
      display.textContent = sum;
    }
  })
})



// numbers.forEach(function(number){
//   let numValue = number.value;
//   console.log(numValue);
//   number.addEventListener("click", function(){
//     if(sum = 0){
//     display.textContent = numValue;
//     sum += numValue;
//     } else {
//       let newSum = String(sum);
//       newSum += numValue;
//       display.textContent = newSum;
//     }
//   })
// })

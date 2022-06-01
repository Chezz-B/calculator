"use strict";

const display = document.getElementById("display");
let sum = 0;
let current = 0;



const numbers = Array.from(document.querySelectorAll(".number"));

numbers.forEach(function(number){
  number.addEventListener("click", function(){
    sum == 0 ? sum = number.value : sum += number.value;
    display.textContent = sum;
  });
});



const clearBtn = document.getElementById("clearBtn");

clearBtn.addEventListener("click", function(){
  display.textContent = 0;
  sum = 0;
});



const plusMinus = document.getElementById("plusMinus");

plusMinus.addEventListener("click", function(){
  if(sum != 0){
    sum > 0 ? sum = `-${sum}` : sum = sum.slice(1);
    display.textContent = sum;
  }
})

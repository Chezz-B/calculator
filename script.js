"use strict";

const display = document.getElementById("display");

const displayLeft = document.getElementById("displayLeft"); //delete

let sum = 0;
let current = 0; // switch with sum
let saved = 0;
let operation = 0;


const numbers = Array.from(document.querySelectorAll(".number"));

numbers.forEach(function(number){
  number.addEventListener("click", function(){
    current = number.value;
    sum == 0 ? sum = number.value : sum += number.value;
    display.textContent = sum;
  });
});



const clearBtn = document.getElementById("clearBtn");

clearBtn.addEventListener("click", function(){
  display.textContent = 0;
  sum = 0;
  operation = 0;
  operators.forEach(function(each){
    each.classList.remove("operatorActive")
  });
});



const plusMinus = document.getElementById("plusMinus");

plusMinus.addEventListener("click", function(){
  if(sum != 0){
    sum > 0 ? sum = `-${sum}` : sum = sum.slice(1);
    display.textContent = sum;
  }
});




const percent = document.getElementById("percent");

percent.addEventListener("click", function(){
  sum = Number(sum) / 100;
  display.textContent = sum;
});



const operators = Array.from(document.getElementsByClassName("operator"));

const division = document.getElementById("division");

division.addEventListener("click", function(){
  if(sum === 0) return
  operators.forEach(function(each){
    each.classList.remove("operatorActive")
  });

  division.classList.add("operatorActive");
  saved = sum;
  sum = 0;
  current = 0;
  operation = 1;
  
});

const multiply = document.getElementById("multiply");
multiply.addEventListener("click", function(){
  if(sum === 0) return
  operators.forEach(function(each){
    each.classList.remove("operatorActive")
  });

  multiply.classList.add("operatorActive");
  saved = sum;
  sum = 0;
  current = 0;
  operation = 2;
});

const minus = document.getElementById("minus");
minus.addEventListener("click", function(){
  if(sum === 0) return
  operators.forEach(function(each){
    each.classList.remove("operatorActive")
  });

  minus.classList.add("operatorActive");
  saved = sum;
  sum = 0;
  current = 0;
  operation = 3;
})

const plus = document.getElementById("plus");
plus.addEventListener("click", function(){
  if(sum === 0) return
  operators.forEach(function(each){
    each.classList.remove("operatorActive")
  });

  plus.classList.add("operatorActive");
  saved = sum;
  sum = 0;
  current = 0;
  operation = 4;
})




const equals = document.getElementById("equals");
equals.addEventListener("click", function(){
  if(sum === 0) return
  operators.forEach(function(each){
    each.classList.remove("operatorActive")
  });

  console.log(saved);
  console.log(sum);
  
  if(operation === 1){
    console.log(Number(saved) / Number(sum));
    sum = Number(saved) / Number(sum);
    display.textContent = sum;
  } else if(operation === 2){
    console.log(Number(saved) * Number(sum))
    sum = Number(saved) * Number(sum);
    display.textContent = sum;
  } else if(operation === 3){
    console.log(Number(saved) - Number(sum));
    sum = Number(saved) - Number(sum);
    display.textContent = sum;
  } else if(operation === 4){
    console.log(Number(saved) + Number(sum))
    sum = Number(saved) + Number(sum);
    display.textContent = sum;
  };
  
  operation = 0;

})
"use strict"
let c = prompt(`оператор (add(+),sub(-),mult(*),div(/))`);
let a = +prompt(`Введите первое число`);
let b = +prompt(`Введите второе число`);

function calc() {
  switch (c){
    case "add":
    case "+":
      console.log(`${a} + ${b} = ${a + b}`)
      break;
    case "sub":
    case "-":
      console.log(`${a} - ${b} = ${a - b}`)
      break;
    case "mult":
    case "*":
      console.log(`${a} * ${b} = ${a * b}`)
      break; 
    case "div":
    case "/":
      if (b !== 0) {
        console.log(`${a} / ${b} = ${a / b}`)
        break;
    } else {
        console.log(`на 0 делить нельзя`);
    }
  } 
}
calc();

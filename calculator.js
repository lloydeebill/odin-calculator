

let firstNum = 4;
let secondNum = 2;
let operator = "÷";


const equalButton = document.querySelector(".equal");

equalButton.addEventListener('click', () => operate(firstNum,secondNum,operator));

function operate(firstNum,secondNum,operator) {


  switch (operator) {
    case "+":
      console.log(add(firstNum,secondNum));
      break;
    case "-":
      console.log(subtract(firstNum,secondNum));
      break;
    case "x":
      console.log(multiply(firstNum,secondNum));
      break;
    case "÷":
      console.log(divide(firstNum,secondNum));
      break;
  }



}



function add(a,b) {

  return a + b;

}

function subtract(a,b) {

  return a - b;

}

function multiply(a,b) {

  return a * b;

}

function divide(a,b) {

  return a / b;

}



// when clicking number 7 , what will happen?
// display of calculator will show 7

// button 7 listens , if click it runs displayValue
// displayValue shows the value 7 in display of calculator
// innerText of displayValue changes to the value that is clicked
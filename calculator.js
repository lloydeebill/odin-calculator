


let firstNumber = '';
let secondNumber = '';
let operator = '';
let result = '';

const displayCalc = document.querySelector(".calcu-display")

displayCalc.innerText = ''


const numButtons = document.querySelectorAll(".number")

numButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (!operator) {
      displayCalc.innerText += button.innerText;
      firstNumber = displayCalc.innerText;
    } else {
      displayCalc.innerText += button.innerText;
      secondNumber = displayCalc.innerText; 
    }
  })
})


const operationButtons = document.querySelectorAll(".operation");
operationButtons.forEach(button => {
  button.addEventListener('click',() => {
    operator = button.innerText;
    displayCalc.innerText = '';
  })
})

const decimalButton = document.querySelector(".decimal");

decimalButton.addEventListener('click', () => {

  if(!operator) {
    if (!firstNumber.includes(".")) {
      displayCalc.innerText += decimalButton.innerText;
      firstNumber = displayCalc.innerText;
    }
  } else {
    if (!secondNumber.includes(".")) {
      displayCalc.innerText += decimalButton.innerText;
      secondNumber = displayCalc.innerText;
    }
  }
})


const clearButton = document.querySelector(".clear");
clearButton.addEventListener('click', () => {
  resetCalculator();
})


const equalButton = document.querySelector(".equal");
equalButton.addEventListener('click', () => operate(firstNumber,secondNumber,operator));

function operate(firstNum,secondNum,operator) {


  switch (operator) {
    case "+":
      add(firstNum,secondNum);
      break;
    case "-":
      subtract(firstNum,secondNum);
      break;
    case "x":
      multiply(firstNum,secondNum);
      break;
    case "÷":
      divide(firstNum,secondNum);
      break;
  }

  displayCalc.innerText = result;
  firstNumber = result;

}


function resetCalculator() {
  displayCalc.innerText = ''
  firstNumber = '';
  secondNumber = '';
  operator = '';
  result = '';
}


function add(a,b) {
  a = parseFloat(a);
  b = parseFloat(b);

  result = a + b;
  return result;

}

function subtract(a,b) {

  a = parseFloat(a);
  b = parseFloat(b);
  result = a - b;
  return result;


}

function multiply(a,b) {

  a = parseFloat(a);
  b = parseFloat(b);
  result = a * b;
  return result;


}

function divide(a,b) {
  a = parseFloat(a);
  b = parseFloat(b);

  if ( b == 0) {
    result = "Error: Zero Division";

  } else {
    result = a / b;

  }
  return result;
}


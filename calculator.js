


let firstNumber = '';
let secondNumber = '';
let operator = '';

const displayCalc = document.querySelector(".calcu-display")

displayCalc.innerText = ''


const numButtons = document.querySelectorAll(".number")

numButtons.forEach(button => {
  button.addEventListener('click', () => {
    if (!operator) {
      displayCalc.innerText += button.innerText;
      firstNumber = displayCalc.innerText;
      console.log(`first num: ${firstNumber}`);
    } else {
      displayCalc.innerText += button.innerText;
      secondNumber = displayCalc.innerText; 
      console.log(`second num: ${secondNumber}`);
    }
  })
})


const operationButtons = document.querySelectorAll(".operation");
operationButtons.forEach(button => {
  button.addEventListener('click',() => {
    operator = button.innerText;
    displayCalc.innerText = '';
    console.log(operator);
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
  displayCalc.innerText = '';
  firstNumber = '';
  secondNumber = '';
  operator = '';
})


const equalButton = document.querySelector(".equal");
equalButton.addEventListener('click', () => operate(firstNumber,secondNumber,operator));

function operate(firstNum,secondNum,operator) {
  switch (operator) {
    case "+":
      return displayCalc.innerText = add(firstNum,secondNum);
    case "-":
      return displayCalc.innerText = subtract(firstNum,secondNum);
    case "x":
      return displayCalc.innerText = multiply(firstNum,secondNum);
    case "÷":
      return displayCalc.innerText = divide(firstNum,secondNum);
  }
}



function add(a,b) {
  a = parseFloat(a);
  b = parseFloat(b);
  return a + b;

}

function subtract(a,b) {

  a = parseFloat(a);
  b = parseFloat(b);
  return a - b;

}

function multiply(a,b) {

  a = parseFloat(a);
  b = parseFloat(b);
  return a * b;

}

function divide(a,b) {
  a = parseFloat(a);
  b = parseFloat(b);
  return a / b;

}



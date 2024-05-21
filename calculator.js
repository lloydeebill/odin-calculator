

let firstNumber = '';
let secondNumber = '';
let operator = '';
let result = '';

const displayCalc = document.querySelector('.calcu-display');

displayCalc.innerText = '';

const numButtons = document.querySelectorAll('.number');
numButtons.forEach((button) => {
  button.addEventListener('click',() => {
    if(!operator) {
      displayCalc.innerText += button.innerText;
      firstNumber = displayCalc.innerText
    } else {
      displayCalc.innerText += button.innerText;
      secondNumber = displayCalc.innerText
      result = '';
    }
  })
})

const operationButtons = document.querySelectorAll('.operation');
operationButtons.forEach((button) => {
  button.addEventListener('click', ()=> {

    if(!firstNumber || firstNumber === 0) {
      firstNumber = '0';
    }  
    operator = button.innerText;
    displayCalc.innerText = '';
  })
})

const equalButton = document.querySelector('.equal')
equalButton.addEventListener('click', () => {
  equal(firstNumber,secondNumber,operator)
});


const clearButton = document.querySelector('.clear')
clearButton.addEventListener('click',() => {
  firstNumber = '';
  secondNumber = '';
  operator = '';
  result = '';
  displayCalc.innerText = '';
})

const decimalButton = document.querySelector('.decimal') 
decimalButton.addEventListener('click', () => {

  if(!operator) {
    if (!firstNumber.includes(".")){
      displayCalc.innerText += decimalButton.innerText;
      firstNumber = displayCalc.innerText;
    }   
  } else {
    if (!secondNumber.includes(".")){
      displayCalc.innerText += decimalButton.innerText;
      secondNumber = displayCalc.innerText;
    }   
  }
})



function equal(firstNum,secondNum,operator) {

  if (!secondNum) {
    secondNum = 0;
  }

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
  firstNumber = result.toString();
  secondNumber = '';
  operator = '';
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

  if ( b === 0) {
    result = "Error: Zero Division";
  }
  else {
    result = a / b;
    
  }

  return result;
}




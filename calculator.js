

let firstNumber = '';
let secondNumber = '';
let operator = '';
let result = '';
let calcState = false;

const displayCalc = document.querySelector('.calcu-display');

displayCalc.innerText = '';

const numButtons = document.querySelectorAll('.number');
numButtons.forEach((button) => {
  button.addEventListener('click',() => {
    if(calcState) {
      displayCalc.innerText = button.innerText;
      firstNumber = displayCalc.innerText;
      calcState = false;
    } else { 
      if(!operator) {
        displayCalc.innerText += button.innerText;
        firstNumber = displayCalc.innerText
      } else {
        displayCalc.innerText += button.innerText;
        secondNumber = displayCalc.innerText
      }
    }
  })
})

const operationButtons = document.querySelectorAll('.operation');
operationButtons.forEach((button) => {
  button.addEventListener('click', ()=> {

    if (calcState) {
      firstNumber = result;
      calcState = false;
    }

    if(!firstNumber) {
      firstNumber = '0';
    }  
    operator = button.innerText;
    displayCalc.innerText = '';
  })
})

const equalButton = document.querySelector('.equal')
equalButton.addEventListener('click', () => {
  equal(firstNumber,secondNumber,operator)
  calcState = true;
});


const clearButton = document.querySelector('.clear')
clearButton.addEventListener('click',() => {
  firstNumber = '';
  secondNumber = '';
  operator = '';
  result = '';
  displayCalc.innerText = '';
  calcState = false;
})

const decimalButton = document.querySelector('.decimal') 
decimalButton.addEventListener('click', () => {

  if(!operator) {
    if (!firstNumber.includes(".")){
      displayCalc.innerText += decimalButton.innerText;
      firstNumber = displayCalc.innerText;
      calcState = false;
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
  firstNumber = result
  secondNumber = '';
  operator = '';
}


function add(a,b) {
  a = parseFloat(a);
  b = parseFloat(b);
  result = (a + b)

  return result;
}

function subtract(a,b) {
  a = parseFloat(a);
  b = parseFloat(b);
  result = (a - b)
  
  return result;
}


function multiply(a,b) {
  a = parseFloat(a);
  b = parseFloat(b);
  result = (a * b).toFixed(2);
  
  return result;
}



function divide(a,b) {
  a = parseFloat(a);
  b = parseFloat(b);

  if ( b === 0) {
    result = "Error: Zero Division";
  }
  else {
    result = (a / b)
    
  }

  return result;
}




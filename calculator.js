

let firstNumber = '';
let secondNumber = '';
let operator = '';
let result = '';
let calcState = false;
let buttonPressed = false;

const displayCalc = document.querySelector('.calcu-display');

displayCalc.innerText = '';

const numButtons = document.querySelectorAll('.js-number');
numButtons.forEach((button) => {
  button.addEventListener('click',() => {

    button.classList.add('button-triggered');

    setTimeout(() => {
      button.classList.remove('button-triggered');
    },100);



    


    //used to track state of calculator which avoids appending of a new number to the current result
    if(calcState) {
      displayCalc.innerText = button.innerText;
      firstNumber = displayCalc.innerText;
      calcState = false;
      buttonPressed = false;
    } else { 
      //checks if calculator already has an operator, if not it wont move to next number
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


const operationButtons = document.querySelectorAll('.js-operation');
operationButtons.forEach((button) => {
  button.addEventListener('click', ()=> {

    button.classList.add('button-triggered');

    setTimeout(() => {
      button.classList.remove('button-triggered');
    },100);

    if (calcState) {
      firstNumber = result;
      calcState = false;
    }
    if(!firstNumber || firstNumber === 0) {
      firstNumber = '0';
    }  
    
    operator = button.innerText;
    displayCalc.innerText = '';


  })
})

const equalButton = document.querySelector('.js-equal')
equalButton.addEventListener('click', () => {

  equalButton.classList.add('button-triggered');

  setTimeout(() => {
    equalButton.classList.remove('button-triggered');
  },100);
  

  if (!firstNumber || !operator) {
    displayCalc.innerText = result; 
  } else {
    equal(firstNumber,secondNumber,operator)
    calcState = true;
  }

  
  
});


const clearButton = document.querySelector('.js-clear')
clearButton.addEventListener('click',() => {

  clearButton.classList.add('button-triggered');

  setTimeout(() => {
    clearButton.classList.remove('button-triggered');
  },100);

  firstNumber = '';
  secondNumber = '';
  operator = '';
  result = '';
  displayCalc.innerText = '';
  calcState = false;
})

const decimalButton = document.querySelector('.js-decimal') 
decimalButton.addEventListener('click', () => {

  decimalButton.classList.add('button-triggered');

  setTimeout(() => {
    decimalButton.classList.remove('button-triggered');
  },100);

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

function formatResult(result) {
  if (result % 1 !== 0 ) {
    return result.toFixed(3);
  } else {
    return result;
  }
}

function equal(firstNumber,secondNumber,operator) {
  switch (operator) {
    case "+":
      result = add(firstNumber,secondNumber);
      break;
    case "-":
      result = subtract(firstNumber,secondNumber);
      break;
    case "x":
      result = multiply(firstNumber,secondNumber);
      break;
    case "÷":
      result = divide(firstNumber,secondNumber);
      break;
  } 
  displayCalc.innerText = result;
  firstNumber = result;
  secondNumber = '';
  operator = '';
}


function add(a,b) {
  a = parseFloat(a);
  b = parseFloat(b);
  result = (a + b)

  return formatResult(result);
}

function subtract(a,b) {
  a = parseFloat(a);
  b = parseFloat(b);
  result = (a - b)
  
  return formatResult(result);
}


function multiply(a,b) {
  a = parseFloat(a);
  b = parseFloat(b);
  result = (a * b);
  
  return formatResult(result);
}



function divide(a,b) {
  a = parseFloat(a);
  b = parseFloat(b);

  if ( b === 0) {
    result = "Error: Zero Division";
  }
  else {
    result = (a / b);
    
  }

  return formatResult(result);
}




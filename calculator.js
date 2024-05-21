

let display = document.querySelector(".calcu-display");

display.innerText = ``;

const numberButtons = document.querySelectorAll(".number");
numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    display.innerText += button.innerText;
  });
});

const operationButtons = document.querySelectorAll(".operation");
operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    display.innerText += button.innerText;
  })
})

const clearButton = document.querySelector(".reset");
clearButton.addEventListener('click', () => {

  display.innerText = '';

})




// when clicking number 7 , what will happen?
// display of calculator will show 7

// button 7 listens , if click it runs displayValue
// displayValue shows the value 7 in display of calculator
// innerText of displayValue changes to the value that is clicked
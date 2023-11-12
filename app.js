//query selectors for HTML elements
const display = document.querySelector('#result-span');
const numberButtons = document.querySelectorAll('#digit-1, #digit-2, #digit-3, #digit-4, #digit-5, #digit-6, #digit-7, #digit-8, #digit-9, #digit-0');
const operatorButtons = document.querySelectorAll('#operator-add, #operator-subtract, #operator-multiply, #operator-divide');
const clearButton = document.querySelector('#clear');
const equalsButton = document.querySelector('#equals');
let displayValue = ''; 


//initialize number and operator variables
let firstNum = '';
let operator = '';
let secondNum = '';
let currentNum = '';

// add eventlisteners to numberButtons
numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const number = button.textContent;
        currentNum += number
        updateDisplay(currentNum);
    });
});

// add eventListeners to operatorButton
operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (currentNum !== '') {
            if (firstNum === '' && operator === '') {
                firstNum = parseFloat(currentNum);
            } else {
                secondNum = parseFloat(currentNum);
                updateDisplay(operate(firstNum, operator, secondNum));
                firstNum = parseFloat(display.textContent);
            }
        }
        operator = button.textContent;
        currentNum = '';
    });
});

//clear display with clear button
clearButton.addEventListener('click', () => {
    firstNum = '';
    secondNum = '';
    operator = '';
    currentNum = '';
    displayValue = '';
    updateDisplay('0');
});

// update display function
function updateDisplay(value) {
    display.textContent = value;
}

function seperateEquation() {
    const equation = displayValue.split(/([+\-*/])/).filter(entry => entry !== '');
    return equation;
}

// show result when clicking equals button & will trigger operate function
equalsButton.addEventListener('click', () => {
    if (currentNum !== '') {
        secondNum = parseFloat(currentNum);
        updateDisplay(operate(firstNum, operator, secondNum));
        
        // Update variables for potential further calculations
        firstNum = operate(firstNum, operator, secondNum);
        operator = '';
        secondNum = '';
        currentNum = '';
    }
});

//add, sub, multiply, and div logic
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function mulitply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(firstNum, operator, secondNum) {
    switch (operator) {
        case '+':
            return add(firstNum, secondNum);
        case '-':
            return subtract(firstNum, secondNum);
        case '*':
            return mulitply(firstNum, secondNum);
         case '/':
            return divide(firstNum, secondNum);
        default:
            return 'Invalid entry.';
    }
}






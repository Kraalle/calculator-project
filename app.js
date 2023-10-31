let firstNum = 0;
let operator = '';
let secondNum = 0;

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

const display = document.querySelector('#result-span');
const numberButtons = document.querySelectorAll('#digit-1','#digit-2','#digit-3','#digit-4','#digit-5','#digit-6','#digit-7','#digit-8','#digit-9','#digit-0',);
let currentValue = ''; 

function populateDisplay() {

}

console.log(operate(2, '+', 3));
console.log(operate(5, '-', 3));
console.log(operate(3, '*', 3));
console.log(operate(10, '/', 2));
console.log(operate(2, '///', 3));




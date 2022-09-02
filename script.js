const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator-keys');
const display = document.querySelector('.calculator-display');
const clearButton = calculator.querySelector('[data-action=clear]')
let previousKeyType = calculator.dataset.previousKeyType;
let firstValue = calculator.dataset.firstValue;
let operator = ''
let secondValue = calculator.dataset.secondValue;
let previousKey = calculator.dataset.previousKey;

keys.addEventListener('click', (e) => {
    if (e.target.matches('button')) {
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayNum = display.textContent;

        if (!action) {
            previousKey = 'number'
            if (!displayNum.includes('.')) {
                display.textContent = displayNum + '.'
            }

            if(displayNum === '0' || previousKeyType === 'operator'){
                previousKeyType = ''
                display.textContent = keyContent;
                console.log(previousKeyType)
            } else {
                display.textContent = displayNum + keyContent
            }

        }
        if (action !== 'clear') {
            clearButton.textContent = 'CE'

        }
        if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
        ) {  
            previousKeyType = 'operator' 
            firstValue = displayNum
            operator = action 
  
            console.log(operator)

        }

        if (action === 'decimal') {
            if (!displayNum.includes('.')) {
                display.textContent = displayNum + '.'
            } else if (previousKeyType === 'operator') {
                display.textContent = '0.'
            }
            previousKey = 'decimal'
        }
        if (action === 'clear') {
            previousKey = 'clear'
            if (key.textContent === 'AC') {
                firstValue = ''
                operator = ''
                previousKeyType = ''
              } else {
                key.textContent = 'AC'
              }
              
              display.textContent = 0
              previousKeyType = 'clear'
            }
        if (action === 'calculate') {
            previousKey = 'calculate';

            secondValue = displayNum;
            
            if(firstValue && operator){
                display.textContent = calculate(firstValue, operator, secondValue);
            }

            firstValue = displayNum;
            previousKeyType = 'operator';
            operator = action;
        }
    }
});
const calculate = (n1, operator, n2) => {
    let firstNum = parseFloat(n1);
    let secondNum = parseFloat(n2);
    if (operator === 'add') return firstNum + secondNum
    if (operator === 'subtract') return firstNum - secondNum
    if (operator === 'multiply') return firstNum * secondNum
    if (operator === 'divide') return firstNum / secondNum
}
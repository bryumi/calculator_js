const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator-keys');
const display = document.querySelector('.calculator-display');
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
        if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
        ) {
            
            previousKeyType = 'operator' 
            firstValue = displayNum
            operator = action 
            console.log(firstValue)
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
        }
        if (action === 'calculate') {
            secondValue = displayNum;
            previousKey = 'calculate';

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
    let result = '';
    if(operator === 'add'){
        result = parseFloat(n1) + parseFloat(n2);

    } else if (operator === 'subtract') {
        result = parseFloat(n1) - parseFloat(n2);
    }else if (operator === 'multiply'){
        result = parseFloat(n1)*parseFloat(n2);
    } else if (operator === 'divide'){
        result = parseFloat(n1)/parseFloat(n2);
    }

    return result;
}

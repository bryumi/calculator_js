const calculator = document.querySelector('.calculator');
const keys = calculator.querySelector('.calculator-keys');
const display = document.querySelector('.calculator-display');

const previousKeyType = calculator.dataset;

keys.addEventListener('click', (e) => {
    if (e.target.matches('button')) {
        const key = e.target;
        const action = key.dataset.action;
        const keyContent = key.textContent;
        const displayNum = display.textContent;
        if (!action) {
            console.log('number key');
            if(displayNum === '0' || previousKeyType === 'operator'){
                display.textContent = keyContent;
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
           key.classList.toggle('is-depressed');
           previousKeyType = 'operator'
        }

        if (action === 'decimal') {
            display.textContent = displayNum + '.'
        }
        if (action === 'clear') {
            console.log('clear key');
        }
        if (action === 'calculate') {
            console.log('equal key!');
        }
    }
});

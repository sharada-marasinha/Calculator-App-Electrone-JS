let display = document.getElementById('display');
let currentInput = '';
let operator = '';
let operand1 = '';
let operand2 = '';

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.getAttribute('data-value');

        if (value === 'C') {
            clearDisplay();
        } else if (value === '=') {
            calculate();
        } else if (['+', '-', '*', '/'].includes(value)) {
            setOperator(value);
        } else {
            appendNumber(value);
        }
    });
});

function clearDisplay() {
    currentInput = '';
    operator = '';
    operand1 = '';
    operand2 = '';
    display.innerText = '0';
}

function appendNumber(value) {
    currentInput += value;
    display.innerText = currentInput;
}

function setOperator(op) {
    if (currentInput !== '') {
        operand1 = parseFloat(currentInput);
        operator = op;
        currentInput = '';
    }
}

function calculate() {
    if (operator && currentInput !== '') {
        operand2 = parseFloat(currentInput);
        let result = 0;

        switch (operator) {
            case '+':
                result = operand1 + operand2;
                break;
            case '-':
                result = operand1 - operand2;
                break;
            case '*':
                result = operand1 * operand2;
                break;
            case '/':
                result = operand1 / operand2;
                break;
        }

        display.innerText = result;
        currentInput = '';
        operand1 = result;
        operator = '';
    }
}

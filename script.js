let currentInput = '0';  
let previousInput = null;  
let currentOperation = null; 

function appendNumber(n) {
    if (currentInput === '0') {
        currentInput = String(n);
    } else {
        currentInput += String(n);
    }
    updateDisplay();
}

function chooseOperation(operation) {
    if (currentInput === '') return; 
    if (previousInput === null) {
        previousInput = currentInput;
    } else {
        calculateResult();
    }
    currentOperation = operation;
    currentInput = '';
}

function calculateResult() {
    if (previousInput === null || currentInput === '') return;

    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);

    switch (currentOperation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }

    currentInput = String(result);
    previousInput = null;
    currentOperation = null;
    updateDisplay();
}

function clearDisplay() {
    currentInput = '0';
    previousInput = null;
    currentOperation = null;
    updateDisplay();
}

function updateDisplay() {
    const display = document.getElementById('display');
    display.textContent = currentInput;
}
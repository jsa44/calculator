displayValue = '';
let firstValue;
let runningValue;
let firstVal;
let secondVal;
let oper;

const evaluate = document.querySelector('.execute');
const number = document.querySelectorAll('.number');
const operator = document.querySelectorAll('.function');
const clearBut = document.querySelector('.clearBut');

function add(a, b) {
    return a+b;
}
function subtract(a, b) {
    return a-b;
}
function multiply(a, b) {
    return a*b;
}
function divide(a, b) {
    return a/b;
}

function operate(operator, a, b) {
    let value;
    if (operator == '+') {
        value = add(a,b);
    }
    else if (operator == '-') {
        value=subtract(a,b);
    }
    else if (operator == 'X') {
        value=multiply(a,b);
    }
    else {
        value=divide(a,b);
    }
    return value;
}
function updateDisplay(number) {
    const display = document.querySelector('.display h2');
    display.textContent = number;
}
function evaluateButton() {
    evaluate.addEventListener('click', function() {
        value = operate(oper, Number(firstValue), Number(displayValue));
        updateDisplay(value);
    })
    return value;
}


number.forEach(item => item.addEventListener('click', () => {
    displayValue += item.textContent;
    updateDisplay(displayValue);
    })
);
clearBut.addEventListener('click', function() {
    displayValue = '';
    runningValue = '';
    firstValue = '';
    firstVal = '';
    secondVal = '';
    updateDisplay(displayValue);
});

evaluate.addEventListener('click', function() {
    value = operate(oper, Number(firstVal), Number(displayValue));
    updateDisplay(value);
})

operator.forEach(item => item.addEventListener('click', () => {
    var capturedValue = displayValue;
    // clicking operator after a first op click
    if (firstValue) {
        oper = item.textContent;
        runningValue = operate(oper, Number(firstValue), Number(displayValue));
        updateDisplay(runningValue);
        firstVal = runningValue;
        secondVal = displayValue;
        displayValue = '';
    }
    // clicking operator for first time
    else {
        if (runningValue) {
            firstValue = runningValue;
        }
        else {
            firstValue = displayValue;
        }
        oper = item.textContent;
        updateDisplay(oper);
        firstVal = firstValue;
        secondVal = '';
        displayValue = '';
    }
})
);

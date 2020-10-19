displayValue = '';
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

number.forEach(item => item.addEventListener('click', () => {
    displayValue += item.textContent;
    updateDisplay(displayValue);
    })
);
clearBut.addEventListener('click', function() {
    displayValue = '';
    updateDisplay(displayValue);
});

operator.forEach(item => item.addEventListener('click', () => {
    var firstValue = displayValue;
    var oper = item.textContent;
    displayValue = '';
    evaluate.addEventListener('click', function() {
        value = operate(oper, Number(firstValue), Number(displayValue));
        updateDisplay(value);
    })
})
);
